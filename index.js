import {handleResult} from './handlers';
import {colorsByLength} from './colors';

const colorsElement = document.querySelector('.colors');

function displayColors(colors){
  return colors.map(color => 
     `<span class="color">${color}</span>`
  );
}

window.SpeechRecognition = window.SpeechRecogition || window.webkitSpeechRecognition;

function start(){
//check browswer support
  if(!('SpeechRecognition' in window)){
    console.log('browser does not support app');
    return;
  }
  // this runs if browser supports speech recognition
  console.log('works');
  // regonize the speech
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

//start();
colorsElement.innerHTML = displayColors(colorsByLength);