window.addEventListener("scroll",function(){let e=document.querySelector("header");window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".fade-in");e.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)"});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)",t.unobserve(e.target))})},{threshold:.1});e.forEach(e=>{t.observe(e)})});