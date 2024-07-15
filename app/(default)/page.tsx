export const metadata = {
  title: 'Welcome to STATUS',
  description: 'STATUS is an open source application for business process compliance management developed by the University of Seville.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
