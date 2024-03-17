<script lang="ts">
    export let style: string;
    export let delay: number = 0;
</script>

<div class="float wordColor absolute h-10 rounded-full bg-slate-700 flex justify-center items-center" style={style.concat(`--delay: ${delay}s;`)}>
    <slot />
</div>
