var tweetarray = {
    "tweets": [
    {
        "id": "1",
        "timestamp": "19h",
        "image": "Images/SRH.jpeg",
        "tex": "Congrats to Kane Williamson on his Man of the Match winning performance against England. A century and the key wicket of Morgan!",
        "name": "SunRisers Hyderabad",
        "username": "@SunRisers",
        "hashtag": "#runmachine"
    },
    {
        "id": "2",        
        "timestamp": "Jun 2",
        "image": "Images/Black Caps.jpg",
        "tex": "Kane Williamson brought up his 3000 ODI runs from 78 matches at an average of 46.69 with 7 100s and 18 50s. World class.",
        "name": "BLACKCAPS",
        "username": "@BLACKCAPS",
        "hashtag": "#engvsnz"
    },
    {
        "id": "3",
        "timestamp": "Jun 1",
        "image": "Images/BCCI.jpeg",
        "tex": "47.2: WICKET! I Kayes (72) is out, st Wriddhiman Saha b Harbhajan Singh, 172/5",
        "name": "BCCI",
        "username": "@BCCI",
        "hashtag": "#BanvsInd"
    },
    {
        "id": "4",
        "timestamp": "May 31",
        "image": "Images/Surrey Cricket.jpeg",
        "tex": "Man of the Match @SDhawan25 Poses with @BCBtigers Skipper at the Post Match Presentation Yesterday",
        "name": "Surrey Cricket",
        "username": "@Surrey Cricket",
        "hashtag": "#BanvsInd"
    }
]};

/*var len = tweetarray.tweets.length;
for( var i=1; i<=len; i++ ){
    $("#expand"+i).click(function(event){
        displayEle(this, event);
    });
}

function displayEle(this, event){
    console.log(this);
}*/

/*var lists = $('#tweet > li');
lists.click(function(event){
    $(this).children('ul').toggle();
    //return false;
})
.children('ul').hide();*/

function loadData(){
    ko.applyBindings(tweetarray);
    var lists = document.getElementsByClassName("tweet-head");
    var b = new Array();
    for( var i=1; i<=lists.length; i++){
        var ele = document.getElementById("expand"+i);
        $(ele).on('ready', function(){
            ele.idx = i;
            $(ele).children('ul').hide();
            animationLoad(ele, "wobble");
        });
        b[i] = new object(ele);
        b[i].callFunction(ele);
    }
    function animationLoad(element, animation){
        //console.log("Adding animation - " + element.idx + " - " + animation);
        $(element).addClass('animated ' + animation);
        window.setTimeout( function(){
            //console.log("Removing animation - " + element.idx + " - " + animation);
            $(element).removeClass('animated ' + animation);
        }, 2000);
    };

    object.prototype.onMouseDown = function(){
        this.addClass("tweet-head1");
    }
    /*object.prototype.onMouseUp = function(){
        this.addClass("tweet-head1");
    }*/
    object.prototype.onMouseClick = function(){
        animationLoad(this.el, "rubberBand");
        this.expand();
        this.removeClass("tweet-head1");
    }
    object.prototype.onMouseOut = function(){
        this.removeClass("tweet-head1");
    }

    object.prototype.onTouchS = function(){
        this.addClass("tweet-head1");
    }
    object.prototype.onTouchE = function(){
        animationLoad(this.el, "rubberBand");
        this.removeClass("tweet-head1");
        this.expand();
    }
    object.prototype.onTouchL = function(){
        this.removeClass("tweet-head1");
    }
    object.prototype.onTouchC = function(){
        this.removeClass("tweet-head1");
    }

    object.prototype.expand = function(){
        var ele = this.el;
        $(ele).children('ul').toggle();
    }
}