// slot => placeholder
// Set component name
Vue.component("lists", {
  // Set component contents
  template: `
    <div>
      <ul>
        <item v-for="list in lists">{{ list }}</item>
      </ul>
    </div>`,
  data() {
    return {
      lists: ["one", "two", "three", "four", "five"],
    };
  },
});

Vue.component("item", {
  // <slot> -component content placeholder
  template: "<li><slot></slot></li>",
});

new Vue({
  el: "#app",
});
