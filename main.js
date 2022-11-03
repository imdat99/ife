import NVM from "./core";
import template from "./template.html"

new NVM({
  el: "#app",
  template,
  data: {
    arr: ["chào bạn","Tôi là",3,4,5]
  },
  methods: {
    test(index) {
      console.log(index)
    }
  },
});
// console.log(vm)
