import React from 'react';
import { motion } from 'motion/react';

interface SignalCardProps {
  type: 'win' | 'loss' | 'target';
  symbol: string;
  direction?: 'LONG' | 'SHORT';
  entry?: number;
  exit?: number;
  pnl: string;
  duration?: string;
  exitReason?: string;
  targetsHit?: string[];
  targetNumber?: string;
  delay?: number;
}

export function SignalCard({
  type,
  symbol,
  direction,
  entry,
  exit,
  pnl,
  duration,
  exitReason,
  targetsHit,
  targetNumber,
  delay = 0
}: SignalCardProps) {
  const isWin = type === 'win' || (type === 'target');
  const isTarget = type === 'target';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="bg-[#1C2530] rounded-sm p-6 shadow-lg border border-[#C7A96B]/10 hover:shadow-xl transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 pb-4 border-b border-[#C7A96B]/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {isTarget ? (
              <span className="text-[#C7A96B]" style={{ fontSize: '14px' }}>🎯 Target Hit: {targetNumber}</span>
            ) : (
              <span className={`${isWin ? 'text-[#2E8B57]' : 'text-[#C44536]'}`} style={{ fontSize: '14px' }}>
                {isWin ? '🟢' : '🔴'} TRADE CLOSED
              </span>
            )}
          </div>
          <div className="text-white" style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
            {symbol}
          </div>
        </div>
        <div className={`px-3 py-1 rounded-sm ${isWin ? 'bg-[#2E8B57]/10' : 'bg-[#C44536]/10'}`}>
          <span className={`${isWin ? 'text-[#2E8B57]' : 'text-[#C44536]'}`} style={{ fontSize: '16px', fontWeight: 600 }}>
            {pnl}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3">
        {direction && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Direction</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{direction}</span>
          </div>
        )}
        
        {entry && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Entry</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{entry}</span>
          </div>
        )}
        
        {exit && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Exit</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{exit}</span>
          </div>
        )}
        
        {duration && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Duration</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{duration}</span>
          </div>
        )}
        
        {exitReason && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Exit Reason</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{exitReason}</span>
          </div>
        )}
        
        {targetsHit && targetsHit.length > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-[#88909B]" style={{ fontSize: '14px' }}>Targets Hit</span>
            <span className="text-[#C7A96B]" style={{ fontSize: '14px', fontWeight: 500 }}>
              {targetsHit.join(', ')}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
