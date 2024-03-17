<script lang="ts">
    import { Svrollbar } from "svrollbar";

    let viewportContainer: HTMLDivElement;
    let contentContainer: HTMLElement;
</script>

<div class="pageViewport w-full h-screen overflow-x-hidden" bind:this={viewportContainer}>
    <main class="w-full h-fit" bind:this={contentContainer}>
        <slot />
    </main>
</div>

<Svrollbar viewport={viewportContainer} contents={contentContainer} />
