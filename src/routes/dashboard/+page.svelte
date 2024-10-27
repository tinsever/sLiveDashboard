<script lang="ts">
    import GamesOverview from "$lib/GamesOverview.svelte";
    import Icons from "$lib/Icons.svelte";
    import UserInfoBlock from "$lib/UserInfoBlock.svelte";
    let { data } = $props();

    const user = data.user;
    const games = data.games;
</script>

<svelte:head>
    <title>sLive | Dash</title>
</svelte:head>

<UserInfoBlock {user} />

<div class="inline-flex items-center mt-8">
    <Icons icon="star" className="h-8 w-auto fill-amber-400" />
    <p class="font-semibold tracking-wide text-2xl ml-2">Lieblingsspiele</p>
</div>
<GamesOverview {games} />
