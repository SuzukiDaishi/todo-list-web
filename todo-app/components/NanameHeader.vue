<template>
  <header> 
    <div id="header-title">
      <h1>{{ this.title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    /** タイトルを入力すると反映 */
    title: String
  }
}
</script>

<style scoped>
/** ヘッダーは斜めで縦にグラデーション */
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
header {
  position:fixed;
  width: 100vw;
  max-height: 300px;
  height: 20vh;
  background: 
    linear-gradient(#9437FF, #7A81FF);
  transform: skewY(-3deg);
  transform-origin: top left;
}
header>#header-title {
  text-align: center;
  transform: skewY(3deg);
  transform-origin: top left;
}
header>#header-title>h1 {
  margin: 2vw;
  font-size: 3.5em;
  color: white;
  text-shadow: black 0 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
}
</style>