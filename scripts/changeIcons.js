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
