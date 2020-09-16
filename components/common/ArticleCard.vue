<template>
  <div>
    <article
      v-for="(item,index) in articleList"
      :key="item.id"
      class="article_card"
      :class="{'reverse':index%2 !== 0}"
    >
      <div class="content">
        <div class="release_time">
          <a-icon type="clock-circle" />
          <span>发布于2019-12-31</span>
        </div>
        <div>GraphQL 实现递归查询</div>
        <div>
          <div>
            <a-icon type="eye" />
            <span>8,336热度</span>
          </div>
          <div>
            <a-icon type="message" />
            <span>30条评论</span>
          </div>
          <div>
            <a-icon type="folder-open" />
            <span>野生技术协会</span>
          </div>
          <div class="text">
            当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)
          </div>
          <div>
            <a-icon type="more" />
          </div>
        </div>
      </div>
      <div class="img">
        图片
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
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
  .img {
    width: 60%;
  }
  .content {
    width: 40%;
    padding: 20px 25px;

  }
}
</style>
