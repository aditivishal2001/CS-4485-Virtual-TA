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
  console.log(e.innerHTML)
  if(e.innerHTML.substring(0,1) === 'e'){

      $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,1) + '<sup contenteditable="true">x</sup></span>')
  }
  else if(e.innerHTML.substring(0,1) === 'x'){
      $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup>2</sup></span>')
  }
  else if(e.innerHTML.substring(0,1) === 'n'){
      $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ '<span contenteditable="true">' +e.innerHTML.substring(0,1) + '</span><sup contenteditable="true">x</sup></span>')
  }
  else if(e.innerHTML.substring(0,2) === 'ln'){
      $('div.input').html('<span style="font-size: 25px;padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,2) + '(<span contenteditable="true">x</span>)</span>')
  }

  else if(e.innerHTML.substring(0,3) === 'log'){
      $('div.input').html('<span style="font-size: 25px;padding: 7px 0px 6px 0px!important;" id="iccontent" class="input otherinput">'+e.innerHTML.substring(0,3) + '<sub contenteditable="true">x</sub>(<span contenteditable="true">x</span>)</span>')
  }
  else if(e.innerHTML.substring(0,7) === '&Omega;'){

      $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,7) + '</span>')
  }
  else if(e.innerHTML.substring(0,7) === '&theta;'){

      $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput">'+ e.innerHTML.substring(0,7) + '</span>')
  }
  else if(e.innerHTML.substring(0,5) === '∑'){
      console.log(e.innerHTML.substring(0,5))
      $('div.input').html('<span id="iccontent" ><span style="position:relative"><span style="font-size: 25px;" class="input otherinput">'+ e.innerHTML.substring(0,5) + '</span><sub style="height: 15px;margin-left: -14px;position:absolute;top: -20px;" contenteditable="true">x</sub><sup style="height: 16px;margin-top: 38px;margin-left: -14px;position:absolute;bottom: -14px;" contenteditable="true">i=0</sup> <span style="font-size: 25px;">( <span  contenteditable="true">n</span>i+<span  contenteditable="true">n</span> )</span></span></span>')
  }
  else{

    $('div.input').html('<span style="font-size: 25px;" id="iccontent" class="input otherinput"> '+ e.innerHTML + ' </span>')

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
