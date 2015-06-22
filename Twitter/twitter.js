/*function alertMsg(){
    document.getElementById("logo").onclick = function(){
        alert("Hi, You have clicked on the logo!");
    };
    document.getElementById("name").onclick = function(){
        alert("Hi, You have clicked on the username!");
    };
    document.getElementById("timestamp").onclick = function(){
        alert("Hi, You have clicked on the timestamp!");
    };
    document.getElementById("hashtag").onclick = function(){
        alert("Hi, You have clicked on the hashtag!");
    };
    document.getElementById("viewdetails").onclick = function(){
        alert("Hi, You have clicked on the View Details!");
    };
    document.getElementById("reply").onclick = function(){
        alert("Hi, You have clicked on the reply!");
    };
    document.getElementById("rt").onclick = function(){
        alert("Hi, You have clicked on the retweet!");
    };
    document.getElementById("fav").onclick = function(){
        alert("Hi, You have clicked on the Favourite!");
    };
}
    
function onLoad(){
    document.getElementsByTagName("body")[0].addEventListener("click",bodyFunction);
    function bodyFunction(){
        alert("Hi1");
        
    }
    var btn = document.getElementById("logo");
    btn.addEventListener("click", myFunction);
    btn.addEventListener("click",antherFunction);
    function myFunction(){
        alert("Hi");
    }
    function antherFunction(){
        alert("Hello");
        event.stopPropagation();
    }
}*/

var a = document.getElementsByTagName("img");
for(var i=0; i<a.length; i++){
    //console.log("logo"+i);
    var btn = document.getElementById("logo"+i);
    btn.addEventListener("click", eventListen);
}
function eventListen(evt){
        var id = evt.target.id;
        if(id === "logo0"){
                alert("You Selected SunRisers!");
        }
        else if(id === "logo1"){
                alert("You Selected BlackCaps!");
        }
        else if(id === "logo2"){
            alert("You Selected BCCI!");
        }
        else if(id === "logo3"){
                alert("You Selected Surrey Cricket!");
        }
    }