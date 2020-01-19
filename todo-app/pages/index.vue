<template>
  <div class="wrapper">
    <header>
      <div id="header-title">
        <h1>ToDo List</h1>
      </div>
    </header>
    <main class=".container">
      <div id="header-space"></div>
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

.wrapper {
  background: #222222;
  width: 100vw;
  height: 100vh;
}

html {
  overscroll-behavior: none;
}

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

main {
  background: #f00;
  overflow-y: scroll;
  
}

#header-space {
  max-height: 300px;
  height: 20vh;
}
.container {
  display: flex;
}
.item {
  margin: 0 auto;
  margin-top: 1vh;
  width: 80vw;
  height: 20vh;
  background: #00f;
}

</style>
