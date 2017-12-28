<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="文章标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="一级类名" prop="region1">
    <el-select v-model="ruleForm.region1" placeholder="请选择" @change='changes(ruleForm.region1)'>
    <el-option
      v-for="item in list1"
      :key="item.value"
      :label="item.cnname"
      :value="item.enname"
      >
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="二级类名" prop="region2">
    <el-select v-model="ruleForm.region2" placeholder="请选择">
    <el-option
      v-for="item in listData"
      :key="item.value"
      :label="item.nnname"
      :value="item.cnname">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="是否显示" prop="resource1">
    <el-radio-group v-model="ruleForm.resource1">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
 <el-form-item label="是否推荐" prop="resource2">
    <el-radio-group v-model="ruleForm.resource2">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
 </el-form-item>
 <el-form-item label="作者" prop='author'>
    <el-input  placeholder="请输入内容" v-model="ruleForm.author"></el-input>
</el-form-item>
  <el-form-item label="导读" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入内容"></el-input>
     <div id="editor"></div>  
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="内容" prop="content">
    <el-input type="textarea" v-model="ruleForm.content"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('formName')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {};
</script>

<style>

</style>
