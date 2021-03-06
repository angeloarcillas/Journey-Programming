Vue.component("tabs", {
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tab-detail">
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      // return active tab
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
  created() {
    // Direct child component of the current instance
    this.tabs = this.$children;
  },
});

Vue.component("tab", {
  template: `
  <div v-show="isActive">
    <slot></slot>
  </div>
  `,
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },
  mounted() {
    this.isActive = this.selected;
  },
});
new Vue({
  el: "#app",
});
