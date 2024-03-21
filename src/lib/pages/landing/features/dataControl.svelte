<script lang="ts">
    import Section from "../components/section.svelte";
</script>

<!--https://www.youtube.com/watch?v=UgUQSm2JG6Y-->
<Section id="features-dataControl" color="#E6BE8A" title={`Step into control,<br><span class="highlight">say goodbye to data concerns.</span>`} description="Managing user feedback becomes daunting as your game expands. Existing systems struggle to scale, hindering collaboration and insight gathering. However with Atheria, you can seamlessly collect, organize, and analyze feedback in near real-time, fostering collaboration and driving improvement. Switch to Atheria to overcome organization challenges and unlock unlock new opportunities for your game." tags={["feature"]}>
    <svg class="absolute left-1/2 top-1/2 z-[1] aspect-square h-[15%] -translate-x-1/2 -translate-y-1/2 fill-[--sectionColor] stroke-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
    </svg>

    <svg class="absolute left-1/2 top-1/2 aspect-square h-1/4 -translate-x-1/2 -translate-y-1/2 fill-[--sectionColor]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
        <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
    </svg>

    <div class="[&>svg]:aspect-[3.1/1] [&>svg]:stroke-slate-700">
        <svg class="w-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1453 468" fill="none" stroke-linecap="round" stroke-width="10">
            <path d="M7.5 5C981 19.5 293 234 1447.5 252" />
        </svg>

        <svg class="w-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1453 468" fill="none" stroke-linecap="round" stroke-width="10">
            <path d="M5 254.5C774 317 1446 311 1446 311" />
        </svg>

        <svg class="w-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1453 468" fill="none" stroke-linecap="round" stroke-width="10">
            <path d="M5 449.005C474 504.505 959.5 368.505 1444 369.505" />
        </svg>
    </div>
</Section>
