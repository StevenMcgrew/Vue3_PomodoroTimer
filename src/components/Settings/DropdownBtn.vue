<script setup>



</script>

<template>
    <button :class="$store.state.showSettings ? 'active' : ''" 
            @click="$store.commit('toggleSettingsVisibility')">
    Settings
    </button>
</template>

<style scoped>
button {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}
button:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: #777;
    float: right;
    margin-left: 5px;
}
.active {
    background-color: #ccc;
}
.active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
}
</style>