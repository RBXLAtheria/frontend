<script lang="ts">
    import Section from "../components/section.svelte";

    const TAGS: { name: string; color: string }[] = [
        { name: "Bug", color: "#dd3b4d" },
        { name: "Feature", color: "#712185" },
        { name: "Suggestion", color: "#cfc8a1" },
        { name: "Feedback", color: "#fba270" },
    ];

    const REPORTS: { title: string; message: string; tag: number }[] = [
        { title: "Character bug", message: "My character keeps getting stuck in walls! It's ruining my immersion!", tag: 0 },
        { title: "Item duplicates when opening inventory", message: "Every time I try to open my inventory, the items duplicate. This is game-breaking!", tag: 1 },
        { title: "Inventory auto-sort", message: "How about adding a feature to auto-sort inventory? It would save a lot of time.", tag: 2 },
    ];
</script>

<Section id="features-extension" color="#FF5733" title={`Stay studio-bound,<br><span class="highlight">with the extension.</span>`} description="Stay Studio-Bound with Atheria's extension, offering seamless access to manage all feedback directly within Studio. This integrated tool ensures you never lose sight of valuable insights while you work on perfecting your creations. With Atheria's extension, every comment and suggestion is easily accessible, empowering you to refine and enhance your game without interruption." tags={["features"]}>
    <div class="absolute left-1/2 top-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2">
        <div class="scrollAnimation fromRight flex h-full w-full flex-col gap-3 overflow-hidden rounded-primary border-primary bg-secondary-950 p-3">
            <div class="flex w-full gap-3">
                {#each TAGS as tag}
                    <div class="flex items-center justify-center gap-1 rounded-primary bg-secondary-800 px-3 py-2">
                        <div class="aspect-square h-2.5 rounded-full" style="background-color: {tag.color};" />
                        <p>{tag.name}</p>
                    </div>
                {/each}
            </div>

            <div class="flex w-full flex-grow flex-col gap-3">
                {#each REPORTS as report}
                    <div class="flex w-full flex-col items-start justify-start gap-1 rounded-lg bg-secondary-800 p-3 text-left">
                        <div class="flex items-center justify-center gap-1">
                            <div class="aspect-square h-2.5 rounded-full" style="background-color: {TAGS[report.tag].color};" />
                            <p class="text-lg font-semibold leading-tight">{report.title}</p>
                        </div>

                        <p class="leading-tight text-primary-600">{report.message}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Section>
