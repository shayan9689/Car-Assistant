"use client";

import { useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      const botMsg: Message = {
        sender: "bot",
        text: data.success ? data.reply : "Error: Could not get response",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Network error. Try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs p-3 rounded-lg ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : msg.text.includes("Performance")
                ? "mr-auto bg-gradient-to-r from-yellow-500 to-red-500 text-white shadow-lg"
                : "mr-auto bg-gray-600 text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {loading && <div className="mb-2 text-center text-gray-300">Typing...</div>}

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 rounded-l-lg text-black"
          placeholder="Ask me anything about cars..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
