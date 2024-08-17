import Link from 'next/link'
import React from 'react'

export const SeccionTuMarca = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-5">Consejos de marca</h2>
            <p className=" max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Obtenga asesoramiento de expertos sobre cómo construir una marca sólida para su negocio
            </p>
            <div className="flex justify-center text-center">
              <Link href='/Plantillas'>
                <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                  Ver Caracteristicas
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary p-3 text-primary-foreground">
              </div>
              <h3 className="text-lg font-bold">Brand Identity</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Develop a strong and memorable brand identity to stand out in the market.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
              </div>
              <h3 className="text-lg font-bold">Target Audience</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Identify your target audience and create a brand that resonates with them.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 text-muted-foreground">
              </div>
              <h3 className="text-lg font-bold">Visual Design</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Craft a visually appealing brand with consistent design elements.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-accent p-3 text-accent-foreground">
              </div>
              <h3 className="text-lg font-bold">Marketing Strategy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Develop a comprehensive marketing strategy to effectively promote your brand.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary p-3 text-primary-foreground">
              </div>
              <h3 className="text-lg font-bold">Brand Positioning</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Position your brand uniquely in the market to stand out from the competition.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
              </div>
              <h3 className="text-lg font-bold">Brand Growth</h3>
            </div>
            <p className="text-sm text-muted-foreground">Develop strategies to grow and scale your brand over time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
