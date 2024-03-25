import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Provider from "@/app/provider";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import React from "react";
import ColorModeProvider from "./ColorModeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Admin",
  description: "An admin dashboard.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <AppRouterCacheProvider>
            <ColorModeProvider>
              <>
                <CssBaseline />
                {children}
              </>
            </ColorModeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
