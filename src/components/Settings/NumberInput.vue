<script setup>

defineProps({
    label: String,
    defaultNumber: Number,
})

</script>

<template>
    <label>{{ label }}
        <input type="number" value="{{ defaultNumber }} || 0">
    </label>
</template>

<style scoped>
</style>