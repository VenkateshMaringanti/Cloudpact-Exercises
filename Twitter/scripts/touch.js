var mc;
function loadData(){
    var lists = document.getElementsByClassName("tweet-head");
    var b = new Array();
    for( var i=1; i<=lists.length; i++){
        var ele = document.getElementById("expand"+i);
        mc = new Hammer.Manager(ele);
        $(ele).children('ul').hide();
        b[i] = new object(ele);
        b[i].callFunction(ele);
    }
}
mc.add( new Hammer.Tap({ event: 'singletap' }) );
mc.on("singletap", function(ev) {
    this.expand();
});
object.prototype.expand = function(){
    var ele = this.el;
    $(ele).children('ul').toggle();
}