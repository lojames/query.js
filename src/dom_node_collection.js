class DOMNodeCollection{
  constructor(nodes){
    this.nodes = nodes;
  }

  each(callback){
    for (let i = 0; i < this.nodes.length; i++) {
      callback(nodes[i]);
    }
  }

  html(string){
    if (typeof string === "string"){
      this.each(node => node.innerHTML = string);
    } else if (this.nodes.length > 0){
      return this.nodes[0].innerHTML;
    }
  }

  empty(){
    this.html("");
  }
}

module.exports = DOMNodeCollection;
