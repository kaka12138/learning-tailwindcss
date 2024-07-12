<template>
    <form class="max-w-sm mx-auto">
        <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email(Peer使用)</span>
            <input type="email" class="peer border border-gray-300 focus:outline-none focus:invalid:border-pink-500" />
            <p class="mt-2 invisible peer-invalid:visible text-sm text-red-500">Please provide a valid email address</p>
        </label>
        <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email(Peer命名)</span>
            <input type="email" class="peer/email border border-gray-300 focus:outline-none focus:invalid:border-pink-500" />
            <span class="block text-sm font-medium text-slate-700">UserName(Peer命名)</span>
            <input type="text" required class="peer/text border border-gray-300 focus:outline-none focus:invalid:border-pink-500" />
            <p class="mt-2 hidden peer-invalid/email:block text-sm text-red-500">Please provide a valid email address</p>
            <p class="mt-2 hidden peer-invalid/text:block peer-blur/text:hidden peer-focus/text:hidden text-sm text-red-500">Please Input UserName</p>
        </label>
        <label class="block">
            <span class="block text-sm font-medium text-slate-700">属性Peer</span>
            <input type="email" required class="peer is-dirty border border-gray-300 focus:outline-none focus:invalid:border-pink-500" />
            <p class="mt-2 peer-[.is-dirty]:peer-invalid:block hidden">Please provide a valid email address</p>
        </label>        
    </form>
</template>