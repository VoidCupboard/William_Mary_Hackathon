<script lang="ts">

</script>

<template>
<div class="_container flex items-center justify-center h-full w-full absolute">
    <div class="wrapper">
        <div class="title text-center text-4xl">William & Mary</div>
        <br><br>
        <div class="flex" style="width: 700px">
            <a href="https://discord.com/api/oauth2/authorize?client_id=957102271437602848&permissions=2147486720&scope=bot%20applications.commands">
                <button class="discord" style="width: 320px">Add to Discord</button>
            </a>
            <a href="/explore">
                <button class="explore" style="width: 320px">Explore</button>
            </a>
        </div>
    </div> 
</div>
</template>

<style scoped>
button {
    background-color: #88C0D0;
    color: #2E3440;
    padding: 20px;
    margin-right: 30px;
    border-radius: 5px;
}

.explore {
    background-color: #3B4252;
    color: #D8DEE9;
}
</style>