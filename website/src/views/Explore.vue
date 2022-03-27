<template>
<div class="_container h-full w-full absolute flex items-center justify-center">
    <div class="wrapper">
        <div class="explore-title text-center text-xl">
            Explore these topics <i class="ml-2 fa-solid fa-rocket rocket" style="color: #88C0D0"></i>
        </div>
        <br>
        <div class="cards">
            <a href="/activeterms">
                <div class="card">
                    Check out all the active terms <i class="fa-solid fa-arrow-right"></i>
                </div>
            </a>
            <a href="/coursesections/">
                <div class="card">
                    Check out course sections for a term <i class="fa-solid fa-arrow-right"></i>
                </div>
            </a>
            <a href="/opencourses/subject">
                <div class="card">
                Check out open courses for subject and term <i class="fa-solid fa-arrow-right"></i>
            </div>
            </a>
            <a href="/subjectlist">
                <div class="card">
                    Check out all subjects <i class="fa-solid fa-arrow-right"></i>
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    setup() {

    },
}
</script>

<style scoped>
.card {
    background-color: #3B4252;
    padding: 20px;
    border-radius: 5px;
    margin: 40px;
    width: 700px;
    cursor: pointer;
    position: relative;
}

i:not(.rocket) {
    position: absolute;
    right: 30px;
    bottom: 24px;
    color: #88C0D0;
}
</style>
