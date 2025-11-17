import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { CustomButton } from './custom-button';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface JoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinModal({ open, onOpenChange }: JoinModalProps) {
  const [copied, setCopied] = useState(false);
  const telegramLink = "https://t.me/Antha_Trading_Signal"; // Placeholder

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramLink);
    setCopied(true);
    toast.success('Link copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-[#C7A96B]/20">
        <DialogHeader>
          <DialogTitle className="text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)', fontSize: '24px' }}>
            Join VOID Tester Program
          </DialogTitle>
          <DialogDescription className="text-[#88909B]">
            Access institutional-grade signals via Telegram. Copy the link below or click to open directly.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="flex items-center gap-2 bg-[#F5F6F8] p-4 rounded-sm border border-[#C7A96B]/10">
            <code className="flex-1 text-sm text-[#1C2530] break-all">
              {telegramLink}
            </code>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-white rounded transition-colors"
              aria-label="Copy link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#2E8B57]" />
              ) : (
                <Copy className="w-4 h-4 text-[#88909B]" />
              )}
            </button>
          </div>
          <CustomButton 
            variant="gold" 
            className="w-full"
            onClick={() => window.open(telegramLink, '_blank')}
          >
            Open Telegram
          </CustomButton>
          <CustomButton 
            variant="ghost" 
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            Close
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}