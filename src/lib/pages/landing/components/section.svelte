<script lang="ts">
    export let id: string;
    export let title: string;
    export let description: string;
    export let color: string = "#ffffff";
</script>

<span {id} class="relative" />

<div class="section flex flex-col justify-center md:justify-between items-center w-full h-screen px-10 relative md:flex-row" style="--sectionColor: {color}; --sectionColorTransparent: {color}80;" id="section-{id}">
    <div class="w-full md:w-[50%] h-full text-center md:text-left flex flex-col justify-center items-center md:items-start gap-5 md:gap-7 md:pl-[10%] 2xl:pl-[15%]">
        <p class="scrollAnimation w-full text-4xl font-semibold md:font-bold tracking-tight">{@html title}</p>

        <p class="scrollAnimation text-lg">{description}</p>

        <div class="scrollAnimation flex justify-center items-center gap-2">
            <a class="primary !bg-black !border-[--sectionColor] !text-base" href="/get-started">Get started</a>
            <a class="secondary !text-base" href="#b">Learn more</a>
        </div>
    </div>

    <div class="relative flex-grow h-full">
        <slot />
    </div>
</div>
