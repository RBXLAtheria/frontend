<script lang="ts">
    import { onMount } from "svelte";
    import { animate, type AnimationControls } from "motion";
    import { easeInOutCubic } from "$lib/easings";

    export let id: string = "";
    export let delay: number = 0;
    export let rotation1: number = 0;
    export let rotation2: number = 0;

    let thoughtContainer: HTMLDivElement;

    onMount(async () => {
        let thoughtContainerWidthProperty: string = thoughtContainer.style.width;
        let thoughtContainerWidth: number = thoughtContainer.clientWidth;

        const introAnimation: AnimationControls = animate(
            thoughtContainer,
            {
                opacity: [0, 1],
                width: [`${thoughtContainerWidth / 3}px`, `${thoughtContainerWidth}px`],
            },
            {
                easing: easeInOutCubic,
                duration: 1,
                delay: delay / 2,
            }
        );

        await introAnimation.finished;

        thoughtContainer.style.width = thoughtContainerWidthProperty;
    });
</script>

<div class="thought float matchHeroColor absolute flex h-10 items-center justify-center rounded-full bg-[--wordColor] opacity-0" style={`--delay: ${delay}s; --rotation1: ${rotation1}deg; --rotation2: ${rotation2}deg;`} data-id={id} bind:this={thoughtContainer}>
    <slot />
</div>
