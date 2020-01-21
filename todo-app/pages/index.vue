<template>

  <div class="wrapper">

    <naname-header title="ToDo List" />

    <main>

      <div id="header-space"></div>

      <div class="item" v-for="item in todoList" :key="item.index">
        <span>
          <span class="no-copy">- </span>{{item.title}}
        </span>
        <neon-button class="right" :color="getGradation(item.index, todoList.length)">
          <i class="fa fa-trash" ></i>削除
        </neon-button>
        <neon-button class="right" :color="getGradation(item.index, todoList.length)">
          <i class="fa fa-edit"></i>説明
        </neon-button>
      </div>

      <div class="item center">
        <neon-button>
          <i class="fa fa-plus-square"></i>追加
        </neon-button>
      </div>

    </main>

  </div>
  
</template>

<script>
import NeonButton from '~/components/NeonButton.vue'
import NanameHeader from '~/components/NanameHeader.vue'

export default {
  components: {
    NeonButton,
    NanameHeader
  },
  methods: {
    getGradation(index, length) {
      const baseHue        = 307
      const baseSaturation = 100
      const baseLightness  = 50
      let hue = 360 / length * index + baseHue % 360
      return `hsl(${hue}, ${baseSaturation}%, ${baseLightness}%)`
    }
  },
  data() {
    return {
      todoList: [
        {
          index: 0,
          title: 'トイレットペーパー',
          content: ''
        },
        {
          index: 1,
          title: '醤油',
          content: ''
        },
        {
          index: 2,
          title: 'TODOリスト作成',
          content: ''
        },
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
