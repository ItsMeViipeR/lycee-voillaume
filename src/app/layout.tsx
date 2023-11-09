import { ThemeProvider } from "../features/theme/ThemeProvider";
import "./globals.css";
import "./css/navbar.css";
import { Header } from "../features/layout/Header";
import clsx from "clsx";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={clsx("bg-background h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header />

            <div className="container">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
