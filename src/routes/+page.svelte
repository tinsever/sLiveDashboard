<script>
    import Icons from "$lib/Icons.svelte";
</script>

<div
    class="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#0f0e14] to-[#1c1a24] text-white gap-5 text-center"
>
    <img src="/logo.png" alt="SLIVE Logo" class="w-auto h-56" />
    <div id="infotext">
        <p class="text-2xl font-semibold">
            Willkommen auf dem Dashboard von sLive!
        </p>
        <a href="/auth/login">
            <div
                class="flex gap-4 items-center bg-lkai p-4 rounded-xl border border-white/10 justify-center fill-sl text-sl mt-4 hover:bg-lkai/60 transition-all cursor-pointer"
            >
                <Icons icon="twitch" className="h-8 w-auto" />
                <p class="font-semibold text-lg -mt-1">Login using Twitch.tv</p>
            </div>
        </a>
    </div>
</div>
