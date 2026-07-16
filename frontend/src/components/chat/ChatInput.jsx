import { Paperclip, SendHorizontal } from "lucide-react";
import { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111827] p-5">

      <div className="flex items-end gap-4">

        {/* Attachment Button */}

        <button
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-gray-400 transition hover:border-blue-500 hover:text-white"
        >
          <Paperclip size={20} />
        </button>

        {/* Input */}

        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about this repository..."
          className="flex-1 resize-none rounded-xl border border-gray-700 bg-[#0F172A] px-5 py-3 text-white outline-none transition focus:border-blue-500"
        />

        {/* Send */}

        <button
          className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-white transition hover:bg-blue-500"
        >
          <SendHorizontal size={18} />
          Send
        </button>

      </div>

      <p className="mt-3 text-sm text-gray-500">
        Forge AI can explain code, detect bugs, generate documentation and answer repository-specific questions.
      </p>

    </div>
  );
}

export default ChatInput;