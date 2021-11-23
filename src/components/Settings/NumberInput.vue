<script setup>

defineProps({
    id: String,
    label: String,
    defaultNumber: Number,
})

</script>

<template>
    <label :for="id">{{ label }}</label>
    <input :id="id" type="number" :value="defaultNumber || 1" />
</template>

<style scoped>
label {
    display: inline-block;
    width: 150px;
}
</style>