<script lang="ts">
    export let style: string;
    export let delay: number = 0;
    export let rotation1: number = 0;
    export let rotation2: number = 0;
</script>

<div class="float matchHeroColor absolute h-10 rounded-full bg-[var(--wordColor)] flex justify-center items-center" style={style.concat(`--delay: ${delay}s; --rotation1: ${rotation1}deg; --rotation2: ${rotation2}deg;`)}>
    <slot />
</div>
