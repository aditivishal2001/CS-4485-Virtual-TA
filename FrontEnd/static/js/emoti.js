$('#iccontent').keypress(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});
const icons = ["&#8805", "&Omega;", "&#8804;", "	&pi;","ln(x)","log<sub>x</sub>","e<sup>x</sup>", "n<sup>x</sup>","x<sup>2</sup>", "&theta;","&sum;"]
icons.map((item,key) =>{
  $('#myicons').append(`<a id="iconse" onClick="addicon(this)" class='iconse'>${item}</a>`)

})

const addicon = (e) => {
  if(e.innerHTML.substring(0,1) === 'e'){

      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,1) + '<sup contenteditable="true">x</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,1) === 'x'){
      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup>2</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,1) === 'n'){
      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup contenteditable="true">x</sup></span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,2) === 'ln'){
      $('div.input').append('<span style="font-size: 25px;padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,2) + '(<span contenteditable="true">x</span>)</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }

  else if(e.innerHTML.substring(0,3) === 'log'){
      $('div.input').append('<span style="font-size: 25px;padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,3) + '<sub contenteditable="true">x</sub>(<span contenteditable="true">x</span>)</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,7) === '&Omega;'){

      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,7) + '</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,7) === '&theta;'){

      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,7) + '</span><span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML.substring(0,5) === '∑'){

      console.log(e.innerHTML.substring(0,5))
      $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,5) + '</span><sub style="height: 15px; margin-top: -7px;margin-left: -11px;" contenteditable="true">n</sub><sup style="height: 16px;margin-top: 30px;margin-left: -15px;" contenteditable="true">i=1</sup> <span style="font-size: 25px;">( <span  contenteditable="true">x</span> )</span> <span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else if(e.innerHTML === '≤' || e.innerHTML === '≥'){

      $('div.input').append('<span style="font-size: 25px; "  contenteditable="true"> x </span> <span style="font-size: 25px; margin-top:-5px;margin-right:5px; margin-left:5px;" id="iccontent" class="input otherinput">'+ e.innerHTML + '</span><span style="font-size: 25px; "  contenteditable="true"> x </span> <span id="iccontent" class="input" contenteditable="true"> </span>')
  }
  else{

    $('div.input').append('<span style="font-size: 25px;" id="iccontent" class="input otherinput"> '+ e.innerHTML + ' </span><span id="iccontent" class="input" contenteditable="true"> </span>')

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
