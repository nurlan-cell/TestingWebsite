//Год Рождения 40 minutes
$(document).ready(function() {
    $("select").change(function() {
        $(this).find("option").html(function(){ return this.value + " " + $(this).attr("data-count"); });
        $("option:selected",this).html(this.value);
    }).change();
});


//при ширине окна браузера менее 768px меню нужно сделать выпадающим 30minutes
$("<select />").appendTo("navbar");

$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

$("navbar a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("navbar select");
});

$("navbar select").change(function() {
    window.location = $(this).find("option:selected").val();
  });
