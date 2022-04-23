<template>
    <header>
        <div class="icon-container" @click="$router.push('/')">
            <div class="circle"></div>
            <img src="/stopwatch.png" alt="Picture of a stopwatch">
        </div>
        <h1 @click="$router.push('/')">Pomodoro Timer</h1>
        <nav class="header-nav">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/settings">Settings</router-link>
        </nav>
    </header>
</template>

<style scoped>
.icon-container {
    display: inline-block;
    margin-right: 5rem;
    cursor: pointer;
}
.circle {
    display: inline-block;
    background-color: white;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    margin-bottom: -6rem;
}

img {
    height: 38rem;
    margin-bottom: -8rem;
    margin-left: -34rem;
}

header {
    background-color: var(--app-accent-color);
    padding: 20rem 10rem;
    color: var(--text-contrast-color);
}

h1 {
    display: inline;
    margin: 0;
    font-weight: 400;
    cursor: pointer;
}
.header-nav {
    float: right;
    padding: 10rem;
}
.link {
    text-decoration: none;
    padding: 20rem;
    color: var(--text-contrast-color);
}

@media only screen and (max-width: 586px) {
    .header-nav {
        float: none;
        text-align: center;
        padding-bottom: 0rem;
    }
    h1 {
        display: block;
        text-align: center;
    }
    .link {
        padding-top: 10rem;
    }
}
</style>