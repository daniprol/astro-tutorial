// jsx file and not astro!
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    const [greeting, setGreeting] = useState(messages[0]);
    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New greeting
            </button>
        </div>
    );
}
