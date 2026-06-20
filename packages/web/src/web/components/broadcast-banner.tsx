import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';

interface BroadcastMessage {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'alert';
}

export function BroadcastBanner() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState<BroadcastMessage | null>(null);

  useEffect(() => {
    // Fetch broadcast message from API
    const fetchBroadcast = async () => {
      try {
        const response = await fetch('/api/broadcast');
        if (response.ok) {
          const data = await response.json();
          if (data.message) {
            // Check if this message was already dismissed
            const dismissedId = sessionStorage.getItem(`broadcast-dismissed-${data.id}`);
            if (!dismissedId) {
              setMessage(data);
              setVisible(true);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch broadcast:', error);
      }
    };

    fetchBroadcast();
  }, []);

  const handleDismiss = () => {
    if (message) {
      sessionStorage.setItem(`broadcast-dismissed-${message.id}`, 'true');
    }
    setVisible(false);
  };

  if (!visible || !message) return null;

  const typeStyles = {
    info: 'bg-blue-500/20 border-blue-500/40 text-blue-200',
    success: 'bg-green-500/20 border-green-500/40 text-green-200',
    warning: 'bg-yellow-500/20 border-yellow-500/40 text-yellow-200',
    alert: 'bg-red-500/20 border-red-500/40 text-red-200',
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${typeStyles[message.type]} border-b backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bell size={20} className="flex-shrink-0" />
          <p className="text-sm sm:text-base font-semibold">{message.message}</p>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
          aria-label="Dismiss broadcast"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
