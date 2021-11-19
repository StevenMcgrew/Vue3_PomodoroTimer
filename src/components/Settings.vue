<script setup>
let settingsBtn = document.getElementsByClassName("settings-btn")[0]
console.log('settingsBtn:  ' + settingsBtn)
settingsBtn.addEventListener("click", function () {
    settingsBtn.classList.toggle("active")
    let panel = settingsBtn.nextElementSibling
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + "px"
    }
})
</script>

<template>
    <button class="settings-btn">Settings</button>
    <div class="settings-panel">
        <p>Lorem ipsum...</p>
    </div>
</template>

<style>
.settings-btn {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}
.settings-panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
.active {
    background-color: #ccc;
}
.settings-btn:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: #777;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
}
</style>