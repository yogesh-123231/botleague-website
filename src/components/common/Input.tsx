import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = 'text', className = '', containerClassName = '', id, ...props }, ref) => {
    return (
      <div className={`flex flex-col space-y-1.5 w-full ${containerClassName}`}>
        {label && (
          <label htmlFor={id} className="text-xs uppercase tracking-wider text-gray-400 font-medium">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={`px-4 py-3 bg-brand-grey/60 backdrop-blur-sm border ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-brand-red focus:ring-brand-red/20'
          } rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${className}`}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
