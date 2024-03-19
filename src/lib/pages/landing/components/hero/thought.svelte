<script lang="ts">
    export let style: string;
    export let delay: number = 0;
</script>

<div class="float matchHeroColor absolute h-10 rounded-full bg-[var(--wordColor)] flex justify-center items-center" style={style.concat(`--delay: ${delay}s;`)}>
    <slot />
</div>
