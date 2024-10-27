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
        class="pl-6 hover:cursor-pointer hover:!text-sl hover:!fill-sl transition-all border-l-4"
        class:mt-6={isFirst !== "true"}
        class:border-sl={current === "true"}
        class:border-kai={current !== "true"}
        class:text-white={current === "true"}
        class:!fill-white={current === "true"}
    >
        <div class="inline-flex items-center">
            <Icons {icon} className="h-6 w-auto" />
            <p class="font-semibold ml-4">
                {name}
            </p>
        </div>
    </div>
</a>
