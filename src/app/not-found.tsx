import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NotFoundPage from "@/components/pages/NotFoundPage";

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1">
        <NotFoundPage />
      </div>
      <Footer />
    </div>
  );
}
