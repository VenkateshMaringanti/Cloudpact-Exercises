/*var elem = $('td.logo').find("img.size");

//Onclick event handler
//console.log(elem.has('img.size'));
elem.on('click', function(e){
    var id = e.target.id;
    var newel = $("#"+id).closest("tr");
    //alert(newel.attr("src"));
    var value = newel.find("span.name").text();
    console.log(value);
    //alert(newel.closest("span").value)
    //alert("You selected - "+ value);
});


//On Click Resize
elem.on('click', function(e){
    console.log(e.target);
    var id = e.target.id;
    //newel.style.height = "137px";
    //console.log($("#"+id));
    if($("#"+id).attr("height") == 137){
        $("#"+id).animate({
        "height": "48px"
        }, 2000, "ease-in-out");
    }
    else{
        $("#"+id).animate({
        "height": "137px"
        }, 2000, "ease-in-out");
    }
});*/