<template>
  <div class="archive_container">
    <div>
      <span>归档/Archives</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      archiveList: null,
      articleList: [
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-09-24',
          like: 20,
          id: 1
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-08-24',
          like: 20,
          id: 2
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-08-22',
          like: 20,
          id: 2
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-08-20',
          like: 20,
          id: 2
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-07-24',
          like: 20,
          id: 3
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-07-24',
          like: 20,
          id: 4
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-06-24',
          like: 20,
          id: 5
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-05-24',
          like: 20,
          id: 6
        }
      ]
    }
  },
  created () {
    this.handle()
  },
  methods: {
    handle () {
      const archiveList = []
      const yearMap = [
        ...new Set(
          this.articleList.map(item => moment(item.date).format('YYYY'))
        )
      ]
      yearMap.forEach((item) => {
        archiveList.push({
          year: item,
          child: []
        })
      })
      archiveList.forEach((item, index) => {
        const month2yearList = this.articleList
          .filter(s => moment(s.date).format('YYYY') === item.year)
        const monthMap = [...new Set(month2yearList.map(s => moment(s.date).format('MM')))]
        monthMap.forEach((s) => {
          archiveList[index].child.push({
            month: s,
            child: []
          })
        })
        archiveList[index].child.forEach((s, i) => {
          const SySmList = month2yearList
            .filter(v => moment(v.date).format('MM') === s.month)
          archiveList[index].child[i] = SySmList
        })
      })
      //   const dayMap = this.articleList.map(item => moment(item.date).format('DD'))
      this.archiveList = archiveList
    }
  }
}
</script>

<style lang='scss' scoped>
.archive_container {
  margin: 64px 500px 0 500px;
}
</style>
