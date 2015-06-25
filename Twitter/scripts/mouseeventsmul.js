var msgDiv = document.getElementById("logMsg");
function loadComplete(){
    var btn = document.getElementsByClassName("bt");
    var b = new Array();
    document.getElementById("cl").onclick = function(){
        document.getElementById("log").innerHTML = '';
    }
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
    this.onMouseDown();
    //this.changeClass("pressed");
    console.log("Mouse Down");
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
    console.log("Mouse Move");
}
object.prototype.mouseOvr = function(){
    console.log("Mouse Over");
}
object.prototype.mouseUp = function(){
    this.onMouseUp();
    //this.changeClass("bt");
    console.log("Mouse Up");
}
object.prototype.onMouseDown = function(){};
object.prototype.onMouseUp = function(){};
object.prototype.onMouseClick = function(){};
object.prototype.onMouseOut = function(){};
object.prototype.mouseClick = function(){
    this.el.onmouseover = null;
    this.el.onmousemove = null;
    this.el.onmouseup = null;
    this.el.ondblclick = null;
    this.el.oncontextmenu = null;
    this.el.onmouseout = null;
    this.onMouseClick();
    console.log("Mouse Click");
}
object.prototype.dblClick = function(){
    console.log("Double Click");
}
object.prototype.mouseOut = function(){
    //this.changeClass("bt");
    this.el.onmouseover = null;
    this.el.onmousemove = null;
    this.el.onmouseup = null;
    this.el.ondblclick = null;
    this.onMouseOut();
    console.log("Mouse Out");
    this.el.onmouseout = null;
}

/*object.prototype.changeClass = function(classname){
    this.el.className = classname;
}*/
object.prototype.addClass = function(classname){
    this.el.className += ' '+classname;
}

object.prototype.removeClass = function(classname){
    var str = this.el.className;
    this.el.className = str.replace(classname, "");
}

object.prototype.onTouchS = function(){};
object.prototype.onTouchE = function(){};
object.prototype.onTouchL = function(){};
object.prototype.onTouchC = function(){};

object.prototype.onTouchStart = function(e){
    event.preventDefault();
    console.log("Touch Started");
    //this.changeClass("pressed");
    var that = this;
    this.onTouchS();
    this.on_Cancel = function(){ 
        that.onTouchCancel(); 
    };
    this.on_Move = function(event){
        that.onTouchMove(event);
    }
    this.on_End = function(){
        that.onTouchEnd();
    }
    this.el.addEventListener("touchcancel", this.on_Cancel, false);
    this.el.addEventListener("touchmove", this.on_Move, false);
    this.el.addEventListener("touchend", this.on_End, false);
}

object.prototype.onTouchEnd = function(){
    //this.changeClass("bt");
    this.el.onmousedown = null;
    this.onTouchE();
    this.el.removeEventListener("touchmove", this.on_Move, false);
    console.log("Touch Ended");
    this.el.removeEventListener("touchend", this.on_End, false);
}

object.prototype.onTouchCancel = function(){
    //this.changeClass("bt");
    this.el.onmousedown = null;
    this.onTouchC();
    this.el.removeEventListener("touchmove", this.on_Move, false);
    console.log("Touch Cancelled");
    this.el.removeEventListener("touchcancel", this.on_Cancel, false);
}

object.prototype.onTouchLeave = function(){
    //this.changeClass("bt");
    this.el.onmousedown = null;
    this.el.removeEventListener("touchend", this.on_End, false);
    this.onTouchL();
    this.el.removeEventListener("touchmove", this.on_Move, false);
    console.log("Touch Left");
}

object.prototype.onTouchMove = function(e){
    console.log("Touch Moved");
    var touch = e.touches[0];
    if(this.el !== document.elementFromPoint(touch.pageX,touch.pageY)){
        this.onTouchLeave();
    }
}

object.prototype.callFunction = function(e){
    /*e.onmousedown = function(){
        e.onmouseover = function(){
            console.log("Mouse Over");
        }
        e.onmousemove = function(){
            console.log("Mouse Move");
        }
        e.className = "pressed";
        console.log("Mouse Down");
        e.onmouseup = function(){
            e.className = "bt";
            console.log("Mouse Up");
        }
        e.onclick = function(){
            console.log("Clicked");
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
            console.log("Mouse Out");
        }
    }*/
    var that = this;
    e.onmousedown = function(e){
        that.onDown(e); // Object
    };
    e.addEventListener("touchstart", function(){ that.onTouchStart(e); }, false);
}

function logMesage(msg){
    if(document.getElementById("log")){
        document.getElementById("log").innerHTML += msg + "<br>";
        //msgDiv.scrollTop += msgDiv.scrollHeight;
    }
}