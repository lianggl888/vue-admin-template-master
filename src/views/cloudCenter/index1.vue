<template>
  <div class="app-container">
    <div class="background">
      <div class="head">
        <div class="inputGroup">
          <div class="filter-container">
            <el-form ref="elForm" size="medium" label-width="100px">
              <el-row type="flex" justify="start" align="top">
                <el-col :span="4.5">
                  <el-form-item label-width="100px" label="条件1" prop="obuSn">
                    <el-input v-model="postData.string1" placeholder="条件1" clearable :style="{width: '100%'}"/>
                  </el-form-item>
                </el-col>
                <el-col :span="4.5">
                  <el-form-item label-width="100px" label="条件2" prop="iccid">
                    <el-input v-model="postData.string2" placeholder="条件2" clearable :style="{width: '100%'}"/>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="buttonGroupA">
          <el-button
            class="filter-item"
            type="primary"
            icon="el-icon-search"
            size="mini"
            :loading="searchLoading"
            @click="handleSearch"
          >搜索
          </el-button>
          <el-button
            class="filter-item"
            icon="el-icon-switch-button"
            size="mini"
            style="margin-left:8px"
            @click="handleReset"
          >重置
          </el-button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="buttonGroupB">
        <el-button-group>
          <el-button
            class="filter-item"
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="handleAdd"
          >添加
          </el-button>
        </el-button-group>
      </div>
      <div class="table">
        <el-table
          ref="multipleTable"
          v-loading="listLoading"
          border
          fit
          :data="list"
          tooltip-effect="light"
          style="width: 100%"
          :header-cell-style="{background:'#fafafa',color:'#252525'}"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            align="center"
            type="selection"
            width="55"
          />
          <el-table-column
            v-if="show"
            align="center"
            prop="obuId"
            label="OBU Id"
            min-width="40"
          />
          <el-table-column
            v-if="show"
            align="center"
            prop="obuId"
            label="OBU Id"
            min-width="40"
          />
          <el-table-column
            align="center"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button-group>
                <el-tooltip content="查看" effect="dark" placement="bottom">
                  <el-button icon="el-icon-view" size="mini" type="primary" @click="handleView(scope.row)" />
                </el-tooltip>
                <el-tooltip content="编辑" effect="dark" placement="bottom">
                  <el-button icon="el-icon-edit" size="mini" type="primary" @click="handleEdit(scope.row)" />
                </el-tooltip>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            class="t-c"
            :page-size="postData.pageSize"
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="postData.pageNum"
            :total="total"
            :style="display"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtaManager',
  data() {
    return {
      searchLoading: false,
      listLoading: false,
      list: [
        {
          obuId: '123'
        }
      ],
      show: true,
      multipleSelection: [],
      postData: {
        string1: '',
        string2: '',
        pageNum: 1,
        pageSize: 10
      },
      total: 0,
      display: {
        display: 'none'
      }
    }
  },
  mounted() {
  },
  methods: {
    handleSearch() {

    },
    handleAdd() {

    },
    getList() {

    },
    handleSizeChange(val) {
      this.postData.pageSize = val
      this.getList()
    },
    handleCurrentChange(currentPage) {
      this.postData.pageNum = currentPage
      this.getList()
    },
    handleSelectionChange: function(val) { // 选中的数据
      this.multipleSelection = val
    },
    handleReset() {
      this.getList()
      for (const item in this.postData) {
        this.postData[item] = null
      }
      this.devModels = []
      this.postData.pageNum = 1
      this.postData.pageSize = 10
    },
    handleView() {

    },
    handleEdit() {

    }
  }
}
</script>

<style scoped>

</style>
