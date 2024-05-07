#include <WiFi.h> // Biblioteca para conexão com WiFi no ESP32
#include <Firebase_ESP_Client.h> // Biblioteca do Firebase
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <DHT.h> // Biblioteca para o sensor DHT11
#include <Adafruit_Sensor.h>

#define WIFI_SSID "" // SSID do WiFi
#define WIFI_PASSWORD "" // Senha do WiFi

#define API_KEY "" // Chave da API Firebase
#define DATABASE_URL "" // URL do Firebase Host

#define DHTPIN 23 // Usamos o pino 23 para conectar o sensor
#define DHTTYPE DHT11 // Tipo do sensor é DHT11

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;
int ldrData = 0;
float voltage = 0.0;

DHT dht(DHTPIN, DHTTYPE); // Instancia do DHT11

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando ao WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Conectado ao WiFi");
  Serial.println(WiFi.localIP());
  Serial.println();

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Logado com sucesso");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  dht.begin();
  delay(2000);
}

void loop() {
  // Ler dados do DHT11
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 5000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();

    // Verificar se houve leitura
    if (isnan(temperature) || isnan(humidity)) {
      Serial.println("Falha ao ler dados do DHT11");
      delay(2000);
      return;
    }

    // Armazenar dados do DHT11 no banco de dados em tempo real do Firebase
    if (Firebase.RTDB.setInt(&fbdo, "humidity", humidity)) {
      Serial.println();
      Serial.print("Humididade: ");
      Serial.print(humidity);
      Serial.println("Dados salvos com sucesso em: " + fbdo.dataPath());
    }

    /* Firebase.setFloat(firebaseData, "/temperature", temperature);
    Firebase.setFloat(firebaseData, "/humidity", humidity); */
  } else {
    Serial.println("Firebase não está pronto.");
  }

  delay(5000);
}