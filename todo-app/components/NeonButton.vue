<template>
    <button class="kakkoii-button" 
            :style="{'--color': this.color}">
        <slot />
    </button>
</template>

<script>
export default {
  props: {
    color: String
  }
}
</script>

<style scoped>
.kakkoii-button {
  --color: #ff00de;
  
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: white;
  font-size: 1em;
  text-shadow: 0 0 10px #fff, 0 0 20px var(--color);
}

.kakkoii-button:hover {
  text-shadow: 0 0 15px #fff, 0 0 50px var(--color);
}
</style>