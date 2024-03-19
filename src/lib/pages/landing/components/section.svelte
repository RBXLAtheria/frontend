<script lang="ts">
    import { onMount } from "svelte";

    export let id: string;
    export let title: string;
    export let description: string;
    export let color: string = "#ffffff";

    let sectionContainer: HTMLDivElement;

    onMount(() => {
        sectionContainer.style.setProperty("--sectionColor", color);
        sectionContainer.style.setProperty("--sectionColorTransparent", color.concat("80"));
    });
</script>

<span {id} class="relative" />

<div class="section flex flex-col justify-center md:justify-between items-center w-full h-screen px-10 relative md:flex-row" style="--sectionColor: {color}; --sectionColorTransparent: {color}80;" id="#{id}" bind:this={sectionContainer}>
    <div class="w-full md:w-[47%] h-full text-center md:text-left flex flex-col justify-center items-center md:items-start gap-5 md:gap-7 md:pl-[8%] 2xl:pl-[12%]">
        <p class="text-4xl font-semibold md:font-bold tracking-tight">{@html title}</p>
        <p class="text-lg">{description}</p>

        <div class="flex justify-center items-center gap-2">
            <a class="primary !bg-black !border-[var(--sectionColor)] !text-base" href="register">Get started</a>
            <a class="secondary !text-base" href="#b">Learn more</a>
        </div>
    </div>

    <slot />
</div>
