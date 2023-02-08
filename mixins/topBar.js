import $ from "jquery";

export default {
  data() {
    return {
      fixedTop: false,
    }
  },
  mounted() {
    let vm = this;
    $(window).trigger('scroll');
    $(window).on('scroll', function () {
      let pixels = 100;
      if ($(window).scrollTop() > pixels) {
        vm.fixedTop = true
        $('.v-app-bar').addClass('white');
        $('.v-toolbar__content').addClass('shadow-bar');
        $('.v-app-bar').removeClass('transparent');
      } else {
        vm.fixedTop = false
        $('.v-app-bar').addClass('transparent');
        $('.v-app-bar').removeClass('white');
        $('.v-toolbar__content').removeClass('shadow-bar');
      }
      vm.$forceUpdate()
    })
  },
}
