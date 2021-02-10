###### source: [javascript.info](https://javascript.info)

## DOM node
- For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibli
nextSibling.

- For element nodes only: parentElement, children, firstElementChi
lastElementChild, previousElementSibling, nextElementSibling.

## Node properties: type, tag and contents

nodeType
- We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, and a few others for other node types. Read-only.
nodeName/tagName

- For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName describes what it is. Read-only.

innerHTML
- The HTML content of the element. Can be modified.

outerHTML
- The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets replaced with the new HTML in the outer context.

nodeValue/data
- The content of a non-element node (text, comment). These two are almost the same, usually we use data. Can be modified.

textContent
- The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML insertions.

hidden
- When set to true, does the same as CSS display:none.

## Element size and scrolling


offsetParent
- is the nearest positioned ancestor or td, th, table, body.

offsetLeft/offsetTop
- coordinates relative to the upper-left edge of offsetParent.

offsetWidth/offsetHeight
- “outer” width/height of an element including borders.

clientLeft/clientTop
- the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.

clientWidth/clientHeight
- the width/height of the content including paddings, but without the scrollbar.

scrollWidth/scrollHeight
- the width/height of the content, just like clientWidth/clientHeight, but also include scrolled-out, invisible part of the element.

scrollLeft/scrollTop
- width/height of the scrolled out upper part of the element, starting from its upper-left corner.



## Modify document

Methods to create new node
```js
// creates an element with the given tag,
document.createElement(tag)

// creates a text node (rarely used),
document.createTextNode(value)

// clones the element, if deep==true then with all descendants.
elem.cloneNode(deep)
```

Insertion and removal
```js
node.append(...nodes or strings) // insert into node, at the end,
node.prepend(...nodes or strings) // insert into node, at the beginning,
node.before(...nodes or strings) // insert right before node,
node.after(...nodes or strings) // insert right after node,
node.replaceWith(...nodes or strings) // replace node.
node.remove() // remove the node.
```

"old school" methods
```js
parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
```

elem.insertAdjacentHTML(where, html) inserts it depending on the value of where:
```js
"beforebegin" // insert html right before elem,
"afterbegin" // insert html into elem, at the beginning,
"beforeend" // insert html into elem, at the end,
"afterend" // insert html right after elem.

// similar methods
// elem.insertAdjacentText
// elem.insertAdjacentElement
```

## Window sizes & scrolling
```js

window.scrollTo(pageX,pageY) // absolute coordinates,
window.scrollBy(x,y) // scroll relative the current place,

// scroll to make elem visible (align with the top/bottom of the window).
elem.scrollIntoView(top)
```


## Forms
```js
event.clipboardData
```