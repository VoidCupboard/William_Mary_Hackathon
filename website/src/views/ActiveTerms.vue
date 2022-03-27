<template>
<div class="_container flex items-center absolute w-full h-full justify-center">
    <div class="wrapper w-full">
        <div class="title text-center text-3xl">Active Terms</div>
        <br>
        <div class="text-center text-md">Click on a card to see the term's course section</div>
        <div class="cards block w-full">
            <div class="card ml-20 mr-20 mt-10 mb-10 p-5 rounded relative" style="background-color: #3B4252" v-for="card in terms" :key="card.TERM_CODE">
                <a :href="'/coursesection/' + card.TERM_CODE">
                    <div class="title">
                        {{card.TERM_DESC}} ({{card.TERM_CODE}})
                    </div>
                    <div class="ends-in absolute right-10 bottom-5">{{card.TERM_END_DATE}}</div>
                </a>
            </div>
            <br>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    cursor: pointer;
}
</style>

<script >
import {
    ref
} from "vue"
import moment from "moment"

export default {
    setup() {
        const terms = ref<Array<String>>([]);

        (
            async () => {
                const res = await fetch("http://localhost:3001/activeterms");
                
                for(let term of await res.json()) {
                    term.TERM_END_DATE = "Ends " + moment(moment(term.TERM_END_DATE)).from(moment(new Date(new Date().toUTCString().substr(0, 25))))

                    terms.value.push(term)
                }
            }
        )()

        return {
            terms
        }
    },
}
</script>
