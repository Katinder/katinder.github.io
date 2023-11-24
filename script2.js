// const wrapper = document.querySelector(".wrapper")
// const question = dosument.querySelector(".question")
// const gif = document.querySelector(".gif")
// const yesBtn= document.querySelector(".yes-btn")
// const noBtn=document.querySelector(".no-btn")



const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",()=>{
    question.innerHTML="Yay, see you soonnnn!";
    gif.src="https://media.giphy.com/media/KZk2LkD8e1wgS3zteX/giphy.gif"
});

noBtn.addEventListener("mouseover",()=>{
    const nobtnrect=noBtn.getBoundingClientRect();
    const maxx=window.innerWidth-nobtnrect.width;
    const maxy=window.innerHeight-nobtnrect.height;

    const randomx=Math.floor(Math.random()*maxx);
    const randomy=Math.floor(Math.random()*maxy);

    noBtn.style.left=randomx+"px";
    noBtn.style.top=randomy+"px";
});

