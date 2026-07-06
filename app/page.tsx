import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Arrivals from '@/components/Arrivals';
import Brands from '@/components/Brands';
import Marquee from '@/components/Marquee';
import Story from '@/components/Story';
import Pillars from '@/components/Pillars';
import Location from '@/components/Location';
import Community from '@/components/Community';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import CursorEffects from '@/components/CursorEffects';

export default function Home() {
  return (
    <>
      {/* Shoe silhouette background pattern — nearly invisible */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.016,
          backgroundImage: "url('/shoe-pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '420px 210px',
        }}
      />

      {/* Film grain overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 70,
          opacity: 0.05,
          mixBlendMode: 'overlay',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <Nav />
      <main>
        <Hero />
        <Arrivals />
        <Brands />
        <Marquee />
        <Story />
        <Pillars />
        <Location />
        <Community />
        <Socials />
      </main>
      <Footer />

      {/* Client-side: scroll reveals, parallax, nav scroll effect */}
      <ScrollAnimations />
      {/* Cursor-driven tilt & parallax on pillar + brand cards */}
      <CursorEffects />
    </>
  );
}
