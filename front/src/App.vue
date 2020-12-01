<template>
  <div id="app">
    <Header/>
    <main class="main" ref="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" src="./assets/scss/style.scss"></style>
<style lang="scss" scoped>
#app{
  color: #000;
  line-height: 1.3;
  font-size: 14px;
  position: relative;
  background: #fff;
}
.main{
  padding: 30px 0;
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
}
</style>