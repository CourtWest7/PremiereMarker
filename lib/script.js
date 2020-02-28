$.noConflict();
jQuery(function(){
var useCSV = false;
var fieldNum = 1;

//todo: Add a section to reorder comments
//todo: create a preference panel/popup 
//todo: maybe create a tab to store channels. 
//todo: maybe make dropdowns better by adding jquery. 

  jQuery('#prefTxt').click(function(){
    //open up the preference window
    alert("preferences");
  });


 
  jQuery('#fixTxt').click(function () {
     //run function getUser with the dropdown as a parameter
     var passNumber = jQuery('#passN').val();
     jQuery('#status').text(passNumber);
  });


  // jQuery('#status').click(function(){
  //   jQuery('#status').text("You clicked me")
  // })
  
/**************************************************************************************************************** */
/**************************************************************************************************************** */
/**************************************************************************************************************** */
/*************************************************MARKER SAVING************************************************** */
/**************************************************************************************************************** */


  //Create a function in jsx and use it.
  //TODO
  jQuery('#copyCutTxt').click(function () {
    //call copyMarker()
    alert("Copy Or Cut");
  });
  
  //Create a function in jsx and use it
  //TODO
  jQuery('#cutTxt').click(function () {
    //call cutMarker();
    alert("Cut");
  });

  //Create a function on jsx and use it 
  //TODO
  jQuery('#pasteText').click(function () {
    //call pasteMarker();
    alert("Paste Text");
  });
  
  //Create a function in jsx and use it
  //TODO
  jQuery('#saveTxt').click(function () {
    //call export
    alert("Save Selection");
  });
  
  //Create a function in jsx and use it
  //TODO
  jQuery('#revertTxt').click(function () {
    alert("Revert Selection");
  });
  

/**************************************************************************************************************** */
/**************************************************************************************************************** */
/**************************************************************************************************************** */
/*************************************************PANEL OPTIONS************************************************** */
/**************************************************************************************************************** */


//Done
  jQuery('#markerColors').click(function () {
      //Set class to option--active when clicked
  /*Set all these to option--inactive
  #addWords
  #exportImport
  #findAndReplace 
  #deleteMarkers

  Delete the panel class panel--inactive and add class of panel--active of
  #marker-colors-panel

  add class panel--inactive and delete class of panel--active of
  #add-words-panel
  #export-import-panel 
  #find-and-replace-panel 
  #delete-markers-panel
  */
    chckClass(this, 'option--active', false, true);
    chckClass(this, 'option--inactive', true, false);
    chckClass('#addWords', 'option--active', true, false);
    chckClass('#addWords', 'option--inactive', false, true);
    chckClass('#exportImport', 'option--active', true, false);
    chckClass('#exportImport', 'option--inactive', false, true);
    chckClass('#findAndReplace', 'option--active', true, false);
    chckClass('#findAndReplace', 'option--inactive', false, true);
    chckClass('#deleteMarkers', 'option--active', true, false);
    chckClass('#deleteMarkers', 'option--inactive', false, true);
    
    //hide and show panels 
    chckClass('#marker-colors-panel', 'panel--inactive', true, false);
    chckClass('#add-words-panel', 'panel--inactive', false, true);
    chckClass('#export-import-panel', 'panel--inactive', false, true);
    chckClass('#find-and-replace-panel', 'panel--inactive', false, true);
    chckClass('#delete-markers-panel', 'panel--inactive', false, true);
  });
  
//Done  
  jQuery('#addWords').click(function () {
    chckClass(this, 'option--active', false, true);
    chckClass(this, 'option--inactive', true, false);
    chckClass('#markerColors', 'option--active', true, false);
    chckClass('#markerColors', 'option--inactive', false, true);
    chckClass('#exportImport', 'option--active', true, false);
    chckClass('#exportImport', 'option--inactive', false, true);
    chckClass('#findAndReplace', 'option--active', true, false);
    chckClass('#findAndReplace', 'option--inactive', false, true);
    chckClass('#deleteMarkers', 'option--active', true, false);
    chckClass('#deleteMarkers', 'option--inactive', false, true);  

    //hide and show panels 
    chckClass('#add-words-panel', 'panel--inactive', true, false);
    chckClass('#marker-colors-panel', 'panel--inactive', false, true);
    chckClass('#export-import-panel', 'panel--inactive', false, true);
    chckClass('#find-and-replace-panel', 'panel--inactive', false, true);
    chckClass('#delete-markers-panel', 'panel--inactive', false, true);
  });
  
//Done  
  jQuery('#exportImport').click(function () {
    chckClass(this, 'option--active', false, true);
    chckClass(this, 'option--inactive', true, false);
    chckClass('#markerColors', 'option--active', true, false);
    chckClass('#markerColors', 'option--inactive', false, true);
    chckClass('#addWords', 'option--active', true, false);
    chckClass('#addWords', 'option--inactive', false, true);
    chckClass('#findAndReplace', 'option--active', true, false);
    chckClass('#findAndReplace', 'option--inactive', false, true);
    chckClass('#deleteMarkers', 'option--active', true, false);
    chckClass('#deleteMarkers', 'option--inactive', false, true);

    //hide and show panels 
    chckClass('#export-import-panel', 'panel--inactive', true, false);
    chckClass('#marker-colors-panel', 'panel--inactive', false, true);
    chckClass('#add-words-panel', 'panel--inactive', false, true);
    chckClass('#find-and-replace-panel', 'panel--inactive', false, true);
    chckClass('#delete-markers-panel', 'panel--inactive', false, true);    
  });
  
//Done  
  jQuery('#findAndReplace').click(function () {
    chckClass(this, 'option--active', false, true);
    chckClass(this, 'option--inactive', true, false);
    chckClass('#markerColors', 'option--active', true, false);
    chckClass('#markerColors', 'option--inactive', false, true);
    chckClass('#exportImport', 'option--active', true, false);
    chckClass('#exportImport', 'option--inactive', false, true);
    chckClass('#addWords', 'option--active', true, false);
    chckClass('#addWords', 'option--inactive', false, true);
    chckClass('#deleteMarkers', 'option--active', true, false);
    chckClass('#deleteMarkers', 'option--inactive', false, true);

    //hide and show panels 
    chckClass('#find-and-replace-panel', 'panel--inactive', true, false);
    chckClass('#marker-colors-panel', 'panel--inactive', false, true);
    chckClass('#export-import-panel', 'panel--inactive', false, true);
    chckClass('#add-words-panel', 'panel--inactive', false, true);
    chckClass('#delete-markers-panel', 'panel--inactive', false, true);    
  });
  
//Done  
  jQuery('#deleteMarkers').click(function () {
    chckClass(this, 'option--active', false, true);
    chckClass(this, 'option--inactive', true, false);
    chckClass('#markerColors', 'option--active', true, false);
    chckClass('#markerColors', 'option--inactive', false, true);
    chckClass('#exportImport', 'option--active', true, false);
    chckClass('#exportImport', 'option--inactive', false, true);
    chckClass('#findAndReplace', 'option--active', true, false);
    chckClass('#findAndReplace', 'option--inactive', false, true);
    chckClass('#addWords', 'option--active', true, false);
    chckClass('#addWords', 'option--inactive', false, true);

    //hide and show panels 
    chckClass('#delete-markers-panel', 'panel--inactive', true, false);
    chckClass('#marker-colors-panel', 'panel--inactive', false, true);
    chckClass('#export-import-panel', 'panel--inactive', false, true);
    chckClass('#find-and-replace-panel', 'panel--inactive', false, true);
    chckClass('#add-words-panel', 'panel--inactive', false, true);    
  });
  

/**************************************************************************************************************** */
/**************************************************************************************************************** */
/**************************************************************************************************************** */
/**************************************MARKER COLORS PANEL******************************************************* */
/**************************************************************************************************************** */

  jQuery('#folderSelection').click(function () {
    //store file path called getFile()
    //when you call in the function ChangeMarkerColor readDocument make this the file it reads
    //will have to pass it to sortCSV() to readDocument();
    //create new jsx function that just stores the file.
    chckClass('#mCSV', 'option--white', false, true);
    chckClass('#mCSV', 'option--inactive', true, false);
    //alert("Folder Selection");
  });
  
  jQuery('#csvBox').click(function (){
    //changes a variable that will be read when the button is clicked. If button is clicked then ChangeMarkerCol() will be preformed
    //alert("CSV Box Selection");
    jQuery('#checkSelection').toggle('inactive');
    var activeChck = jQuery('#checkSelection').hasClass('inactive');
    if(activeChck == false){
      useCSV = true;
    }else{
      useCSV = false;
    }

  });
  
  jQuery('#changeMarkerColorButton').click(function () {
    alert("Change Marker Color Button");
  });
  
  jQuery('#markerColor__keyword').click(function () {
    chckClass(this, 'table--active', false, true);
    chckClass(this, 'table--inactive', true, false);
    chckClass('#markerColor__color', 'table--active', true, false);
    chckClass('#markerColor__color', 'table--inactive', false, true);
  });
  
  jQuery('#markerColor__color').click(function () {
    chckClass(this, 'table--active', false, true);
    chckClass(this, 'table--inactive', true, false);
    chckClass('#markerColor__keyword', 'table--active', true, false);
    chckClass('#markerColor__keyword', 'table--inactive', false, true);
  });
  
  jQuery('#add_C').click(function () {
    var typeAdd = 'keyword';
    var chckKey = jQuery('#markerColor__keyword').hasClass('table--active');
    var grandfather = jQuery(this).parent().parent().parent();
    fieldNum ++
    if(chckKey){
      //add keyword
      var newHTML = markerColorField_HTML(fieldNum, true);
      grandfather.append(newHTML)
    }else{
      //add color
      var newHTML = markerColorField_HTML(fieldNum, false);
      grandfather.append(newHTML);
    }
  });
  
  jQuery(document).delegate('.minus', 'click', function () {
    var getId = jQuery(this).attr('id');
    var directParent = jQuery(this).parent();
    var grandParent = jQuery(this).parent().parent();
    
    grandParent.remove();
  });
  
 
  
  
function chckClass(item, classChck, bool, add){
  var chckInactive = jQuery(item).hasClass(classChck);
  if(chckInactive == bool){
    if(add == true){
      jQuery(item).addClass(classChck);
    }else{
      jQuery(item).removeClass(classChck);
    }

  }
}

function markerColorField_HTML(idNum, keyword){

  var markerColor_color_field = '<div class="field">\
  <div class="dropdownColor__wrapper__choice field__header ">\
    <select id="colorSelector_' + idNum + '" class="dropdownColor">\
      <option value="green">Green</option>\
      <option value="red">Red</option>\
      <option value="purple">Purple</option>\
      <option value="orange">Orange</option>\
      <option value="yellow">Yellow</option>\
      <option value="white">White</option>\
      <option value="blue">Blue</option>\
      <option value="cyan">Cyan</option>\
    </select>\
  </div>\
  <div class="dropdownColor__wrapper field__header">\
    <select id="colorChange_ '+ idNum + '" class="dropdownColor">\
      <option value="green">Green</option>\
      <option value="red">Red</option>\
      <option value="purple">Purple</option>\
      <option value="orange">Orange</option>\
      <option value="yellow">Yellow</option>\
      <option value="white">White</option>\
      <option value="blue">Blue</option>\
      <option value="cyan">Cyan</option>\
    </select>\
  </div>\
  <div class="xOut field__header">\
    <img id="minus_' + idNum + '" class="minus" src="./assets/images/minus.png" alt="subtract">\
  </div>';

  var markerColor_keyword_field = '<div class="field">\
  <div class="keyword__wrapper field__header">\
    <input type="text" id="key_' + idNum + '" class="keyword" name="keyCol_1" placeholder="#GFX">\
  </div>\
  <div class="dropdownColor__wrapper field__header">\
    <select id="colorChange_' + idNum + '" class="dropdownColor">\
      <option value="green">Green</option>\
      <option value="red">Red</option>\
      <option value="purple">Purple</option>\
      <option value="orange">Orange</option>\
      <option value="yellow">Yellow</option>\
      <option value="white">White</option>\
      <option value="blue">Blue</option>\
      <option value="cyan">Cyan</option>\
    </select>\
  </div>\
  <div class="xOut field__header">\
    <img id="minus_' + idNum + '" class="minus" src="./assets/images/minus.png" alt="subtract">\
  </div>\
</div>';
  if(keyword){
    return markerColor_keyword_field;
  }else{
    return markerColor_color_field;
  }

}




var csInterface = new CSInterface();
//csInterface.evalScript('$._PPP_.getVersionInfo()', myVersionInfoFunction);
})