<template>
  <div class="main">
    <div class="back_img">
      <div class="title">
        <div class="glitch" data-text="Hello,world!">
          Hello,world!
        </div>
        <div class="dialog">
          <div class="sentence">
            "他把自己带入了人流，身影渐渐隐没在灯火中。"
          </div>
          <div class="contact">
            <a
              v-for="item in contact"
              :key="item.link"
              :href="item.link"
              class="icon_wrap"
            >
              <a-icon
                :type="item.iconType"
                :style="'color:' + item.iconColor"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="start_dash">
        <title-bar />
        <div class="card_container">
          <small-card />
          <small-card />
          <small-card />
        </div>
      </div>
      <div class="article_list">
        <title-bar />
        <article-card :article-list="items" />
      </div>
      <previous-button @click.native="addArticle" />
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'
import SmallCard from '@/components/common/SmallCard'
import ArticleCard from '@/components/common/ArticleCard'
import PreviousButton from '@/components/common/PreviousButton'
export default {
  components: {
    TitleBar,
    SmallCard,
    ArticleCard,
    PreviousButton
  },
  async asyncData ({ $axios }) {
    const res = await $axios.$get('/article/getArticleList', {
      params: {
        count: 2,
        page: 0
      }
    })
    return {
      ...res
    }
  },
  data () {
    return {
      contact: [
        {
          link: 'https://www.baidu.com/',
          iconType: 'github',
          iconColor: '#F1F1F1'
        },
        {
          link: 'https://www.baidu.com/',
          iconType: 'weibo-circle',
          iconColor: '#F1F1F1'
        },
        {
          link: 'https://www.baidu.com/',
          iconType: 'qq',
          iconColor: '#F1F1F1'
        },
        {
          link: 'https://www.baidu.com/',
          iconType: 'wechat',
          iconColor: '#83D944'
        },
        {
          link: 'https://www.baidu.com/',
          iconType: 'zhihu',
          iconColor: '#0177D7'
        }
      ]
    }
  },

  methods: {
    async addArticle () {
      const page = this.page + 1
      const count = this.count
      const res = await this.$axios.$get('/article/getArticleList', { params: { page, count } })
      this.items = [...this.items, ...res.items]
      this.page = page
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  background: white;
  .back_img {
    position: relative;
    height: 100vh;
    background-image: url("~assets/img/bg-img.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    .title {
      position: relative;
      flex-direction: column;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      .dialog {
        position: relative;
        z-index: 1;
        width: 500px;
        height: 100px;
        border-radius: 15px;
        padding: 10px 15px;
        background: rgba(0, 0, 0, 0.5);
        .sentence {
          font-size: 18px;
          font-weight: bold;
          color: white;
          letter-spacing: 3px;
        }
        .contact {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          margin-top: 10px;
          .icon_wrap {
            display: block;
            font-size: 20px;
          }
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: -32px;
          left: 55px;
          width: 0px;
          height: 0px;
          border-width: 16px;
          border-style: solid;
          border-color: transparent transparent rgba(0, 0, 0, 0.5);
          border-image: initial;
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .content {
    margin: 0 550px;
    .start_dash {
      margin-top: 80px;
      .card_container {
        margin-top: 30px;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}
</style>
