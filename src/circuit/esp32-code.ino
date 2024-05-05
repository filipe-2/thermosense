#include <WiFi.h>
#include <FirebaseESPClient.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

#define FIREBASE_HOST "https://thermo--sense-d05e4-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "AIzaSyD7xCZzwKbC1bMrJthpTeoOOkObwoJXG8A"

FirebaseData fbdo;

FirebaseAuth auth;
FarabaseConfig config;

#define WIFI_SSID "TROIA 2.4"
#define WIFI_PASSWORD "PXJLE75578"
#define DHTPIN 35
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
WiFiClient wifiClient;
FirebaseData firebaseData;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando com WiFI.");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\nConectado ao WiFi.");

  config.api_key = FIREBASE_AUTH;
  config.database_url = FIREBASE_HOST;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  if (!dht.begin(0x76)) {
    Serial.println("sensor nao encontrado");
    while(1);
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Falhou em ler os dados do sensor DHT11.");
    delay(2000);
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print("C\t");
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");


  if (Firebase.ready()) {
    Firebase.setFloat(firebaseData, "/temperature", temperature);
    Firebase.setFloat(firebaseData, "/humidity", humidity);
  } else {
    Serial.println("FIrebase não está pronto.");
  }

  delay(5000);
}
