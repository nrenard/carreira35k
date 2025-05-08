import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método 35k Mês A Estratégia que os Devs Top 1% Usam | Carreira 35k",
  description:
    "Descubra o método que está transformando devs subvalorizados em profissionais disputados e altamente pagos — mesmo sem inglês fluente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script async={true}>
          {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1188837633289625');
  fbq('track', 'PageView');
`}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1188837633289625&ev=PageView&noscript=1"
            />
          </noscript>
          {/* <!-- End Meta Pixel Code --> */}
        </script>
      </Head>
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
