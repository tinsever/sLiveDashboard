<script lang="ts">
    import NavComponent from "./NavComponent.svelte";
    import { page } from "$app/stores";

    // This will automatically update whenever the URL changes
    let currentPath = $page.url.pathname;

    console.log(currentPath);
</script>

<div class="col-span-1 min-h-screen border-r border-white/10">
    <div class="h-16 border-b border-white/10 flex justify-center items-center">
        <img src="logo.png" class="h-14" alt="SLIVE Logo" />
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
            current={currentPath === "/dashboard/overlay"}
        />
        <NavComponent
            icon="library"
            path="/dashboard/library"
            name="Library"
            isFirst="false"
            current={currentPath === "/dashboard/library"}
        />
        <NavComponent
            icon="settings"
            path="/dashboard/settings"
            name="Channel Settings"
            isFirst="false"
            current={currentPath === "/dashboard/settings"}
        />
    </div>
</div>
