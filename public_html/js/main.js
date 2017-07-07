var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var doubleNotes = notes.concat(notes);

var scales = {
    major           : "Dur",
    naturalMinor    : "Moll (natürlich)",
    harmonicMinor   : "Moll (harmonisch)", 
    melodicMinor    : "Moll (melodisch)"
};

var steps = {
    major           : [2, 2 ,1, 2, 2, 2, 1],
    naturalMinor    : [2, 1 ,2, 2, 1, 2, 2],
    harmonicMinor   : [2, 1 ,2, 2, 1, 3, 1],
    melodicMinor    : [2, 1 ,2, 2, 2, 1, 1]
};

var notesArr = [];

function printHarmonies(){  
  let harmonyLegend = [ "T", "S", "D" ];
  let harmonyValues = [ notesArr[0], notesArr[3], notesArr[4] ];
  
  $.each(harmonyValues,function(index, value){
      harmonyValues[index] = "<span>" + value + "</span>";
      harmonyLegend[index] = "<span>" + harmonyLegend[index] + "</span>";      
  });
  console.log(harmonyLegend)
  
  $('#display-harmonies').html( harmonyLegend.join("") + "<br />" + harmonyValues.join("") );  
  
  
};

/**
 * 
 * @param {type} scale
 * @param {type} keynote
 * @returns {undefined}
 */
function printScale( scale, keynote ){
    let scaleIndex  = 0 + keynote;
    notesArr = [];
    notesArr.push(doubleNotes[ scaleIndex ]);tw 
   
    for ( i = 0; i < steps[ scale ].length; i++ ){
        scaleIndex = scaleIndex + steps[ scale ][i];
        notesArr.push( doubleNotes[ scaleIndex ] );
    };
    
    $('#display-notes').html( notesArr.join(" ") );
    $('#container-scale h3').html(doubleNotes[ keynote ] + " - " + scales[ scale]);    
    
}

/**
 * 
 * @returns {undefined}
 */
function selectChanged(){
    let useKeynote  = parseInt($( '#id-select-keynote' ).val());
    let useScale    = $( '#id-select-scale'  ).val();
    
    // print the scale, based on selection
    printScale(useScale, useKeynote);     
    printHarmonies();
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
    
    // initial call for setting the first scale
    // C Minor 
    selectChanged();
}

$(document).ready( init );