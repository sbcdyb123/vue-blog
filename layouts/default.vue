<template>
  <div class="layout_container">
    <a-layout>
      <a-layout-header class="layout_header" :class="HeaderBgTransparent">
        <Header />
      </a-layout-header>
      <a-layout-content>
        <Nuxt />
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      scrollValue: 0 // 鼠标滚动的指
    }
  },
  computed: {
    HeaderBgTransparent () {
      // 控制头部导航的背景颜色显示或者消失
      const value = this.scrollValue
      if (value === 0) {
        // 向上滚动
        return {
          transparent_bg: true
        }
      } else {
        return {
          no_transparent_bg: true
        }
      }
    }
  },
  mounted () {
    this.initScroll()
  },
  methods: {
    initScroll () {
      const scrollFunc = () => {
        this.scrollValue = this.getScroll().y
      }
      window.onscroll = document.onscroll = scrollFunc // IE/Opera/Chrome
    },
    getScroll () {
      if (window.pageXOffset) {
        return {
          // 主流浏览器 ie9及以上
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      } else {
        // ie8及以下
        return {
          x: document.documentElement.scrollLeft,
          y: document.documentElement.scrollTop
        }
      }
    }
  }
}
</script>
<style lang='scss'>
body {
  cursor: url("/cursor/Arrow.cur"), default;
}
.transparent_bg {
  background-color: rgba(255, 255, 255, 0);
}
.no_transparent_bg {
  background-color: rgba(255, 255, 255, 1);
}
.layout_container {
  & .ant-layout-footer,
  .ant-layout-header {
    transition: all 0.5s;
    color: black;
  }
  .ant-layout-footer{
    background: white;
  }
  .layout_header {
    &:hover{
      background-color: rgba(255,255,255,1);
    }
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
  }
}
</style>
