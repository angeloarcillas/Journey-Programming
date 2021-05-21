### better way to handle multiple property
```CSS
/* Good */
.btn { transform: scale(1.5) rotate(45deg) }
.scale { transform: scale(2) rotate(45deg) }
.rotate { transform: scale(1.5) rotate(90deg) }

/* Better */
.btn {
  transform: 
    scale(var(--scale, 1.5)) 
    rotate(var(--rotation, 45deg))
}
.scale { --scale: 2; }
.rotate { --rotation: 90deg; }
```

### make an  element resizable
```css
.resizable {
  resize: both;
  overflow: hidden;
  
  width: 400px;
  min-width: 100px;
  max-width: 900px;
}
```

### auto size | not fully supported
```css
.aspect-ratio {
  aspect-ratio: 1 / 1;
}
```

### add padding on scroll to anchor
```css
:root {
  --header-height: 20px;
  scroll-padding-top: var(--header-height);
}
```

### Dark or Light theme based on OS them?
```css
@media (prefers-color-scheme: dark) {
    :root {
        --text-color: #b6b6b6;
        --background: #ececec;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --text-color: #1f1f1f;
        --background: #000000;
    }
}

body {
    color: var(--text-color);
    background: var(--background);
}
```


**Flex**
```
justify-content: // x-axis
align-items: // y-axis
```

**Grid**
```
grid-column: <start> / <end>
grid-row: <start> / <end>
grid-area: <row-start> / <col-start> / <row-end> / <col-end>
```

**ETC**
```
font-feature-settings: "tnum"; // mono space like alignment
```