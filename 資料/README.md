# 作成の流れ

## 1. 簡単な要件定義

- テーマ
  - 「TODOリスト」
- 機能
  - TODOメモ
    - タイトル
    - 詳細
  - TODOの一覧表示
- ページ
  - TODOリスト
  - TODOの詳細
  - TODOの作成
- 構成
  - フロントエンド
    - Nuxt
  - 今回は実装しないがこのまま作るとしたら
    - バックエンド
      - Node.js
      - Express
    - データベース
      - SQLite
- 使用環境
  - PC
  - Chrome
  - 日本語
  - それ以外は追々と...

## 2. フロントエンドの作成

node及びnpmが導入済みの前提で話を進めます

```bash
npm install -g @vue/cli
npx create-nuxt-app todo-app
# Enter連打
cd todo-app
npm run dev
# http://localhost:3000
```

これでサーバが起動したと思います。
次にCSSをリセットしてハロワしたいと思います。

### pages/index.vue

```html:pages/index.vue
<template>
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
```

### layouts/default.vue

```html:layouts/default.vue
<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import '@/assets/css/reset.css';
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
```

### assets/css/reset.css

```css:assets/css/reset.css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

これでハローワールドできました

### components/NanameHeader.vue

```html
<template>

  <div class="wrapper">
    
    <naname-header title="ToDo List" />

    <main>

      <div id="header-space"></div>

      <div class="item" v-for="item in todoList" :key="item.index">
        <span>
          <span class="no-copy">- </span>{{item.title}}
        </span>
        <neon-button class="right" 
                     :color="getGradation(item.index, todoList.length)">
          <i class="fa fa-trash" ></i>削除
        </neon-button>
        <neon-button class="right" 
                     :color="getGradation(item.index, todoList.length)"
                     @click.native="$router.push({ path: '/content', query: item })">
          <i class="fa fa-edit"></i>説明
        </neon-button>
      </div>

      <div class="item center">
        <neon-button @click.native="$router.push('/add')">
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
          content: 'トイレのやつなくなってたので買ってくる(2まい)'
        },
        {
          index: 1,
          title: '醤油',
          content: '今日の夜はエリンギを焼きたい'
        },
        {
          index: 2,
          title: 'TODOリスト作成',
          content: 'これ作らねば...'
        },
      ]
    }
  }
}
</script>

<style>
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
```

これでクールでかっこいいToDoListが完成しました
他のページも作っていきます。

### pages/add.vue

```html
<template>
    <div class="wrapper">
        <naname-header title="ToDo List"/>

        <div id="header-space"></div>

        <form @submit.prevent>

            <div id="title">
                <label>タイトル</label>
                <br />
                <input type="text" />
            </div>

            <div id="content">
                <label>詳細</label>
                <br />
                <textarea cols="50" rows="5" wrap="soft" />
            </div>

            <div class="button-wrapper">
                <neon-button color="hsl(187,100%,50%)"
                             @click.native="$router.push('/')">
                    戻る
                </neon-button>
                <neon-button type="submit" 
                             @click.native="submit">
                    確定
                </neon-button>
            </div>

        </form>

    </div>
</template>

<script>
import NanameHeader from '~/components/NanameHeader.vue'
import NeonButton from '~/components/NeonButton.vue'

export default {
    components: {
        NanameHeader,
        NeonButton
    },
    methods: {
        submit() {}
    }
}
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
}

html, body {
  overscroll-behavior: none;
  background: #222222;
}

#header-space {
  max-height: 300px;
  height: 20vh;
}

form {
    color: white;
}

#title {
    width: 100%;
    padding-left: 30%;
    margin-top: 20px;
    font-size: 1.8em;
}

#title>input[type="text"] {
    width: 40%;
    margin-top: 10px;
    font-size: 80%;
}

#content {
    width: 100%;
    padding-left: 30%;
    margin-top: 20px;
    font-size: 1.8em;
}

#content>textarea {
    width: 40%;
    margin-top: 10px;
    font-size: 80%;
    height: 4.5em;
    resize: none;
}

.button-wrapper {
    width: 100%;
    font-size: 1.8em;
    text-align: center;
    margin-top: 20px;
}

.button-wrapper>:first-child {
    margin-right: 40px;
}

</style>
```

### pages/content.vue

```html
<template>
    <div class="wrapper">
        <naname-header title="ToDo List"/>

        <div id="header-space"></div>

        <div id="content-box">

            <div id="title">
                <label>タイトル</label>
                <br />
                <input type="text" readonly :value="$route.query.title"/>
            </div>

            <div id="content">
                <label>詳細</label>
                <br />
                <textarea cols="50" rows="5" wrap="soft" readonly
                          :value="$route.query.content"/>
            </div>

            <div class="button-wrapper">
                <neon-button color="hsl(187,100%,50%)"
                             @click.native="$router.push('/')">
                    戻る
                </neon-button>
            </div>

        </div>

    </div>
</template>

<script>
import NanameHeader from '~/components/NanameHeader.vue'
import NeonButton from '~/components/NeonButton.vue'

export default {
    components: {
        NanameHeader,
        NeonButton
    },
    methods: {
        submit() {}
    }
}
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
}

html, body {
  overscroll-behavior: none;
  background: #222222;
}

#header-space {
  max-height: 300px;
  height: 20vh;
}

#content-box {
    color: white;
}

#title {
    width: 100%;
    padding-left: 30%;
    margin-top: 20px;
    font-size: 1.8em;
}

#title>input[type="text"] {
    width: 40%;
    margin-top: 10px;
    font-size: 80%;
}

#content {
    width: 100%;
    padding-left: 30%;
    margin-top: 20px;
    font-size: 1.8em;
}

#content>textarea {
    width: 40%;
    margin-top: 10px;
    font-size: 80%;
    height: 4.5em;
    resize: none;
}

.button-wrapper {
    width: 100%;
    font-size: 1.8em;
    text-align: center;
    margin-top: 20px;
}


</style>
```

ここまでできればページは全て実装完了です
後は機能を実装すれば完成です。

