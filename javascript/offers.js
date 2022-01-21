const nav_slide=()=>{
    const burgur = document.querySelector(".burgur");
    const cross=document.querySelector(".cross-mark");
    const nav=document.querySelector(".upper-target-ul");
    burgur.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    cross.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}
nav_slide();
let lastScrollTop=0;
var navbar=document.querySelector(".top-nav-bar");
var navbar2=document.querySelector(".bottom-nav-bar");
    window.addEventListener("scroll",function(){
        console.log("here");
        var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop)
        {
            navbar.style.top="-80px";
            navbar2.style.top="-20px";
        }
        else{
            navbar.style.top="0";
            navbar2.style.top="25px";
        }
        lastScrollTop=0;
    })

    const search_appear=()=>{
        const search_icon = document.querySelector(".fa-search");
        const search_bar=document.querySelector(".search-bar");
        search_icon.addEventListener('click',()=>{
            search_bar.classList.toggle('search-active');
        });
    }
search_appear();
//NON-RSPONSIVE CHECKBOX PART
const button_hotel=document.querySelector(".first-button").addEventListener("click",show_radio);
const radio_div=document.querySelector(".destination-radio-buttons");
const extra_option_box=document.querySelector(".load-more");
function show_radio(){
    radio_div.style.display="grid";
    extra_option_box.style.display="inline";
}

const button_one=document.querySelector(".button-one").addEventListener("click",hide_radio);
const button_two=document.querySelector(".button-two").addEventListener("click",hide_radio);
const button_three=document.querySelector(".button-three").addEventListener("click",hide_radio);
const button_four=document.querySelector(".button-four").addEventListener("click",hide_radio);
const button_five=document.querySelector(".button-five").addEventListener("click",hide_radio);

function hide_radio(){
    radio_div.style.display="none";
    extra_option_box.style.display="none";
}
let more_option_click=0;
const extra_option_click=document.querySelector(".loadMore")
const extra_option_div=document.querySelector(".extra_options")
extra_option_click.addEventListener('click',()=>{
    more_option_click++;
    if(more_option_click%2===1)
    {
        extra_option_click.innerHTML="- LOAD LESS OPTIONS"
    }
    else{
        extra_option_click.innerHTML="+ LOAD MORE OPTIONS"
    }
    extra_option_div.classList.toggle('extra_options');
});


// responsive check box

const button_1=document.querySelector(".res_hotel_button").addEventListener("click",show_check_box);
const check_box_res=document.querySelector(".responsive-check-buttons");
function show_check_box()
{
    check_box_res.style.display="inline";
}

const buttonone=document.querySelector(".buttonone").addEventListener("click",hide_check_box);
const buttontwo=document.querySelector(".buttontwo").addEventListener("click",hide_check_box);
const buttonthree=document.querySelector(".buttonthree").addEventListener("click",hide_check_box);
const buttonfour=document.querySelector(".buttonfour").addEventListener("click",hide_check_box);
const buttonfive=document.querySelector(".buttonfive").addEventListener("click",hide_check_box);
function hide_check_box(){
    check_box_res.style.display="none";
}
let responsiveClickCount=0;
const resposiveExtraClick=document.querySelector(".responsiveLoadMore");
const resposiveDiv=document.querySelector(".responsiveExtra_options");
resposiveExtraClick.addEventListener('click',()=>{
    responsiveClickCount++;
    if(responsiveClickCount%2!==0)
    {
        resposiveExtraClick.innerHTML="- LOAD LESS OPTIONS"
    }
    else{
        resposiveExtraClick.innerHTML="+ LOAD MORE OPTIONS"
    }
    resposiveDiv.classList.toggle('show_extra_option_responsive');
});



// OFFER SORTING _________________________________

// const ascending_click=document.querySelector(".ascending")
// ascending_click.addEventListener('click',sortInAsc)
// // addEventListener("click", sortInAsc);

// function sortInAsc(){
//     var shouldSwitch;
//     var all_grids=document.getElementsByClassName("all-grid");
//     var parentGrid=document.getElementsByClassName("offers-grid");
//     var switching=true;
//     while(switching)
//     {
//         switching=false;
//         var offer_price=document.getElementsByClassName("offers_price");
//         for(var i=0;i<offer_price.length;i++)
//         {
//             shouldSwitch = false;
//             if(+offer_price[i].innerHTML.split("<")[0].split("$")[1] > +offer_price[i+1].innerHTML.split("<")[0].split("$")[1]){
//                 shouldSwitch=true;
//                 break;
//             }
//         }
//         if(shouldSwitch)
//         {
//             parentGrid.parentNode.insertBefore(all_grids[i+1],all_grids[i])
//             switching = true;
//         }
//         // .innerHTML.split("<")[0].split("$")[1];
        
//     }

// }
