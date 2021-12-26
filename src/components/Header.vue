<template>
    <header>
        <h1 @click="$router.push('/')">Pomodoro Timer</h1>
        <nav class="header-nav">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/settings">Settings</router-link>
        </nav>
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

h1:hover {
    cursor: pointer;
}

.header-nav {
    float: right;
    padding: 10rem;
}
.link {
    text-decoration: none;
    padding: 20rem;
    color: #ffffffde;
}

@media only screen and (max-width: 554px) {
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