hourlyTemp = ["hourTemp1", "hourTemp2", "hourTemp3"];
weeklyTemp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
mobileWT = ["temp1X", "temp2X", "temp3X", "temp4X", "temp5X"];

//Convert the temperatures from C -> F or F -> C when the user first loads the page.
function changeTempType(){
	if (document.getElementById("myCheckBox").value==1){ 		
		changeCtoF(); 
		document.getElementById("myCheckBox").value=2;
	}
	else if (document.getElementById("myCheckBox").value==2){
		changeFtoC();
		document.getElementById("myCheckBox").value=1;
	}
}

//Convert the temperatures from F -> C.
function changeFtoC(){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+((parseFloat(document.getElementById("temp").innerHTML.substring(14,19))-32)*(5/9)).toFixed(2)+"° C";

	for (i=0; i<3; i++){
		document.getElementById(hourlyTemp[i]).innerHTML = ((parseFloat(document.getElementById(hourlyTemp[i]).innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;  
	}
  
	for (i=0; i<5; i++){
		document.getElementById(weeklyTemp[i]).innerHTML = ((parseFloat(document.getElementById(weeklyTemp[i]).innerHTML.substring(0,5))-32)*(5/9)).toFixed(2)+"° C" ;
		document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	} 
}


//Convert the temperatures from C -> F.
function changeCtoF(){
	document.getElementById("temp").innerHTML = document.getElementById("temp").innerHTML.substring(0,14)+(parseFloat(document.getElementById("temp").innerHTML.substring(14,19))*9/5+32).toFixed(2)+"° F";

	for (i=0; i<3; i++){
		document.getElementById(hourlyTemp[i]).innerHTML = (parseFloat(document.getElementById(hourlyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ;    
	}
  
	for (i=0; i<5; i++){
		document.getElementById(weeklyTemp[i]).innerHTML = (parseFloat(document.getElementById(weeklyTemp[i]).innerHTML.substring(0,5))*9/5+32).toFixed(2)+"° F" ; 
		document.getElementById(mobileWT[i]).innerHTML = document.getElementById(weeklyTemp[i]).innerHTML;
	} 
}
