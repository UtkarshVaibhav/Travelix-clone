
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
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop)
            {
                navbar.style.top="-80px";
                navbar2.style.top="-10px";
            }
            else{
                navbar.style.top="0";
                navbar2.style.top="25px";
            }
            lastScrollTop=0;
        })

        const search_appear=()=>{
            const search_icon = document.querySelector(".fa-search");
            // const cross=document.querySelector(".cross-mark");
            const search_bar=document.querySelector(".search-bar");
            search_icon.addEventListener('click',()=>{
                search_bar.classList.toggle('search-active');
            });
            // cross.addEventListener('click',()=>{
            //     nav.classList.toggle('nav-active');
            // });
        }
        search_appear();
    let flag=0;
    function controller(x){
        flag=flag+x;
        slide_show(flag)
        let slides= document.getElementsByClassName('slide');
    }
    function function_number(x){
        let slides= document.getElementsByClassName('slide');
        for(let i of slides){
            i.style.display="none";
        }
        slides[x-1].style.display = "block";
    }
    function slide_show(num){
        let slides= document.getElementsByClassName('slide');
        if(num===slides.length)
        {
            num=0;
            flag=0;
        }
        
        else if(num<0)
        {
            flag=slides.length-1;
            num=slides.length-1;
        }

        for(let i of slides){
            i.style.display="none";
        }
        slides[num].style.display = "block";
        // slides[num].style.transform = "translateX(0%)";
        // slides[num].style.transition = "6s";
    }
    slide_show(flag);
