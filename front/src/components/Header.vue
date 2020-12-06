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
    @media (min-width: 768px) {
      display: flex;
      align-items: center; 
    }
  }
  &__phone{
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    text-decoration: none;
    color: #000;
    margin: 4px 0 4px auto;
    @media (max-width: 768px) {
      display: none;
    } 
  }
  &__logo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 5px 0;
    @media (min-width: 768px) {
      padding: 0;
      height: 100px;
      justify-content: flex-start;
    }
    img{
      display: block;
      width: 100px;
      margin-right: 15px;
    }
    span{
      font-weight: 500;
      font-size: 14px;
      line-height: 1.25;
      width: 120px;
      padding-top: 4px;
      color: #000;
      @media (min-width: 768px) {
        font-size: 16px;
        padding-top: 10px;
      }
    }
  }
}
</style>