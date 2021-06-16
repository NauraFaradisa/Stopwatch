var numberSecond, numberCentisecond, numberMinute, numberHour,
intervalCentiSecond, intervalSecond, intervalMinute, intervalHour;

var playButton, pauseButton, stopButton, 
centisecondText, secondText, minuteText, hourText;

playButton = document.getElementById("playButton");
pauseButton = document.getElementById("pauseButton");
stopButton = document.getElementById("stopButton");

centisecondText = document.getElementById("centisecond");
secondText = document.getElementById("second");
minuteText = document.getElementById("minute");
hourText = document.getElementById("hour");


function play() {
    
    playButton.disabled=true;
    pauseButton.disabled=false;
    stopButton.disabled=false;
    
    intervalCentiSecond = setInterval(centisecond, 10)
	intervalSecond = setInterval(second, 1000);
	intervalMinute = setInterval(minute, 60000);
	intervalHour = setInterval(hour, 3600000);

}

function pause() {
    
    playButton.disabled=false;
    pauseButton.disabled=true;
    stopButton.disabled=false;
    
    clearInterval(intervalCentiSecond);
    clearInterval(intervalSecond);
    clearInterval(intervalMinute);
    clearInterval(intervalHour);
    
}

function stop(){
    
    playButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;
    
    hourText.innerHTML="00";
    minuteText.innerHTML="00";
    secondText.innerHTML="00";
    centisecondText.innerHTML="00";
    
    numberHour=0;
    numberMinute=0;
    numberSecond=0;
    numberCentisecond=0;
    
    clearInterval(intervalCentiSecond);
    clearInterval(intervalSecond);
    clearInterval(intervalMinute);
    clearInterval(intervalHour);
    
}

numberHour = 0;

function hour(){
	numberHour++;
	if (numberHour.toString().length == 1){numberHour = "0" + numberHour;} 
	else if (parseInt(numberHour)>59){numberMinute = "00";}
	hourText.innerHTML = numberHour;
}

numberMinute = 0;

function minute(){
	numberMinute++;
	if (numberMinute.toString().length == 1){numberMinute = "0" + numberMinute;} 
	else if (parseInt(numberMinute)>59){numberMinute = "00";}
	minuteText.innerHTML = numberMinute;
}

numberSecond = 0;

function second(){
	numberSecond++;
	if (numberSecond.toString().length==1){numberSecond = "0" + numberSecond;} 
	else if (parseInt(numberSecond)>59){numberSecond = "00";}
	secondText.innerHTML = numberSecond;
}

numberCentisecond = 0;

function centisecond(){
	numberCentisecond++;
	if (numberCentisecond.toString().length==1){numberCentisecond = "0" + numberCentisecond;} 
	else if (numberCentisecond.toString().length==3){numberCentisecond = "00";}
	centisecondText.innerHTML = numberCentisecond;
}