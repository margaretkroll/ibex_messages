`put this before the [var items] line`

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

    ]
    
    
    