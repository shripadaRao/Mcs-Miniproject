#include <WiFi.h>
#include <HTTPClient.h>
#include<LiquidCrystal.h>

LiquidCrystal lcd(19, 23, 18, 17, 16, 15);

const char* ssid = "Galaxy M218905";
const char* password = "whui4989";

String payload_edit;

void setup() {

  Serial.begin(115200);
  delay(4000);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  
  Serial.println("Connected to the WiFi network");

  lcd.begin(16,2);
  
}
  
void loop() {
  
  if ((WiFi.status() == WL_CONNECTED)) { //Check the current connection status
  
    HTTPClient http;
  
    http.begin("https://mcsproj.pythonanywhere.com/"); //Specify the URL
    int httpCode = http.GET();                                        //Make the request
  
    if (httpCode > 0) { //Check for the returning code
  
        String payload = http.getString();
        lcd.clear();
        payload.remove(0,17);
        int payload_length = payload.length();
        payload.remove(payload_length -2 ,2);
        lcd.print(payload);
        if (payload_length > 16) {
        for (int positionCounter =0; positionCounter < payload_length; positionCounter++) {
          lcd.scrollDisplayLeft();
          delay(500);} }
        Serial.println(httpCode);
        Serial.println(payload);
      }
  
    else {
      Serial.println("Error on HTTP request");
    }
  
    http.end(); //Free the resources
  }
  
  delay(100);
  
  
}