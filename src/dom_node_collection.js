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

  append(content){
    if (this.nodes.length === 0){
      return;
    }

    if (typeof content === 'string'){
      this.each(node => node.innerHTML += content);
    } else if (content instanceof 'HTMLElement'){
      this.each(node => node.innerHTML += content.outerHTML)
    } else if (content instance of 'DOMNodeCollection'){
      this.each(node => {
        content.forEach( content_el => node.innerHTML += content_el.outerHTML)
      }
    }

    attr(key, val) {
      if (val) {
        this.each(node => node.setAttribute(key, val));
      } else {
        return this.nodes[0].getAttribute(key);
      }
    }

    addClass(newClass) {
      this.each(node => node.classList.add(newClass));
    }

    removeClass(oldClass) {
      this.each(node => node.classList.remove(oldClass));
    }
  }


}

module.exports = DOMNodeCollection;
