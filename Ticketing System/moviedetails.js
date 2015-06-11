/*var moviedata = [
    {
        "moviename": "Athadu",
        "theaters": [
            "t1", "t2"
        ]
    },
    {
        "moviename": "Interstellar",
        "theaters": [
            "imax", "inox"
        ]
    }
]

function openFunction(){
    for(var i=0; i<moviedata.length; i++){
        document.getElementById("mt").innerHTML += '<option>'+moviedata[i].moviename+'</option>';
        document.getElementById("tt").innerHTML += '<option>'+moviedata[i].theaters[i]+'</option>';
    }
}*/

function dateCheck(){
    var d = new Date();
    console.log(d.getFullYear());
    var date = d.getDate();
    var ldate = date + 5;
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    document.getElementById("dt").setAttribute("min",year+"-0"+month+"-0"+date);
    document.getElementById("dt").setAttribute("max",year+"-0"+month+"-"+ldate);
}