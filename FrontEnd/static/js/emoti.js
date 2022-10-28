$('#iccontent').keypress(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});
const icons = ["&#8805", "&#8804;", "	&pi;","ln(x)","log<sub>x</sub>","e<sup>x</sup>", "n<sup>x</sup>","x<sup>2</sup>"]
icons.map((item,key) =>{
  $('#myicons').append(`<a id="iconse" onClick="addicon(this)" class='iconse'>${item}</a>`)

})

const addicon = (e) => {
  if(e.innerHTML.substring(0,1) === 'e'){
    console.log(e.innerHTML.substring(0,1) + '<sup contenteditable="true">x</sup>');
      $('div.input').append('<span id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,1) + '<sup contenteditable="true">x</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,1) === 'x'){
      $('div.input').append('<span id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup>2</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,1) === 'n'){
      $('div.input').append('<span id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup contenteditable="true">x</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,2) === 'ln'){
      $('div.input').append('<span style="padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,2) + '(<span contenteditable="true">x</span>)</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }

  else if(e.innerHTML.substring(0,3) === 'log'){
      $('div.input').append('<span style="padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,3) + '<sub contenteditable="true">x</sub>(<span contenteditable="true">x</span>)</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else{
    $('div.input').append('<span id="iccontent" class="input otherinput"> '+ e.innerHTML + ' </span><span id="iccontent" class="input" contenteditable="true"> </span>')

  }

  $('#symbols').addClass('remove')

}

$( "#iconbutton" ).click(function() {
    if($('#symbols').hasClass('remove')){
      $('#symbols').removeClass('remove')
    }else{
    $('#symbols').addClass('remove')
    }
});
