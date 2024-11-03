<script>
    import {page} from "$app/stores";
    import "../app.css"
    import {goto} from "$app/navigation";
    import {fly, slide, fade} from "svelte/transition"
    import {conf} from "../lib/conf.js";

    export const prerender = true

    async function getGithubProfile(username){
        let req = await fetch("https://api.github.com/users/" + username)
        return await req.json()
    }

    let user = {
        name: conf.FullName,
        handle: conf.github,
    }

    let pages = [
        {name: "Home", icon: "house", path: "/home"},
        {name: "About",icon: "person", path: "/about"},
        {name: "Projects",icon: "list", path: "/projects"},
        {name: "Contact", icon: "phone",path: "/contact"}
    ]

    let sidebar = true

</script>

<title>{conf.siteTitle}</title>

<div style="display: flex; width: 100%; height: 100vh;">
    {#if sidebar}
        <div transition:slide={{axis: 'x', duration: 400}} style="border-right: #4f4f4f 1px solid; width: fit-content; background-color: #181818">
            <div class="userbar">
                <div>
                    {#await getGithubProfile(user.handle)}
                        <span style="width: 50px; height: 50px; margin-right: 15px" class="loader"></span>
                    {:then data}
                        <img style="width: 50px; height: 50px; border-radius: 50px; margin-right: 15px" src={data["avatar_url"]}>
                    {/await}
                </div>
                <div style="display: flex; justify-content: center; flex-direction: column">
                    <span>{user.name}</span>
                    <span style="font-weight: lighter">@{user.handle}</span>
                </div>
            </div>
           <div style="height: 90%; display: flex; flex-direction: column; justify-content: space-between">
               <div>
                   {#each pages as p}
                       <div class="nav-button {$page.url.pathname === p.path ? 'nav-button-active' : ''}"
                            on:click={()=>{goto(p.path)}}
                            role="none"
                       >
                           <i style="margin-right: 5px" class="bi bi-{p.icon}"></i>
                           {p.name}
                       </div>
                   {/each}
               </div>
               <div>
                   <div class="nav-button"
                        on:click={()=>{sidebar=false}}
                        role="none"
                    >
                       <i style="margin-right: 5px" class="bi bi-arrow-left"></i>
                       Close
                   </div>
               </div>
           </div>
        </div>
    {:else}
        <div transition:fade style="position: fixed;" class="icon-button" on:click={()=>{sidebar=true}} >
            <i class="bi bi-list"></i>
        </div>
    {/if}
    {#key $page.url.pathname}
            <div in:fly={{y: 10, x: 5}} style="width: 100%; height: 100%">
                <slot></slot>
            </div>
    {/key}
</div>