function showTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    document.getElementById("time").innerHTML = year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";
}
setInterval("showTime()",1000);