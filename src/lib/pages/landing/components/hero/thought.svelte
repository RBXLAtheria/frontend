<script lang="ts">
    import { onMount } from "svelte";
    import { animate } from "motion";
    import { easeInOutCubic } from "$lib/easings";

    export let style: string;
    export let delay: number = 0;
    export let rotation1: number = 0;
    export let rotation2: number = 0;

    let thoughtContainer: HTMLDivElement;

    onMount(() => {
        let thoughtContainerWidth: number = thoughtContainer.clientWidth;

        animate(
            thoughtContainer,
            {
                opacity: [0, 1],
                width: [`${thoughtContainerWidth / 3}px`, `${thoughtContainerWidth}px`],
            },
            {
                easing: easeInOutCubic,
                duration: 1,
                delay: delay,
            }
        );
    });
</script>

<div class="float matchHeroColor absolute h-10 rounded-full bg-[--wordColor] flex justify-center items-center" style={style.concat(`--delay: ${delay}s; --rotation1: ${rotation1}deg; --rotation2: ${rotation2}deg;`)} bind:this={thoughtContainer}>
    <slot />
</div>
