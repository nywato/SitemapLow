function loadtoc(t){function e(){if("entry"in t.feed){var e=t.feed.entry.length;numberfeed=e,ii=0;for(var o=0;e>o;o++){for(var s,r=t.feed.entry[o],a=r.title.$t,l=r.published.$t.substring(0,10),i=0;i<r.link.length;i++)if("alternate"==r.link[i].rel){s=r.link[i].href;break}for(var p="",i=0;i<r.link.length;i++)if("enclosure"==r.link[i].rel){p=r.link[i].href;break}var n="";if("category"in r)for(var i=0;i<r.category.length;i++){n=r.category[i].term;var c=n.lastIndexOf(";");-1!=c&&(n=n.substring(0,c)),postLabels[ii]=n,postTitle[ii]=a,postDate[ii]=l,postUrl[ii]=s,postMp3[ii]=p,10>o?postBaru[ii]=!0:postBaru[ii]=!1,ii+=1}}}}e(),sortBy="titleasc",sortPosts(sortBy),sortlabel(),tocLoaded=!0,displayToc2(),document.write('</br><a href="http://harmansh.blogspot.com/" style="font-size: 10px; text-decoration:none; color: #616469;">Sitemap</a>')}function filterPosts(t){scroll(0,0),postFilter=t,displayToc(postFilter)}function allPosts(){sortlabel(),postFilter="",displayToc(postFilter)}function sortPosts(t){function e(t,e){var o=postTitle[t];postTitle[t]=postTitle[e],postTitle[e]=o;var o=postDate[t];postDate[t]=postDate[e],postDate[e]=o;var o=postUrl[t];postUrl[t]=postUrl[e],postUrl[e]=o;var o=postLabels[t];postLabels[t]=postLabels[e],postLabels[e]=o;var o=postMp3[t];postMp3[t]=postMp3[e],postMp3[e]=o;var o=postBaru[t];postBaru[t]=postBaru[e],postBaru[e]=o}for(var o=0;o<postTitle.length-1;o++)for(var s=o+1;s<postTitle.length;s++)"titleasc"==t&&postTitle[o]>postTitle[s]&&e(o,s),"titledesc"==t&&postTitle[o]<postTitle[s]&&e(o,s),"dateoldest"==t&&postDate[o]>postDate[s]&&e(o,s),"datenewest"==t&&postDate[o]<postDate[s]&&e(o,s),"orderlabel"==t&&postLabels[o]>postLabels[s]&&e(o,s)}function sortlabel(){sortBy="orderlabel",sortPosts(sortBy);for(var t=0,e=0;e<postTitle.length;){temp1=postLabels[e],firsti=t;do t+=1;while(postLabels[t]==temp1);if(e=t,sortPosts2(firsti,t),e>postTitle.length)break}}function sortPosts2(t,e){function o(t,e){var o=postTitle[t];postTitle[t]=postTitle[e],postTitle[e]=o;var o=postDate[t];postDate[t]=postDate[e],postDate[e]=o;var o=postUrl[t];postUrl[t]=postUrl[e],postUrl[e]=o;var o=postLabels[t];postLabels[t]=postLabels[e],postLabels[e]=o;var o=postMp3[t];postMp3[t]=postMp3[e],postMp3[e]=o;var o=postBaru[t];postBaru[t]=postBaru[e],postBaru[e]=o}for(var s=t;e-1>s;s++)for(var r=s+1;e>r;r++)postTitle[s]>postTitle[r]&&o(s,r)}function displayToc(t){var e=0,o="",s="Judul Artikel",r="Klik untuk sortir berdasarkan judul",a="Tanggal",l="Klik untuk Sortir bedasarkan tanggal",i="Kategori",p="";"titleasc"==sortBy&&(r+=" (descending)",l+=" (newest first)"),"titledesc"==sortBy&&(r+=" (ascending)",l+=" (newest first)"),"dateoldest"==sortBy&&(r+=" (ascending)",l+=" (newest first)"),"datenewest"==sortBy&&(r+=" (ascending)",l+=" (oldest first)"),""!=postFilter&&(p="Klik untuk menampilkan semua"),o+="<table>",o+="<tr>",o+='<td class="toc-header-col1">',o+='<a href="javascript:toggleTitleSort();" title="'+r+'">'+s+"</a>",o+="</td>",o+='<td class="toc-header-col2">',o+='<a href="javascript:toggleDateSort();" title="'+l+'">'+a+"</a>",o+="</td>",o+='<td class="toc-header-col3">',o+='<a href="javascript:allPosts();" title="'+p+'">'+i+"</a>",o+="</td>",o+='<td class="toc-header-col4">',o+="Download MP3",o+="</td>",o+="</tr>";for(var n=0;n<postTitle.length;n++)""==t?(o+='<tr><td class="toc-entry-col1"><a href="'+postUrl[n]+'">'+postTitle[n]+'</a></td><td class="toc-entry-col2">'+postDate[n]+'</td><td class="toc-entry-col3">'+postLabels[n]+'</td><td class="toc-entry-col4"><a href="'+postMp3[n]+'">Download</a></td></tr>',e++):(z=postLabels[n].lastIndexOf(t),-1!=z&&(o+='<tr><td class="toc-entry-col1"><a href="'+postUrl[n]+'">'+postTitle[n]+'</a></td><td class="toc-entry-col2">'+postDate[n]+'</td><td class="toc-entry-col3">'+postLabels[n]+'</td><td class="toc-entry-col4"><a href="'+postMp3[n]+'">Download</a></td></tr>',e++));if(o+="</table>",e==postTitle.length)var c='<span class="toc-note">Menampilkan Semua '+postTitle.length+" Artikel<br/></span>";else{var c='<span class="toc-note">Menampilkan '+e+" artikel dengan kategori '";c+=postFilter+"' dari "+postTitle.length+" Total Artikel<br/></span>"}var d=document.getElementById("toc");d.innerHTML=c+o}function displayToc2(){for(var t=0,e=0;e<postTitle.length;){temp1=postLabels[e],document.write("<p/>"),document.write('<p><a href="/search/label/'+temp1+'">'+temp1+"</a></p><ol>"),firsti=t;do document.write("<li>"),document.write('<a href="'+postUrl[t]+'">'+postTitle[t]+"</a>"),1==postBaru[t]&&document.write(' - <strong><em><span style="color: rgb(255, 0, 0);">New !!</span> </em></strong>'),document.write("</li>"),t+=1;while(postLabels[t]==temp1);if(e=t,document.write("</ol>"),sortPosts2(firsti,t),e>postTitle.length)break}}function toggleTitleSort(){sortBy="titleasc"==sortBy?"titledesc":"titleasc",sortPosts(sortBy),displayToc(postFilter)}function toggleDateSort(){sortBy="datenewest"==sortBy?"dateoldest":"datenewest",sortPosts(sortBy),displayToc(postFilter)}function showToc(){if(tocLoaded){displayToc(postFilter);document.getElementById("toclink")}else alert("Just wait... TOC is loading")}function hideToc(){var t=document.getElementById("toc");t.innerHTML="";var e=document.getElementById("toclink");e.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">?? Menampilkan Daftar Isi</a> <img src="http://radiorodja.googlepages.com/new_1.gif"/>'}function looptemp2(){for(var t=0;numberfeed>t;t++)document.write("<br>"),document.write('Post Link    : <a href="'+postUrl[t]+'">'+postTitle[t]+"</a><br>"),document.write('Download mp3  : <a href="'+postMp3[t]+'">'+postTitle[t]+"</a><br>"),document.write("<br>")}var postTitle=new Array,postUrl=new Array,postMp3=new Array,postDate=new Array,postLabels=new Array,postBaru=new Array,sortBy="titleasc",tocLoaded=!1,numChars=250,postFilter="",numberfeed=0;