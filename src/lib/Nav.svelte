<script lang="ts">
    import NavComponent from "./NavComponent.svelte";
    import { page } from "$app/stores";
    import { writable, type Writable } from "svelte/store";

    // Props
    export let isNavVisible: Writable<boolean>;

    // This will automatically update whenever the URL changes
    let currentPath: string;
    $: currentPath = $page.url.pathname;

    console.log(currentPath);

    function closeNav() {
        isNavVisible.update((value) => !value);
    }
</script>

{#if $isNavVisible}
    <div class="col-span-1 min-h-screen border-r border-white/10">
        <div
            class="pr-4 h-16 border-b border-white/10 flex justify-between md:justify-between items-center"
        >
            <img src="logo.png" class="h-14" alt="SLIVE Logo" />

            <button
                type="button"
                on:click={closeNav}
                class="focus:outline-none md:hidden"
            >
                <!-- Add your SVG here and attach the click event -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 30 30"
                    class="w-auto h-6 fill-white"
                >
                    <path
                        d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
                    ></path>
                </svg>
            </button>
        </div>
        <div class="pt-6">
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
