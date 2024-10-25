<script lang="ts">
    let { children } = $props();
    import Nav from '$lib/Nav.svelte';
    import Head from '$lib/Head.svelte';
</script>

<div class="grid grid-cols-5 bg-kai text-white font-sans">
    <Nav />
    <div class="col-span-4">
        <Head />
        <div class="min-h-screen overflow-auto  p-6">
            {@render children()}
        </div>
    </div>
</div>

