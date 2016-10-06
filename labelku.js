// ----------------------------------------
// SHOW RECENT LABEL BY SC COMMUNITY
// ----------------------------------------
// Design : Diaz
// Date   : 30-05-2013
// URL    : diaz-zahran-asyari.blogspot.com
// ----------------------------------------

function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    document.write(posttitle);}
    if (standardstyling) document.write('</li>');
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;">Widget by <a href="http://diaz-zahran-asyari.blogspot.com/2013/05/Cara-Membuat-Daftar-Isi-Otomatis-Pada-Label-Tertentu.html" target="_blank" title="Cara Membuat Daftar Isi Otomatis Pada Label Tertentu ">Diaz Zahran Asyari</a></div>');
}
