<template>
  <div class="tableone">
    <div class="content">
      <!-- header -->
      <div class="header">
        <span class="title">表格一</span>
      </div>
      <!-- table -->
      <el-table class="table" :data="tableData" stripe border highlight-current-row>
        <el-table-column prop="type" label="类型" width="120px"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="datetime" label="时间" :formatter="formatTime"></el-table-column>
        <el-table-column  label="操作" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="checkDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- pagination -->
      <el-pagination class="pagination" background layout="prev, pager, next, jumper, ->, total" 
        :total="count"
        :current-page.sync="page" 
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableone',
  data(){
    return {
      // table
      tableData: [
        { 
          id: '1',
          name: "sea",
          type: '1',
          address: '北京',
          datetime: "2018-12-05 12:30:00",
        }
      ],
      // pagination
      page: 1, // 当前页
      pages: 0, // 总页数
      count: 0, // 总数
    }
  },
  mounted() {
    this.$nextTick(function(){
      // this.getData()
    })
  },
  methods: {
    // 获取所有数据
    getData() {
      let params = { page: this.page, per_page: 10 }
      this.$store.dispatch('enterprise/GetData', params)
        .then(res => {
          let data = res.data
          if (data.code === 2000) {
            this.tableData = data.data
            this.count = data.count
            this.pages = data.pages
          }
        }).catch(err => { console.log(err)})
    },
    // 格式化类型
    formatTime(row){
      let type= row.type
      switch(type){
        case 1:
          return '高级管理员'
          break
        case 1:
          return '普通管理员'
          break
        default:
          return '普通管理员'
          break
      }
    },
    // 查看详情
    checkDetail(row){
      console.log(row)
    },
    // 分页
    handleCurrentChange(val) {
      this.page = val
      this.isSearchFlag ? this.searchChannelAccount() : this.getChannelAccountAll()  
    }
  }
}
</script>

<style lang="scss" scoped>
.tableone{
  .content{
    width: 100%;
    min-width: 1150px;
    min-height: 700px;
    padding: 20px;
    background-color: #fff;
    // header
    .header{
      .title{
        color: #333;
        font-size: 18px;
        font-weight: 500;
      }
    }
    // table
    .table{
      color: #999;
      margin: 25px 0;
      font-size: 14px;
    }
  }
}
</style>
