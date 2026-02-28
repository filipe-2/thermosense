#include <Arduino.h>
#include "PinDefinitionsAndMore.h" // Definições de pinos e mais
#include <IRremote.hpp>            // Biblioteca para controlar emissor e receptor IR
#include <WiFi.h>                  // Biblioteca para conexão com WiFi no ESP32
#include <Firebase_ESP_Client.h>   // Biblioteca do Firebase
#include "addons/TokenHelper.h"    // Addon do Firebase
#include "addons/RTDBHelper.h"     // Addon do Firebase
#include <DHT.h>                   // Biblioteca para o sensor DHT11
#include <Adafruit_Sensor.h>       // Biblioteca de sensores

#define WIFI_SSID "WIFI_SSID"         // SSID do WiFi
#define WIFI_PASSWORD "WIFI_PASSWORD" // Senha do WiFi

#define API_KEY "API_KEY"                       // Chave da API Firebase
#define DATABASE_URL "DATABASE_URL" // URL do host do Firebase

#define DHTPIN 23     // Usamos o pino 23 para conectar o sensor
#define DHTTYPE DHT11 // Tipo do sensor é DHT11

// Configuração Firebase
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

DHT dht(DHTPIN, DHTTYPE); // Instância do DHT11

void setup()
{
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando ao WiFi");

  // Mostra vários pontos enquanto o ESP32 se conecta ao WiFi
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Conectado ao WiFi");
  Serial.println(WiFi.localIP());
  Serial.println();

  // Configuração Firebase
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Verifica se a autenticação com Firebase ocorreu com sucesso
  if (Firebase.signUp(&config, &auth, "", ""))
  {
    Serial.println("Logado com sucesso");
    signupOK = true;
  }
  else
  {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  // Configuração Firebase
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  dht.begin();
  delay(2000);

  // Printa qual programa está rodando no ESP32, com a data e a versão da biblioteca IRremote
  Serial.println(F("START " __FILE__ " from " __DATE__ "\r\nUsing library version " VERSION_IRREMOTE));

  // Inicia o receptor IR
  IrReceiver.begin(IR_RECEIVE_PIN, ENABLE_LED_FEEDBACK);

  Serial.print(F("Pronto para receber sinais IR de protocolos: "));
  printActiveIRProtocols(&Serial);
  Serial.println(F("no pino " STR(IR_RECEIVE_PIN)));

  IrSender.begin();
  Serial.print(F("Pronto para enviar sinais IR no pino " STR(IR_SEND_PIN)));
}

void loop()
{
  // Lê dados do DHT11 e armazena em variáveis
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 2000 || sendDataPrevMillis == 0))
  {
    sendDataPrevMillis = millis();

    // Verifica se houve leitura de dados
    if (isnan(temperature) || isnan(humidity))
    {
      Serial.println("Falha ao ler dados do DHT11");
      delay(2000);
      return;
    }

    // Armazena umidade no banco de dados em tempo real do Firebase
    if (Firebase.RTDB.setInt(&fbdo, "humidity", humidity))
    {
      Serial.println();
      Serial.print("Humididade: ");
      Serial.print(humidity);
      Serial.println();
      Serial.print("Umidade salva com sucesso em: ");
      Serial.print(fbdo.dataPath());
    }

    // Armazena temperatura no banco de dados em tempo real do Firebase
    if (Firebase.RTDB.setInt(&fbdo, "temperature", temperature))
    {
      Serial.println();
      Serial.print("Temperatura: ");
      Serial.print(temperature);
      Serial.println();
      Serial.print("Temperatura salva com sucesso em: ");
      Serial.print(fbdo.dataPath());
    }
  }
  else
  {
    Serial.println("Firebase não está pronto");
  }

  if (IrReceiver.decode())
  {
    // Printa um sumário dos dados recebidos
    if (IrReceiver.decodedIRData.protocol == UNKNOWN)
    {
      Serial.println(F("Ruído ou protocolo desconhecido (ou ainda não habilitado) captado"));

      // Printa informação estendida do protocolo desconhecido
      IrReceiver.printIRResultRawFormatted(&Serial, true);
      IrReceiver.resume();
    }
    else
    {
      IrReceiver.resume(); // Habilita a captura do próximo sinal IR
      IrReceiver.printIRResultShort(&Serial);
      IrReceiver.printIRSendUsage(&Serial);
    }
    Serial.println();
  }

  // Desliga/liga o ar (consul)
  IrSender.sendPulseDistanceWidth(38, 9050, 4550, 600, 1700, 600, 550, 0x12040683, 48, PROTOCOL_IS_LSB_FIRST, 50, 3);

  delay(5000); // Delay de 2 segundos entre cada sinal recebido
}
