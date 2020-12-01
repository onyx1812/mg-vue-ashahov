<template>
  <header class="main-header">
    <div class="container">
      <a href="https://ashahov.ru/" class="main-header__logo" target="_blank">
        <img src="@/assets/img/logo.png" alt="" >
        <span>Психолог Александр Шахов</span>
      </a>
      <a class="main-header__phone" href="tel:+78002004478">8 (800) 200-44-78</a>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.main-header{
  background: #fff;
  box-shadow: 0 0 16px rgba(0,0,0, .4);
  .container{
    display: flex;
    align-items: center;
  }
  &__phone{
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    text-decoration: none;
    color: #000;
    margin: 4px 0 4px auto;
  }
  &__logo{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100px;
    text-decoration: none;
    img{
      display: block;
      width: 100px;
      margin-right: 15px;
    }
    span{
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      width: 120px;
      padding-top: 10px;
      color: #000;
    }
  }
}
</style>