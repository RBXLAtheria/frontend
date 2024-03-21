<script lang="ts">
    export let id: string;
    export let title: string;
    export let description: string;
    export let color: string = "#ffffff";
</script>

<span {id} class="relative" />

<div class="section flex flex-col justify-center lg:justify-between items-center w-full h-fit min-h-screen lg:h-screen px-10 relative lg:flex-row" style="--sectionColor: {color}; --sectionColorTransparent: {color}80;" id="section-{id}">
    <div class="w-full lg:w-[50%] h-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-7 lg:pl-[10%] 2xl:pl-[15%]">
        <p class="scrollAnimation fromLeft w-full text-4xl font-bold tracking-tight">{@html title}</p>

        <p class="scrollAnimation fromLeft text-lg">{description}</p>

        <div class="scrollAnimation fromLeft flex justify-center items-center gap-2">
            <a class="primary !bg-black !border-[--sectionColor] !text-base" href="/get-started">Get started</a>
            <a class="secondary !text-base" href="#b">Learn more</a>
        </div>
    </div>

    <div class="relative w-full lg:w-auto lg:flex-grow h-fit lg:h-full">
        <slot />
    </div>
</div>
