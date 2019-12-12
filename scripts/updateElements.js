//Update the application's current weather summary.
function updateCurrentSum(xml) {
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

//Update the application's hourly & weekly forecasts.
function updateHWinfo(xml) {
  var xmlDoc = xml.responseXML;
 
  var weeklyDate = ["day1", "day2", "day3", "day4", "day5"];
  var mobileWD = ["day1X", "day2X", "day3X", "day4X", "day5X"];
  
  var weeklyWeather = ["day1w", "day2w", "day3w", "day4w", "day5w"];
  var mobileWWe = ["day1wX", "day2wX", "day3wX", "day4wX", "day5wX"];
  
  var weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
  var mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];
  
  var weeklyWind = ["windspd1", "windspd2", "windspd3", "windspd4", "windspd5"];
  var mobileWW = ["windspd1X", "windspd2X", "windspd3X", "windspd4X", "windspd5X"];
  
  var weeklyHum = ["humid1", "humid2", "humid3", "humid4", "humid5"];
  var mobileWH = ["humid1X", "humid2X", "humid3X", "humid4X", "humid5X"];
  
  for (i=0; i<5; i++){
	//Update Date
	document.getElementById(weeklyDate[i]).innerHTML = xmlDoc.getElementsByTagName('time')[i*8].getAttribute('from').substring(0,10);
	document.getElementById(mobileWD[i]).innerHTML = document.getElementById(weeklyDate[i]).innerHTML;
	//Update weekly weather conditions
	document.getElementById(weeklyWeather[i]).innerHTML = xmlDoc.getElementsByTagName('symbol')[i*8].getAttribute('name').toUpperCase();
	document.getElementById(mobileWWe[i]).innerHTML = document.getElementById(weeklyWeather[i]).innerHTML;
	//Update weekly temps
	document.getElementById(weeklyTemp[i]).innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[i*8].getAttribute('value')).toFixed(2)+"° C"; 
    document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	//Update weekly wind speeds
	document.getElementById(weeklyWind[i]).innerHTML = xmlDoc.getElementsByTagName('windSpeed')[i*8].getAttribute('mps')+ " mps"; 
	document.getElementById(mobileWW[i]).innerHTML = document.getElementById(weeklyWind[i]).innerHTML;
	//Update weekly humidity
	document.getElementById(weeklyHum[i]).innerHTML = xmlDoc.getElementsByTagName('humidity')[i*8].getAttribute('value') + " %"; 
	document.getElementById(mobileWH[i]).innerHTML = document.getElementById(weeklyHum[i]).innerHTML;
  } 
 
  document.getElementById("next0_3").innerHTML = "Over 3 Hours"; 
  document.getElementById("next3_6").innerHTML = "Over 6 Hours";
  document.getElementById("next6_9").innerHTML = "Over 9 Hours";
  
  
  var hourlyWeather = ["hourW1", "hourW2", "hourW3"];  
  var hourlyHum = ["hourHum1","hourHum2","hourHum3"];
  var hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
  var hourlyWind = ["hourWind1", "hourWind2", "hourWind3"];
  for (i=0; i<3; i++){
	//Update hourly weather conditions
	document.getElementById(hourlyWeather[i]).innerHTML = xmlDoc.getElementsByTagName('symbol')[i].getAttribute('name').toUpperCase();  
	//Update hourly humidity 
	document.getElementById(hourlyHum[i]).innerHTML = "Humidity "+xmlDoc.getElementsByTagName('humidity')[i].getAttribute('value')+" %"; 
	//Update hourly temps 
	document.getElementById(hourlyTemp[i]).innerHTML = parseFloat(xmlDoc.getElementsByTagName('temperature')[i].getAttribute('value')).toFixed(i)+"° C"; 
	//Update hourly wind speeds
	document.getElementById(hourlyWind[i]).innerHTML = "Wind "+xmlDoc.getElementsByTagName('windSpeed')[i].getAttribute('mps')+" mps";   	
  }
  
  
  if (document.getElementById("myCheckBox").value==2){
	changeCtoF();
  }
}

