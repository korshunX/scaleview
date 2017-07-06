var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var doubleNotes = notes.concat(notes);

var scales = {
    major           : "Dur",
    naturalMinor    : "natürliches Moll",
    harmonicMinor   : "harmonisches Moll", 
    melodicMinor    : "melodisches Moll"
};

var steps = {
    major           : [2, 2 ,1, 2, 2, 2, 1],
    naturalMinor    : [2, 1 ,2, 2, 1, 2, 2],
    harmonicMinor   : [2, 1 ,2, 2, 1, 3, 1],
    melodicMinor    : [2, 1 ,2, 2, 2, 1, 1]
};

function selectChanged(){
    let useKeynote  = parseInt($( '#id-select-keynote' ).val());
    let useScale    = $( '#id-select-scale'  ).val();
    console.log( useKeynote );
    console.log( steps[useScale] );
    
    var scaleIndex  = 0 + useKeynote;
    var notesString = doubleNotes[ scaleIndex ];
    
    for ( i = 0; i < steps[useScale].length; i++ ){
        scaleIndex = scaleIndex + steps[useScale][i];        
        notesString += " , " + doubleNotes[ scaleIndex ];
        
        // $('#display-notes').html( $('#display-notes').html() + doubleNotes[ steps[useScale] ] )
    };
    console.log(notesString)
}

/**
 * init
 * 
 * app initialisation routines and -calls
 * 
 * @returns {undefined}
 */
function init(){
    // init dropdown field
    // $('#id-select-keynote').
            
    // write the keynote selection box
    $.each( notes, function( i, val ){
        let opt = $('<option></option>')
                .html(val)
                .attr("value",i);
        $('#id-select-keynote').append( opt );
    });
    
    // write the scales selection box
    $.each( scales, function( base, val ){
        let opt = $('<option></option>')
                .html(val)
                .attr("value",base);
        $('#id-select-scale').append( opt );
    });
}

$(document).ready( init );