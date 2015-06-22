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
ko.applyBindings(tweetarray);

/*var len = tweetarray.tweets.length;
for( var i=1; i<=len; i++ ){
    $("#expand"+i).click(function(event){
        displayEle(this, event);
    });
}

function displayEle(this, event){
    console.log(this);
}*/

var lists = $('#tweet > li');
lists.click(function(event){
    $(this).children('ul').toggle();
    //return false;
})
.children('ul').hide();