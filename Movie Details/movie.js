/*
//Functions Method

function myFunction(){
	var array1 = ["http://www.omdbapi.com/?i=tt1285016","http://www.omdbapi.com/?t=Interstellar","http://www.omdbapi.com/?t=Terminator","http://www.omdbapi.com/?t=Dhoom","http://www.omdbapi.com/?t=Athadu","http://www.omdbapi.com/?t=Kick","http://www.omdbapi.com/?t=Simha","http://www.omdbapi.com/?t=Legend","http://www.omdbapi.com/?t=Simhadri","http://www.omdbapi.com/?t=Kushi"];
	for(var i=0; i<array1.length; i++){
		loadData(array1[i]);
	}
}

function loadData(input){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        console.log(myArr.Title);
	        displayData(myArr);
	    }
	}
    xmlhttp.open("GET", input, true);
	xmlhttp.send();
}

function displayData(arr) {
	var out = "";
    out = '<tr><td>'+ arr.Title+'</td><td><a href="http://www.imdb.com/title/'+arr.imdbID+'">'+arr.Title+'</a></td><td>'+arr.Rated+'</td>'+'<td>'+arr.Year+'</td>'+'<td>'+arr.Genre+'</td>'+'<td>'+arr.Director+'</td>'+'<td>'+arr.Actors+'</td>'+'<td>'+arr.Plot+'</td>'+'<td>'+arr.Language+'</td>'+'<td><img src="'+arr.Poster+'"></td>'+'<td>'+ arr.imdbRating+'</td></tr>';
    document.getElementById("movies").innerHTML = document.getElementById("movies").innerHTML + out;
}
*/


//Anonymous Function
/*
var array1 = ["http://www.omdbapi.com/?i=tt1285016","http://www.omdbapi.com/?t=Interstellar","http://www.omdbapi.com/?t=Terminator","http://www.omdbapi.com/?t=Dhoom","http://www.omdbapi.com/?t=Athadu","http://www.omdbapi.com/?t=Kick","http://www.omdbapi.com/?t=Simha","http://www.omdbapi.com/?t=Legend","http://www.omdbapi.com/?t=Simhadri","http://www.omdbapi.com/?t=Kushi"];

function loadData(){
    for( var i in array1 ){
        console.log("Starting Index - " + i);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (function(xmlhttp,tmp){
            return function(){
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                    var arr = JSON.parse(xmlhttp.responseText);
                    out = '<td>'+ arr.Title+'</td><td><a href="http://www.imdb.com/title/'+arr.imdbID+'">'+arr.Title+'</a></td><td>'+arr.Rated+'</td>'+'<td>'+arr.Year+'</td>'+'<td>'+arr.Genre+'</td>'+'<td>'+arr.Director+'</td>'+'<td>'+arr.Actors+'</td>'+'<td>'+arr.Plot+'</td>'+'<td>'+arr.Language+'</td>'+'<td><img src="'+arr.Poster+'"></td>'+'<td>'+ arr.imdbRating+'</td>';
                    console.log("Finishing Index - " + tmp);
                    document.getElementById("i"+tmp).innerHTML += out;
                }
            }
        })(xhr, i);
        xhr.open("GET", array1[i], true);
        xhr.send();
    }
};
document.addEventListener("DOMContentLoaded", loadData);
*/

//Object way

var array1 = ["http://www.omdbapi.com/?i=tt1285016","http://www.omdbapi.com/?t=Interstellar","http://www.omdbapi.com/?t=Terminator","http://www.omdbapi.com/?t=Dhoom","http://www.omdbapi.com/?t=Athadu","http://www.omdbapi.com/?t=Kick","http://www.omdbapi.com/?t=Simha","http://www.omdbapi.com/?t=Legend","http://www.omdbapi.com/?t=Simhadri","http://www.omdbapi.com/?t=Kushi"];

function MovieDetails(tmp, url){
    this.url = url;
    this.tmp = tmp;
};

MovieDetails.prototype.getData = function(){
    this.xhr = new XMLHttpRequest();
    var that = this;
    this.xhr.onreadystatechange = function(){
        that.onReadyStateChangeModule();
    };
    this.xhr.open("GET",this.url,true);
    this.xhr.send();
}

MovieDetails.prototype.onReadyStateChangeModule = function(xhr){
    if(this.xhr.readyState == 4){
        var myArr = JSON.parse(this.xhr.responseText);
        this.render(myArr);
    }
}

MovieDetails.prototype.render = function(arr){
    out = '<td>'+ arr.Title+'</td><td><button type="submit" id="b'+this.tmp+'" onclick="callSite(id)" value="'+arr.imdbID+'">'+arr.Title+'</button></td><td>'+arr.Rated+'</td><td>'+arr.Year+'</td><td>'+arr.Genre+'</td><td>'+arr.Director+'</td><td>'+arr.Actors+'</td><td>'+arr.Plot+'</td><td>'+arr.Language+'</td><td><img src="'+arr.Poster+'"></td><td>'+ arr.imdbRating+'</td>';
    document.getElementById("i"+this.tmp).innerHTML += out;
}

function loadData(){
    for(var i in array1){
        var movie = new MovieDetails(i, array1[i]);
        movie.getData();
    }
};

/*
var value = document.getElementById("btn").value;
alert("value");
document.getElementById("btn").onclick = function(value){
    window.location.href = "http://www.imdb.com/title/"+value;
}
*/


function callSite(data){
    var movid = document.getElementById(data).value;
    window.open('http://www.imdb.com/title/' + movid);
}

document.addEventListener("DOMContentLoaded", loadData);

