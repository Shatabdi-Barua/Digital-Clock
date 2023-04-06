setInterval(showTime, 1000);
function showTime() //every seconds time is showing
{
    const dt = new Date(); //get current date
    let hrs = dt.getHours(); 
    let mins = dt.getMinutes();
    let sec = dt.getSeconds();
    let session = hrs >= 12 ? "PM":"AM" // if hour is greater than 12 than it'll "PM" otherwise "AM"

    hrs = hrs == 0 ? "12" :( hrs > 12 ? (hrs - 12) : hrs);  //to show time greater than 12 we need to suntract the value from 12
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hrs + ":" + mins + ":" + sec + " " + session
    document.querySelector(".show_time").innerHTML = time
}
function showDate()
{
    const dt = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[dt.getDay()]
    let month = months[dt.getMonth()]
    let full_date = dt.getDate();
    let year = dt.getFullYear();

    let current_date = day + ", " + month + " " + full_date + ", " + year;
    return current_date;
}
document.querySelector(".show_date").innerHTML = showDate();