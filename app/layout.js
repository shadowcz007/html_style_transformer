import "./globals.css";
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Markdown Editor",
  description: "A beautiful markdown editor with multiple themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
