"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";


export default function Chat() {
  const { messages, append, isLoading } = useChat();
  
  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Story Telling App</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Customize the story by selecting the genre and tone.
            </p>
          </div>

          {/* genre selection code */}

          {/* tone selection code */}

          {/* button code */}

          {/* chat messages code */}
        </div>
      </div>
    </main>
  );
}