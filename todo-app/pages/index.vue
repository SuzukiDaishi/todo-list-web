<template>
  <div class="wrapper">
    <header>
      <div id="header-title">
        <h1>ToDo List</h1>
      </div>
    </header>
    <main>
      <div id="header-space"></div>
      <div class="item" v-for="item in todoList" :key="item.index">
        <span>
          <span class="no-copy">- </span>{{item.title}}
        </span>
        <button class="kakkoii-button right">
          <i class="fa fa-trash"></i>削除
        </button>
        <button class="kakkoii-button right">
          <i class="fa fa-edit"></i>説明
        </button>
      </div>
      <div class="item center">
        <button class="kakkoii-button">
          <i class="fa fa-plus-square"></i>追加
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        {
          index: 1,
          title: 'ああああああああああ',
          content: ''
        },
        {
          index: 2,
          title: 'いいいいい',
          content: ''
        },
        {
          index: 3,
          title: 'ううううう',
          content: ''
        },
        {
          index: 4,
          title: 'えええええ',
          content: ''
        },
        {
          index: 5,
          title: 'おおおおお',
          content: ''
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

.wrapper {
  width: 100vw;
  height: 100vh;
}

html, body {
  overscroll-behavior: none;
  background: #222222;
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
  overflow-y: scroll;
  color: white;
}

#header-space {
  max-height: 300px;
  height: 20vh;
}

.item {
  margin: 0 auto;
  margin-top: 1vh;
  width: 80vw;
  height: 10vh;
  font-size: 2em;
}

.item>span {
  width: 70vw;
}

.kakkoii-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: white;
  font-size: 1em;
  text-shadow: 0 0 10px #fff, 0 0 20px #ff00de;
}

.kakkoii-button:hover {
  text-shadow: 0 0 15px #fff, 0 0 50px #ff00de;
} 

.right {
  float: right;
  margin-right: 2vw;
}

.no-copy {
  user-select: none;
}

.center {
  text-align: center;
}

</style>
