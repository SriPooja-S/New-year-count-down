
function showTime()
{
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    if(hours>12)
    {
        hours-=12;
        session="PM";
    }
    hours = (hours<10)?"0"+hours:hours;
    minutes = (minutes<10)?"0"+minutes:minutes;
    seconds =(seconds<10)?"0"+seconds:seconds;
    let time =hours + ":" + minutes + ":" + seconds+ " " + session;
    document.querySelector("#clock").innerText = time;
}
setInterval(function()
{
    showTime();
},1000)

function currentDate()
{
    const date = new Date()
    let d = new Date().getDate();
    let m = new Date().getMonth()+1;
    let yr = new Date().getFullYear();
    d = (d<10)?"0"+d:d;
    yr= (yr<10)?"0"+yr:yr;
    m = (m<10)?"0"+m:m;
    d=d+' '+'/';
    m=m+' '+'/';
    document.querySelector("#date").innerText = d;
    document.querySelector("#month").innerText = m;
    document.querySelector("#year").innerText = yr;

}
setInterval(function()
{
    currentDate();
},1000)
function counter()
{
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
    const currentDate=new Date();
/*
1000 millisecond = 1 second
60 second = 1 minute
60 minute = 1 hr
24 hr = 1 day
 */

    const diff=newYear-currentDate;
    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor((diff/1000/60/60)%24);
    let m=Math.floor((diff/1000/60)%60);
    let s=Math.floor((diff/1000)%60);
    d = (d<10)?"0"+d:d;
    h= (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    document.querySelector("#days").innerText = d;
    document.querySelector("#hr").innerText = h;
    document.querySelector("#min").innerText = m;
    document.querySelector("#sec").innerText = s;


}
setInterval(function()
{
    counter();
},1000)


