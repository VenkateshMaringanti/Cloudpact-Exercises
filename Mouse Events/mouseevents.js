var msgDiv = document.getElementById("logMsg");
function logMsg(msg){
    document.getElementById("log").innerHTML +=msg + "<br>";
    //console.log(msgDiv.scrollHeight);
    msgDiv.scrollTop += msgDiv.scrollHeight;
}
    
var ele = document.getElementById("btn");
var md = document.getElementById("msdwn");
var mu = document.getElementById("msup");
var mo = document.getElementById("msovr");
var mc = document.getElementById("msclk");
var dc = document.getElementById("dblclk");
var rc = document.getElementById("rclk");
var mou = document.getElementById("msout");
var mm = document.getElementById("msmve");

document.getElementById("cl").onclick = function(){
    document.getElementById("log").innerHTML = '';
};

ele.onmousedown = function(){
    if(md.checked == true){
        event.preventDefault();
    }
    else{
        ele.className = "pressed";
        logMsg("Mouse Down");
    }
}
ele.onmouseup = function(){
    if(mu.checked == true){
        event.preventDefault();
    }
    else{
        ele.className = "bt";
        logMsg("Mouse Up");
    }
}
ele.onmousemove = function(){
    if(mm.checked == true){
        event.preventDefault();
    }
    else{
        logMsg("Mouse Move");
    }
}
ele.onmouseover = function(){
    if(mo.checked == true){
        event.preventDefault();
    }
    else{
        logMsg("Mouse Over");
    }
}
ele.onmouseout = function(){
    if(mou.checked == true){
        event.preventDefault();
    }
    else{
        ele.className = "bt";
        logMsg("Mouse Out");
    }
}
ele.onclick = function(){
    if(mc.checked == true){
        event.preventDefault();
    }
    else{
        logMsg("Mouse Click");
    }
}
ele.ondblclick = function(){
    if(dc.checked == true){
        event.preventDefault();
    }
    else{
        logMsg("Double Click");
    }
}
ele.oncontextmenu = function(){
    if(rc.checked == true){
        event.preventDefault();
    }
    else{
        logMsg("Right Click");
    }
}