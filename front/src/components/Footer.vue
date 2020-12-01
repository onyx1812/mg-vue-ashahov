<template>
  <footer class="main-footer" >
    <div class="container">
      <small>©2020 Александр Шахов. Все права защищены</small>
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
    font-size: 14px;
    height: 60px;
    display: flex;
    align-items: center;
  }
}
</style>