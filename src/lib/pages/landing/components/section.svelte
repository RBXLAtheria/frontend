<script lang="ts">
    export let id: string;
    export let title: string;
    export let description: string;
    export let color: string = "#ffffff";
    export let tags: string[] = [];
</script>

<span {id} class="relative" />

<div class="section relative flex h-fit min-h-screen w-full flex-col items-center justify-center px-10 lg:h-screen lg:flex-row lg:justify-between" style="--sectionColor: {color}; --sectionTagColor: {color}40; --sectionButtonColor: {color}21; --sectionShadowColor: {color}80;" id="section-{id}">
    <div class="flex h-full w-full flex-col items-center justify-center gap-5 text-center lg:w-[50%] lg:items-start lg:gap-7 lg:pl-[10%] lg:text-left 2xl:pl-[15%]">
        <div class="relative w-full">
            <div class="scrollAnimation fromLeft absolute bottom-full mb-3 flex gap-2">
                {#each tags as tag}
                    <p class="rounded-full border-primary border-[--sectionColor] bg-[--sectionTagColor] px-3 py-1.5 text-sm font-medium">{tag}</p>
                {/each}
            </div>

            <p class="scrollAnimation fromLeft w-full text-4xl font-bold tracking-tight">{@html title}</p>
        </div>

        <p class="scrollAnimation fromLeft text-lg">{description}</p>

        <div class="scrollAnimation fromLeft flex items-center justify-center gap-2">
            <a class="primary !border-[--sectionColor] !bg-[--sectionButtonColor] !text-base" href="/get-started">Get started</a>
            <a class="secondary !text-base" href="#b">Learn more</a>
        </div>
    </div>

    <div class="relative h-fit w-full lg:h-full lg:w-auto lg:flex-grow">
        <slot />
    </div>
</div>
