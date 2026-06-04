import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelasteknik Badge",
  description: "Sistem Verifikasi Sertifikat Kelasteknik.id",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="id">
        <body>
          <header className="flex justify-end p-4 border-b">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700">
                  Login dengan Google
                </button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}