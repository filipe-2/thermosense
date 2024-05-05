#include <DHT.h>
#include <WiFi.h>
/* #include <FirebaseESP32.h> */
#include <Adafruit_Sensor.h>

/* #define FIREBASE_HOST "https://thermo--sense-d05e4-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "AIzaSyD7xCZzwKbC1bMrJthpTeoOOkObwoJXG8A" */

#define WIFI_SSID "Elisa"
#define WIFI_PASSWORD "elisa123"

#define DHTPIN 23
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
/* WiFiClient wifiClient;
FirebaseData firebaseData; */

void setup() {
  // put your setup code here, to run once:
  dht.begin();
  delay(2000);

  Serial.begin(115200);

  /* WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando com WiFI."); */

  /* while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  } */

  /* Serial.println("\nConectado ao WiFi."); */

  /* Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); */
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

  /* if (Firebase.ready()) {
    Firebase.setFloat(firebaseData, "/temperature", temperature);
    Firebase.setFloat(firebaseData, "/humidity", humidity);
  } else {
    Serial.println("FIrebase não está pronto.");
  } */

  delay(5000);
}
