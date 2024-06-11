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
    const testInterpolate1 = [
        // A quarter-note C.
        new StaveNote({ keys: ["c/4"], duration: "q" })
        ];
    res.render('main', {testInterpolate1: testInterpolate1});

    console.log(testInterpolate1);
    });


// app.get('/display-a-note', (req, res) => {
//     res.render('main', {    notes: [
//         { keys: ["c/4"], duration: "q" }
//       ]});
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});