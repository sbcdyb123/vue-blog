<template>
  <div class="article_container">
    <div class="img_container">
      <img src="@/assets/img/bg-img.png" alt>
      <div class="article_info">
        <div class="title">
          VSCode Remote SSH: Bad Owner or Permissions
        </div>
        <div class="other">
          <div class="avatar">
            <img
              src="https://gravatar.loli.net/avatar/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g"
              alt
            >
          </div>
          <div class="author">
            Mashiro
          </div>
          <div class="release_time">
            2019-09-05
          </div>
          <div class="reading_count">
            4749次阅读
          </div>
        </div>
      </div>
    </div>
    <article ref="hlDiv" class="article" v-html="content" />
    <div class="tag">
      <div class="award">
        赏
      </div>
      <div class="footnotes">
        <div class="tag_info">
          <a-icon type="tags" theme="filled" class="tag_icon" />
          <span>VUE</span>
          <span>JAVASCRIPT</span>
          <span>CSS</span>
        </div>
        <div class="like_share">
          <div class="share">
            <a-icon type="share-alt" />
          </div>
          <div class="like">
            <a-icon type="like" theme="filled" />
            <span>20</span>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div v-show="scrollValue >= 400" class="anchor">
        <a-anchor :target-offset="targetOffset" :bounds="targetOffset*1.5">
          <a-anchor-link
            v-for="anchor in anchorList"
            :key="anchor.name"
            :href="`#${anchor.name}`"
            :title="anchor.name"
          >
            <a-anchor-link
              v-for="anchorChild in anchor.child"
              :key="anchorChild.name"
              :href="`#${anchorChild.name}`"
              :title="anchorChild.name"
            />
          </a-anchor-link>
        </a-anchor>
      </div>
    </transition>
  </div>
</template>

<script>
import marked from 'marked'
// 引入marked解析模块 与 代码高亮插件 以及对应的样式文件
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import '@/assets/scss/vue.scss' // 引入markdown 样式

export default {
  scrollToTop: true,
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData ({ $axios, params }) {
    const res = await $axios.$get(
      '/article/getArticleById/' + params.id
    )
    // 基本配置与代码高亮配置
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    let markdownString = res.content
    markdownString = marked(markdownString)
    return {
      content: markdownString,
      imgUrl: res.banner
    }
  },
  data () {
    return {
      anchorList: null,
      targetOffset: undefined
    }
  },
  computed: {
    scrollValue () {
      return this.$store.state.scrollValue
    }
  },
  mounted () {
    this.targetOffset = 64
    this.$nextTick(() => {
      hljs.initHighlighting()
      const headNodeList = Array.from(
        document.querySelectorAll('h1,h2,h3,h4,h5,h6')
      )
      let Count4H1 = -1
      const anchorList = []
      // console.log(headNodeList)
      headNodeList.forEach((node) => {
        const headingLevel = node.tagName.toLowerCase()[1]
        const title = node.id
        if (headingLevel === '1') {
          Count4H1++
          anchorList.push({
            name: title,
            child: []
          })
        } else if (headingLevel === '2') {
          anchorList[Count4H1].child.push({
            name: title,
            child: []
          })
        }
      })
      this.anchorList = anchorList
    })
  }
  // created () {
  //   setTimeout(() => {
  //     this.getInfo()
  //   }, 5000)
  // },
  // methods: {
  //   async getInfo () {
  //     const res2 = await getBlog(3)
  //     console.log(res2)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.article_container {
  background: white;
  .tag {
    padding: 0 500px;
    .award {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #d34836;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
    }
    .footnotes {
      display: flex;
      justify-content: space-between;
      .tag_info {
        display: flex;
        align-items: center;
        .tag_icon {
          margin-right: 5px;
        }
        font-size: 15px;
        span + span {
          margin-left: 5px;
        }
      }
      .like_share{
        display: flex;
        div + div{
          margin-left: 20px;
        }
      }
    }
  }
  .img_container {
    width: 100%;
    height: 400px;
    padding-top: 64px;
    overflow: hidden;
    position: relative;
    .article_info {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      color: #ffffff;
      text-shadow: 2px 2px 10px #000;
      .title {
        font-size: 32px;
        font-weight: bold;
      }
      .other {
        display: flex;
        align-items: center;
        margin: 30px 0;
        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 35px;
          overflow: hidden;
        }
        div + div {
          margin-left: 10px;
        }
        .author,
        .release_time,
        .reading_count {
          font-size: 16px;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .article {
    font-size: 16px;
    line-height: 2rem;
    padding: 64px 500px 0;
    pre {
      border-radius: 10px;
    }
  }
  .anchor {
    position: fixed;
    right: 50px;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
    transition: all 0.5s ease-out;
    & /deep/ .ant-anchor-wrapper {
      background: transparent;
    }
  }
}
</style>
