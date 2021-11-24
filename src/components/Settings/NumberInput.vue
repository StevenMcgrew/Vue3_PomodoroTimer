<script setup>

defineProps({
    id: String,
    label: String,
    initialValue: Number,
    min: Number,
    max: Number,
})

</script>

<template>
    <label :for="id">{{ label }}</label>
    <input :id="id" type="number" :value="initialValue || 1" :min="min" :max="max"/>
</template>

<style scoped>
label {
    display: inline-block;
    width: 150rem;
}
</style>