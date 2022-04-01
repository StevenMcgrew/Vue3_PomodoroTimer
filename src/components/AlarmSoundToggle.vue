<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    id: String,
    label: String,
})

// bind v-model="bool" to the vuex store
const bool = computed({
    get() {
        return store.state[props.id]
    },
    set(value) {
        store.commit('toggleAlarmSound')
    }
})

</script>

<template>
    <label :for="id" class="settings-label">{{ label }}
        <i class="fa-solid fa-volume-high"></i>
    </label>
    <input :id="id" class="toggle toggle-spacing" type="checkbox" v-model="bool" />
</template>

<style scoped>
.toggle-spacing {
    margin: 0rem 0rem -7rem 0rem;
}
.toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;
}
.toggle:before {
  content: "on off";
  display: block;
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 28px;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  font: 10px/28px Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  text-indent: -22px;
  word-spacing: 37px;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.15);
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}
.toggle:checked {
  background-color: var(--app-accent-color);
}
.toggle:checked:before {
  left: 32px;
}
</style>