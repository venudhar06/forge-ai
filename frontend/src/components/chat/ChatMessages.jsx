import MessageBubble from "./MessageBubble";

function ChatMessages() {
  const messages = [
    {
      sender: "ai",
      text:
        "Hello 👋\n\nI've successfully analyzed your repository.\n\nYou can ask me about:\n\n• Project Architecture\n• Authentication Flow\n• Bugs & Security\n• Documentation\n• Performance Improvements",
    },
    {
      sender: "user",
      text: "Explain the authentication flow.",
    },
    {
      sender: "ai",
      text:
        "Authentication begins from the Login Page.\n\nThe frontend sends the user's credentials to the FastAPI backend.\n\nThe backend verifies them and returns a JWT token.\n\nThat token is stored securely and attached to future API requests.",
    },
  ];

  return (
    <div className="h-full overflow-y-auto rounded-2xl border border-gray-800 bg-[#030712] p-6">

      <div className="space-y-8">

        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            sender={message.sender}
            text={message.text}
          />
        ))}

      </div>

    </div>
  );
}

export default ChatMessages;