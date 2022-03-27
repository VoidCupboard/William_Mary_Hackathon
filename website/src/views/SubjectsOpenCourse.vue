<template>
<div class="_container">
    {{courses}}
</div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        const { term_id , subject_id } = route.params
        const courses = ref("");

        (
            async () => {
                const res = await fetch(`http://localhost:3001/opencourses/${subject_id}/${term_id}`)

                courses.value = await res.json()
            }
        )()

        return {
            courses
        }
    },
}
</script>

<style scoped>

</style>