<script>
    export let user;
    import Block from "./Block.svelte";
    import Icons from "./Icons.svelte";
</script>

<Block
    flex={true}
    className="p-4 hover:bg-lkai/10 transition-all duration-500 hover:duration-150 hover:border-white/25"
>
    <img
        src={user.twitch.user.pb}
        alt="Profilepicture"
        class="rounded-full h-16 md:h-28"
    />
    <div class="ml-4">
        <h1 class="text-white text-xl font-semibold">
            {user.twitch.user.name}
        </h1>
        <p class="text-white/60 text-sm">
            {#if user.twitch.user.description}
                {user.twitch.user.description}
            {:else}
                <span class="italic text-white/60"
                    >{user.twitch.stream.status} No description available</span
                >
            {/if}
        </p>
        <p class="flex items-center text-sm mt-2">
            {#if user.twitch.stream.status === "live"}
                <Icons icon="user" className="fill-red-500 h-5 w-auto" />
                <span class="text-red-500 font-semibold"
                    >{user.twitch.stream.viewer}</span
                >
            {:else}
                <Icons icon="user" className="fill-sl h-6 w-auto" />
                <span class="text-sl font-semibold">Not live</span>
            {/if}
        </p>
    </div>
</Block>
