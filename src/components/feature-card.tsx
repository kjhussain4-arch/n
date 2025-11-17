import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="bg-white rounded-sm p-8 shadow-sm border border-[#C7A96B]/10 hover:shadow-md transition-all duration-300 hover:border-[#C7A96B]/30"
      role="article"
      aria-label={title}
    >
      <div className="flex items-start gap-4">
        <div className="w-1 h-12 bg-[#C7A96B] rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="mb-4">
            <Icon className="w-6 h-6 text-[#C7A96B]" aria-hidden="true" strokeWidth={1.5} />
          </div>
          <h3 className="mb-3 text-[#0D1B2A]">{title}</h3>
          <p className="text-[#88909B] leading-relaxed" style={{ fontSize: '15px' }}>{description}</p>
        </div>
      </div>
    </div>
  );
}