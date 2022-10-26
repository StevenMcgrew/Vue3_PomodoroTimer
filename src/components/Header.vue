<template>
    <header>
        <h1 @click="$router.push('/')">
            <div class="icon-container">
                <div class="circle"></div>
                <img src="/stopwatch.png" alt="Picture of a stopwatch">
            </div>
            Pomodoro Timer
        </h1>
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
    margin-right: 0.3125rem;
}
.circle {
    display: inline-block;
    background-color: white;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    margin-bottom: -0.375rem;
}
img {
    height: 2.375rem;
    margin-bottom: -0.5rem;
    margin-left: -2.125rem;
}
header {
    background-color: var(--app-accent-color);
    padding: 1.25rem 0.625rem;
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
    padding: 0.625rem;
}
.link {
    text-decoration: none;
    padding: 1.25rem;
    color: var(--text-contrast-color);
}
@media only screen and (max-width: 620px) {
    .header-nav {
        float: none;
        text-align: center;
        padding-bottom: 0;
    }
    h1 {
        display: block;
        text-align: center;
        margin-left: -2.6875rem;
    }
    .link {
        padding-top: 0.625rem;
    }
}
</style>