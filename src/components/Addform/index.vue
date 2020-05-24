<template>
  <div>
    <el-button  icon="el-icon-plus" @click="add">添加供应商</el-button>
      <div>
        <el-dialog :title="title" :visible.sync="showStatus" :center = "true">
          <el-form :model="form = Editdata === null ? form : Editdata" :rules="rules" ref="forms" >
            <el-form-item label="供应商名称" label-width="120px" prop = 'supplierName'>
              <el-input v-model="form.supplierName" autocomplete="off"></el-input>
            </el-form-item>
          <el-form-item label="供应商联系人" label-width="120px" prop = 'supplierContact'>
            <el-input v-model="form.supplierContact" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" label-width="120px" prop = 'phone'>
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" label-width="120px">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="状态" label-width="120px">
            <template>
              <el-radio v-model="form.status" label="1">启用</el-radio>
              <el-radio v-model="form.status" label="0">禁用</el-radio>
            </template>
          </el-form-item>
          <el-form-item label="备注信息" label-width="120px">
            <el-input v-model="form.description" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="resetForm">取 消</el-button>
          <el-button type="primary" @click="addSure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions ,mapMutations } from 'vuex';
export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入供应商"));
      } else {
        callback();
      }
    };
    var validateContact = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入联系人"));
      }  else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入联系电话"));
      }  else {
        callback();
      }
    };
    return {
      form: {
        supplierName: '',
        supplierContact: '',
        phone: '',
        address: '',
        status: '1',
        description: '',
        supplierId:''
      },
      rules: {
        supplierName: [{ required: true, validator: validateName, trigger: 'blur' }],
        supplierContact: [{  required: true,validator: validateContact, trigger: 'blur' }],
        phone: [{ required: true,validator: validatePhone, trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState('home',['showStatus','judge','Editdata','title'])
  },
  methods: {
    ...mapActions('home',['ADD_DATA_ACTION','EDIT_DATA_ACTION']),
    ...mapMutations('home',['CANCEL_STATUS','SHOW_STATUS','EDIT_SHOW_STATUS']),
    add () {
      this['SHOW_STATUS'](0)
        this['EDIT_SHOW_STATUS'](null)
        console.log(this.Editdata)
    },
    addSure () {
      //添加
      if(this.judge === 0){
        this['ADD_DATA_ACTION'](this.form)
         this.$message({
          message: '添加成功',
          type: 'success'
        });
      }else if(this.judge === 1){ 
        //确定修改
        this['EDIT_DATA_ACTION'](this.form)
        this.$message({
          message: '修改成功',
          type: 'success'
        });
      }
    },
    resetForm() {
      this['CANCEL_STATUS']();

    },
  }
}
</script>
