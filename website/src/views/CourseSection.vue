<template>
<div class="coursesections flex items-center justify-center absolute h-full w-full">
    <div class="wrapper">
        <div class="text-3xl">All the available courses sections</div>
        {{coursessections}}
    </div>
</div>    
</template>

<style scoped>

</style>

<script lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router';

export default {
    setup() {
        const coursessections = ref();
        const route = useRoute();

        (
            async () => {
                console.log("http://localhost:3001/coursesection/" + route.params.id)

                const res = await fetch("http://localhost:3001/coursesection/" + route.params.id)

                coursessections.value = await res.json()
            }
        )()

        return {
            coursessections
        }
    },
}
</script>