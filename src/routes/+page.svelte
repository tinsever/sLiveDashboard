<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    function nav_back() {
        if (browser) window.history.back();
    }
</script>

<div id="errorpage">
    <img src="/logo.png" alt="SLIVE Logo" class="w-auto h-56" />
    <div id="infotext">
        <p>Willkommen auf dem Dashboard von sLive!</p>
    </div>
</div>

<style>
    #errorpage {
        display: flex;
        flex-direction: column; /* Stacks items vertically */
        justify-content: center; /* Centers items horizontally */
        align-items: center; /* Centers items vertically */
        height: 100vh;
        background: linear-gradient(to bottom, #0f0e14, #1c1a24);
        color: white;
        gap: 20px; /* Adds space between items */
        text-align: center;
    }

    #infotext p {
        font-size: 1.5rem;
        font-weight: bold;
    }

    #links {
        display: flex;
        gap: 10px; /* Adds space between links */
    }

    a {
        font-size: 1.25rem;
        text-decoration: wavy underline;
        cursor: pointer;
    }
</style>
