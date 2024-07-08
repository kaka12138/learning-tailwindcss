<template>
    <div class="mx-auto max-w-sm my-20 space-x-4">
        <button class="rounded-xl bg-cyan-400 px-4 py-2 active:bg-red-500">hover</button>
        <button class="rounded-xl bg-cyan-400 px-4 py-2 hover:bg-yellow-500">hover</button>
        <button class="rounded-xl bg-cyan-400 px-4 py-2 focus:bg-green-500 focus:ring focus:ring-red-300 focus:ring-offset-4 focus:outline-dashed">focus</button>
    </div>
    <ul class="mx-auto max-w-sm space-x-2 flex">
        <li v-for="item in list" :key="item" class="first:text-red-500 last:text-green-500 even:text-yellow-500">{{ item }}</li>
    </ul>
</template>

<script setup lang="ts">
const list = ["first", "second", "last"]
</script>