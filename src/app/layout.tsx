import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Form",
  description: "A take home project for CommandLink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
