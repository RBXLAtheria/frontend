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

<div class="relative h-screen w-full [&>div]:absolute [&>div]:left-0 [&>div]:top-0 [&>div]:h-full [&>div]:w-full" id="hero" style="--wordColor: {WORDS[0].color}; --buttonColor: {WORDS[0].color}26" bind:this={contentContainer}>
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

        <p class="w-full px-10 text-lg md:text-xl lg:w-fit lg:max-w-3xl lg:px-0">Revolutionize Roblox game development with Atheria. Easily collaborate with users, manage feedback effortlessly, and elevate player engagement to new levels.</p>

        <div class="flex items-center justify-center gap-2">
            <a class="matchHeroColor primary !border-[var(--wordColor)] !bg-[--buttonColor] !transition-[border-radius,border-color] !duration-300" href="/get-started">Get started</a>
            <a class="secondary" href="#b">Learn more</a>
        </div>
    </div>

    <div>
        <Rating id="1" rating={4} delay={1} />
        <Rating id="2" rating={3} delay={0} />
        <Rating id="3" rating={2} delay={2} />
        <Rating id="4" rating={5} delay={0.25} />

        <Thought id="1" delay={1} rotation1={1} rotation2={-0.5} />
        <Thought id="2" delay={2} rotation1={-1} rotation2={1} />
        <Thought id="3" delay={3} rotation1={-2} rotation2={2} />
    </div>
</div>

<style lang="postcss">
    :global(.matchHeroColor) {
        @apply transition-colors duration-500 ease-cubic;
    }

    :global(#hero .rating[data-id="1"]) {
        --size: 0.8;
        top: 10%;
        left: 11%;
    }

    :global(#hero .rating[data-id="2"]) {
        --size: 1;
        bottom: 8%;
        left: 20%;
    }

    :global(#hero .rating[data-id="3"]) {
        --size: 1;
        bottom: 25.6%;
        right: 8%;
    }

    :global(#hero .rating[data-id="4"]) {
        --size: 1.2;
        top: 16%;
        right: 6.2%;
    }

    :global(#hero .thought[data-id="1"]) {
        width: 60%;
        top: 23.5%;
        left: 20%;
    }

    :global(#hero .thought[data-id="2"]) {
        width: 38%;
        bottom: 18%;
        left: 12%;
    }

    :global(#hero .thought[data-id="3"]) {
        @apply hidden;
    }

    @media (min-width: 640px) {
        :global(#hero .rating[data-id="1"]) {
            --size: 1;
            top: 12.5%;
            left: 11%;
        }

        :global(#hero .rating[data-id="2"]) {
            --size: 1.2;
            bottom: 10%;
            left: 11.4%;
        }

        :global(#hero .rating[data-id="3"]) {
            --size: 1;
            bottom: 22.6%;
            right: 18%;
        }

        :global(#hero .rating[data-id="4"]) {
            --size: 1.4;
            top: 14%;
            right: 6.2%;
        }

        :global(#hero .thought[data-id="1"]) {
            width: 35%;
            top: 23.5%;
            left: 32.5%;
        }

        :global(#hero .thought[data-id="2"]) {
            width: 18%;
            bottom: 19%;
            left: 8%;
        }

        :global(#hero .thought[data-id="3"]) {
            width: 12%;
            top: 62.3%;
            right: 5%;
            @apply block;
        }
    }

    @media (min-width: 1024px) {
        :global(#hero .rating[data-id="1"]) {
            top: 11.5%;
            left: 21.8%;
        }

        :global(#hero .rating[data-id="2"]) {
            bottom: 17%;
            left: 11.4%;
        }

        :global(#hero .rating[data-id="3"]) {
            --size: 0.95;
            bottom: 21.6%;
            right: 20%;
        }

        :global(#hero .rating[data-id="4"]) {
            top: 15%;
            right: 15.2%;
        }

        :global(#hero .thought[data-id="1"]) {
            width: 20%;
            top: 20%;
            left: 40%;
        }

        :global(#hero .thought[data-id="2"]) {
            width: 13%;
            top: 62.3%;
            left: 5%;
        }

        :global(#hero .thought[data-id="3"]) {
            width: 8%;
            top: 53.3%;
        }
    }
</style>
