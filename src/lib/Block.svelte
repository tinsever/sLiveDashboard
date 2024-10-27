<script>
    export let flex = false; // Prop to determine if flex class should be added
    export let className = ""; // Prop to accept custom classes
</script>

<div
    class={`bg-lkai/30 rounded-lg border border-white/10 ${flex ? "flex" : ""} ${className}`}
>
    <slot />
</div>
