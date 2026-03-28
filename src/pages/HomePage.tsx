import { HeroSlider } from "../components/sections/HeroSlider";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { AboutSection } from "../components/sections/AboutSection";
import { GallerySection } from "../components/sections/GallerySection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { LeftFixedEnquiryPanel } from "../components/common/LeftFixedEnquiryPanel";
import { HorizontalEnquiryForm } from "../components/common/HorizontalEnquiryForm";
import { IntroSection } from "../components/sections/IntroSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { ShortsVideoSection } from "../components/sections/ShortsVideoSection";
import { WhyChooseSection } from "../components/sections/WhyChooseSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { StatsSection } from "../components/sections/StatsSection";
import { InstagramFeed } from "../components/sections/InstagramFeed";

import { SEO } from "../components/common/SEO";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Aeromitra Aviation Academy — Pilot Training"
        description="Premier pilot training and aviation courses. We specialize in CPL, PPL, Type Rating, and DGCA ground classes for aspiring aviators worldwide."
      />
      <LeftFixedEnquiryPanel />
      <HeroSlider />

      <StatsSection />
      <HorizontalEnquiryForm />

      <IntroSection />
      <FeaturedInStrip />

      <PortfolioSection />
      <ShortsVideoSection />

      <HorizontalEnquiryForm />

      <ServicesGrid />
      <WhyChooseSection />
      <TestimonialsSection />

      <HorizontalEnquiryForm />

      <AboutSection />
      <GallerySection />

      <HorizontalEnquiryForm />

      <InstagramFeed />
      <ClientsStrip />
      <FAQSection />
      <ContactSection />
    </>
  );
};
