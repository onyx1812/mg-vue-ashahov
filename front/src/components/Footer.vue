<template>
  <footer class="main-footer" >
    <div class="container">
      <small>©2021 Все права защищены</small>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.main-footer{
  background: #fff;
  small{
    font-weight: 700;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 10px 0;
    @media (min-width: 768px) {
      padding: 0;
      font-size: 14px;
      height: 60px;
    }
  }
}
</style>