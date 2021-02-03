vue instance
-vue instance
-data
-methods
-lifecycle

template syntax
-text
-raw text
-attribute
-js expression
-directives
-modifiers
-shorthand

computed and watchers

class and style binding

conditional rendering
list rendering
event handling
form input binding
component

```cs
v-for="post in posts"   # for loop
v-text="post.body"      # same as {{ post.body }}
```

## events

```cs
v-on:[event]            # event listener; @[event] shorthand
v-on[customEvent]       #  create custom event; @[customEvent] shorthand
```

## two-way data binding

```cs
v-model="msg"  # bind input to data msg
```

## attribute and class binding

```cs
v-bind:class  # bind class or attribute; :[attribute] shorthand
```

## Throttle vs Debounce

```cs
throttle       # same as set timeout
debounce       # wait all request then set timeout
```