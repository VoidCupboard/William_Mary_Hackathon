<template>
<div class="flex absolute w-full h-full items-center justify-center">
    <div class="wrapper">
        <div class="select text-2xl text-center">Enter the term id</div>
        <br>
        <div class="text-md text-center">You can find the term id in the brackets by going to <a href="/activeterms" style="color: #88C0D0">here</a></div>
        <br>
        <input type="text" v-model="_id" placeholder="Enter the term id" class="w-full p-4 rounded" style="background-color: #3B4252; outline: none;">
        <br>
        <br>
        <button @click="redirectUser()" style="background-color: #88C0D0; color: #2E3440" class="w-full p-4 rounded">See courses section</button>
    </div>
</div>
</template>

<script >
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const _id = ref<String>("");

        const redirectUser = () => {
            router.push({ path: "/coursesection/" + _id.value })
        }

        return {
            _id,
            redirectUser
        }
    },
}
</script>