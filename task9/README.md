# Task 9: Generating a melody using MusicRNN


## Learning objective: 
By the end of Task 9, you will be able to generate a melody using magenta.js based on the seed melody of the user

## Script: 
Welcome back. We are now all set up to generate melodies using AI. By the end of this task, you will be able to take the seed notes given by the user and continue them.  That’s great!
Let’s dive into our code.
[debug using Chrome]

## Quiz Questions:
unquantized -- which means the notes are defined as starting and ending at a particular time interval, in seconds. The "Twinkle Twinkle Little Star" sequence above was an example of this.
quantized -- which means the notes are defined in terms of "steps"; the duration of the steps can be configured per quarter note. For example, in the unquantized sequence below, there are 4 steps per quarter note, and the duration is determined by the qpm (quarter notes per minute). Try adjusting the qpm value to hear the tempo change
