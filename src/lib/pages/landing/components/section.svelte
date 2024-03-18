<script lang="ts">
    import { onMount } from "svelte";

    export let id: string;
    export let direction: "left" | "right" = "left";
    export let title: string;
    export let description: string;
    export let color: string = "#ffffff";

    let sectionContainer: HTMLDivElement;

    onMount(() => {
        sectionContainer.style.setProperty("--sectionColor", color);
        sectionContainer.style.setProperty("--sectionColorTransparent", color.concat("80"));
    });
</script>

<span {id} class="relative"></span>

<div class="section flex flex-col justify-center md:justify-between items-center w-full h-screen px-10 relative {direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}" style="--sectionColor: {color}; --sectionColorTransparent: {color}80;" id="#{id}">
    <div class="w-full md:w-[45%] h-full text-center md:text-left flex flex-col justify-center items-center md:items-start gap-5 md:gap-7 {direction === 'right' ? 'md:pr-[8%] 2xl:pr-[12%]' : 'md:pl-[8%] 2xl:pl-[12%]'}">
        <p class="text-4xl font-semibold md:font-bold tracking-tight">{@html title}</p>
        <p class="text-lg">{description}</p>
    </div>

    <slot />
</div>
