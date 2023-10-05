/*
 * I don't know what i'm doning but let me lay done the
 * requirements first and think about how i can solve them.
 *
 * I want to be able to easily hide, delete node.
 * Easily be able to move the nodes up and down
 * Easily be able to add node below or on top
 * Easily be able to change fonts
 * Easily be able to change font height for similar group.
 * So all heading will have the same fon't height
 * Easily be able to attach link.
 * Easily be able to convert the the CV to online page.
 * Easily be able to convert the resume to html && css
 *
 * I think this will be made up of nodes, and editor.
 * */

/*
 * Okay I admit that I don't know what i'm doing. But I will
 * take it one step at a time. I will start with crucial functionality.
 * Saving the CV is going to be hard.
 * */

/* We have two kinds of nodes
 * nodeGroup --yeah
 * Generic node,
 * and decorated node, with date, and instution.
 *
 * */

/* Oh, I think i get it now. If i have an editor state context, all 
 * the componets that uses editor context can edit the state of their 
 * node, which will be stored in the ediotr.
 *
 * */

class Node {
  #data = [];
  #Id = 1;
  type = 'text';

  constructor(name, data) {
    //name = skills, intersts, languages
    this.name = name;
    this.#data = data;
  }

  serialization() {
    return {};
  }

  // I think I won't need this since you can
  // deserialize using a constructor.
  desirilization({}) {}

  get data() {
    return this.#data;
  }

  get Id() {
    return this.#Id;
  }

  addData({}) {}
}

class Link extends Node {
  constructor() {
    super();
  }
}

class Heading extends Node {
  constructor() {
    super();
  }
}

class Image extends Node {
  constructor() {
    super();
  }
}

class Editor {
  #node = [];
  constructor() {}

  get nodes() {
    return this.#nodes;
  }

  addNode(node, position) {}

  delete(id) {}

  toggleHide(id) {}

  toggleLock(id) {}

  render() {}
}

export default Editor;

export { Node, Link, Heading, Image };
