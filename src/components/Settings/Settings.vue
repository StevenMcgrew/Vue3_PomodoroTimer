<script setup>

import DropdownBtn from './DropdownBtn.vue'
import DropdownPanel from './DropdownPanel.vue'

// let settingsBtn = document.getElementsByClassName("settings-btn")[0]
// settingsBtn.addEventListener("click", function () {
//     settingsBtn.classList.toggle("active")
//     let panel = settingsBtn.nextElementSibling
//     if (panel.style.maxHeight) {
//         panel.style.maxHeight = null
//     }
//     else {
//         panel.style.maxHeight = panel.scrollHeight + "px"
//     }
// })
</script>

<template>
    <div>
        <DropdownBtn />
        <DropdownPanel />
    </div>
</template>

<style scoped>
</style>