<template>
  <div>
    <article
      v-for="(item,index) in articleList"
      :key="index"
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      class="article_card"
      :class="{'reverse':index%2 !== 0}"
    >
      <div class="content">
        <div class="release_time">
          <a-icon type="clock-circle" />
          <span>发布于2019-12-31</span>
        </div>
        <div class="title">
          GraphQL 实现递归查询
        </div>
        <div class="info">
          <div class="info_item">
            <a-icon type="eye" />
            <span>8,336热度</span>
          </div>
          <div class="info_item">
            <a-icon type="message" />
            <span>30条评论</span>
          </div>
          <div class="info_item">
            <a-icon type="folder-open" />
            <span>野生技术协会</span>
          </div>
        </div>
        <div class="text">
          <div
            class="summary"
          >
            当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)
          </div>
          <div>
            <a-icon type="more" class="icon" :rotate="90" />
          </div>
        </div>
      </div>
      <div class="img_container">
        <img src="@/assets/img/test3.jpg" alt>
      </div>
    </article>
  </div>
</template>

<script>
import { addClass } from '@/utils'
export default {
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.25, 0.75]// [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  methods: {
    onWaypoint ({ going, el }) {
      if (going === 'in') {
        addClass(el, 'FuzzyGradualEntryAnimation')
      }
      // going: in, out
      // direction: top, right, bottom, left
      // if (going === this.$waypointMap.GOING_IN) {
      //   console.log('waypoint going in!')
      // }

      // if (direction === this.$waypointMap.DIRECTION_TOP) {
      //   console.log('waypoint going top!')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.reverse {
  flex-direction: row-reverse;
}
.article_card {
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  margin: 20px 0 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  opacity: 0;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.2);
    }
    & {
      box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.4);
    }
  }
  .img_container {
    width: 60%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease-out;
    }
  }
  .content {
    width: 40%;
    padding: 20px 20px 20px 30px;
    .release_time {
      color: $secondary-font-color;
      font: {
        size: $secondary-font-size;
      }
    }
    .title {
      margin: 20px 0;
      font: {
        size: $title-font-size;
      }
      transition: color 0.15s ease-out;
      color: $title-font-color;
      &:hover {
        & {
          color: $hover_font_color;
        }
      }
    }
    .info {
      display: flex;
      .info_item + .info_item {
        margin-left: 10px;
      }
      color: $secondary-font-color;
      font: {
        size: $secondary-font-size;
      }
    }
    .text {
      color: $main-font-color;
      font: {
        size: $main-font-size;
      }
      .summary {
        @include text_line_ellipsis(3);
        margin: 20px 0;
      }
      .icon {
        color: $main-font-color;
        font-size: 30px;
        font-weight: bold;
        transition: color 0.15s ease-out;
        color: $title-font-color;
        &:hover {
          & {
            color: $hover_font_color;
          }
        }
      }
    }
  }
}
</style>
