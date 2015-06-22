function loadComplete(){
    var btn = document.getElementsByClassName("bt");
    var b = new Array();

    for( var i=1; i<=btn.length; i++ ){
        var ele = document.getElementById("btn"+i);
        b[i] = new object(ele);
        b[i].callFunction(ele);
    }
}

function object(el){
    this.el = el;
}

object.prototype.callFunction = function(e){
    e.onmousedown = function(){
        e.onmouseover = function(){
            logMesage("Mouse Over");
        }
        e.onmousemove = function(){
            logMesage("Mouse Move");
        }
        e.className = "pressed";
        logMesage("Mouse Down");
        e.onmouseup = function(){
            e.className = "bt";
            logMesage("Mouse Up");
        }
        e.onclick = function(){
            logMesage("Clicked");
            e.onmouseover = null;
            e.onmousemove = null;
            e.onmouseup = null;
            e.ondblclick = null;
            e.oncontextmenu = null;
        }
        e.ondblclick = function(){
            logMsg("Double Click");
        }
        e.onmouseout = function(){
            e.className = "bt";
            e.onmouseover = null;
            e.onmousemove = null;
            e.onmouseup = null;
            e.ondblclick = null;
            e.onmouseout = null;
            logMesage("Mouse Out");
        }
    }
}

function logMesage(msg){
    document.getElementById("log").innerHTML += msg + "<br>" ;
}

document.getElementById("cl").onclick = function(){
    document.getElementById("log").innerHTML = '';
};
