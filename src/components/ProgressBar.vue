<script setup>

</script>

<template>
<div class="progress-bar">
    <span class="work-block">work</span>
    <span class="break-block">break</span>
    <span class="work-block">work</span>
    <span class="break-block">break</span>
    <span class="work-block">work</span>
    <span class="break-block">break</span>
    <span class="work-block">work</span>
    <span class="long-break-block">long break</span>
</div>
</template>

<style scoped>

.progress-bar {
    width: 100%;
    background-color: lightgray;
    height: fit-content;
    margin: 20rem;
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto auto auto auto auto auto auto;
}



</style>