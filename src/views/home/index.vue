<template>
 <div class="home">
   <Addform  ref="Addform"/>
    <template>
      <el-table :data="data"  border  style="width: 100%" align="center">
        <el-table-column prop="supplierId" label="ID"/> 
        <el-table-column  prop="supplierName"  label="供应商" />
        <el-table-column prop="supplierContact" label="联系人"  />
        <el-table-column prop="phone" label="联系电话"/> 
        <el-table-column prop="address" label="详细地址"/> 
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status === '0' ? 'primary' : 'success'"
              disable-transitions>{{ scope.row.status | statusJudge }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述"/> 
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button  type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button  type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column> 
      </el-table>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import Addform from '@/components/Addform';
import './style.less'
  export default {
    created () {
      this['DEFAULT_DATA_ACTION']()
    },
    filters: {
      statusJudge:function (value){
        return Number(value) === 1 ? '启用' : '禁用'
      }
    },
    components: {
      Addform
    },
    computed: {
      ...mapState('home',['data','showStatus','Editdata'])
    },
    methods: {
      ...mapActions('home',['DEFAULT_DATA_ACTION','DELETE_DATA_ACTION']),
      ...mapMutations('home',['SHOW_STATUS','EDIT_SHOW_STATUS','GET_EDIT_DATA']),
      //删除
      handleDelete(index, row) { 
        this['DELETE_DATA_ACTION']({id:row.supplierId})
      },
      //修改
      handleEdit : function (index, row) { 
        this['SHOW_STATUS'](1)
        this['EDIT_SHOW_STATUS'](row)
      },
    }
    
  }
</script>
