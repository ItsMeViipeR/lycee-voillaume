import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/Header";
import clsx from "clsx";
import { ThemeProvider } from "@/features/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-baackground h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
