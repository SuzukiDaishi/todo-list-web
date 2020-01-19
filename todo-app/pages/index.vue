<template>
  <div class="wrapper">
    <header>
      <div id="header-title">
        <h1>TODO LIST</h1>
      </div>
      <div id="header-bottom"></div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style>
header {
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
  padding: 2vw;
  font-size: 3em;
  color: white;
  text-shadow: black 0 0 5px;
}
.wrapper {
  background: #222222;
  width: 100vw;
  height: 100vh;
}
</style>
