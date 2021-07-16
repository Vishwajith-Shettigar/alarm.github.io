alarm = document.getElementById('alarm');


let e;





alarm.addEventListener('blur', () => {



    console.log("lol");

    console.log(typeof (alarm.value));

    let alarmtime = alarm.value.toString();

    let alarmtime2 = alarmtime;
    let alarmtime1 = alarmtime;
    alarmtime1 = alarmtime1.substring(0, 2);
    alarmtime2 = alarmtime2.substring(3, 6);

    alarmtime = alarmtime1 + alarmtime2;

    alarmtime = Number(alarmtime)



    console.log("our time :", alarmtime)







    let hour = new Date().getHours();
    // if (hour > 12) {
    //     hour = hour - 12;
    // }

    hour = hour.toString()
    console.log(typeof (hour))

    let minute = new Date().getMinutes();

    minute = minute.toString();

    let cuurenttime = hour + minute;

    cuurenttime = Number(cuurenttime);
    console.log("current", cuurenttime)


let timedis= alarmtime-cuurenttime;

timedis*=60000;




    setTimeout(()=>{

    
        console.log("matched");
        var audio = new Audio('audio.mp3');
        audio.play();
    


},timedis);

})

