//Store elements in variables
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.splash-logo');

//Force DOM
window.addEventListener('DOMContentLoaded', ()=>{
    //Timeout function to make the add the active class
    setTimeout(()=>{
        //map through spans
        logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                //Add active to every span
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logospan.forEach((span, idx)=>{

                setTimeout(()=>{
                    //Remove active from every span
                    span.classList.remove('active');
                    //Add fade to every span
                    span.classList.add('fade');
                }, (idx + 1) * 50)
                
            })
        }, 2000);

        //The Spalsh screen slides up
        setTimeout(()=>{
            intro.style.top= '-100vh';
        }, 2300)

    })
})