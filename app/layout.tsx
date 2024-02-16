import { inter, lusi } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusi.className} antialiased`}>{children}</body>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}