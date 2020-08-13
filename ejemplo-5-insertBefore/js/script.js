function before() {
    let newItem = document.createElement("LI");
    let textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);
  
    let miElemento = document.getElementById("myList");
    miElemento.insertBefore(newItem, miElemento.childNodes[0]);
  }