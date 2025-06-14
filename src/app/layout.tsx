// import type { Metadata } from 'next';
// import './globals.css';

// import { Inter, Playfair_Display } from 'next/font/google';
// import { type ReactNode } from 'react';

// export const metadata: Metadata = {
//   title: 'Whimsy Cafe - Artisanal Tea, Matcha & Pastries',
//   description:
//     'A cozy neighborhood cafe serving premium Beverages, fresh pastries, and delightful moments.',
// };

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair',
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Whimsy Cafe - Artisan Coffee & Pastries',
  description: 'Experience artisan teas and handcrafted pastries in our cozy, welcoming space.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
