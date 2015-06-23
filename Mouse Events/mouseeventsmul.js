var msgDiv = document.getElementById("logMsg");
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

object.prototype.onDown = function(e){
    var that = this;
    this.el.onmouseover = function(){ 
        that.mouseOvr();
    }
    this.el.onmousemove = function(){
        that.mouseMve();
    }
    this.changeClass("pressed");
    logMesage("Mouse Down");
    this.el.onmouseup = function(){
        that.mouseUp();
    }
    this.el.onclick = function(){
        that.mouseClick();
    }
    this.el.ondblclick = function(){
        that.dblClick();
    }
    this.el.onmouseout = function(){
        that.mouseOut();
    }
}

object.prototype.mouseMve = function(){
    logMesage("Mouse Move");
}
object.prototype.mouseOvr = function(){
    logMesage("Mouse Over");
}
object.prototype.mouseUp = function(){
    this.changeClass("bt");
    logMesage("Mouse Up");
}
object.prototype.mouseClick = function(){
    this.el.onmouseover = null;
    this.el.onmousemove = null;
    this.el.onmouseup = null;
    this.el.ondblclick = null;
    this.el.oncontextmenu = null;
    logMesage("Mouse Click");
}
object.prototype.dblClick = function(){
    logMesage("Double Click");
}
object.prototype.mouseOut = function(){
    this.changeClass("bt");
    this.el.onmouseover = null;
    this.el.onmousemove = null;
    this.el.onmouseup = null;
    this.el.ondblclick = null;
    this.el.onmouseout = null;
    logMesage("Mouse Out");
}

object.prototype.changeClass = function(classname){
    this.el.className = classname;
}

object.prototype.callFunction = function(e){
    /*e.onmousedown = function(){
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
    }*/
    var that = this;
    e.onmousedown = function(e){
        that.onDown(e); // Object
    }
}

function logMesage(msg){
    document.getElementById("log").innerHTML += msg + "<br>";
    msgDiv.scrollTop += msgDiv.scrollHeight;
}

document.getElementById("cl").onclick = function(){
    document.getElementById("log").innerHTML = '';
};