import React from 'react';
import { cn } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-12 w-full rounded-md border border-brand-gray bg-brand-charcoal px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red disabled:cursor-not-allowed disabled:opacity-50 transition-all',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[120px] w-full rounded-md border border-brand-gray bg-brand-charcoal px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red disabled:cursor-not-allowed disabled:opacity-50 transition-all',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
