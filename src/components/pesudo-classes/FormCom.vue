<template>
    <form class="max-w-sm mx-auto space-y-4">
        <InputCom type="text" label="UserName" disabled/>
        <InputCom type="number" label="Age" required/>
        <InputCom type="email" label="Email" />
        <InputCom type="pawssword" label="Password" />
    </form>
</template>
<script lang="ts" setup>
import InputCom from './InputCom.vue'
</script>