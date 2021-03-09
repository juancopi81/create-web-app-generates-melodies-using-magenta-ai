# Task 3: Creating a Staff using EasyScore from VexFlow

## Learning objective: 
By the end of Task 2, you will be able to create a form so that users can add the seed notes of the melody the AI will generate.

## Script: 
Welcome back. In this task; we will add a staff using Vexflow where users can see, hear and edit the seed notes of the melody. Specifically, we are going to use EasyScore: EasyScore is the fastest way to get started with VexFlow. You can use it to generate all the basic VexFlow elements necessary for a sequence of musical notation, and extend them with the standard VexFlow API. The EasyScore language supports notes, accidentals, beams, dots, tuplets, and other common notational elements.
To get VexFlow we’ll be using a CDN. 
Please open a new tab in your browser and go to https://cdnjs.com/ now search for Vexflow. We are going to use this debug version. So copy this line and paste it to the top of our index.html file.
Let’s now add a div where our staff inside of which our staff is going to live.
Now turn to your script.js file. First, let’s add global variable for VexFlow
[add variable]
Now, we will also create a global variable to keep track of the string used to represent our notes, no worries, you’ll see later how this is useful. 
Each time the page is loaded we are going to create a new Staff. So, after DOMC.. add a new function to create a new staff

Let’s create this funcion:
[create empty notes and renderNotes] - [remove staff if any] - [factory, score, system] - [system addstave] - [system draw] - [system render notes]

## Quiz Questions:
What is EasyScore?
*EasyScore is the fastest and easiest way to get started with VexFlow. It can be used to generate all the basic VexFlow elements necessary for a sequence of musical notation  such as notes, accidentals, beams, dots, tuplets, and other common notational elements.
EasyScore is the fastest and easiest way to get started with VexFlow. It can be used to generate notes but not accidentals.
 EasyScore is the fastest and easiest way to get started with VexFlow. It can be used to generate the sound of a sequence of notes.
None of the above
How can we represent a quarter note with a pitch of C4 using EasyScore:
{pitch: ‘“C”, octave: “4”, rest: true}
{note: “C4”,  rest: false}
“C4”
{note: “C4”, rest: true}
