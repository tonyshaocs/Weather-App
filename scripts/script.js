function changeTempType(){
	if (document.getElementById("myCheckBox").value==1){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+(parseFloat(document.getElementById("temp").innerHTML.substring(14,19))*9/5+32).toFixed(2)+"° F";
	document.getElementById("hourTemp1").innerHTML = (parseFloat(document.getElementById("hourTemp1").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;
	document.getElementById("hourTemp2").innerHTML = (parseFloat(document.getElementById("hourTemp2").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;
	document.getElementById("hourTemp3").innerHTML = (parseFloat(document.getElementById("hourTemp3").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp1").innerHTML = (parseFloat(document.getElementById("temp1").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp2").innerHTML = (parseFloat(document.getElementById("temp2").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp3").innerHTML = (parseFloat(document.getElementById("temp3").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp4").innerHTML = (parseFloat(document.getElementById("temp4").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp5").innerHTML = (parseFloat(document.getElementById("temp5").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp1X").innerHTML = document.getElementById("temp1").innerHTML;
	document.getElementById("temp2X").innerHTML = document.getElementById("temp2").innerHTML;
	document.getElementById("temp3X").innerHTML = document.getElementById("temp3").innerHTML;
	document.getElementById("temp4X").innerHTML = document.getElementById("temp4").innerHTML;
	document.getElementById("temp5X").innerHTML = document.getElementById("temp5").innerHTML;
	document.getElementById("myCheckBox").value=2;
	}
	else if (document.getElementById("myCheckBox").value==2){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+((parseFloat(document.getElementById("temp").innerHTML.substring(14,19))-32)*(5/9)).toFixed(2)+"° C";
	document.getElementById("hourTemp1").innerHTML = ((parseFloat(document.getElementById("hourTemp1").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("hourTemp2").innerHTML = ((parseFloat(document.getElementById("hourTemp2").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("hourTemp3").innerHTML = ((parseFloat(document.getElementById("hourTemp3").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp1").innerHTML = ((parseFloat(document.getElementById("temp1").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp2").innerHTML = ((parseFloat(document.getElementById("temp2").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp3").innerHTML = ((parseFloat(document.getElementById("temp3").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp4").innerHTML = ((parseFloat(document.getElementById("temp4").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp5").innerHTML = ((parseFloat(document.getElementById("temp5").innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
	document.getElementById("temp1X").innerHTML = document.getElementById("temp1").innerHTML;
	document.getElementById("temp2X").innerHTML = document.getElementById("temp2").innerHTML;
	document.getElementById("temp3X").innerHTML = document.getElementById("temp3").innerHTML;
	document.getElementById("temp4X").innerHTML = document.getElementById("temp4").innerHTML;
	document.getElementById("temp5X").innerHTML = document.getElementById("temp5").innerHTML;
	document.getElementById("myCheckBox").value=1;
	}
}

function changeTempTypeCityChange(){
	document.getElementById("hourTemp1").innerHTML = (parseFloat(document.getElementById("hourTemp1").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;
	document.getElementById("hourTemp2").innerHTML = (parseFloat(document.getElementById("hourTemp2").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;
	document.getElementById("hourTemp3").innerHTML = (parseFloat(document.getElementById("hourTemp3").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp1").innerHTML = (parseFloat(document.getElementById("temp1").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp2").innerHTML = (parseFloat(document.getElementById("temp2").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp3").innerHTML = (parseFloat(document.getElementById("temp3").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp4").innerHTML = (parseFloat(document.getElementById("temp4").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp5").innerHTML = (parseFloat(document.getElementById("temp5").innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
	document.getElementById("temp1X").innerHTML = document.getElementById("temp1").innerHTML;
	document.getElementById("temp2X").innerHTML = document.getElementById("temp2").innerHTML;
	document.getElementById("temp3X").innerHTML = document.getElementById("temp3").innerHTML;
	document.getElementById("temp4X").innerHTML = document.getElementById("temp4").innerHTML;
	document.getElementById("temp5X").innerHTML = document.getElementById("temp5").innerHTML;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp.send();
  
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xhttp2.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp2.send();

}

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName('temperature');
  var city = xmlDoc.getElementsByTagName('city')[0].getAttribute('name');
  var wind = xmlDoc.getElementsByTagName('speed')[0].getAttribute('value');
  var wdesc = xmlDoc.getElementsByTagName('speed')[0].getAttribute('name');
  var country =  xmlDoc.getElementsByTagName("city")[0].getElementsByTagName("country")[0].childNodes[0].nodeValue;
  var humidity = xmlDoc.getElementsByTagName('humidity')[0].getAttribute('value');
  var weather = xmlDoc.getElementsByTagName('weather')[0].getAttribute('value');
  var y = x[0].getAttribute('value');
  
 
  document.getElementById("temp").innerHTML = "Current Temp: " + parseFloat(y).toFixed(2)+"° C";
  if (document.getElementById("myCheckBox").value==2){
  document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+(parseFloat(document.getElementById("temp").innerHTML.substring(14,19))*9/5+32).toFixed(2)+"° F";
  }
  document.getElementById("city").innerHTML = city+", "+country;
  document.getElementById("wind").innerHTML = "Wind Speed: " + wind +" mps";
  document.getElementById("wDesc").innerHTML = "( "+wdesc+" )";
  document.getElementById("humidity").innerHTML = "Humidity: "+ humidity + " %";
  document.getElementById("weather").innerHTML = weather.toUpperCase(); 
  
  imgShift();
}

function myFunction2(xml) {
  var xmlDoc = xml.responseXML;
 
  document.getElementById("day1").innerHTML = xmlDoc.getElementsByTagName('time')[0].getAttribute('from').substring(0,10); 
  document.getElementById("day1X").innerHTML = document.getElementById("day1").innerHTML;
  document.getElementById("day2").innerHTML = xmlDoc.getElementsByTagName('time')[8].getAttribute('from').substring(0,10); 
  document.getElementById("day2X").innerHTML = document.getElementById("day2").innerHTML;
  document.getElementById("day3").innerHTML = xmlDoc.getElementsByTagName('time')[16].getAttribute('from').substring(0,10); 
  document.getElementById("day3X").innerHTML = document.getElementById("day3").innerHTML;
  document.getElementById("day4").innerHTML = xmlDoc.getElementsByTagName('time')[24].getAttribute('from').substring(0,10);
  document.getElementById("day4X").innerHTML = document.getElementById("day4").innerHTML;
  document.getElementById("day5").innerHTML = xmlDoc.getElementsByTagName('time')[32].getAttribute('from').substring(0,10);
  document.getElementById("day5X").innerHTML = document.getElementById("day5").innerHTML;
  
  document.getElementById("day1w").innerHTML = xmlDoc.getElementsByTagName('symbol')[0].getAttribute('name').toUpperCase(); 
  document.getElementById("day1wX").innerHTML = document.getElementById("day1w").innerHTML;
  document.getElementById("day2w").innerHTML = xmlDoc.getElementsByTagName('symbol')[8].getAttribute('name').toUpperCase(); 
  document.getElementById("day2wX").innerHTML = document.getElementById("day2w").innerHTML;
  document.getElementById("day3w").innerHTML = xmlDoc.getElementsByTagName('symbol')[16].getAttribute('name').toUpperCase(); 
  document.getElementById("day3wX").innerHTML = document.getElementById("day3w").innerHTML;
  document.getElementById("day4w").innerHTML = xmlDoc.getElementsByTagName('symbol')[24].getAttribute('name').toUpperCase();
  document.getElementById("day4wX").innerHTML = document.getElementById("day4w").innerHTML;
  document.getElementById("day5w").innerHTML = xmlDoc.getElementsByTagName('symbol')[32].getAttribute('name').toUpperCase();
  document.getElementById("day5wX").innerHTML = document.getElementById("day5w").innerHTML;
  
  document.getElementById("temp1").innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[0].getAttribute('value')).toFixed(2)+"° C"; 
  document.getElementById("temp1X").innerHTML = document.getElementById("temp1").innerHTML;
  document.getElementById("temp2").innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[8].getAttribute('value')).toFixed(2)+"° C"; 
  document.getElementById("temp2X").innerHTML = document.getElementById("temp2").innerHTML;  
  document.getElementById("temp3").innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[16].getAttribute('value')).toFixed(2)+"° C";  
  document.getElementById("temp3X").innerHTML = document.getElementById("temp3").innerHTML;
  document.getElementById("temp4").innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[24].getAttribute('value')).toFixed(2)+"° C"; 
  document.getElementById("temp4X").innerHTML = document.getElementById("temp4").innerHTML;
  document.getElementById("temp5").innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[32].getAttribute('value')).toFixed(2)+"° C"; 
  document.getElementById("temp5X").innerHTML = document.getElementById("temp5").innerHTML;
  
  document.getElementById("windspd1").innerHTML = xmlDoc.getElementsByTagName('windSpeed')[0].getAttribute('mps')+ " mps"; 
  document.getElementById("windspd1X").innerHTML = document.getElementById("windspd1").innerHTML;
  document.getElementById("windspd2").innerHTML = xmlDoc.getElementsByTagName('windSpeed')[8].getAttribute('mps')+ " mps";
  document.getElementById("windspd2X").innerHTML = document.getElementById("windspd2").innerHTML;
  document.getElementById("windspd3").innerHTML = xmlDoc.getElementsByTagName('windSpeed')[16].getAttribute('mps')+ " mps";
  document.getElementById("windspd3X").innerHTML = document.getElementById("windspd3").innerHTML;
  document.getElementById("windspd4").innerHTML = xmlDoc.getElementsByTagName('windSpeed')[24].getAttribute('mps')+ " mps";
  document.getElementById("windspd4X").innerHTML = document.getElementById("windspd4").innerHTML;
  document.getElementById("windspd5").innerHTML = xmlDoc.getElementsByTagName('windSpeed')[32].getAttribute('mps')+ " mps";
  document.getElementById("windspd5X").innerHTML = document.getElementById("windspd5").innerHTML;
  
  document.getElementById("humid1").innerHTML = xmlDoc.getElementsByTagName('humidity')[0].getAttribute('value') + " %"; 
  document.getElementById("humid1X").innerHTML = document.getElementById("humid1").innerHTML;
  document.getElementById("humid2").innerHTML = xmlDoc.getElementsByTagName('humidity')[7].getAttribute('value') + " %"; 
  document.getElementById("humid2X").innerHTML = document.getElementById("humid2").innerHTML;
  document.getElementById("humid3").innerHTML = xmlDoc.getElementsByTagName('humidity')[16].getAttribute('value') + " %"; 
  document.getElementById("humid3X").innerHTML = document.getElementById("humid3").innerHTML;
  document.getElementById("humid4").innerHTML = xmlDoc.getElementsByTagName('humidity')[24].getAttribute('value') + " %"; 
  document.getElementById("humid4X").innerHTML = document.getElementById("humid4").innerHTML;
  document.getElementById("humid5").innerHTML = xmlDoc.getElementsByTagName('humidity')[32].getAttribute('value') + " %"; 
  document.getElementById("humid5X").innerHTML = document.getElementById("humid5").innerHTML;
  
  document.getElementById("next0_3").innerHTML = "Over 3 Hours"; 
  document.getElementById("next3_6").innerHTML = "Over 6 Hours";
  document.getElementById("next6_9").innerHTML = "Over 9 Hours";
  
  hourlyWeather = ["hourW1", "hourW2", "hourW3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyWeather[i]).innerHTML = xmlDoc.getElementsByTagName('symbol')[i].getAttribute('name').toUpperCase();  
  } 
  
  hourlyHum = ["hourHum1","hourHum2","hourHum3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyHum[i]).innerHTML = "Humidity "+xmlDoc.getElementsByTagName('humidity')[i].getAttribute('value')+" %";   
  }
  
  hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyTemp[i]).innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[i].getAttribute('value')).toFixed(i)+"° C";   
  }
  
  hourlyWind = ["hourWind1", "hourWind2", "hourWind3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyWind[i]).innerHTML = "Wind "+xmlDoc.getElementsByTagName('windSpeed')[i].getAttribute('mps')+" mps";   
  }
  
  if (document.getElementById("myCheckBox").value==2){
  changeTempTypeCityChange();
  }
}


/*HTTP request using AJAX Principles to change the city*/
function lookUp(search){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp.send();
  
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xhttp2.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp2.send();
}


/*icons from https://www.iconfinder.com/iconsets/iconsland-weather*/
/*Change the image for each type of weather in the area*/
function imgShift(){
	if (document.getElementById("weather").innerHTML=="MIST"){
		document.getElementById("weatherImg").src="images/mist.png";
	}
	else if ((document.getElementById("weather").innerHTML).includes("CLOUDS")){
		document.getElementById("weatherImg").src="images/clouds.png";
	}
	else if ((document.getElementById("weather").innerHTML).includes("RAIN")){
		document.getElementById("weatherImg").src="images/rain.png";
	}
	else if ((document.getElementById("weather").innerHTML).includes("SNOW")){
		document.getElementById("weatherImg").src="images/snow.png";
	}
	else if ((document.getElementById("weather").innerHTML).includes("CLEAR")){
		document.getElementById("weatherImg").src="images/clear.png";
	}
}
