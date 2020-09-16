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
            <a v-for="item in contact" :key="item.link" :href="item.link" class="icon_wrap">
              <a-icon :type="item.iconType" :style="'color:'+item.iconColor" />
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
        <article-card :article-list="articleList" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'
import SmallCard from '@/components/common/SmallCard'
import ArticleCard from '@/components/common/ArticleCard'
export default {
  components: {
    TitleBar,
    SmallCard,
    ArticleCard
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
      ],
      articleList: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
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
          .icon_wrap{
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
    height: 2000px;
    .start_dash{
      margin-top: 80px;
      .card_container{
        margin-top: 30px;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}
.glitch {
  color: white;
  font-size: 64px;
  font-weight: bold;
  position: relative;
  width: auto;
  margin: 0 auto;
  max-width: 80%;
  letter-spacing: 1px;
  z-index: 3;
}
@keyframes noise-anim {
  0% {
    clip: rect(77px, 9999px, 51px, 0);
  }
  5% {
    clip: rect(25px, 9999px, 30px, 0);
  }
  10% {
    clip: rect(70px, 9999px, 75px, 0);
  }
  15% {
    clip: rect(94px, 9999px, 96px, 0);
  }
  20% {
    clip: rect(24px, 9999px, 11px, 0);
  }
  25% {
    clip: rect(12px, 9999px, 53px, 0);
  }
  30% {
    clip: rect(79px, 9999px, 54px, 0);
  }
  35% {
    clip: rect(70px, 9999px, 93px, 0);
  }
  40% {
    clip: rect(73px, 9999px, 86px, 0);
  }
  45% {
    clip: rect(100px, 9999px, 96px, 0);
  }
  50% {
    clip: rect(5px, 9999px, 68px, 0);
  }
  55% {
    clip: rect(6px, 9999px, 16px, 0);
  }
  60% {
    clip: rect(4px, 9999px, 60px, 0);
  }
  65% {
    clip: rect(86px, 9999px, 74px, 0);
  }
  70% {
    clip: rect(6px, 9999px, 53px, 0);
  }
  75% {
    clip: rect(41px, 9999px, 35px, 0);
  }
  80% {
    clip: rect(70px, 9999px, 60px, 0);
  }
  85% {
    clip: rect(52px, 9999px, 66px, 0);
  }
  90% {
    clip: rect(18px, 9999px, 16px, 0);
  }
  95% {
    clip: rect(71px, 9999px, 80px, 0);
  }
  100% {
    clip: rect(69px, 9999px, 51px, 0);
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}
@keyframes noise-anim-2 {
  0% {
    clip: rect(20px, 9999px, 7px, 0);
  }
  5% {
    clip: rect(51px, 9999px, 73px, 0);
  }
  10% {
    clip: rect(33px, 9999px, 21px, 0);
  }
  15% {
    clip: rect(60px, 9999px, 48px, 0);
  }
  20% {
    clip: rect(86px, 9999px, 48px, 0);
  }
  25% {
    clip: rect(32px, 9999px, 50px, 0);
  }
  30% {
    clip: rect(59px, 9999px, 50px, 0);
  }
  35% {
    clip: rect(80px, 9999px, 96px, 0);
  }
  40% {
    clip: rect(7px, 9999px, 39px, 0);
  }
  45% {
    clip: rect(62px, 9999px, 90px, 0);
  }
  50% {
    clip: rect(85px, 9999px, 84px, 0);
  }
  55% {
    clip: rect(89px, 9999px, 51px, 0);
  }
  60% {
    clip: rect(88px, 9999px, 50px, 0);
  }
  65% {
    clip: rect(8px, 9999px, 82px, 0);
  }
  70% {
    clip: rect(80px, 9999px, 23px, 0);
  }
  75% {
    clip: rect(22px, 9999px, 52px, 0);
  }
  80% {
    clip: rect(96px, 9999px, 44px, 0);
  }
  85% {
    clip: rect(84px, 9999px, 27px, 0);
  }
  90% {
    clip: rect(32px, 9999px, 71px, 0);
  }
  95% {
    clip: rect(85px, 9999px, 35px, 0);
  }
  100% {
    clip: rect(24px, 9999px, 23px, 0);
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
