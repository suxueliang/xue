<template>
  <div class="content">
    <el-container>
        <el-header>
            <h3>个人博客</h3>
            <div class="right">
                <a href="">登录</a>
                <a href="">注册</a>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <el-menu :default-openeds="['1', '4']" 
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>文章管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="1-1">添加文章</el-menu-item>
                    <el-menu-item index="1-2">文章列表</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">文章介绍</template>
                    <el-menu-item index="1-4-1">文学</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="2-1">增加一级分类</el-menu-item>
                    <el-menu-item index="2-2">增加二级分类</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="2-3">分类列表</el-menu-item>
                    </el-menu-item-group>
                    <!-- <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item> -->
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>接口管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">增加接口文档</el-menu-item>
                    <el-menu-item index="3-2">前台接口列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="3-3">后台接口列表</el-menu-item>
                    </el-menu-item-group>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>留言板管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="4-1">个人简介留言</el-menu-item>
                    <el-menu-item index="4-2">博客留言</el-menu-item>
                    </el-menu-item-group>
                    </el-menu-item-group>
                    <!-- <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item> -->
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    methods:{
        addArticle(){
          alert(11)
        }
    }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  width:100%;
  height:100px;
  line-height:60px;
  background:rgba(111, 160, 136, 0.92);
}
.el-header > h3 {
  display: inline-block;
  color: #fff;
  font-size: 22px;
}
.el-header > .right {
  float: right;
}
.right > a {
  font-size: 18px;
  color: #000;
}
.right > a:hover {
  color: #fff;
  text-decoration: underline;
}
.el-aside {
}
.el-submenu [class^=el-icon-]{
    font-size:22px;
}
.el-submenu__title i{
    font-size:20px;
}
.el-submenu__title{
    font-size:18px;
}
</style>
