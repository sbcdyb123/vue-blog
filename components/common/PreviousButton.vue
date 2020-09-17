<template>
  <div class="previous_contariner">
    <div class="button">
      Previous
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.previous_contariner {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  margin: 40px 0 80px;
  display: inline-block;
  .button {
    display: inline;
    padding: 13px 35px;
    border: 1px solid #d6d6d6;
    border-radius: 50px;
    font-size: $main-font-size;
    font-weight: bold;
    color: #adadad;
    user-select:none;
    transition: all 0.15s ease-out;
    &:hover {
      & {
        color: #FE9600;
        box-shadow: 0 0 4px rgba(255,165,0,.85);
        border: 1px solid orange;
      }
    }
  }
}
</style>
