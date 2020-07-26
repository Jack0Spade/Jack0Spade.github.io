// One page scroll script

const page = document.querySelectorAll('.onepage');
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const btnThree = document.querySelector('.btn-three');
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const scrollTime = 500;


let index = 0;
let pastTime;

function checkIndex(index){
    btnOne.classList.remove('activated');
    btnTwo.classList.remove('activated');
    btnThree.classList.remove('activated');
    switch(index){
        case 0:
            btnOne.classList.toggle('activated');
            break;
        case 1:
            btnTwo.classList.toggle('activated');
            break;
        case 2:
            btnThree.classList.toggle('activated');
            break;
    }

}

btnOne.addEventListener('click', () =>{
    index = 0;
    page.forEach((onepage, i) => {
        if(i === index){
            onepage.scrollIntoView({behavior: 'smooth'});
        }
        checkIndex(index);
    })
});

btnTwo.addEventListener('click', () =>{
    index = 1;
    page.forEach((onepage, i) => {
        if(i === index){
            onepage.scrollIntoView({behavior: 'smooth'});
        }
        checkIndex(index);
    })
});

btnThree.addEventListener('click', () =>{
    index = 2;
    page.forEach((onepage, i) => {
        if(i === index){
            onepage.scrollIntoView({behavior: 'smooth'});
        }
        checkIndex(index);
    })
});

nextBtn.addEventListener('click', () =>{
    if(index > 1) return;
    index++;
    page.forEach((onepage,i) => {
        if(i === index){
            onepage.scrollIntoView({behavior: 'smooth'});
        }
        checkIndex(index);
    })
});

prevBtn.addEventListener('click', () =>{
    if(index < 1) return;
    index--;
    page.forEach((onepage, i) => {
        if(i === index){
            onepage.scrollIntoView({behavior: 'smooth'});
        }
        checkIndex(index);
    })
});

// Scroll Listener

window.addEventListener('wheel', (e) =>{
    const delta = e.deltaY
    const currentTime = new Date().getTime(); 

    if(currentTime - pastTime < scrollTime){
        e.preventDefault();
        return;
    }

    if(delta > 0 ){
        const clickBtn = new Event('click');
        nextBtn.dispatchEvent(clickBtn);
    }else if(delta < 0 ){
        const clickBtn = new Event('click');
        prevBtn.dispatchEvent(clickBtn);
    }
    pastTime = currentTime;

    checkIndex(index);


},{passive: false});


// Mobile Project Carousel { Definitely there is a way more efficient way of doing this but i just want to get it done }

const projBtn1 = document.querySelector("#proj-btn-1");
const projBtn2 = document.querySelector("#proj-btn-2");
const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');

function projCheck(index){
card1.classList.remove('active');
projBtn1.classList.remove('active')
card2.classList.remove('active');
projBtn2.classList.remove('active')

    switch(index){
        case 1:
            card1.classList.toggle('active');
            projBtn1.classList.toggle('active');
            break

        case 2:
            card2.classList.toggle('active');
            projBtn2.classList.toggle('active');
            break
    }
}

projBtn1.addEventListener('click', () =>{
    projCheck(1);
});

projBtn2.addEventListener('click', () =>{
    projCheck(2);
});