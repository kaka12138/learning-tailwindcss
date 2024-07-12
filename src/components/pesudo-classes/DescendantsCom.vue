<template>
    <form class="max-w-sm mx-auto mb-4 bg-white py-4 px-2 rounded-sm shadow-lg space-y-2">
        <h3 class="font-medium text-lg my-2 text-center underline">has-* style descendants</h3>
        <label v-for="({name, value}) in radioList" :key="value" class="flex items-center justify-between p-4 rounded-xl text-gray-600a hover:bg-gray-100
            has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-1
        ">
            <span>{{ value }}</span><input type="radio" :name="name" :id="value"/>
        </label>
    </form>
    <div class="max-w-sm mx-auto bg-white rounded-sm shadow-lg">
        <h3 class="text-center pt-2 underline">基于group去style descendants</h3>
        <div v-for="{name, des, link} in cardList " :key="name" class="group flex justify-between p-4 border-b border-gray-200 last:border-none">
            <div class="space-y-1">
                <h3 class="text-gray-900 font-medium text-lg">{{ name }}</h3>
                <p class="text-gray-500">{{ des }}<a href="#" v-if="link" class="text-blue-500 underline underline-offset-4">{{ link }}</a></p>
            </div>
            <div class="hidden grouup-has[a]:block">></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const radioList = ref([
    {
        name: "payment",
        value: "G-Pay"
    },
    {
        name: "payment",
        value: "PayPal"
    },
    {
        name: "payment",
        value: "VISA"
    },
])
const cardList = ref([
    {
        name: "Spencer Sharp",
        des: "Just happy to be here",
        link: "planeteria.tech"
    },
    {
        name: "Casey Jordan",
        des: "Pushing pixels. Slinging divs.",
        link: ""
    },
])
</script>