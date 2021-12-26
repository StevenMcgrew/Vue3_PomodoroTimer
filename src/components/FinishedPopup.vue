<script setup>

</script>

<template>
    <teleport to="body">
        <div
            v-if="$store.state.isShowFinishedPopup"
            @click="$store.commit('prepareNextTimerMode')"
            class="finished-popup"
        >
            <div class="finished-popup-content">
                <p>{{ $store.state.finishedText }}</p>
                <button @click="$store.commit('prepareNextTimerMode')">OK</button>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.finished-popup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.finished-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    max-width: 90%;
    padding: 20px 30px 30px 30px;
    border-radius: 3rem;
}
</style>