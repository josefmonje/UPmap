$(document).ready(function(){
    var placeList = new List('places',{valueNames:['place']});
    $("#places").on('keyup', '.search', function(e){
        $(".top").css('visibility', 'hidden');
        $(".intro").css('visibility', 'hidden');
        $(".list").css('visibility', 'visible');
        var count = 1;
        var map = "http://maps.googleapis.com/maps/api/staticmap?&maptype=roadmap&size=600x400&key=AIzaSyBCRV9_xgzxV5prYsXH-RP78gRv53YA4X4";
        $(".place").each(function(){
            if($(".place").is(':visible')){
                map += "&markers=color:green%7Clabel:" + count++ + "%7C" + $(this).attr('id') ;
            }
        });
        if (e.which==13){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    map += "&sensor=true&markers=color:red%7Clabel:X%7C" + position.coords.latitude + "," + position.coords.longitude;
                    $(".map").css('background-image', 'url(' + map + ')');
               });
            }
        }
        if (!$(".search").val()){
            $(".top").css('visibility', 'visible');
            $(".intro").css('visibility', 'visible');
            $(".list").css('visibility', 'hidden');
        }
    $(".map").css('background-image', 'url(' + map + ')');
    //$(".map").html(map);
    });
});
