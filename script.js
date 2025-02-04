var tl = gsap.timeline()



tl.from(".logo", {
    y:-50,
    duration:0.5,
    delay:0.33,
    opacity:0
})

const navLinks = document.querySelectorAll('nav a');
const navbar = document.querySelector(".navbar")
const menuIcon = document.getElementById('menu-icon')

navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navLinks.forEach(e=>{e.classList.remove('active')})
        this.classList.add('active')
    })
})

menuIcon.addEventListener('click',function(){

    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle('active')
})


// Skill Words Animation
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = '1';

let changeText = ()=> {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = 'letter out';
        },i * 80);
    });
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = 'letter behind';
        setTimeout(()=> {
            letter.className = 'letter in';
        },300, i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (e) {
    const pattern = /^[0-9]{0,10}$/;
    if (!pattern.test(phoneInput.value)) {
      phoneInput.value = phoneInput.value.slice(0, -1); 
    }
  });


changeText();
setInterval(changeText,2000)






