<script lang="ts">
    import NavComponent from "./NavComponent.svelte";
    import { page } from "$app/stores";
    import { writable, type Writable } from "svelte/store";
    import Icons from "./Icons.svelte";

    // Props
    export let isNavVisible: Writable<boolean>;
    export let smallScreen;

    // This will automatically update whenever the URL changes
    let currentPath: string;
    $: currentPath = $page.url.pathname;

    function closeNav() {
        isNavVisible.update((value) => !value);
    }
</script>

{#if $isNavVisible}
    <div class="col-span-1 min-h-screen border-r border-white/10">
        <div
            class="pr-4 h-16 border-b border-white/10 flex justify-between md:justify-center items-center"
        >
            <img src="logo.png" class="h-14" alt="SLIVE Logo" />

            {#if $smallScreen}
                <button
                    type="button"
                    on:click={closeNav}
                    class="focus:outline-none md:hidden"
                >
                    <!-- Add your SVG here and attach the click event -->
                    <Icons icon="close" className="w-auto h-6 fill-white" />
                </button>
            {/if}
        </div>
        <div class="pt-6 text-white/50 fill-white/50">
            <NavComponent
                icon="home"
                path="/dashboard"
                name="Your Channel"
                isFirst="true"
                current={currentPath === "/dashboard" ? "true" : "false"}
            />
            <NavComponent
                icon="overlay"
                path="/dashboard/overlay"
                name="Overlay"
                isFirst="false"
                current={currentPath === "/dashboard/overlay"
                    ? "true"
                    : "false"}
            />
            <NavComponent
                icon="library"
                path="/dashboard/library"
                name="Library"
                isFirst="false"
                current={currentPath === "/dashboard/library"
                    ? "true"
                    : "false"}
            />
            <NavComponent
                icon="settings"
                path="/dashboard/settings"
                name="Channel Settings"
                isFirst="false"
                current={currentPath === "/dashboard/settings"
                    ? "true"
                    : "false"}
            />
        </div>
    </div>
{/if}
