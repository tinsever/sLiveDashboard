<script lang="ts">
    import Block from "./Block.svelte";
    import Icons from "./Icons.svelte";
    import type { Game } from "./types/Game"; // Adjust the import path as necessary
    export let games: Game[] = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    {#each games as game}
        <Block
            className="hover:bg-lkai/10 transition-all hover:border-white/25"
        >
            <div class="flex flex-col h-full">
                <div class="aspect-w-16 aspect-h-9 bg-sl/20 rounded-t-lg">
                    <!-- Thumbnail -->
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <div>
                        <div
                            style="background-color: {game.label.color}"
                            class="rounded-full px-2 py-1 inline-flex items-center text-xs font-semibold"
                        >
                            {game.label.name}
                        </div>
                        <h2 class="text-xl font-semibold text-white mt-2">
                            {game.name}
                        </h2>
                        <p>{game.shortDescription}</p>
                    </div>
                    <div class="mt-auto pt-4 flex items-center gap-4">
                        <div
                            class="bg-indigo-600 p-2 font-semibold rounded-lg border border-white/20 hover:border-white/30
                            hover:bg-indigo-700 inline-flex transition-all cursor-pointer items-center"
                        >
                            <Icons
                                icon="play"
                                className="fill-white h-5 w-auto mr-2"
                            />
                            <a href="/dashboard/game/start/{game.id}"
                                >Spiel starten</a
                            >
                        </div>
                        <div>
                            <a
                                href="/dashboard/game/about/{game.id}"
                                class="font-semibold text-white/50 hover:text-white/70 transition-all -mt-1"
                                >Über das Spiel</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    {/each}
</div>
