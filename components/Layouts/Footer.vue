<template>
  <div class="footer">
    <div class="top">
      <span>Crafted with</span>
      <a-icon type="heart" theme="filled" class="icon" />
      <span>by Flong</span>
    </div>
    <hr>
    <div class="down">
      <div>Welcome to my blog! ! !</div>
      <div class="action">
        <div class="action_item">
          Chronicle of Events
        </div>
        <div class="action_item">
          Contact Me
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  margin: 0 500px ;
  .icon{
    color: #E74C3C;
  }
  .top{
    font-size: $main-font-size;
    font-weight: bold;
  }
  .down{
    display: flex;
    justify-content: space-between;
    color: $secondary-font-color;
    text-shadow: 2px 2px 4px $secondary-font-color;
    .action{
      display: flex;
      .action_item + .action_item{
        margin-left: 10px;
      }
    }
  }
}
</style>
