import type { Metadata } from "next";
import ReduxProvider from "@/redux/provider";
import StyledComponentsRegistry from "@/app/StyledComponentsRegistry";

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
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
