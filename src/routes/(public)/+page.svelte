<script lang="ts">
    import Header from "$lib/pages/landing/header.svelte";
    import Hero from "$lib/pages/landing/hero.svelte";
    import Stats from "$lib/pages/landing/stats.svelte";
    import IssuesWebhooks from "$lib/pages/landing/issues/webhooks.svelte";
    import IssuesOrganization from "$lib/pages/landing/issues/organization.svelte";
    import FeaturesDataControl from "$lib/pages/landing/features/dataControl.svelte";
    import FeaturesExtension from "$lib/pages/landing/features/extension.svelte";
    import { onMount } from "svelte";
    import { inView, animate, stagger, type AnimationOptions, type AnimationControls } from "motion";

    const SECTION_FADE_ANIMATION_OPTIONS: AnimationOptions = {
        duration: 1,
        easing: [0.17, 0.55, 0.55, 1],
        delay: stagger(0.15),
    };

    onMount(() => {
        const sections: NodeListOf<HTMLDivElement> = document.querySelectorAll(".section");

        sections.forEach((section: HTMLDivElement) => {
            const scrollAnimationObjects: NodeListOf<HTMLElement> = section.querySelectorAll(".scrollAnimation");

            scrollAnimationObjects.forEach((element: HTMLElement) => {
                element.style.opacity = "0";

                if (element.classList.contains("fromOpacity")) return;

                let xPosition: number = element.classList.contains("fromLeft") ? -20 : 20;
                element.style.transform = `translateX(${xPosition}px) translateY(20px)`;
            });
        });

        const stopSectionObserver: VoidFunction = inView(
            sections,
            (info: IntersectionObserverEntry) => {
                const scrollAnimationFromLeftObjects: NodeListOf<HTMLElement> = info.target.querySelectorAll(".scrollAnimation.fromLeft");

                animate(
                    scrollAnimationFromLeftObjects,
                    {
                        opacity: [0, 1],
                        x: ["-20px", "0px"],
                        y: ["20px", "0px"],
                    },
                    SECTION_FADE_ANIMATION_OPTIONS
                );

                const scrollAnimationFromRightObjects: NodeListOf<HTMLElement> = info.target.querySelectorAll(".scrollAnimation.fromRight");

                if (scrollAnimationFromRightObjects.length > 0) {
                    setTimeout(() => {
                        animate(
                            scrollAnimationFromRightObjects,
                            {
                                opacity: [0, 1],
                                x: ["20px", "0px"],
                                y: ["20px", "0px"],
                            },
                            SECTION_FADE_ANIMATION_OPTIONS
                        );
                    }, 150 * scrollAnimationFromLeftObjects.length);
                }

                const scrollAnimationOpacityObjects: NodeListOf<HTMLElement> = info.target.querySelectorAll(".scrollAnimation.fromOpacity");

                if (scrollAnimationOpacityObjects.length > 0) {
                    setTimeout(
                        () => {
                            animate(
                                scrollAnimationOpacityObjects,
                                {
                                    opacity: [0, 1],
                                },
                                SECTION_FADE_ANIMATION_OPTIONS
                            );
                        },
                        150 * (scrollAnimationFromLeftObjects.length + scrollAnimationOpacityObjects.length)
                    );
                }
            },
            {
                margin: "0px 0px -400px 0px",
            }
        );

        return () => {
            stopSectionObserver();
        };
    });
</script>

<svelte:head>
    <title>Manage your user feedback with Atheria</title>
</svelte:head>

<div class="relative h-screen">
    <Header />
    <Hero />
</div>

<div class="flex w-full flex-col gap-28 md:gap-0">
    <Stats />

    <IssuesWebhooks />
    <IssuesOrganization />

    <FeaturesDataControl />
    <FeaturesExtension />
</div>

<style lang="postcss">
    :global(main) {
        background-image: radial-gradient(rgb(10, 10, 10) 10%, transparent 10%), radial-gradient(rgb(10, 10, 10) 10%, transparent 10%);
        background-position:
            0px 0px,
            8px 8px;
        background-size: 16px 16px;
    }

    :global(.section .highlight) {
        color: var(--sectionColor);
        text-shadow: var(--sectionShadowColor) 0 0 65px;
    }

    :global(.float) {
        rotate: var(--rotation1);
        animation: float infinite 6s ease-in-out var(--delay);
    }

    @keyframes float {
        0% {
            rotate: var(--rotation1);
            translate: 0px 0px;
        }

        50% {
            rotate: var(--rotation2);
            translate: 0px 10px;
        }

        100% {
            rotate: var(--rotation1);
            translate: 0px 0px;
        }
    }
</style>
