const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  switch (typeof arg){
    case "string":
      const nodes = document.querySelectorAll(arg);
      return new DOMNodeCollection(Array.from(nodes));
    case "HTMLElement":
      return new DOMNodeCollection([arg]);
  }
}


window.$l = $l;
