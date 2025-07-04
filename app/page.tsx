import { Container } from "./components/container";
import DownloadSection from "./components/download";
import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import { Header } from "./components/header";
import HeaderBanner from "./components/header-banner";
import Hero from "./components/hero";
import Reviews from "./components/reviews";
import VideoQuote from "./components/video-quote";
import { renderSchemaTags } from "./lib/seo";

export default function Home({
  searchParams = {},
}: {
  searchParams?: { type?: string };
}) {
  const params = searchParams || {};
  const qrType = params.type;

  return (
    <Container>
      <HeaderBanner />
      <Header />
      <Hero qrType={qrType} />
      <Reviews />
      <Features />
      <VideoQuote />
      <FAQ />
      <DownloadSection qrType={qrType} />
      <Footer />
      {renderSchemaTags()}
    </Container>
  );
}
