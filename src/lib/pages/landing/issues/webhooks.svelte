<script lang="ts">
    import { onMount } from "svelte";
    import Section from "../components/section.svelte";
    import Chat from "../components/sections/webhooks/chat.svelte";

    const DEVELOPER_CHAT_MESSAGES = [
        { name: "Alice", message: "We sure are getting a lot of feedback!", color: "#FF5733" },
        { name: "Bob", message: "I'm having trouble searching through all of this feedback though...", color: "#33FF57" },
        { name: "Charlie", message: "I know! I saw a really cool suggestion a minute ago but now it's been lost.", color: "#5733FF" },
        { name: "David", message: "It's like trying to find a needle in a haystack.", color: "#33FFFF" },
        { name: "Emma", message: "Wouldn't it be nice if we had better feedback tools?", color: "#FF33FF" },
        { name: "Frank", message: "Definitely. I wish Discord webhooks were more reliable.", color: "#FFFF33" },
        { name: "Alice", message: "Yeah, sometimes they seem to miss messages or get delayed.", color: "#FF5733" },
        { name: "Bob", message: "And setting them up can be a bit of a hassle too.", color: "#33FF57" },
        { name: "Charlie", message: "I've had instances where they just stop working for no apparent reason.", color: "#5733FF" },
        { name: "David", message: "I agree, it's frustrating when you can't rely on them.", color: "#33FFFF" },
        { name: "Emma", message: "I've had issues with them not sending messages at all.", color: "#FF33FF" },
        { name: "Charlie", message: "I wonder if there are any alternatives that are more reliable.", color: "#5733FF" },
        { name: "Frank", message: "Indeed. Anything would be better than dealing with unreliable webhooks.", color: "#FFFF33" },
        { name: "Alice", message: "I'll have to research some alternatives later.", color: "#FF5733" },
        { name: "Bob", message: "Let me know what you find!", color: "#33FF57" },
        { name: "Charlie", message: "It's also not scaling very well. As more messages come in, it's getting harder to find specific stuff.", color: "#5733FF" },
    ];

    const SYSTEM_NAME: string = "System";
    const SYSTEM_COLOR: string = "var(--sectionColor)";
    const FEEDBACK_CHAT_MESSAGES = [
        { name: SYSTEM_NAME, message: "[GrumpyGamer123] My character keeps getting stuck in walls! It's ruining my immersion!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[FrustratedFred] I reported a game-breaking bug two weeks ago and it's still not fixed!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[AnnoyedAvocado] Can we have an option to skip cutscenes? They're way too long!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[BuggedOutBetsy] The quest NPC disappeared and now I can't progress. Please fix ASAP!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[WhiningWally] There's no response to my bug reports! Are they even being looked at?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[GlitchyGina] Every time I try to open my inventory, the items duplicate. This is game-breaking!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[FeedbackFreddy] I've given feedback multiple times but never heard back. What's the point?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[RantingRicky] Please add more server capacity. The lag is unbearable during peak hours!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[FussyFiona] The game crashes whenever I try to enter a specific area. It's frustrating!", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[DisappointedDerek] I reported an exploit but it's still being abused. Why no action?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[LaggyLarry] The server performance is terrible! It's ruining the gameplay experience.", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[GripeyGabby] I've encountered the same bug for weeks now. When will it be fixed?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[SkepticalSally] How about adding a feature to auto-sort inventory? It would save a lot of time.", color: SYSTEM_COLOR },
        { name: "Charlie", message: "This a good suggestion! To bad we will lose it in this mess...", color: "#5733FF" },
        { name: SYSTEM_NAME, message: "[AnxiousAndy] NPCs are spawning inside walls, making quests impossible to complete.", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[GrumblingGary] Lack of communication about bug fixes is frustrating. Are devs even listening?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[UnhappyUrsula] Can we get more frequent updates on bug fixes and patch notes?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[WhinyWendy] The game freezes randomly, forcing me to restart. It's ruining my experience.", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[GrouchyGreg] Bugs reported months ago are still present. What's being done about them?", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[BuggyBobby] Dialogue options are glitched, making it impossible to progress in quests.", color: SYSTEM_COLOR },
        { name: SYSTEM_NAME, message: "[SnippySamantha] Feedback seems to be ignored. Is anyone even reading it?", color: SYSTEM_COLOR },
    ];

    let lastTime: Date = new Date();
    $: currentTime = new Date();

    onMount(() => {
        const timeUpdateInterval: number = setInterval(() => {
            let newTime: Date = new Date(lastTime.getTime() + 60000);
            lastTime = currentTime;
            currentTime = newTime;
        }, 3000);

        return () => {
            clearInterval(timeUpdateInterval);
        };
    });
</script>

<Section id="issues-webhooks" color="#7289DA" title={`Long gone are the days of<br><span class="highlight">Discord webhooks.</span>`} description="Using Discord webhooks for feedback poses challenges as your game grows. They struggle to handle increased feedback, making collaboration and insight gathering difficult. Atheria simplifies this process, offering a centralized platform tailored for gaming. Easily collect, organize, and analyze feedback in near real-time, fostering teamwork and improvement. Switch to Atheria to overcome Discord webhook limitations and unlock new opportunities for your game." tags={["why"]}>
    <div class="h-fit w-full md:h-[85vh] lg:h-full">
        <Chat name="Developers" messages={DEVELOPER_CHAT_MESSAGES} {currentTime} />

        <Chat name="Feedback" speed={1000} messages={FEEDBACK_CHAT_MESSAGES} {currentTime} />
    </div>
</Section>

<style lang="postcss">
    :global(#section-issues-webhooks .chat[data-name="Developers"]),
    :global(#section-issues-webhooks .chat[data-name="Feedback"]) {
        @apply static w-full px-0 sm:px-[15%] md:absolute md:!mt-0 md:w-[50%] md:px-0;
    }

    :global(#section-issues-webhooks .chat[data-name="Developers"]) {
        @apply z-[2] mt-16 md:shadow-xl;
    }

    :global(#section-issues-webhooks .chat[data-name="Feedback"]) {
        @apply z-[1] mt-4;
    }

    @media (min-width: 768px) {
        :global(#section-issues-webhooks .chat[data-name="Developers"]) {
            left: 3%;
            top: 8%;
        }

        :global(#section-issues-webhooks .chat[data-name="Feedback"]) {
            right: 3%;
            bottom: 8%;
        }
    }

    @media (min-width: 1024px) {
        :global(#section-issues-webhooks .chat[data-name="Developers"]) {
            left: 12%;
            top: 16%;
        }

        :global(#section-issues-webhooks .chat[data-name="Feedback"]) {
            right: 0%;
            bottom: 16%;
        }
    }
</style>
