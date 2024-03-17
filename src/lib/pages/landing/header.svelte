<script lang="ts">
    let showMenu: boolean = false;
</script>

<header class="absolute top-0 left-0 w-full z-10 text-primary transition-all duration-300 px-[20%] py-8 {showMenu ? 'backdrop-blur-md backdrop-brightness-[0.15]' : ''}">
    <div class="flex justify-between items-center relative">
        <div class="flex justify-center items-center gap-1">
            <p class="text-2xl font-semibold">Atheria</p>
        </div>

        <div class="items-center gap-6 hidden md:flex font-semibold text-primary-300 hover:[&>a]:text-primary [&>a]:transition-colors">
            <a href="/#why">Why</a>
            <a href="/updates">Updates</a>
            <a href="/#contact">Contact</a>

            <div class="h-5 w-[2px] bg-slate-700 rounded-full" />

            <a class="h-8 aspect-square fill-primary-300 hover:fill-primary" href="https://github.com/RBXLAtheria" aria-label="View on GitHub">
                <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
            </a>
        </div>

        <button
            class="h-6 aspect-square md:hidden"
            on:click={() => {
                showMenu = !showMenu;
            }}
        >
            <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>

    {#if showMenu}
        <div class="flex flex-col gap-3 justify-center items-start py-4 md:hidden">
            <a href="/#why">Why</a>
            <a href="/updates">Updates</a>
            <a href="/#contact">Contact</a>
        </div>
    {/if}
</header>

{#if showMenu}
    <style lang="postcss">
        .pageViewport {
            overflow-y: hidden;
        }
    </style>
{/if}
