// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
$(document).ready(function(){
coded = "QMw@wWbxbawb2y.abx"
key = "kxuSliU2pE8Z7VOYbmyn0gQWIAvBDNd1R9wX5azsCJ6GqtF4rLPcHK3MjofheT"
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