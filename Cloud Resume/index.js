/*
$(document).ready(function(e){
    $win=$(window);
    $navbar=$('#header');
    $toggle=$('.toggle-button');
    var width =$navbar.width();
    toggle_onclick($win,$navbar,width);
    
    $win.resize(function(){
        toggle_onclick($win,$navbar,width);
    });
    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })
});

function toogle_onclick($win,$navbar,width){
    if ($win.width()<=768){
        $navbar.css({left:`-${width}px`});
    }else {
        $navbar.css({left:'0px'});
    }
}

var typed = new Typed('#typed',{
    strings: [
        'Welcome to my website',
    ]
}) */
const counter=document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://75s32juwxlqygxcxuovtakydoy0qztio.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML=`Views: ${data}`;
}
updateCounter();