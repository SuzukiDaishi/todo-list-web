<template>
    <div class="wrapper">
        <naname-header title="ToDo List"/>

        <div id="header-space"></div>

        <form @submit.prevent>

            <div id="title">
                <label>タイトル</label>
                <br />
                <input type="text" v-model="title"/>
            </div>

            <div id="content">
                <label>詳細</label>
                <br />
                <textarea cols="50" rows="5" wrap="soft" v-model="content"/>
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
    data() {
        return  {
            title: '',
            content: ''
        }
    },
    methods: {
        submit() {
            this.$store.commit('addTodo', {
                title: this.title, 
                content: this.content
            })
            this.$router.push('/')
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