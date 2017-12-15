$.getJSON('./collection.json', function(json) {
  console.log(json);
  items = json["items"];
  for (var i = 0; i < items.length; i++) {
    console.log(json["items"][i]);
    let divId = json['items'][i]["id"];
    let figureId = json['items'][i]["id"] + '_figure';
    let imgId = json['items'][i]["id"] + '_img';
    let figcaptionId = json['items'][i]["id"] + '_figcaption';

    // div to wrap each item
    $('<div/>', {
      id: divId,
      class: 'artikal'
    }).appendTo('#main');

    // figure parent of each img and figurecaption
    $('<figure/>', {
      id: figureId,
      class: 'figi'
    }).appendTo('#' + divId);

    $('<img/>', {
      id: imgId,
      class: 'imaj',
      src: json['items'][i]["img"],
      rel: "external",
      text: json['items'][i]["name"],
      alt: json['items'][i]["name"],
      title: json['items'][i]["title"]
    }).appendTo('#' + figureId);

    $('<figcaption/>', {
      id: figcaptionId,
      class: 'tekst'
    }).appendTo('#' + figureId);

    $('<a/>', {
      class: 'link',
      href: json['items'][i]["url"],
      text: json['items'][i]["name"]
    }).appendTo('#' + figcaptionId);
  }
});