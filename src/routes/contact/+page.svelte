<script>
    import {conf} from "../../lib/conf.js";
</script>

<div class="grid-background">
</div>

<div style="margin: 60px">
    <span style="font-size: 100px">Contact</span>
    <div style="display: flex">
        {#if conf.phone !== ""}
            <a href="tel:{conf.phone}" class="nolink">
                <div class="contact-card">
                    <i class="bi bi-telephone"></i>
                    <p>{conf.phone}</p>
                </div>
            </a>
        {/if}
        {#if conf.email !== ""}
            <a href="mailto:{conf.email}" class="nolink">
                <div class="contact-card">
                    <i class="bi bi-envelope"></i>
                    <p>{conf.email}</p>
                </div>
            </a>
        {/if}
    </div>
</div>