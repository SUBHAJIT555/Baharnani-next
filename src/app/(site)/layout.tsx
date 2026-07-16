import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
