<template>
  <a href="#" class="back-to-top" id="backToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 49 49"
    >
      <g id="BACK-TO-TOP" transform="translate(-1382 -4453)">
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="24.5"
          cy="24.5"
          r="24.5"
          transform="translate(1382 4453)"
          fill="#1976d2"
        />
        <path
          id="Path_33"
          data-name="Path 33"
          d="M1301,4477.25l9.25-9.25,9.25,9.25"
          transform="translate(96.5 4.5)"
          fill="none"
          stroke="#fff"
          stroke-width="5"
        />
      </g>
    </svg>
  </a>
</template>
<script>
export default {
  mounted: function () {
    window.document.body.onscroll = function () {
      if (window.scrollY == 0) {
        document.getElementById("backToTop").style.visibility = "hidden";
      } else {
        document.getElementById("backToTop").style.visibility = "visible";
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.back-to-top {
  bottom: 25px;
  display: block;
  margin: 0;
  position: fixed;
  right: 25px;
  z-index: 10000;
}
</style>
