<script>
    import {conf} from "../../lib/conf.js";
    import {goto} from "$app/navigation";
</script>

<div class="grid-background">
</div>

<div style="margin: 60px">
    <span style="font-size: 100px">Projects</span>
    <div style="display: flex; align-items: center; flex-direction: column; margin-top: 30px; height: 80vh; overflow-y: scroll">
        {#each conf.projects as project}
            <div class="project" style="width: 70%" on:click={()=>{window.location.replace(project)}}>
                <img style="width: 100%; border-radius: 20px" src="https://opengraph.githubassets.com/67f9sdfsdfsdf98493e/{project.split('https://github.com/')[1]}">
            </div>
        {/each}
    </div>
</div>