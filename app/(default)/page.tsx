export const metadata = {
  title: 'Bienvenido a STATUS',
  description: 'STATUS es una aplicación de código abierto para la gestión de la conformidad de procesos de negocio desarrollado por la Universidad de Sevilla.',
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
