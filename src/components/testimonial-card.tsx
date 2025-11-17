import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <p className="text-[#2F3E4D] mb-4 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img 
          src={avatar} 
          alt={`${name} avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="text-[#0B2340]" style={{ fontSize: '14px', fontWeight: 600 }}>
            {name}
          </div>
          <div className="text-[#667085]" style={{ fontSize: '12px' }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
