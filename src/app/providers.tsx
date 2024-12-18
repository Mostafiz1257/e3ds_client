"use client";

import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import ReduxProviders from "../lib/ReduxProvider";
import MsClarity from "./MsClarity";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ReduxProviders>
        <Toaster />
        <MsClarity /> 
        <NextThemesProvider {...themeProps}>
          {children} 
        </NextThemesProvider>
      </ReduxProviders>
    </NextUIProvider>
  );
}
