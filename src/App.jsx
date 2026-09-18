import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Services from './components/Services.jsx';
import Packages from './components/Packages.jsx';
import CeramicCoating from './components/CeramicCoating.jsx';
import PaintCorrection from './components/PaintCorrection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import CTASection from './components/CTASection.jsx';
import ServiceArea from './components/ServiceArea.jsx';
import FAQ from './components/FAQ.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import Footer from './components/Footer.jsx';
import StickyQuoteButton from './components/StickyQuoteButton.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Packages />
        <CeramicCoating />
        <PaintCorrection />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <CTASection />
        <ServiceArea />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <StickyQuoteButton />
    </>
  );
}
