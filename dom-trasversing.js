// 1. Root Node (document)
const rootNode = document.getRootNode();
console.log(rootNode);

// 2. Root Element Node (HTML)
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode); // html tag

// 3. Child Nodes of HTML (head, text/newline, body)
console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

// 4. Parent Node
console.log(headElementNode.parentNode); // html

// 5. Sibling Traversal (Next / Previous Sibling)
console.log(headElementNode.nextSibling); // text node (newline)
console.log(headElementNode.nextElementSibling); // direct body tag (text nodes ignore karke)

// 6. Direct Children (Ignoring text nodes)
const container = document.querySelector(".container");
console.log(container.children); // HTMLCollection of direct element children only