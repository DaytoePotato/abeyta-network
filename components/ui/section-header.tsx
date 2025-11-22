'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(centered && 'text-center', 'mb-12', className)}
    >
      <h2 className="section-title text-gradient">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto mt-4">{subtitle}</p>}
    </motion.div>
  );
};

SectionHeader.displayName = 'SectionHeader';
