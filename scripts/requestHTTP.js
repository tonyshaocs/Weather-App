//HTTP request to API to change the city and update the information
function lookUp(search){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		updateCurrentSum(this);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp.send();
  
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		updateHWinfo(this);
    }
  };
  xhttp2.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=metric&appid=c141214819da094493280f4cc2eb302d&mode=xml", true);
  xhttp2.send();
}
