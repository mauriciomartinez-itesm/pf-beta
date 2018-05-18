$( document ).ready(function() {
  $( "#menu-teleport" ).change(function () {
    
    var miPlayer =   document.querySelector("#player");
    var misEyes =   document.querySelector("#eyes");
    
    switch($(this).prop("selectedIndex")){
    
      case 0:
        miPlayer.setAttribute("position",{x:18.079, y:0, z:-5.718});
        misEyes.removeAttribute();
        misEyes.setAttribute("rotation",{y:90});
      break;

      case 1:
        miPlayer.setAttribute("position",{x:9.303, y:0, z:-3.492});
        misEyes.setAttribute("rotation",{y:180});
      break;

      case 2:
        miPlayer.setAttribute("position",{x:5.826, y:0, z:-0.558});
        misEyes.setAttribute("rotation",{y:90});
      break;

      case 3:
        miPlayer.setAttribute("position",{x:-1.100, y:0, z:-2.361});
        misEyes.setAttribute("rotation",{y:270});
      break;

      case 4:
        miPlayer.setAttribute("position",{x:1.629, y:0, z:-1.554});
        misEyes.setAttribute("rotation",{y:90});
      break;

      case 5:
        miPlayer.setAttribute("position",{x:-6.873, y:0, z:-1.632});
        misEyes.setAttribute("rotation",{y:270});
      break;

      case 6:
        miPlayer.setAttribute("position",{x:-1.320, y:0, z:5.079});
        misEyes.setAttribute("rotation",{y:180});
      break;

      case 7:
        miPlayer.setAttribute("position",{x:-4.471, y:0, z:-0.457});
        misEyes.setAttribute("rotation",{y:90});
      break;
        
        case 8:
        miPlayer.setAttribute("position",{x:7.294, y:0, z:5.289});
        misEyes.setAttribute("rotation",{y:270});
      break;
        
    }
  });
});