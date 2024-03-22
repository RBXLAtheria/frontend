<script lang="ts">
    export let number: string = "0%";
    export let name: string = "";
    export let color: string = "#ffffff";
</script>

<div class="relative h-[60vh] w-full md:h-full md:w-1/3" style="--sectionColor: {color}; --sectionShadowColor: {color}80;">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p class="highlight scrollAnimation fromLeft text-6xl font-bold tracking-tight">{number}</p>
        <p class="highlight scrollAnimation fromLeft mt-1 text-xl font-medium tracking-tight">{name}</p>
    </div>
</div>
