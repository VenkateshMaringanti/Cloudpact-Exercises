var lists = $('#explist > li');
lists.click(function(event){
    if(this == event.target || event.target.parentElement == this){
        $(this).children('ul').toggle();
    }
    //return false;
})
.children('ul').hide();