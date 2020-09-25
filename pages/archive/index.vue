<template>
  <div class="archive_container">
    <div class="archives">
      <span>归档/Archives</span>
    </div>
    <div v-for="item4year in archiveList" :key="item4year.year" class="list">
      <h1 class="year">
        {{ item4year.year }}年
      </h1>
      <ul
        v-for="(item4month, index) in item4year.child"
        :key="index"
        class="month_ul"
      >
        <li>
          <span
            class="month"
          >{{ item4month[0].date | timeformat("MM") }}月
            ({{ item4month.length }}篇文章)</span>
          <ul class="day_list">
            <li v-for="item4day in item4month" :key="item4day.id" class="a_hover">
              <span class="day">{{ item4day.date | timeformat("DD") }}日</span>
              <span>{{ item4day.title }}</span>
              (<span><a-icon type="eye" />{{ item4day.pv }}</span>/
              <span><a-icon type="like" />{{ item4day.like }}</span>)
            </li>
          </ul>
        </li>
      </ul>
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
          id: 3
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-08-20',
          like: 20,
          id: 4
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2020-07-24',
          like: 20,
          id: 5
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-07-24',
          like: 20,
          id: 6
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-06-24',
          like: 20,
          id: 7
        },
        {
          title: 'GraphQL 实现递归查询',
          pv: 1876,
          date: '2019-05-24',
          like: 20,
          id: 8
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
        const month2yearList = this.articleList.filter(
          s => moment(s.date).format('YYYY') === item.year
        )
        const monthMap = [
          ...new Set(month2yearList.map(s => moment(s.date).format('MM')))
        ]
        monthMap.forEach((s) => {
          archiveList[index].child.push({
            month: s,
            child: []
          })
        })
        archiveList[index].child.forEach((s, i) => {
          const SySmList = month2yearList.filter(
            v => moment(v.date).format('MM') === s.month
          )
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
  .archives {
    font-size: 25px;
    text-align: center;
    color: #676767;
  }
  .list {
    position: relative;
    & > ul {
      margin-bottom: 0;
    }
    .year {
      margin-left: 140px;
      margin-bottom: 0;
    }
    .month_ul {
      position: relative;
      li{
        list-style-type: none;
      }
      &::before {
        max-height: 100%;
        height: 100%;
        width: 4px;
        background: #6ecaf5;
        position: absolute;
        left: 160px;
        content: "";
        top: 0;
        box-shadow: 0px 0px 3px #bbb;
      }
      .month {
        position: relative;
        font-size: 16px;
        color: black;
        font-weight: bold;
        &::before {
          position: absolute;
          left: 113px;
          background: #fff;
          height: 18px;
          width: 18px;
          border-radius: 9px;
          top: 3px;
          content: "";
          box-shadow: 0px 0px 3px #bbb;
        }
        &::after {
          position: absolute;
          left: 116px;
          background: #0bf;
          height: 12px;
          width: 12px;
          border-radius: 6px;
          top: 6px;
          content: "";
        }
      }
      .day_list {
        margin-left: 100px;
        font-size: 15px;
        cursor: pointer;
        li {
          list-style-type: none;
          position: relative;
          &::before {
            position: absolute;
            left: -24px;
            background: #fff;
            height: 12px;
            width: 12px;
            border-radius: 6px;
            top: 6px;
            content: "";
            box-shadow: 0px 0px 3px #bbb;
          }
          &::after {
            position: absolute;
            left: -22px;
            background: #0bf;
            height: 8px;
            width: 8px;
            border-radius: 6px;
            top: 8px;
            content: "";
          }
        }
        .day{
          color:#0bf
        }
      }
    }
  }
}
</style>
