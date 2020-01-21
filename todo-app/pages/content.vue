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