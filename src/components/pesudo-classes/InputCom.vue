<template>
    <label class="block">
        <span class="text-sm font-medium text-slate-700">{{ label }}</span>
        <input
            v-bind="$attrs"
            class="block mt-1 max-w-xl px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            invalid:required:border-red-600
            "
        >
    </label>
</template>


<script lang="ts" setup>
    defineProps({
        label: {
            type: String,
            default: '',
        },
    })
    defineOptions({
        inheritAttrs: false, // 禁止根节点集成到透传的属性
    })
</script>