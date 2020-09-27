<template>
  <div>
    <article
      v-for="(item, index) in articleList"
      :key="index"
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions,
      }"
      class="article_list"
    >
      <div class="f_container">
        <div class="img_container">
          <img src="@/assets/img/test3.jpg">
        </div>
        <div class="info">
          <div class="title_time">
            <div class="title">
              GraphQL 实现递归查询
            </div>
            <div class="release_time">
              <a-icon type="clock-circle" />
              <span>发布于2019-12-31</span>
            </div>
          </div>
          <div class="summary">
            当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress
            这样套嵌的评论信息时，通常的写法是： { posts(first: 100)
          </div>
          <div class="icon">
            <a-icon type="more" class="icon" :rotate="90" />
          </div>
        </div>
      </div>
      <div class="hover_info">
        <div>
          <a-icon type="eye" />
          <span>4824阅读</span>
        </div>
        <div>
          <a-icon type="like" />
          <span>24次点赞</span>
        </div>
      </div>
      <hr class="list_hr">
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
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.25, 0.75] // [0.25, 0.75] if you want a 25% offset!
      } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    }
  },
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
.article_list {
  position: relative;
  margin-bottom: 50px;
  opacity: 0;
  &:hover .hover_info{
    transform: translate3d(-85px,0,0);
    opacity: 1;
    visibility: visible;
  }
  .hover_info {
    position: absolute;
    left: 0;
    top: 0;
    border-top: 1px solid #ddd;
    line-height: 2;
    padding-top: 8px;
    margin-top: 10px;
    opacity: 0;
    transition: all 0.5s ease-out;
  }
  .f_container {
    display: flex;
    //   align-items: center;
    .img_container {
      margin-right: 30px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid #dadada;
        object-fit: cover;
        transition: all 0.5s ease-out;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .title_time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 20px;
          font-weight: bold;
          transition: color 0.15s ease-out;
          color: $title-font-color;
          &:hover {
            & {
              color: $hover_font_color;
            }
          }
        }
        .release_time {
          color: $secondary-font-color;
          font: {
            size: $secondary-font-size;
          }
        }
      }
      .summary {
        @include text_line_ellipsis(3);
        margin: 20px 0;
      }
      .icon {
        display: flex;
        flex-direction: row-reverse;
        color: $main-font-color;
        font-size: 30px;
        font-weight: bold;
        transition: color 0.15s ease-out;
        &:hover {
          & {
            color: $hover_font_color;
          }
        }
      }
    }
  }
  .list_hr {
    width: 30%;
    height: 1px;
    margin: 0 auto;
    border: 0;
    background: #efefef;
    margin-top: 20px;
  }
}
</style>
