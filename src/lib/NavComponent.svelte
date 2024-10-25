<script lang="ts">
    export let isFirst: string;
    export let icon: string;
    export let name: string;
    export let path: string;
    export let current: string = "false"; // Keep current as a string
    import Icons from "./Icons.svelte";
</script>

<a href={path} class="no-underline">
    <div
        class="flex text-white/50 items-center pl-6 hover:cursor-pointer hover:text-sl fill-white hover:fill-sl transition-all border-l-4"
        class:mt-6={isFirst !== "true"}
        class:border-sl={current === "true"}
        class:border-kai={current !== "true"}
    >
        <Icons {icon} className="h-6 w-auto" />
        <p
            class="font-semibold ml-4 hover:text-sl {current === 'true'
                ? 'text-white'
                : 'text-white/50'}"
        >
            {name}
        </p>
    </div>
</a>
