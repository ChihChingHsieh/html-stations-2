function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    const check = document.getElementById("check");
    
    if (check.checked) {
      element.style.backgroundColor = color;
    } else {
      element.style.backgroundColor = ""; 
    }
  }
  
  const check = document.getElementById("check");
  check.addEventListener("change", function() {
    changeBackgroundColor('text', 'red');
  });
  
