"use client";

import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Logo } from '@/components/logo';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

// Metadata can still be exported from a client component layout
export const metadata: Metadata = {
  title: 'TechSport Central',
  description: 'A seamless fusion of real-time tech trends and dynamic sports coverage, built for enthusiasts and professionals alike.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {isHomePage ? (
            <div className="dark">
              {children}
            </div>
          ) : (
            <SidebarProvider>
              <Sidebar>
                <SidebarHeader>
                  <Logo />
                </SidebarHeader>
                <SidebarContent>
                  <MainNav />
                </SidebarContent>
                <SidebarFooter>
                  <UserNav />
                </SidebarFooter>
              </Sidebar>
              <SidebarInset>
                {children}
              </SidebarInset>
            </SidebarProvider>
          )}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
