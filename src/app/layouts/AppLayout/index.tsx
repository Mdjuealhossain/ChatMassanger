import { siteConfig } from "@/app/global/config";
import ThemeContextProvider from "@/app/theme";
import { Metadata, Viewport } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import NextAuthProvider from "../NextAuthProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `${siteConfig.name} - %s` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.creator,
  manifest: `${siteConfig.url}manifest.json`,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon-16x16.png",
    apple: "/apple-icon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.localeUpperSpace,
    url: siteConfig.url,
    title: siteConfig.shortName,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ArifulI60735491",
  },
};

export default function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
