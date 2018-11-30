const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  if (typeof arg === "string"){
    const nodes = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodes));
  } else if (arg instanceof HTMLElement){
    return new DOMNodeCollection([arg]);
  }
}


window.$l = $l;
