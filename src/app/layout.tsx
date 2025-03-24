
import Providers from "../components/Providers";

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog app using Next.js, Material-UI, and RTK Query",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
