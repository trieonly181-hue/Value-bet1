import "./globals.css";

export const metadata = {
  title: "Afro Fashion",
  description: "Afro Fashion Telegram WebApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
    }
