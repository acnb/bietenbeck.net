// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
$(document).ready(function(){
coded = "udfDBuD@AHQDQfAQu6.fQD"
key = "Lp6TnEDbx2XeJ7lUhjwiv9ZmPofIaACcVQ5FSYqsMHk0Rgtd34BKOu1GNW8yzr"
shift=coded.length
link=""
for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
$('a[href^="mailto"]').attr("href", 'mailto:'+link)
})