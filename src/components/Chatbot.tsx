
import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hi! Welcome to Paradise Estimating. How can I help you today?',
    sender: 'bot',
  },
];

const suggestedQuestions = [
  'What services do you offer?',
  'How do I get a quote?',
  'What is your turnaround time?',
  'Do you work with residential projects?',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate bot response after a delay
    setTimeout(() => {
      let responseText = '';

      // Simple pattern matching for demo purposes
      if (newMessage.toLowerCase().includes('service')) {
        responseText = 'We offer a wide range of construction estimating services including Concrete, Masonry, Roofing, HVAC, MEP, and more. Check out our Services page for more details!';
      } else if (newMessage.toLowerCase().includes('quote')) {
        responseText = 'To get a quote, please fill out our contact form or click on the "Get a Quote" button on the top of the page. We\'ll get back to you within 24 hours!';
      } else if (newMessage.toLowerCase().includes('time') || newMessage.toLowerCase().includes('long')) {
        responseText = 'Our typical turnaround time is 3-5 business days for standard projects. However, this can vary based on project complexity and current workload.';
      } else if (newMessage.toLowerCase().includes('residential')) {
        responseText = 'Yes, we work with residential projects of all sizes. From small renovations to custom homes, we have experience estimating costs for all types of residential construction.';
      } else {
        responseText = 'Thank you for your message. One of our team members will get back to you soon. Is there anything else I can help you with?';
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);

    // Simulate bot response based on the question
    setTimeout(() => {
      let responseText = '';

      if (question === 'What services do you offer?') {
        responseText = 'We offer Concrete, Masonry, Roofing, HVAC, MEP, Steel Structural, Excavation, Drywall, Finishes, and more construction estimating services.';
      } else if (question === 'How do I get a quote?') {
        responseText = 'You can get a quote by filling out our contact form, calling us directly, or clicking the "Get a Quote" button on our website.';
      } else if (question === 'What is your turnaround time?') {
        responseText = 'Our typical turnaround time is 3-5 business days for standard projects. For larger or more complex projects, it might take 5-7 business days.';
      } else if (question === 'Do you work with residential projects?') {
        responseText = 'Yes, we work with both residential and commercial projects. Our team has extensive experience in estimating costs for various types of construction.';
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={toggleChat}>
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window animate-fade-in">
          <div className="chatbot-header">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gold rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">PE</span>
              </div>
              <h3 className="font-semibold">Paradise Estimating</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-300">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={message.sender === 'bot' ? 'message-bot' : 'message-user'}>
                {message.text}
              </div>
            ))}

            {/* Suggested questions - show only after initial greeting */}
            {messages.length === 1 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500">Quick questions:</p>
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-xs py-1 px-2 h-auto block w-full text-left justify-start hover:bg-gray-100"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="chatbot-send" onClick={handleSendMessage}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
