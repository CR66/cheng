<template>
    <div style="width:727px; margin:0 auto">
<div class="container">
	<header data-am-widget="header" class="am-header am-header-default my-header">
      <div class="am-header-left am-header-nav">
        <a href="javascript:;" onclick="window.history.go(-1)" class="">
          <i class="am-header-icon am-icon-chevron-left"></i>
        </a>
      </div>
      <h1 class="am-header-title">
        <a href="#title-link" class="">用户注册</a>
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
                <input type="text" class="am-form-field  my-radius" placeholder="请输入您的用户名" required v-model="username">
            </div>
            <div class="am-form-group am-form-icon">
                <i class="am-icon-lock" style="color:#329cd9"></i>
                <input type="password" class="am-form-field  my-radius" placeholder="请输入您的密码" required v-model="password">
            </div>
            <div class="am-form-group am-form-icon">
                <i class="am-icon-lock" style="color:#e9c740"></i>
                <input type="password" class="am-form-field  my-radius" placeholder="请重复输入一次密码" required>
            </div>
            <div class="am-form-group am-form-icon">
                <i class="am-icon-envelope" style="color:#78c3ca"></i>
                <input type="text" class="am-form-field  my-radius" placeholder="请输入邮箱号码" required>
            </div>
            <div class="am-form-group am-form-icon">
                <i class="am-icon-phone" style="color:#f09513"></i>
                <input type="text" class="am-form-field  my-radius" placeholder="请输入联系电话" required>
            </div>
            <div class="am-checkbox">
              <label>
                <input type="checkbox"> 我已阅读并同意<a href="#">《协议》</a>
              </label>
            </div>
            <p class="am-text-center"><button type="submit" id="haha1" class="am-btn am-btn-danger am-radius am-btn-block" @click="reg">立即注册</button></p>
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
    reg(){
      var form_data = new FormData();
      form_data.append('username',this.username);
      form_data.append('password',this.password);
      axios({
        url:'/api/reg',
        method:'post',
        data:form_data
      }).then(
        res=>{
          console.log(1,res)
          if(res.data.error==0){
            this.$router.push('/login')
          }else{
            this.error=res.data.msg
            alert(res.data.msg)
          }
        }
      )
    }
  }
}
</script>

