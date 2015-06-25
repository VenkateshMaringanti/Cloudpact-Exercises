function loadPage(){
    var img = document.getElementsByClassName("logo");
    var b = new Array();
    for( var i=0; i<img.length; i++){
        var ele = document.getElementById("logo"+i);
        b[i] = new object(ele);
        b[i].callFunction(ele);
    }
}

object.prototype.onDown = function(){
    this.resizeImg();
}

object.prototype.resizeImg = function(){
    if($(this.el).attr("height") === 137){
        $(this.el).removeClass("increase");
    }
    else{
        $(this.el).addClass("increase");
    }
}