import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WorkCarousel from '@/components/WorkCarousel'
import Contact from '@/components/Contact'
import ScheduleCall from '@/components/ScheduleCall'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WorkCarousel />
      <Contact />
      <ScheduleCall />
    </main>
  )
}
