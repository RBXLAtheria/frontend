<script lang="ts">
    import Rating from "./components/hero/rating.svelte";
    import Thought from "./components/hero/thought.svelte";
    import { onMount } from "svelte";
    import { animate, stagger, spring, type EasingGenerator, type AnimationControls } from "motion";
    import { easeInOutCubic } from "$lib/easings";

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
    let wordContainerAnimationSpring: EasingGenerator = spring({ stiffness: 50, mass: 1, damping: 15, velocity: 0 });

    async function nextWord() {
        let lastWord: number = currentWord;

        currentWord = currentWord >= WORDS.length - 1 ? 0 : currentWord + 1;

        if (!WORDS[lastWord]) return;

        const oldLetterAnimation: AnimationControls = animate(
            `span[data-index="${lastWord}"] span`,
            {
                opacity: [1, 0],
            },
            {
                autoplay: true,
                easing: easeInOutCubic,
                duration: 0.2,
                delay: stagger(0.1),
            }
        );

        await oldLetterAnimation.finished;

        (wordsContainer.querySelector(`span[data-index="${lastWord}"]`) as HTMLDivElement).style.display = "none";

        const newWordContainer: HTMLSpanElement = wordsContainer.querySelector(`span[data-index="${currentWord}"]`)!;
        newWordContainer.style.display = "flex";

        contentContainer.style.setProperty("--wordColor", WORDS[currentWord].color);

        animate(
            `span[data-index="${currentWord}"] span`,
            {
                opacity: [0, 1],
            },
            {
                autoplay: true,
                easing: easeInOutCubic,
                duration: 0.2,
                delay: stagger(0.1),
            }
        );

        animate(
            wordsContainer,
            {
                width: `${newWordContainer.clientWidth}px`,
            },
            {
                autoplay: true,
                easing: wordContainerAnimationSpring,
                duration: 0.5 * (newWordContainer.querySelectorAll("span").length - 1),
            }
        );
    }

    onMount(() => {
        const wordContainer: HTMLSpanElement = wordsContainer.querySelector(`span[data-index="0"]`)!;
        wordsContainer.style.width = `${wordContainer.clientWidth}px`;

        const cycleInterval: number = setInterval(nextWord, 5000);

        return () => {
            clearInterval(cycleInterval);
        };
    });
</script>

<div class="w-full h-screen relative [&>div]:absolute [&>div]:left-0 [&>div]:top-0 [&>div]:w-full [&>div]:h-full" style="--wordColor: {WORDS[0].color};" bind:this={contentContainer}>
    <div class="flex flex-col gap-7 md:gap-10 items-center justify-center z-[1]">
        <h1 class="flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl font-semibold md:font-bold tracking-tight select-none">
            <span class="w-full flex justify-center">
                <div class="w-[303.59px] relative" bind:this={wordsContainer}>
                    {#each WORDS as word, index}
                        <span class="w-fit absolute top-0 left-0 {index === 0 ? 'flex' : 'hidden'}" style="color: {word.color}; text-shadow: {word.color}80 0 0 100px;" data-index={index}>
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

        <p class="text-lg md:text-xl max-w-[80%] md:max-w-[80%] lg:max-w-3xl">Revolutionize Roblox game development with Atheria. Easily collaborate with users, manage feedback effortlessly, and elevate player engagement to new levels.</p>

        <div class="flex justify-center items-center gap-2">
            <a class="primary matchHeroColor !transition-[border-radius,border-color] !duration-500 !bg-black !border-[var(--wordColor)]" href="register">Get started</a>
            <a class="secondary" href="#b">Learn more</a>
        </div>
    </div>

    <div>
        <Rating rating={4} delay={1} size={1} style="top: 11.5%; left: 21.8%;;" />
        <Rating rating={3} delay={0} size={1.2} style="top: 79%; left: 11.4%;" />
        <Rating rating={2} delay={2} size={0.9} style="top: 77.4%; right: 21%;" />
        <Rating rating={5} delay={0.25} size={1.4} style="top: 15%; right: 15.2%;" />

        <Thought delay={1} style="width: 20%; top: 20%; left: 40%;" />
        <Thought delay={2} style="width: 13%; top: 62.3%; left: 5%;" />
        <Thought delay={3} style="width: 8%; top: 53.3%; right: 5%;" />
    </div>
</div>

<style lang="postcss">
    :global(.matchHeroColor) {
        @apply ease-cubic transition-colors duration-500;
    }
</style>
