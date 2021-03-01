## Selector

```css
* {}            /* Everything */
p {}            /* HTML tag*/
.foo {}         /* <p class="foo"> */
#name {}        /* <p id="foo"> */
p#foo.bar {}    /* <div id="foo" class="bar"> */

div p           /* descendant selector */
div > p         /* child selector */
div + p         /* adjacent sibling selector  */
div ~ p         /* general sibling selector */

/* !note: ? => any value */
[attr] {}         /* Everything with attr attribute */
[attr*="foo"]     /* Match attr value with ?foo? */
[attr='foo'] {}   /* <p attr="foo">*/
[attr^='foo'] {}  /* Match attr value with starting "foo?" */
[attr$='foo'] {}   /* Match attr value with ending "?foo" */
[attr~='baz'] {}  /* Match attr value containing "baz" | <p attr="foo baz bar"> */
[attr|='en'] {}   /* <p attr="en"> or <p attr="en-?"> */

::root {}       /* root element */
```

## variable
```css
:root {
  --textColor: #ccc; /* Set variable */
}

p {
  color: var(--textColor); /* Get variable */
  --text-size: 14px; /* Can only be access by child element */
}
```

**Responsive break-points**
- sm: 640px;
- md: 768px;
- lg: 1024px;
- xl: 1280px;

**Prefix**
- -webkit- (Chrome, Safari, iOS Safari / iOS WebView, Android)
- -moz- (Firefox)
- -ms- (Edge, Internet Explorer)
- -o- (Opera, Opera Mini)


**Symbols**
```
&#34; &quot; Quotation Marks - "
&#38; &amp; Ampersand - &
&#60; &lt; Less than sign - <
&#62; &gt; Greater than sign - >
&#160; &nbsp; Non-breaking space
&#169; &copy; Copyright Symbol - ©
&#64; &Uuml; @ symbol - @
&#149; &ouml; Small bullet - .
&#153; &ucirc; Trademark Symbol - ™
```

**content=""**
```
\2713 - check
\2714 - b-check
\2717 - X
\2718 - b-X
\275B - 1 qoute
\275C - 2 qoute
\275D - b-1 qoute
\275E - b-2 qoute
\275F
\2760
\2206 - increment
\2207 - decrement
\25B2 - b-inc
\25BC - b-dec
```

## Flexbox
```css
p {
  justify-content:    /* X-axis */;
  align-items:        /* Y-axis */;
  align-content:      /* modifies the behavior of the flex-wrap */;
  flex-direction:     /* row|column */;
  flex-wrap:          /* wrap */;
  flex:               /* grow shrink basis */;
  flex-grow:          /* increase size */;
  flex-grow:          /* decrease size */;
  flex-basis:         /* width */;
}
```

## Coding Standard

**Declaration order**
1. Positioning
2. Box model
3. Typography
4. Visual
5. Misc

**Media query placement**
> Place media queries as close to their relevant rule sets whenever possible.

**Prefixed properties**
> Indent each property such that the declaration's value lines up vertically for easy multi-line editing.

**Responsive font**
```css
:root {
  font-size: calc(1vw + 1vh + .5vmin);
}
```

**margin/padding property**
```css
p {
margin: 1px; /* All sides */
margin: 1px 2px; /* top/bottom left/right */
margin: 1px 2px 1px; /* top left/right bottom */
margin: 1px 2px 3px 4px; /* top right bottom left */
}
```