import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={cn('bg-brand-charcoal border border-brand-gray rounded-xl overflow-hidden', className)}>
    {children}
  </div>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={cn('p-6', className)}>{children}</div>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={cn('p-6 pt-0', className)}>{children}</div>
);

export const CardFooter = ({ children, className }: CardProps) => (
  <div className={cn('p-6 pt-0 border-t border-brand-gray mt-auto', className)}>{children}</div>
);

export const CardTitle = ({ children, className }: CardProps) => (
  <h3 className={cn('text-2xl font-bold text-white', className)}>{children}</h3>
);

export const CardDescription = ({ children, className }: CardProps) => (
  <p className={cn('text-gray-400 text-sm mt-1', className)}>{children}</p>
);
