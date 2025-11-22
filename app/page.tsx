import { Hero } from '@/components/home/hero';
import { ServicesPreview } from '@/components/home/services-preview';
// import { Testimonials } from '@/components/home/testimonials'; // Uncomment when testimonials are ready
import { CTASection } from '@/components/home/cta-section';
import { MapSection } from '@/components/home/map-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      {/* <Testimonials /> */}
      <CTASection />
      <MapSection />
    </>
  );
}
