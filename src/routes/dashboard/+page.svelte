<script>
    import InnerNav from "$lib/InnerNav.svelte";
    import Icons from "$lib/Icons.svelte";
    import UserInfoBlock from "$lib/UserInfoBlock.svelte";

    export let data; // Benutzerdaten von der Server-Seite
</script>

<svelte:head>
    <title>sLive | Dash</title>
</svelte:head>

<UserInfoBlock {data} />
