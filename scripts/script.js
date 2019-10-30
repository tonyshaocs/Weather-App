//Convert the temperatures from C -> F when the user first loads the page.
function changeTempType(){
	if (document.getElementById("myCheckBox").value==1){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+(parseFloat(document.getElementById("temp").innerHTML.substring(14,19))*9/5+32).toFixed(2)+"° F";
	
	hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
	for (i=0; i<3; i++){
		document.getElementById(hourlyTemp[i]).innerHTML = (parseFloat(document.getElementById(hourlyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;    
	}
	
	weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
	mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];
  
	for (i=0; i<5; i++){
		document.getElementById(weeklyTemp[i]).innerHTML = (parseFloat(document.getElementById(weeklyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
		document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	} 

	document.getElementById("myCheckBox").value=2;
	}
	else if (document.getElementById("myCheckBox").value==2){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+((parseFloat(document.getElementById("temp").innerHTML.substring(14,19))-32)*(5/9)).toFixed(2)+"° C";
	
	hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
	for (i=0; i<3; i++){
		document.getElementById(hourlyTemp[i]).innerHTML = ((parseFloat(document.getElementById(hourlyTemp[i]).innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;  
	}

	weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
	mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];
  
	for (i=0; i<5; i++){
		document.getElementById(weeklyTemp[i]).innerHTML = ((parseFloat(document.getElementById(weeklyTemp[i]).innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
		document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	} 

	document.getElementById("myCheckBox").value=1;
	}
}

//Convert the temperatures from C -> F when the user updates the city.
function changeTempTypeCityChange(){
	hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
	for (i=0; i<3; i++){
		document.getElementById(hourlyTemp[i]).innerHTML = (parseFloat(document.getElementById(hourlyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;    
	}
	
	weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
	mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];
  
	for (i=0; i<5; i++){
		document.getElementById(weeklyTemp[i]).innerHTML = (parseFloat(document.getElementById(weeklyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
		document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	} 
}


//Make an HTTP request to the api to get the information when the user first loads the page.
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

//Update the application when the user first loads the page.
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

//Update the application when the user updates the city.
function myFunction2(xml) {
  var xmlDoc = xml.responseXML;
  
  //Update Date
  weeklyDate = ["day1", "day2", "day3", "day4", "day5"];
  mobileWD = ["day1X", "day2X", "day3X", "day4X", "day5X"];
  
  for (i=0; i<5; i++){
	document.getElementById(weeklyDate[i]).innerHTML = xmlDoc.getElementsByTagName('time')[i*8].getAttribute('from').substring(0,10);
	document.getElementById(mobileWD[i]).innerHTML = document.getElementById(weeklyDate[i]).innerHTML;
  } 
  
  //Update weekly weather conditions
  weeklyWeather = ["day1w", "day2w", "day3w", "day4w", "day5w"];
  mobileWWe = ["day1wX", "day2wX", "day3wX", "day4wX", "day5wX"];
  
  for (i=0; i<5; i++){
	document.getElementById(weeklyWeather[i]).innerHTML = xmlDoc.getElementsByTagName('symbol')[i*8].getAttribute('name').toUpperCase();
	document.getElementById(mobileWWe[i]).innerHTML = document.getElementById(weeklyWeather[i]).innerHTML;
  } 
  
  //Update weekly temps
  weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
  mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];
  
  for (i=0; i<5; i++){
	document.getElementById(weeklyTemp[i]).innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[i*8].getAttribute('value')).toFixed(2)+"° C"; 
    document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
  } 
  
  
  //Update weekly wind speeds
  weeklyWind = ["windspd1", "windspd2", "windspd3", "windspd4", "windspd5"];
  mobileWW = ["windspd1X", "windspd2X", "windspd3X", "windspd4X", "windspd5X"];
  
  for (i=0; i<5; i++){
	document.getElementById(weeklyWind[i]).innerHTML = xmlDoc.getElementsByTagName('windSpeed')[i*8].getAttribute('mps')+ " mps"; 
	document.getElementById(mobileWW[i]).innerHTML = document.getElementById(weeklyWind[i]).innerHTML;
  } 
  
  //Update weekly humidity
  weeklyHum = ["humid1", "humid2", "humid3", "humid4", "humid5"];
  mobileWH = ["humid1X", "humid2X", "humid3X", "humid4X", "humid5X"];
  
  for (i=0; i<5; i++){
	document.getElementById(weeklyHum[i]).innerHTML = xmlDoc.getElementsByTagName('humidity')[i*8].getAttribute('value') + " %"; 
	document.getElementById(mobileWH[i]).innerHTML = document.getElementById(weeklyHum[i]).innerHTML;
  } 
 
  document.getElementById("next0_3").innerHTML = "Over 3 Hours"; 
  document.getElementById("next3_6").innerHTML = "Over 6 Hours";
  document.getElementById("next6_9").innerHTML = "Over 9 Hours";
  
  //Update hourly weather conditions
  hourlyWeather = ["hourW1", "hourW2", "hourW3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyWeather[i]).innerHTML = xmlDoc.getElementsByTagName('symbol')[i].getAttribute('name').toUpperCase();  
  } 
  
  //Update hourly humidity
  hourlyHum = ["hourHum1","hourHum2","hourHum3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyHum[i]).innerHTML = "Humidity "+xmlDoc.getElementsByTagName('humidity')[i].getAttribute('value')+" %";   
  }
  
  //Update hourly temps
  hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
  for (i=0; i<3; i++){
	document.getElementById(hourlyTemp[i]).innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[i].getAttribute('value')).toFixed(i)+"° C";   
  }
  
  //Update hourly wind speeds
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
