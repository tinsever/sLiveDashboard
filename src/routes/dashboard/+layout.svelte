<script lang="ts">
    let { children, data }: Props = $props();
    import Nav from "$lib/Nav.svelte";
    import Head from "$lib/Head.svelte";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import type { UserData } from "../../types/UserData";

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
    interface Props {
        children: any;
        data: UserData;
    }
    const imgUrl = data.data.twitch.user.pb;
</script>

<div class="grid grid-cols-1 md:grid-cols-5 text-white font-sans">
    <Nav {isNavVisible} {smallScreen} />
    <div
        class="col-span-1 md:col-span-4"
        class:hidden={$smallScreen && $isNavVisible}
    >
        <Head
            {toggleNav}
            imageUrl={imgUrl}
            status={data.data.twitch.stream.status}
        />
        <div class="overflow-auto p-6">
            {@render children()}
        </div>
    </div>
</div>
