window.Event = new Vue();

Vue.component("coupon", {
  template: '<input placeholder="enter coupon code" @blur="onCouponApplied">',
  methods: {
    onCouponApplied() {
      // $emit - emit event
      Event.$emit("applied");
    },
  },
});

new Vue({
  el: "#app",
  methods: {
    onCouponApplied() {
      alert("It was applied");
    },
  },
  created() {
    // $on - listen for a custom event
    Event.$on("applied", () => {
      alert("success");
    });
  },
});
