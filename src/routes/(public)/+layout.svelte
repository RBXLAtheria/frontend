<script lang="ts">
    import { Svrollbar } from "svrollbar";

    let viewportContainer: HTMLDivElement;
    let contentContainer: HTMLElement;
</script>

<div class="pageViewport h-screen w-full overflow-x-hidden" bind:this={viewportContainer}>
    <main class="h-fit w-full" bind:this={contentContainer}>
        <slot />
    </main>
</div>

<Svrollbar viewport={viewportContainer} contents={contentContainer} />
