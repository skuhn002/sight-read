const e = require('express');
const express = require('express');
const Vex = require('vexflow');
const { Renderer, Stave, StaveNote, Voice, Formatter } = Vex.Flow;

const app = express();
const port = 8080;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to render the main file
app.get('/', (req, res) => {
    //Stopped here trying to get the note to display by passing in the StaveNote object to interpolate it in main.ejs
    res.redirect('/display-a-note/treble');
    });


app.get('/display-a-note/treble', (req, res) => {
    const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const octaves = [3, 4, 5];
    const octave = octaves[Math.floor(Math.random() * octaves.length)];
    const letterNote = notes[Math.floor(Math.random() * notes.length)];

    const note = '"' + letterNote + '/' + octave + '"';
    res.render('main', {note: note, cleff: 'treble'});
});

app.get('/display-a-note/bass', (req, res) => {
    const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const octaves = [3, 4, 5];
    const octave = octaves[Math.floor(Math.random() * octaves.length)];
    const letterNote = notes[Math.floor(Math.random() * notes.length)];

    const note = '"' + letterNote + '/' + octave + '"';
    res.render('main', {note: note, cleff: 'bass'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});