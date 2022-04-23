<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const progress = computed({
    get() {
        return store.state.progress.length
    },
    set(value) {
        //
    }
})

</script>

<template>
    <div class="icon-bar-root">
        <div class="icons-container">
            <i class="fa-solid fa-computer" :class="{ active: progress === 1, completed: progress > 1 }"></i>
            <i class="fa-solid fa-mug-hot" :class="{ active: progress === 2, completed: progress > 2 }"></i>
            <i class="fa-solid fa-computer" :class="{ active: progress === 3, completed: progress > 3 }"></i>
            <i class="fa-solid fa-mug-hot" :class="{ active: progress === 4, completed: progress > 4 }"></i>
            <i class="fa-solid fa-computer" :class="{ active: progress === 5, completed: progress > 5 }"></i>
            <i class="fa-solid fa-mug-hot" :class="{ active: progress === 6, completed: progress > 6 }"></i>
            <i class="fa-solid fa-computer" :class="{ active: progress === 7, completed: progress > 7 }"></i>
            <i class="fa-solid fa-person-walking" :class="{ active: progress === 8, completed: progress > 8 }"></i>
        </div>
    </div>
</template>

<style scoped>
.icon-bar-root{
    width: 90%;
}
.icons-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30rem;
}
i {
    line-height: 28px;
    padding: 3rem 5rem;
    margin: 0 5rem;
    color: lightgray;
    font-size: 22rem;
    border-radius: 8rem;
}
.active {
    color: var(--app-accent-color);
    box-shadow: orange 0rem 0rem 4px 5px;
}
.completed {
    color: var(--app-accent-color);
}
@media only screen and (min-width: 900px) {
    i {
        line-height: 40rem;
        font-size: 34rem;
    }
}
</style>