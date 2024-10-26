<script lang="ts">
    import LivePulse from "./LivePulse.svelte";
    import Icons from "./Icons.svelte";

    // Props
    export let toggleNav;
    export let imageUrl: string;
    export let status: string;
    let tooltipVisible = false;

    function toggleTooltip() {
        tooltipVisible = !tooltipVisible;
    }
</script>

<div
    class="px-6 h-16 flex items-center border-b border-white/10 justify-between"
>
    <div>
        <button
            type="button"
            on:click={toggleNav}
            class="focus:outline-none md:hidden"
        >
            <Icons
                icon="menu"
                className="fill-white/50 h-7 w-auto cursor-pointer"
            />
        </button>
    </div>
    <div class="flex items-center gap-4 relative">
        {#if status === "live"}
            <LivePulse />
        {/if}
        <button
            type="button"
            class="bg-white/20 h-9 rounded-full border-2 p-[0.08rem] border-white/50 cursor-pointer focus:outline-none"
            on:click={toggleTooltip}
        >
            <img
                src={imageUrl}
                alt="Profile"
                class="h-full w-full rounded-full"
            />
        </button>
        {#if tooltipVisible}
            <div
                class="absolute top-8 right-0 mt-2 w-32 bg-lkai border border-white/10 text-white p-2 rounded shadow-lg"
            >
                <button
                    class="w-full text-left hover:text-red-400 focus:outline-none"
                >
                    Logout
                </button>
            </div>
        {/if}
    </div>
</div>
