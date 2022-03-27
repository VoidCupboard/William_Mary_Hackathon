<template>
<div class="_container flex items-center w-full h-full justify-center">
    <br><br><br><br><br>
    <div class="wrapper w-full m-20">
        <div class="title text-center text-3xl">Subjects</div>
        <br><br>
        <div class="cards flex flex-wrap">
            <div class="flex-grow card mr-10 ml-10 mb-5 mt-5 p-5 rounded relative" style="background-color: #3B4252; width: 300px" v-for="card in terms" :key="card.TERM_CODE">
                {{card.STVSUBJ_DESC}} ({{card.STVSUBJ_CODE}})
            </div>
            <br>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue"
import moment from "moment"

export default {
    setup() {
        const terms = ref < Array < String >> ([]);

        (
            async () => {
                const res = await fetch("http://localhost:3001/subjectlist");

                terms.value = await res.json();
            }
        )()

        return {
            terms,
        }
    },
}
</script>
