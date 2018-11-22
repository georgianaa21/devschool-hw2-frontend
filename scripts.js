// play song by clicking header image
const imageHeader = document.getElementById("headerImg");
const audioSong = document.getElementById("song");
var playing = false;

imageHeader.addEventListener('click', function(e) {
    if(playing === true) {
        audioSong.pause();
        playing = false;
    }
    else {
        audioSong.play();
        playing = true;
    }
});

//change sections background
window.addEventListener('scroll', scrollPosition);

function scrollPosition() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        var height = window.innerHeight;
        var rect = section.getBoundingClientRect();
        if(rect.top < height/2 || rect.bottom > height/2) {
            section.style.background = '#FFFFFF';
        }
        if(rect.top > height/2 || rect.bottom < height/2) {
            section.style.background = 'initial';
        }

    })
}

//add button in aside element; when clicked inserts article

const main = document.querySelector('main');

var btn1 = document.createElement('BUTTON');
var txt1 = document.createTextNode('Click me');
btn1.appendChild(txt1);
const aside = document.querySelector('aside');
aside.insertBefore(btn1, aside.firstChild);

var newArticle = document.createElement('article');
var btn2 = document.createElement('BUTTON');
var txt2 = document.createTextNode('Insert section');
var insertedSection = document.createElement('section');
newArticle.appendChild(btn2);
btn2.appendChild(txt2);




btn1.addEventListener('click', function(e) {
    main.prepend(newArticle);
});

btn2.addEventListener('click', function(e) {
    // var txt3 = document.createTextNode(makeText);
    insertedSection.innerHTML = makeText();
    newArticle.prepend(insertedSection);
})


function makeText() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < 400; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }