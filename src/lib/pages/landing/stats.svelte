<script lang="ts">
    import Stat from "./components/stats/stat.svelte";
</script>

<div class="section relative flex h-fit min-h-screen flex-col px-0 md:h-screen md:flex-row md:px-10">
    <Stat number="22%" name="increase user feedback" color="#66FF99">
        {#each Array(10) as _value}
            <svg class="absolute aspect-square fill-[--sectionColor]" style="width: {Math.random() * 2 + 1.5}rem; {Math.random() > 0.5 ? 'left' : 'right'}: {Math.random() * 50}%; top: {Math.random() * 100}%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
        {/each}
    </Stat>

    <Stat number="30%" name="faster feedback resolution" color="#FF6666">
        {#each Array(10) as _value}
            <svg class="absolute aspect-square fill-[--sectionColor]" style="width: {Math.random() * 2 + 1.5}rem; {Math.random() > 0.5 ? 'left' : 'right'}: {Math.random() * 50}%; top: {Math.random() * 100}%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>
        {/each}
    </Stat>

    <Stat number="95%" name="average game rating" color="#FFD700">
        {#each Array(10) as _value}
            <svg class="absolute aspect-square fill-[--sectionColor]" style="width: {Math.random() * 2 + 1.5}rem; {Math.random() > 0.5 ? 'left' : 'right'}: {Math.random() * 50}%; top: {Math.random() * 100}%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
        {/each}
    </Stat>
</div>
