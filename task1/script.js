/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// When document is ready
document.addEventListener('DOMContentLoaded', () => {
  
  // When the input form is submitted
  document.querySelector('#input-form').onsubmit = (e) => {
    
    // Prevent the form to be sent
    e.preventDefault();
    
    // Retrive the information sent by the user
    
    let inputPitch = document.getElementById('pitch').value;
    let inputAccidental = document.getElementById('accidental').value;
    let inputOctave = document.getElementById('octave').value;
  }
})