import Link from "next/link"
import { Heading, Button } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 gap-6">
        <Heading level="h1" className="text-4xl md:text-5xl text-white font-normal">
          
        </Heading>

        {/* als @medusajs/ui Button `asChild` ondersteunt */}
        <Button size="large" variant="primary" asChild className="mt-4">
          <Link href="/store">Bekijk collectie</Link>
        </Button>

        {/* Als `asChild` niet bestaat, gebruik dan deze: */}
        {/* <Link href="/shop" className="mt-4 inline-flex items-center rounded-md px-4 py-2 bg-[rgba(0,0,0,0.6)] text-white hover:bg-[rgba(0,0,0,0.8)]">
          Bekijk collectie
        </Link> */}
      </div>
    </div>
  )
}

export default Hero
