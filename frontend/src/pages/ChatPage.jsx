import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function ChatPage() {
  return (
    <div className="min-h-screen bg-[#030712]">

      <div className="mx-auto flex h-screen max-w-7xl flex-col px-8 py-8">

        <ChatHeader />

        <SuggestedQuestions />

        <div className="mt-6 flex-1 overflow-hidden">
          <ChatMessages />
        </div>

        <ChatInput />

      </div>

    </div>
  );
}

export default ChatPage;