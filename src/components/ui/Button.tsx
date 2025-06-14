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
      primary: 'bg-lavender hover:bg-lavender text-white focus:ring-lavender',
      secondary: 'bg-sage hover:bg-sage text-white focus:ring-sage',
      ghost: 'hover:bg-gray text-gray focus:ring-gray',
      outline: 'border border-gray hover:bg-gray text-gray focus:ring-gray',
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
