### advance props
```js
{
  props: {
    name: {
      type: String, // variable type
      default: 'John', // default value
      required: true, // is required
      validator: function (value) { // custom validator
        return value !== ''
      }
    }
  }
}
```