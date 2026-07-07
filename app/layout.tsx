import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme Coffee AI Assistant",
  description: "AI chatbot demo — answers customer questions from company docs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
