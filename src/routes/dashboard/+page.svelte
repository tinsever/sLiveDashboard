<script>
    import InnerNav from "$lib/InnerNav.svelte";
    import Icons from "$lib/Icons.svelte";

    export let data; // Benutzerdaten von der Server-Seite

    console.log(data);
</script>

<div class="flex p-4 bg-black/20 rounded-lg border border-white/10">
    <img
        src={data.data.twitch.user.pb}
        alt="Profilepicture"
        class="rounded-full h-16 md:h-28"
    />
    <div class="ml-4">
        <h1 class="text-white text-xl font-semibold">
            {data.data.twitch.user.name}
        </h1>
        <p class="text-white/60 text-sm">
            {#if data.data.twitch.user.description}
                {data.data.twitch.user.description}
            {:else}
                <span class="italic text-white/60"
                    >{data.data.twitch.stream.status} No description available</span
                >
            {/if}
        </p>
        <p class="flex items-center text-sm mt-2">
            {#if data.data.twitch.stream.status === "live"}
                <Icons icon="user" className="fill-red-500 h-5 w-auto" />
                <span class="text-red-500 font-semibold"
                    >{data.data.twitch.stream.viewer}</span
                >
            {:else}
                <Icons icon="user" className="fill-sl h-6 w-auto" />
                <span class="text-sl font-semibold">Not live</span>
            {/if}
        </p>
    </div>
</div>
