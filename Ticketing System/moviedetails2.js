var movtitle, datesel, theatername, showtime, nos, selectseat;

var url = window.location.search.substring(1).split("&");
var decurl = decodeURIComponent(url);
console.log(decurl);
var data = decurl.split(",");
var arr = new Array();
for(var i=0; i<data.length; i++){
    var val = data[i].indexOf("=");
    arr[i] = data[i].slice(val+1);
}
movtitle = arr[0];
datesel = arr[1];
theatername = arr[2];
showtime = arr[3];
nos = arr[4];
//alert(movtitle+" "+datesel+" "+theatername+" "+showtime+" "+nos);
document.getElementById("ttimes").innerHTML = '<td>'+movtitle+'</td><td>'+datesel+'</td><td>'+theatername+'</td><td>'+showtime+'</td><td>'+nos+'</td>';

var selectSeats = new Array();
var bookedSeats = ['a6','b7','b8','b9','c8'];

function showSeats(){
    document.getElementById("para").hidden = "yes";
    document.getElementById("selseat").removeAttribute("hidden");
    for(var i=0; i<5; i++){
        var string = 'abcde';
        var d = string.charAt(i);
        for(var j=0; j<10; j++){
            if(bookedSeats.indexOf(d+""+j) >= 0){
                document.getElementById('t'+i).innerHTML += '<td><img id="'+d+""+j+'" src="notavailable.png" class="img" alt="Not Available"/></td>';
            }
            else{
                document.getElementById('t'+i).innerHTML += '<td><a onclick="seatSelect(id)" id="'+d+""+j+'"><img src="available.png" class="img" alt="available"/></a></td>';
            }
        }
    }
}


function seatSelect(id){
    //console.log(id);
    if(selectSeats.length < nos){
        document.getElementById(id).outerHTML = '<a onclick="unSelect(id)" id="'+id+'"><img src="selected.png" class="img" alt="selected" /></a>';
        selectSeats.push(id);
        document.getElementById("selected").innerHTML = selectSeats;
        //console.log(selectSeats);
    }
    else{
        alert("You can choosen to select "+nos+" seats");
    }
}

function unSelect(id){
    //console.log(id);
    document.getElementById(id).outerHTML = '<a onclick="seatSelect(id)" class="img" id="'+id+'"><img src="available.png" alt="available" /></a>';
    for( var k in selectSeats ){
        if(selectSeats[k] == id){
            //alert(selectSeats[k]);
            selectSeats.splice(k,1);
            document.getElementById("selected").innerHTML = selectSeats;
        }
    }
}

function selectConfirm(){
    if(selectSeats.length < nos){
        alert("Please select the no.of seats you wanted");
    }
    else{
    document.getElementById("md").innerHTML = '<table class="padd"><caption><h2>Total Details<h2></caption><tr><td>MovieName: </td><td>'+movtitle+'</td></tr><tr><td>Date: </td><td>'+datesel+'</td></tr><tr><td>Theater: </td><td>'+theatername+'</td></tr><tr><td>Show Time: </td><td>'+showtime+'</td></tr><tr><td>No.of Seats: </td><td>'+nos+'</td></tr><tr><td>Selected Seats: </td><td>'+selectSeats+'</td></tr></table>';
    }
}