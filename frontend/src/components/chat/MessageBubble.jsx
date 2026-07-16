import { Bot, User } from "lucide-react";

function MessageBubble({ sender, text }) {
  const isAI = sender === "ai";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-3xl gap-4 ${
          isAI ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            isAI
              ? "bg-blue-600"
              : "bg-green-600"
          }`}
        >
          {isAI ? (
            <Bot size={22} className="text-white" />
          ) : (
            <User size={22} className="text-white" />
          )}
        </div>

        <div
          className={`rounded-2xl px-6 py-4 ${
            isAI
              ? "bg-[#111827] border border-gray-800"
              : "bg-blue-600"
          }`}
        >
          <p className="text-white leading-7 whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;