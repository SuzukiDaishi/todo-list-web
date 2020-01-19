# 作成の流れ

## 1. 簡単な要件定義

- テーマ
  - 「TODOリスト」
- 機能
  - TODOメモ
    - タイトル
    - 詳細
    - 時間
  - TODOの一覧表示
- ページ
  - TODOリスト
  - TODOの詳細
  - TODOの作成
- 構成
  - フロントエンド
    - Nuxt
  - バックエンド
    - Node.js
    - Express
  - データベース
    - SQLite

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

pages/index.vue

```html:pages/index.vue
<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
```

layouts/default.vue

```html:layouts/default.vue
<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import '@/assets/css/reset.css';
</style>
```

assets/css/reset.css

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

## 参考にしたページ

[可愛くてメランコリック？夢見る女子にぴったりな「ゆめかわいい」配色パターン10選](https://t1200.jp/blog/design/design_tips/8905.html)
[おすすめリセットCSS 5選 2019年版 【コピペで使える】](http://shiru-web.com/2017/04/21/01-26/)
