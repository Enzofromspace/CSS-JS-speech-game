import {isValidColor} from './colors';
function logWords(results){
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({results}){
  logWords(results); 
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  // lowercase everything
  let color = words.toLowerCase();
  // take out spaces with REGEX
  color = color.replace(/\s/g, '');
  // check that color in available in map
  if(!isValidColor(color)) return;
  // if yes, load UI
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log('valid color');
  // change BG color
  document.body.style.backgroundColor = color;
}