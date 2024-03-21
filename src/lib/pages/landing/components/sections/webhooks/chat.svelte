<script lang="ts">
    import { onMount } from "svelte";
    import { inView } from "motion";

    type messageWithTime = { name: string; message: string; color: string; time: string };
    type message = { name: string; message: string; color: string };

    export let visibleMessages: number = 5;
    export let speed: number = 3500;
    export let messages: message[] = [];
    export let name: string = "";
    export let currentTime: Date;

    let chatContainer: HTMLDivElement;
    let currentMessages: messageWithTime[] = [];
    let topMessage: number = 0;

    function updateMessage(index: number, message: messageWithTime) {
        currentMessages[index] = message;

        const messageContainer: HTMLDivElement = chatContainer.querySelector(`div[data-index="${index}"]`)!;

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
        topMessage = topMessage >= messages.length - 1 ? 0 : topMessage + 1;

        let newMessages: messageWithTime[] = [];

        for (let index: number = 0; index < visibleMessages; index++) {
            let message: messageWithTime;

            if (index === visibleMessages - 1) {
                const currentIndex: number = topMessage + index;
                message = messages[currentIndex > messages.length - 1 ? 0 + Math.abs(currentIndex - messages.length) : currentIndex] as messageWithTime;
                message["time"] = currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
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
        for (let index: number = 0; index < visibleMessages; index++) {
            let message: messageWithTime = messages[index] as messageWithTime;
            message["time"] = new Date(currentTime.getTime() - 60000 * (visibleMessages - index)).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
            updateMessage(index, message);
        }

        let cycleInterval: number | null;
        const stopMessagesContainerObserver: VoidFunction = inView(chatContainer, () => {
            cycleInterval = setInterval(nextMessage, speed);

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

<div class="chat" data-name={name}>
    <div class="scrollAnimation bg-secondary-950 select-none rounded-primary overflow-hidden border-primary shadow-xl" bind:this={chatContainer}>
        <div class="py-3 flex justify-center items-center gap-2 w-full">
            <p class="text-3xl text-primary-700">#</p>
            <p class="text-xl">{name}</p>
        </div>

        <div class="flex flex-col gap-5 justify-center items-center p-5 pt-0">
            {#each Array(visibleMessages) as _value, index}
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
