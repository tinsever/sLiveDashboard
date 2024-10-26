<script lang="ts">
    let { children } = $props();
    import Nav from "$lib/Nav.svelte";
    import Head from "$lib/Head.svelte";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    // State to manage the visibility of the navigation menu
    const isNavVisible = writable(false);
    const smallScreen = writable(false);

    onMount(() => {
        if (window.innerWidth >= 768) {
            isNavVisible.set(true);
            smallScreen.set(false);
        } else {
            smallScreen.set(true);
        }

        // Listen for window resize events
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                isNavVisible.set(true);
                smallScreen.set(false);
            } else {
                smallScreen.set(true);
            }
        });
    });

    // Function to toggle the navigation menu
    function toggleNav() {
        isNavVisible.update((value) => !value);
    }
</script>

<div class="grid grid-cols-1 md:grid-cols-5 bg-kai text-white font-sans">
    <Nav {isNavVisible} {smallScreen} />
    <div
        class="col-span-1 md:col-span-4"
        class:hidden={$smallScreen && $isNavVisible}
    >
        <Head {toggleNav} />
        <div class="min-h-screen overflow-auto p-6">
            {@render children()}
        </div>
    </div>
</div>
