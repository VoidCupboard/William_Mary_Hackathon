<template>
    
</template>

<script >
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        const { term_id , subject_id } = route.params

    },
}
</script>
