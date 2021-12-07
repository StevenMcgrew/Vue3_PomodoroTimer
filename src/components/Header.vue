<template>
    <header>
        <h1>Pomodoro Timer</h1>
        <router-link class="header-nav" to="/about">About</router-link>
        <router-link class="header-nav" to="/settings">Settings</router-link>
    </header>
</template>

<style scoped>
header {
    background-color: rgb(84 110 122);
    padding: 20rem 10rem;
    color: #ffffffde;
}

h1 {
    display: inline;
    margin: 0;
    font-weight: 400;
}

.header-nav {
    text-decoration: none;
    float: right;
    padding: 10rem 20rem;
    color: #ffffffde;
}
</style>