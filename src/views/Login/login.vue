<template>
  <div class="main">
      <div class="content">
            <h3>个人博客:</h3>
            <div class="user">
                <el-input
                placeholder="请输入账号"
                v-model="input1"
                :disabled="false">
                </el-input>
            </div>
            <div class="pwd">
                <el-input
                placeholder="请输入密码"
                v-model="input"
                :disabled="false">
                </el-input>
            </div>
            <div class="login_box">
                <el-button @click="btn">登录</el-button>
            </div>
      </div>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            input1:'',
            input:''
        }
    },
    methods:{
        btn(){
            alert(11)
            this.$router.push({name:'Main'})
        }
    }
}
</script>

<style scoped>
.main{
    width:450px;
    height:450px;
    border:3px solid orange;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-225px;
    margin-top:-225px;
    padding:30px 50px;
}
.content{
    width:460px;
    height:460px;
}
.content>h3{
    font-size:30px; 
    font-weight:bold;
    padding-bottom:30px;
    color:#fb3333;
}
.user{
    margin-top:20px;
    margin-left:10px;
    background:none;
}
.user>.el-input{
    width:100%;
    background:none;
    outline:none;
    border:1px solid #ccc;
    border:none;
}
.el-input{
    height:50px;
}
.el-input__inner{
    height:50px!important;
    line-height:50px!important;
}
.pwd{
    margin-top:30px;
    margin-left:10px;
}
.login_box{
    margin-top:30px;
    margin-left:10px;
}
.el-button{
    width:100%;
    height:50px;
    border:none;
    border-radius:5px;
    background:#fd6013;
    font-size:20px;
    font-weight:bold;
    color:#fff;
}
</style>
