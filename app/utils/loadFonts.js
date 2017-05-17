/*
 *    - FontFaceObserver tracks to see if the fonts have been loaded in the browser and adds 'fonts--loaded' class to html tag.
 *    - We can then apply the font-family and styles to the 'fonts--loaded' class in CSS
 *
 */

var FontFaceObserver = require('fontfaceobserver');

function loadFonts() {

  var fontA = new FontFaceObserver('Source Sans Pro', {
    style: 'normal',
    weight: 400
  });
  var fontB = new FontFaceObserver('Source Sans Pro', {
    style: 'italic',
    weight: 400
  });
  var fontC = new FontFaceObserver('Source Sans Pro', {
    style: 'normal',
    weight: 700
  });

  if ( sessionStorage.foutFontsLoaded ) {
    document.documentElement.className += " font--loaded";
    return;
  }
  else {
    Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function() {
      document.documentElement.className += ' fonts-loaded';

      sessionStorage.foutFontsLoaded = true;
    });
  }
}

export default loadFonts;
