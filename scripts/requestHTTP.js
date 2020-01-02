//On load, reset the temperature type and update the weather info.
function startUP(){
	document.getElementById("typeCheckBox").checked = false;
	lookUp('toronto');
}


//Make the HTTP request to the API to retrieve new information
//Requires the city to retrieve information for.
//On success callback, the XML formatted info will be passed to updateCurrentSum() in updateElements.js to update the view.
function lookUp(search){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //Success Callback is defined as a readyState of 4, meaning operation is done alongside a 200 OK response.
		updateCurrentSum(this);
    }
  };
  xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp.send();
  
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		updateHWinfo(this);
    }
  };
  xhttp2.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp2.send();
}
