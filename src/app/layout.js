import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omegle",
  description: "Omegle",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.1.4/adapter.min.js"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
