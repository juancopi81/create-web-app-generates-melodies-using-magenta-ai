/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Variable to keep track of notes
let notes = [];

// Variable to keep track of render notes
const notesEmptyStaff = "B4/4/r, B4/4/r, B4/4/r, B4/4/r";
let renderNotes;

// Vexflow variable
let VF = Vex.Flow;

// When document is ready
document.addEventListener('DOMContentLoaded', () => {
  
  // Create a new staff
  createStaff(notesEmptyStaff);
  
  // Disable some options based on user's selection
  document.getElementById('duration').addEventListener('change', function(obj) {
    
    // Retrive the information sent by the user
    let inputPitch = document.getElementById('pitch');
    let inputAccidental = document.getElementById('accidental');
    let inputOctave = document.getElementById('octave');
    let inputDot = document.getElementById('dotted');
    
    // Disable pitch if is rest
    inputPitch.disabled = (this.value.includes('r'));
    inputAccidental.disabled = (this.value.includes('r'));
    inputOctave.disabled = (this.value.includes('r'));
    
    // Disabel dot if is 16 or 1 note
    inputDot.disabled = (this.value.includes('16') || this.value.includes('1'));
    
  });
  
  // When the input form is submitted
  document.querySelector('#input-form').onsubmit = (e) => {
    
    // Prevent the form to be sent
    e.preventDefault();
    
    // Retrive the information sent by the user
    let inputDuration = document.getElementById('duration').value;
    let inputPitch = document.getElementById('pitch').value;
    let inputAccidental = document.getElementById('accidental').value;
    let inputOctave = document.getElementById('octave').value;
    
    // Concatenate
    let inputNote = inputPitch + inputAccidental + inputOctave
    
    // Check if note is dotted
    let isDotted = false;
    
    if (document.getElementById('dotted').checked == true) {
      isDotted = true;
      inputDuration += '.';
    }
    
    // Create note
    let note = {'duration': inputDuration, 'pitch': inputNote, 'isDotted': isDotted};

    // Add note to the array
    notes = [...notes, note];
  }
})

function createStaff(renderNotes) {
  
  // Remove any old staff
  const staff = document.getElementById('staff');
  
  while(staff.hasChildNodes()) {
    staff.removeChild(staff.lastChild);
  }
  
  // Create an SVG renderer and attach it to the DIV element named 'staff"
  var vf = new VF.Factory({renderer: {elementId: 'staff'}});
  var score = vf.EasyScore();
  var system = vf.System();
  
  // Add a staff and voices to our system
  system.addStave({
    voices: [score.voice(score.notes(renderNotes))]
  }).addClef('treble').addTimeSignature('4/4');
  
  vf.draw();
}