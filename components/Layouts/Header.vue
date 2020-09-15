<template>
  <div class="header">
    <div class="logo">
      idealtown
    </div>
    <div class="nav_container">
      <div class="nav">
        <div v-for="nav in navList" :key="nav.navtitle" class="nav_item">
          <a-icon :type="nav.icon" theme="filled" />
          {{ nav.navtitle }}
        </div>
      </div>
      <div class="search_bar">
        <a-input-search
          placeholder="Search . . . . . . ."
          class="search_input"
          size="large"
          @search="onSearch"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { navtitle: '首页', icon: 'home' },
        { navtitle: '博客', icon: 'container' },
        { navtitle: '归档', icon: 'hdd' },
        { navtitle: '关于我', icon: 'idcard' }
      ]
    }
  },
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.8);
  .logo {
    font-size: 26px;
    cursor: pointer;
    //   font-weight: bold;
  }
  .nav_container {
    display: flex;
    margin-right: 150px;
    .nav {
      display: flex;
      margin-right: 30px;
      .nav_item {
        width: 100px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .search_bar {
      .search_input {
        width: 250px;
      }
    }
  }
}
</style>
