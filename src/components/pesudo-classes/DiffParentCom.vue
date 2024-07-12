<template>
    <p>父元素命名(分组)</p>
    <ul class="max-w-sm mx-auto p-2 rounded-xl bg-white shadow-md">
        <li class="group/item flex items-center justify-between hover:bg-slate-100 px-2 py-4 rounded-xl">
            <div class="flex items-center">
                <img class="block rounded-xl w-10 h-10 mr-2" src= "../assets/vue.svg" alt="">
                <div class="space-y-1">
                    <a href="#" class="text-black font-medium text-sm">Author Name</a>
                    <p class="text-gray-500 text-sm">VP, Marketing</p>
                </div>
            </div>
            <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible rounded-xl py-1 px-3 text-gray-400">
                <span class="group-hover/edit:text-gray-700">Call Me</span>
            </a>
        </li>
    </ul>
    <p>属性组</p>
    <div class="group is-published max-w-sm mx-auto">
        <div class="hidden group-[.is-published]:block">Published</div>
    </div>
</template>