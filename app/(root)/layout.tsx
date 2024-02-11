import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
