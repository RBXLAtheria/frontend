<script lang="ts">
    import Section from "../components/section.svelte";
    import { onMount } from "svelte";
    import { inView } from "motion";

    type message = { name: string; message: string; color: string };
    type messageWithTime = { name: string; message: string; color: string; time: string };
    type feedbackCount = { [key: number]: number };

    const VISIBLE_MESSAGES: number = 5;

    const MESSAGES: message[] = [
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

    let messagesContainer: HTMLDivElement;
    let currentMessages: messageWithTime[] = [];
    let topMessage: number = 0;
    let lastMessageTime: Date;

    function updateMessage(index: number, message: messageWithTime) {
        currentMessages[index] = message;

        const messageContainer: HTMLDivElement = messagesContainer.querySelector(`div[data-index="${index}"]`)!;

        const iconContainer: HTMLDivElement = messageContainer.querySelector("div.icon")!;
        iconContainer.style.backgroundColor = message.color;

        const nameLabel: HTMLParagraphElement = messageContainer.querySelector("p.name")!;
        nameLabel.style.color = message.color;
        nameLabel.innerText = message.name;

        const timeLabel: HTMLParagraphElement = messageContainer.querySelector("p.time")!;
        timeLabel.innerText = message.time;

        const messageLabel: HTMLParagraphElement = messageContainer.querySelector("p.message")!;
        messageLabel.innerText = message.message;
    }

    function nextMessage() {
        topMessage = topMessage >= MESSAGES.length ? 0 : topMessage + 1;

        let newMessages: messageWithTime[] = [];

        for (let index: number = 0; index < VISIBLE_MESSAGES; index++) {
            let message: messageWithTime;

            if (index === VISIBLE_MESSAGES - 1) {
                const currentIndex: number = topMessage + index;
                message = MESSAGES[currentIndex > MESSAGES.length ? 0 + -(currentIndex - MESSAGES.length) : currentIndex] as messageWithTime;

                let time: Date = new Date(lastMessageTime.getTime() + 60000);
                message["time"] = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
                lastMessageTime = time;
            } else {
                message = currentMessages[index + 1];
            }

            newMessages[index] = message;
        }

        for (let index: number = 0; index < newMessages.length; index++) {
            updateMessage(index, newMessages[index]);
        }
    }

    onMount(() => {
        const startTime: Date = new Date();

        for (let index: number = 0; index < VISIBLE_MESSAGES; index++) {
            let message: messageWithTime = MESSAGES[index] as messageWithTime;

            let time: Date = new Date(startTime.getTime() - 60000 * (VISIBLE_MESSAGES - index));
            message["time"] = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

            if (index === VISIBLE_MESSAGES - 1) {
                lastMessageTime = time;
            }

            updateMessage(index, message);
        }

        let cycleInterval: number | null;
        const stopMessagesContainerObserver: VoidFunction = inView(messagesContainer, () => {
            cycleInterval = setInterval(nextMessage, 3500);

            return () => {
                if (!cycleInterval) return;

                clearInterval(cycleInterval);
                cycleInterval = null;
            };
        });

        return () => {
            stopMessagesContainerObserver();

            if (cycleInterval) {
                clearInterval(cycleInterval);
            }
        };
    });
</script>

<Section id="issues-webhooks" color="#7289DA" title={`Long gone are the days of<br><span class="highlight">Discord webhooks.</span>`} description="Using Discord webhooks for feedback poses challenges as your game grows. They struggle to handle increased feedback, making collaboration and insight gathering difficult. Atheria simplifies this process, offering a centralized platform tailored for gaming. Easily collect, organize, and analyze feedback in near real-time, fostering teamwork and improvement. Switch to Atheria to overcome Discord webhook limitations and unlock new opportunities for your game.">
    <div class="w-[80%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg class="h-16 aspect-square fill-[--sectionColor]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
            <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
        </svg>
    </div>

    <div class="w-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="scrollAnimation bg-secondary-950 select-none rounded-primary overflow-hidden border-primary z-[1]" bind:this={messagesContainer}>
            <div class="py-3 flex justify-center items-center gap-2 w-full">
                <p class="text-3xl text-primary-700">#</p>
                <p class="text-xl">Developers</p>
            </div>

            <div class="flex flex-col gap-5 justify-center items-center p-5 pt-0">
                {#each Array(VISIBLE_MESSAGES) as _value, index}
                    <div class="w-full flex justify-start items-start gap-3 text-left" data-index={index}>
                        <div class="icon h-12 aspect-square rounded-full" />

                        <div class="w-full overflow-hidden">
                            <div class="flex items-center gap-3">
                                <p class="name font-semibold text-lg leading-tight"></p>
                                <p class="time text-primary-600 text-sm leading-tight"></p>
                            </div>

                            <p class="message text-primary-600 leading-tight"></p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Section>
