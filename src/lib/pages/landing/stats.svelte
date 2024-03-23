<script lang="ts">
    import Stat from "./components/stats/stat.svelte";
</script>

<div class="section relative flex h-fit min-h-screen flex-col gap-2 px-0 md:h-screen md:flex-row md:px-10" id="section-stats">
    <Stat id="feedbackIncrease" number="22%" name="increase in user feedback" color="#66FF99">
        {#each Array(10) as _value, index}
            <svg class="arrow absolute aspect-square -translate-y-1/2 fill-[--sectionColor]" style="width: {Math.random() * 2 + 2}rem; {Math.random() > 0.5 ? 'left' : 'right'}: {Math.random() * 50}%; --speed: {Math.random() * 2.5 + 1}s; --delay: {index / 2}s; --startY: {100 - Math.random() * 5}%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
        {/each}
    </Stat>

    <Stat id="fasterResolution" number="30%" name="faster feedback resolution" color="#FF6666">
        {#each Array(4) as _value, quadrant}
            <div class="absolute h-[calc(50%-5%)] w-[calc(50%-5%)]" style="top: calc({25 * (quadrant == 0 || quadrant == 1 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 1 ? 0 : 1)}%); left: calc({25 * (quadrant == 0 || quadrant == 2 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 2 ? 0 : 1)}%);">
                {#each Array(2) as _value}
                    <svg class="float absolute aspect-square fill-[--sectionColor]" style="width: {Math.random() * 2 + 1.5}rem; {quadrant == 0 || quadrant == 2 ? 'left' : 'right'}: {Math.random() * 100}%; top: {Math.random() * 100}%; --rotation1: 0deg; --rotation2: 0deg; --delay: {Math.random() * 2}s;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                    </svg>
                {/each}
            </div>
        {/each}
    </Stat>

    <Stat id="ratingIncrease" number="95%" name="average increase in rating" color="#FFD700">
        {#each Array(4) as _value, quadrant}
            <div class="absolute h-[calc(50%-5%)] w-[calc(50%-5%)]" style="top: calc({25 * (quadrant == 0 || quadrant == 1 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 1 ? 0 : 1)}%); left: calc({25 * (quadrant == 0 || quadrant == 2 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 2 ? 0 : 1)}%);">
                {#each Array(5) as _value, index}
                    <svg class="heart absolute aspect-square fill-[--sectionColor]" style="width: {Math.random() * 2 + 1.5}rem; {quadrant == 0 || quadrant == 2 ? 'left' : 'right'}: {Math.random() * 100}%; top: {Math.random() * 100}%; --delay: {index + (quadrant + 1)}s;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                {/each}
            </div>
        {/each}
    </Stat>
</div>

<style lang="postcss">
    :global(#section-stats .stat[data-id="feedbackIncrease"] .arrow) {
        opacity: 0;
        top: var(--startY);
        animation: arrowRise infinite var(--speed) ease-in-out var(--delay);
    }

    @keyframes arrowRise {
        0% {
            top: var(--startY);
        }

        10% {
            opacity: 1;
        }

        80% {
            opacity: 0;
        }

        90% {
            top: 0%;
        }
    }

    :global(#section-stats .stat[data-id="ratingIncrease"] .heart) {
        opacity: 0;
        transform: scale(0) translateY(30px);
        animation: heartPopup infinite 6s cubic-bezier(0.34, 1.56, 0.64, 1) var(--delay);
    }

    @keyframes heartPopup {
        0% {
            opacity: 0;
            transform: scale(0) translateY(30px);
        }

        15%,
        85% {
            opacity: 1;
            transform: scale(1) translateY(0px);
        }

        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>
