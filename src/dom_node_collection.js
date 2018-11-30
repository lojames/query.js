class DOMNodeCollection{
  constructor(nodes){
    this.nodes = nodes;
  }

  each(callback){
    for (let i = 0; i < this.nodes.length; i++) {
      callback(this.nodes[i]);
    }
  }

  html(string){
    if (typeof string === "string"){
      this.each(node => node.innerHTML += string);
    } else if (this.nodes.length > 0){
      return this.nodes[0].innerHTML;
    }
  }

  empty(){
    this.html("");
  }

  string_parser(string){
    //(?<=\<.*\>).*(?=\</.*\>)
  }

  append(content){
    if (this.nodes.length === 0){
      return;
    }

    if (typeof content === 'string'){
      this.each(node => node.innerHTML += content);
    } else if (content instanceof 'HTMLElement'){
        this.each(node => node.innerHTML += content.outerHTML)
    }
  }
}

module.exports = DOMNodeCollection;
