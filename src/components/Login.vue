<template>
    <div class="margin" style="width: 727px;margin: 0 auto">
<div class="container">
	<header data-am-widget="header" class="am-header am-header-default my-header">
      <div class="am-header-left am-header-nav">
        <a href="javascript:;"  class="iconfont pet_head_jt_ico"><router-link to="/" onclick="location.reload()">
            <i class="am-header-icon am-icon-chevron-left"></i>
        </router-link>
          
        </a>
      </div>
      <h1 class="am-header-title">
        <a href="#title-link" class="">用户登录</a>
      </h1>
      <div class="am-header-right am-header-nav">
        <a href="#right-link" class="">
          <i class="am-header-icon  am-icon-home"></i>
        </a>
      </div>
    </header>
    <div class="cart-panel">
		<form class="am-form">
            <div class="am-form-group am-form-icon">
                <i class="am-icon-user" style="color:#329cd9"></i>
                <input type="text" class="am-form-field  my-radius" placeholder="请输入您的用户名" v-model="username">
            </div>
            <div class="am-form-group am-form-icon">
                <i class="am-icon-lock" style="color:#329cd9"></i>
                <input type="password" class="am-form-field  my-radius" placeholder="请输入您的密码" v-model="password">
            </div>
            <div class="am-checkbox">
              <label>
                <input type="checkbox"> 记住密码
              </label>
            </div>
            <p class="am-text-center"><button type="submit" class="am-btn am-btn-danger am-radius am-btn-block" @click="login">立即登录</button></p>
            <p class="haha"><router-link to="/reg"><button type="submit" class="am-btn am-btn-danger am-radius am-btn-block">立即注册</button></router-link></p>
        </form>
    </div>
 </div>  
</div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      error:''
    }
  },
  methods:{
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{username:this.username,password:this.password}
      }).then(
        res=>{
          if(res.data.error==0){
            console.log('...',res.data.data.username)
            this.$router.push('/user',location.reload())
          }else{
            this.error=res.data.msg
          }
        }
      )
    }
  }
}
</script>

