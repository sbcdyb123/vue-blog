<template>
  <div class="small_card_container">
    <img src="@/assets/img/test1.jpg" class="img">
    <div class="title">
      ONE PIECE
    </div>
    <div class="placeholder">
      海贼王
    </div>
    <div class="mask" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.small_card_container{
  position: relative;
  width: 250px;
  height: 160px;
  box-shadow: 0 0px 10px 0px rgba(0,0,0,0.1);
  border-radius: 15px;
  overflow: hidden;
  &:hover{
    img{
      transform: scale(1.3);
    }
    .title{
      left: 0;
    }
    .placeholder{
      right: 0;
    }
    .mask{
      background-color: rgba(0,0,0,0.4);
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
  }
  .title{
    position: absolute;
    z-index: 1;
    left: -250px;
    top: 20px;
    width: 100%;
    height: 50px;
    background-color: rgba(0,0,0,1);
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.3s ease-out;
  }
  .placeholder{
    position: absolute;
    z-index: 1;
    width: 100%;
    right: -250px;
    top: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-out 0.1s;
  }
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0);
    transition: all 0.3s ease-out;
  }
}
</style>
