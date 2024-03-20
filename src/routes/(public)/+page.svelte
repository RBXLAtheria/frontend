<script lang="ts">
    import Header from "$lib/pages/landing/header.svelte";
    import Hero from "$lib/pages/landing/hero.svelte";
    import Stats from "$lib/pages/landing/stats.svelte";
    import IssuesWebhooks from "$lib/pages/landing/issues/webhooks.svelte";
    import IssuesOrganization from "$lib/pages/landing/issues/organization.svelte";
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
        text-shadow: var(--sectionColorTransparent) 0 0 100px;
    }

    :global(.float) {
        will-change: translate rotate;
        animation: float infinite 6s ease-in-out var(--delay);
    }

    @keyframes float {
        0% {
            rotate: 0deg;
            translate: 0px 0px;
        }

        50% {
            rotate: var(--rotation);
            translate: 0px 10px;
        }

        100% {
            rotate: 0deg;
            translate: 0px 0px;
        }
    }
</style>
