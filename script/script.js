var numberSecond, numberCentisecond, numberMinute, numberHour;
			
function start(){

	document.getElementsByTagName("button")[0].style.visibility="HIDDEN";
	setInterval(second, 1000 );
	setInterval(centisecond, 10);
	setInterval(minute, 60000);
	setInterval(hour, 3600000);

}

numberHour = 0;

function hour(){

	numberHour++;
	if (numberHour.toString().length == 1) {
		numberHour = "0" + numberHour;
	} else if (parseInt(numberHour)>59){
		numberMinute = "00";
	}

	document.getElementById("hour").innerHTML = numberHour;
}

numberMinute = 0;

function minute(){

	numberMinute++;

	if (numberMinute.toString().length == 1){
		numberMinute = "0" + numberMinute;
	} else if (parseInt(numberMinute)>59){
		numberMinute = "00";
	}

	document.getElementById("minute").innerHTML = numberMinute;

}

numberSecond = 0;

function second(){

	numberSecond++;

	if (numberSecond.toString().length==1){
		numberSecond = "0" + numberSecond;
	} else if (parseInt(numberSecond)>59){
		numberSecond = "00";
	}

	document.getElementById("second").innerHTML = numberSecond;

}

numberCentisecond = 0;

function centisecond(){

	numberCentisecond++;

	if (numberCentisecond.toString().length==1){
		numberCentisecond = "0" + numberCentisecond;
	} else if (numberCentisecond.toString().length==3){
		numberCentisecond = "00";
	}

	document.getElementById("centisecond").innerHTML = numberCentisecond;
	
}