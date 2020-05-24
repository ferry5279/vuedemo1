<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>首页</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>基础管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">管理1</el-menu-item>
          <el-menu-item index="2-2">管理2</el-menu-item>
          <el-menu-item index="2-3">管理3</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>销售</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">销售1</el-menu-item>
          <el-menu-item index="3-2">销售2</el-menu-item>
          <el-menu-item index="3-3">销售3</el-menu-item>
          <el-menu-item index="3-4">销售4</el-menu-item>
           </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>库存</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">库存1</el-menu-item>
          <el-menu-item index="4-2">库存2</el-menu-item>
          <el-menu-item index="4-3">库存3</el-menu-item>
           </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
        <el-menu-item-group>
          <el-menu-item index="5-1">系统管理1</el-menu-item>
          <el-menu-item index="5-2">系统管理2</el-menu-item>
           </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <span>王小虎</span> -->
    </el-header>
    <el-main>
       <router-view />
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
</script>