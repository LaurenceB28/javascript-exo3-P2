var num=0;
function changer(){             
                        
// Si l'image n'est pas zoomée
    if (num == 0) {
    num = 1;
    document.image.src = "ASSETS/IMG/grandcanard.jpg";
    document.image.width = 1000;
    document.image.height = 1000;
      
                               
}

// Si elle est zoomée
     else {
         num = 0;
    document.image.src = "ASSETS/IMG/petitcanard.jpg";
    document.image.width =700;
    document.image.height = 700;
}             
}       