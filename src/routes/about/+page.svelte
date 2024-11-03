<script>
    import { marked } from 'marked';
    import {conf} from "../../lib/conf.js";

    console.log(conf.longBio)
    const html = marked.parse(conf.longBio.toString())
    console.log(html)
</script>

<div class="grid-background">
</div>

<div style="margin: 60px">
    <span style="font-size: 100px">About</span>

    {@html html}
</div>