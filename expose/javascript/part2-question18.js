function timeDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeDate, 1000);