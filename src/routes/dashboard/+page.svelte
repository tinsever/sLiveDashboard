<script>
    import InnerNav from "$lib/InnerNav.svelte";

    export let data; // Benutzerdaten von der Server-Seite

    console.log(data);
</script>

<InnerNav />

<p>Username: {data.data.user.userName}</p>
