<template>
  <div class="article_container">
    <article ref="hlDiv" class="article" v-html="content" />
  </div>
</template>

<script>
import marked from 'marked'
// 引入marked解析模块 与 代码高亮插件 以及对应的样式文件
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import '../../assets/css/yeh-md-theme.css'
// import '../../assets/css/ocean.min.css'
import '@/assets/scss/vue.scss'

export default {
  async asyncData ({ $axios }) {
    const res = await $axios.$get(
      'http://localhost:5000/v1/article/getArticleById/1'
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
      content: markdownString
    }
  },
  mounted () {
    this.$nextTick(() => {
      hljs.initHighlighting()
    })
  }
}
</script>

<style lang="scss">
.article_container {
  //   height: 2000px;
  background: white;
  .article {
    padding: 64px 500px 0;
    pre {
      border-radius: 10px;
    }
  }
}
</style>
