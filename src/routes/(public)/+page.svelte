<script lang="ts">
    import Header from "$lib/pages/landing/header.svelte";
    import Hero from "$lib/pages/landing/hero.svelte";
    import Stats from "$lib/pages/landing/stats.svelte";
    import IssuesWebhooks from "$lib/pages/landing/issues/webhooks.svelte";
    import IssuesOrganization from "$lib/pages/landing/issues/organization.svelte";
    import { onMount } from "svelte";
    import { inView, animate, stagger } from "motion";

    onMount(() => {
        const sections: NodeListOf<HTMLDivElement> = document.querySelectorAll(".section");

        sections.forEach((section: HTMLDivElement) => {
            const scrollAnimationObjects: NodeListOf<HTMLElement> = section.querySelectorAll(".scrollAnimation");

            scrollAnimationObjects.forEach((element: HTMLElement) => {
                element.style.opacity = "0";
                element.style.transform = "translateX(-20px) translateY(20px)";
            });
        });

        const stopSectionObserver: VoidFunction = inView(
            sections,
            (info: IntersectionObserverEntry) => {
                animate(
                    info.target.querySelectorAll(".scrollAnimation"),
                    {
                        opacity: [0, 1],
                        x: ["-20px", "0px"],
                        y: ["20px", "0px"],
                    },
                    {
                        duration: 1,
                        easing: [0.17, 0.55, 0.55, 1],
                        delay: stagger(0.3),
                    }
                );
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

<div class="h-screen relative">
    <Header />
    <Hero />
</div>

<Stats />

<IssuesWebhooks />
<IssuesOrganization />

<style lang="postcss">
    :global(main) {
        background-image: radial-gradient(rgb(10, 10, 10) 10%, transparent 10%), radial-gradient(rgb(10, 10, 10) 10%, transparent 10%);
        background-position:
            0px 0px,
            8px 8px;
        background-size: 16px 16px;
    }

    :global(.section div p .highlight) {
        color: var(--sectionColor);
        text-shadow: var(--sectionColorTransparent) 0 0 65px;
    }

    :global(.float) {
        rotate: var(--rotation1);
        will-change: translate rotate;
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
