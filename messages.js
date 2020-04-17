//put this before the [var items] line

  var getHTML = function(l) {
  var ret = "";
  var dtype = "";

  for (var i= 0; i < l.length; i+=1) {
    if(i %2 == 0) {
      ret += "<div class='textboxes-q'>" + l[i] + "<br></div><br>";
    } else {
      ret += "<div class='textboxes-v'>" + l[i] + "</div>";
    }
  }
  ret += "</div>";
  ret += "<div class='textboxes-question'> <br><br><br><center></div>";
  return ret;
};

  
  var items = [
  

  ["example1", "Form", {html:"<div class='textboxes-q'>box1</div><br><br><div class='textboxes-w'></div><br><br>"},
     "Form", {html:"<div class='textboxes-q'>box 1</div><div class='textboxes-v'>box2</div><br><br>"},
     "Form", {html:"<div class='textboxes-q'>box1</div><div class='textboxes-v'>box2</div><div class='textboxes-v'>box 3</div><br><br>"}],

//this can be changed and combined with other controllers however you want
//e.g. this one will make two screens with a free response at the end of the second screen and a comprehension question on the third screen
    ["example2", "Form", {html:"<div class='textboxes-q'>Where are you going to go to vacation?</div><br><br><div class='textboxes-w'></div><br><br>"},
     "Form", {html:"<div class='textboxes-q'>Where are you going to go to vacation?</div><div class='textboxes-v'>I want to go to Gallifrey...</div><br><br>"},
     "Form", {html:"<div class='textboxes-q'>Where are you going to go to vacation?</div><div class='textboxes-v'>I want to go to Gallifrey...</div><div class='textboxes-v'>but only if I can get a reasonable flight there.</div><br><br>"},
      "Form", {html:"<div class='textboxes-q'>Wait, if you can get a reasonable flight to <i>where</i>?</div><div class='textboxes-w'></div><br><br>"}, 
      "Form",{html:"<div class='textboxes-q'>Wait, if you can get a reasonable flight to <i>where</i>?</div><div class='textboxes-v'><input type='text' name='response'  style='background-color=#72A4D2;' maxlength='30'></div>"}, "Question", {q: "Did you see this question? <br><br><i>Where are you going to go to vacation?", as: ["Yes", "No"], hasCorrect: "Yes"}],
    
    ]
    
    
    
