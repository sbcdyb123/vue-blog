<template>
  <div class="article_container">
    <article class="article" v-html="content" />
  </div>
</template>

<script>
import marked from 'marked'
// 引入marked解析模块 与 代码高亮插件 以及对应的样式文件
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// import '../../assets/css/yeh-md-theme.css'
// import '../../assets/css/ocean.min.css'

export default {
  async asyncData ({ $axios }) {
    const res = await $axios.$get(
      'http://localhost:5000/v1/article/getArticleById/1'
    )

    // 基本配置与代码高亮配置
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight (code) {
        return hljs.highlightAuto(code).value
      }
    })
    let markdownString = res.content
    markdownString = marked(markdownString)
    return {
      content: markdownString
    }
  }
}
</script>

<style lang="scss" scoped >
.article_container {
//   height: 2000px;
  background: white;
  .article {
    padding: 64px 300px 0;
  }
}
</style>
