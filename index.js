import {handleResult} from './handlers.js';
import {colorsByLength} from './colors.js';

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

start();