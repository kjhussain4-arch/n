import React from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
  icon?: React.ReactNode;
}

export function StatCard({ label, value, delay = 0, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="bg-white rounded-sm px-8 py-6 shadow-sm border border-[#C7A96B]/10 text-center hover:shadow-md transition-shadow"
    >
      {icon && (
        <div className="flex justify-center mb-3">
          {icon}
        </div>
      )}
      <div className="text-[#0D1B2A] mb-2" style={{ fontSize: '32px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
        {value}
      </div>
      <div className="text-[#88909B]" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </motion.div>
  );
}