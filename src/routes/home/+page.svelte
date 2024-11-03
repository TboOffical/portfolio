<script>
    import {conf} from "../../lib/conf.js";
    import {langs} from "../../lib/langs.js"

    function langData(fileExt){
        for (let lang of langs){
            if(lang.extension === fileExt){
                return lang
            }
        }
        return undefined;
    }

</script>

<div class="grid-background">
</div>

{#if conf.changeThisToTrue}
    <div style="margin: 60px; z-index: 99999">
        <span style="font-size: 70px">{conf.siteTitle}</span>
        <div style="display: flex">
            <a class="chip" target="_blank" href="https://github.com/{conf.github}">
                <i class="bi bi-github"></i>
                Github
            </a>
            {#if conf.linkedin !== ""}
                <a class="chip" target="_blank" href={conf.linkedin}>
                    <i class="bi bi-linkedin"></i>
                    Linkedin
                </a>
            {/if}
        </div>
        <hr>
        {conf.bio}

        <div style="display: flex; margin-top: 20px;">
            <div style="width: 50%">
                <h2><i class="bi bi-braces"></i> Languages</h2>
                <div style="height: 35%; overflow-y: scroll">
                    {#each conf.languages as lang}
                        {#if langData(lang) !== undefined}
                            <div style="display: flex; align-items: center; justify-content: left; background-color: #212121; border-radius: 10px; padding: 15px; margin-bottom: 10px">
                                <div style="margin-right: 10px;">
                                    <img style="width: 50px;  height: 50px; border-radius: 50px; background-color: #2c2a28; padding: 10px" src={langData(lang).icon}>
                                </div>
                                <div>
                                    <h2 style="margin-bottom: 0px">{langData(lang).name}</h2>
                                    <p>{langData(lang).description}</p>
                                </div>
                            </div>
                        {:else}
                            <div style="display: flex; align-items: center; justify-content: left; background-color: #212121; border-radius: 10px; padding: 15px; margin-bottom: 10px">
                                <div style="margin-right: 10px;">
                                    <div style="width: 50px;  height: 50px; border-radius: 50px; background-color: #2c2a28; padding: 10px; display: flex; justify-content: center; align-items: center;  font-size: 50px">{lang[1]}</div>
                                </div>
                                <div style="font-size: 25px;">
                                    {lang.replace(".", "")}
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div style="width: 50%; margin-left: 10px">
                <h2><i class="bi bi-patch-check"></i> Skills and Qualifications</h2>
                <div style="height: 35%; overflow-y: scroll">
                    {#each conf.skills as skill}
                            <div style="display: flex; align-items: center; justify-content: space-between; background-color: #212121; border-radius: 10px; padding: 15px; margin-bottom: 10px">
                                <div style="margin-right: 10px;">

                                </div>
                                <div style="font-size: 25px;">
                                    {skill}
                                </div>
                            </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{:else}
    <div style="margin: 60px; z-index: 99999">
        <span style="font-size: 100px">5-Minute Portfolio</span>
        <hr>
        <div>
            <h2>Need a portfolio? Don't have Time?</h2>
            <h1>You've found your solution!</h1>
        </div>
    </div>
{/if}
