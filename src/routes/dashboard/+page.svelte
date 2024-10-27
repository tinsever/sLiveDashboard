<script lang="ts">
    import GamesOverview from "$lib/GamesOverview.svelte";
    import UserInfoBlock from "$lib/UserInfoBlock.svelte";
    let { data } = $props();

    const user = data.user;
    const games = data.games;
</script>

<svelte:head>
    <title>sLive | Dash</title>
</svelte:head>

<UserInfoBlock {user} />
<GamesOverview {games} />
