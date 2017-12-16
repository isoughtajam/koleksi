$.getJSON('./footer.json', function(json) {
  var linkList = [];
  //console.log(json);
  links = json["links"];
  for (var i=0; i < links.length; i++) {
    //console.log(links[i]["url"]);
    //console.log(links[i]["name"]);

    linkList.push("<a href='" + links[i]["url"] + "'>" + 
      links[i]["name"] + "</a>");
  }
  $('#footer-links').html(linkList.join(' | '));
});
