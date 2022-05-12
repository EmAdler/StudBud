import Tasklist from "./tasklist";
import Dictionary from "./dictionary";
import Timer from "./timer";
import Musicplayer from "./musicPlayer";


///navigation///
var navLinks = document.getElementById("navLinks");
function showMenu(){
  navLinks.style.right = "0";

}

function hideMenu(){
  navLinks.style.right = "-200px";
  
}


var taskList = new Tasklist();
taskList.printtoconsole();


///////dictionary - IN dictionary.js////////////


/////////timer///////////

