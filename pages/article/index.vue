<template>
  <div>
    <div class="img_container">
      <img src="@/assets/img/bg-img.png" alt>
    </div>
    <div class="list_container">
      <article-list :article-list="articleList" />
      <previous-button @click.native="addArticle" />
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/common/ArticleList'
import PreviousButton from '@/components/common/PreviousButton'
export default {
  components: {
    ArticleList,
    PreviousButton
  },
  data () {
    return {
      articleList: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  },
  methods: {
    addArticle () {
      this.articleList = [...[{ id: '' }, { id: '' }], ...this.articleList]
    }
  }
}
</script>

<style lang="scss" scoped>
.img_container {
  width: 100%;
  height: 400px;
  padding-top: 64px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.list_container {
  margin: 64px 550px 0;
}
</style>
