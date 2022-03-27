<script lang="ts">

</script>

<template>
<div class="_container flex items-center justify-center h-full w-full absolute">
    <div class="bottom-waves absolute" style="position: absolute; top: 0px; width: 100vw; height: 100px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3B4252" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,85.3C672,85,768,139,864,133.3C960,128,1056,64,1152,64C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#007acc;"></path></svg>
    </div>
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
        <div class="bottom-waves absolute" style="position: absolute; bottom: 288px; width: 100vw; height: 100px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3B4252" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,144C672,171,768,245,864,250.7C960,256,1056,192,1152,160C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#007acc;"></path></svg>
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