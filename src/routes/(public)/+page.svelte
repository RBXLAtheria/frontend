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
    :global(.section div p .highlight) {
        color: var(--sectionColor);
        text-shadow: var(--sectionColorTransparent) 0 0 100px;
    }
</style>
