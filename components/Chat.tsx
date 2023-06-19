"use client";

import { useChat } from "ai/react";
import { Input } from "./ui/input";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="gap-6 flex flex-col">
      <div>
        {messages.map((m) => (
          <div key={m.id}>
            {m.role}: {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <Input
            // className="text-black bg-pink-200"
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}
