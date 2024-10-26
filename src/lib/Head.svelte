<script lang="ts">
    // Props
    export let toggleNav;
    export let imageUrl: string;
</script>

<div
    class="px-6 h-16 flex items-center border-b border-white/10 justify-between"
>
    <div>
        <button
            type="button"
            on:click={toggleNav}
            class="focus:outline-none md:hidden"
        >
            <!-- Add your SVG here and attach the click event -->
            <svg
                class="fill-white/50 h-7 w-auto cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 64 64"
            >
                <path
                    d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z"
                ></path>
            </svg>
        </button>
    </div>
    <div>
        <img
            src={imageUrl}
            alt="Profile"
            class="bg-white/20 h-9 rounded-full border-2 p-[0.08rem] border-white/50"
        />
    </div>
</div>
