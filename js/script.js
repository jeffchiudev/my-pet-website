$(document).ready(function(){
    $("button#dark").click(function(){
        $("body").addClass("dark-mode");
    });
    $("button#light").click(function() {
        $("body").addClass("light-mode");
    }
});