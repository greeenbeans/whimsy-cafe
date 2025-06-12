import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-lavender-500 hover:bg-lavender-600 text-white focus:ring-lavender-500',
      secondary: 'bg-sage-500 hover:bg-sage-600 text-white focus:ring-sage-500',
      ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
      outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
// import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
// import styles from './style.module.scss';

// type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

// const Button = ({ children, ...props }: ButtonProps) => {
//   return (
//     <button type="button" {...props} className={styles.button}>
//       {children}
//     </button>
//   );
// };

// export default Button;
