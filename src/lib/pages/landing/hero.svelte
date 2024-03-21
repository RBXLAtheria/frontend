<script lang="ts">
    import Rating from "./components/hero/rating.svelte";
    import Thought from "./components/hero/thought.svelte";
    import { onMount } from "svelte";
    import { animate, timeline, stagger, spring, type EasingGenerator, type AnimationControls, type TimelineDefinition, type AnimationOptions } from "motion";
    import { easeInOutCubic } from "$lib/easings";

    const WORD_CONTAINER_ANIMATION_SPRING: EasingGenerator = spring({ stiffness: 50, mass: 1, damping: 15, velocity: 0 });
    const LETTER_ANIMATION_OPTIONS: AnimationOptions = {
        easing: easeInOutCubic,
        duration: 0.2,
        delay: stagger(0.1),
    };
    const WORDS: { text: string; color: string }[] = [
        { text: "Streamline", color: "#7FFFD4" },
        { text: "Optimize", color: "#98FB98" },
        { text: "Share", color: "#FFDAB9" },
        { text: "Elevate", color: "#FFF0F5" },
        { text: "Fine-tune", color: "#E6BE8A" },
        { text: "Discuss", color: "#FFDAB9" },
        { text: "Augment", color: "#F08080" },
    ];

    let contentContainer: HTMLDivElement;
    let wordsContainer: HTMLDivElement;
    let currentWord: number = -1;

    async function nextWord() {
        let lastWord: number = currentWord;

        currentWord = currentWord >= WORDS.length - 1 ? 0 : currentWord + 1;

        if (!WORDS[lastWord]) return;

        const oldLetterAnimation: AnimationControls = animate(
            `span[data-index="${lastWord}"] span`,
            {
                opacity: [1, 0],
            },
            LETTER_ANIMATION_OPTIONS
        );

        await oldLetterAnimation.finished;

        const oldWordContainer: HTMLSpanElement = wordsContainer.querySelector(`span[data-index="${lastWord}"]`)!;
        let oldWordContainerSize: number = oldWordContainer.clientWidth;
        oldWordContainer.style.display = "none";

        const newWordContainer: HTMLSpanElement = wordsContainer.querySelector(`span[data-index="${currentWord}"]`)!;
        newWordContainer.style.display = "flex";

        contentContainer.style.setProperty("--wordColor", WORDS[currentWord].color);
        contentContainer.style.setProperty("--buttonColor", `${WORDS[currentWord].color}26`);

        timeline([
            [
                `span[data-index="${currentWord}"] span`,
                {
                    opacity: [0, 1],
                },
                LETTER_ANIMATION_OPTIONS,
            ],
            [
                wordsContainer,
                {
                    width: [`${oldWordContainerSize}px`, `${newWordContainer.clientWidth}px`],
                },
                {
                    at: "<",
                    easing: WORD_CONTAINER_ANIMATION_SPRING,
                    duration: 0.5 * (newWordContainer.querySelectorAll("span").length - 1),
                },
            ],
        ] as TimelineDefinition);
    }

    onMount(() => {
        wordsContainer.style.width = `${wordsContainer.querySelector(`span[data-index="0"]`)!.clientWidth}px`;

        const cycleInterval: number = setInterval(nextWord, 5000);
        nextWord();

        return () => {
            clearInterval(cycleInterval);
        };
    });
</script>

<div class="relative h-screen w-full [&>div]:absolute [&>div]:left-0 [&>div]:top-0 [&>div]:h-full [&>div]:w-full" style="--wordColor: {WORDS[0].color}; --buttonColor: {WORDS[0].color}26" bind:this={contentContainer}>
    <div class="z-[1] flex flex-col items-center justify-center gap-7 md:gap-10">
        <h1 class="flex select-none flex-col items-center justify-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span class="flex w-full justify-center">
                <div class="relative w-[303.59px]" bind:this={wordsContainer}>
                    {#each WORDS as word, index}
                        <span class="absolute left-0 top-0 w-fit {index !== 0 ? 'hidden' : ''}" style="color: {word.color}; text-shadow: {word.color}80 0 0 100px;" data-index={index}>
                            {#each [...word.text.split(""), "&nbsp;"] as letter}
                                <span>{@html letter}</span>
                            {/each}
                        </span>
                    {/each}
                </div>
                your user<span class="hidden sm:inline-block">&nbsp;feedback</span>
            </span>

            <span><span class="inline-block sm:hidden">feedback</span> with Atheria.</span>
        </h1>

        <p class="max-w-[80%] text-lg md:max-w-[80%] md:text-xl lg:max-w-3xl">Revolutionize Roblox game development with Atheria. Easily collaborate with users, manage feedback effortlessly, and elevate player engagement to new levels.</p>

        <div class="flex items-center justify-center gap-2">
            <a class="matchHeroColor primary !border-[var(--wordColor)] !bg-[--buttonColor] !transition-[border-radius,border-color] !duration-300" href="/get-started">Get started</a>
            <a class="secondary" href="#b">Learn more</a>
        </div>
    </div>

    <div>
        <Rating rating={4} delay={1} size={1} style="top: 11.5%; left: 21.8%;;" />
        <Rating rating={3} delay={0} size={1.2} style="top: 79%; left: 11.4%;" />
        <Rating rating={2} delay={2} size={0.9} style="top: 77.4%; right: 21%;" />
        <Rating rating={5} delay={0.25} size={1.4} style="top: 15%; right: 15.2%;" />

        <Thought delay={1} rotation1={1} rotation2={-0.5} style="width: 20%; top: 20%; left: 40%;" />
        <Thought delay={2} rotation1={-1} rotation2={1} style="width: 13%; top: 62.3%; left: 5%;" />
        <Thought delay={3} rotation1={-2} rotation2={2} style="width: 8%; top: 53.3%; right: 5%;" />
    </div>
</div>

<style lang="postcss">
    :global(.matchHeroColor) {
        @apply transition-colors duration-500 ease-cubic;
    }
</style>
