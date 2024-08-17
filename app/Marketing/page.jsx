import React from 'react'
import Publicidad from '../Componentes/Publicidad'
import Posicionamiento from '../Componentes/Posicionamiento'

const page = () => {
  return (
    <section>
      <Publicidad />
      <Posicionamiento />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Marketing Services</h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                From strategy to execution, we offer a comprehensive suite of marketing services to help your business
                thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full p-3 inline-block mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights into your audience and optimize your marketing efforts.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full p-3 inline-block mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">Advertising</h3>
                <p className="text-muted-foreground">
                  Reach your target audience through strategic advertising campaigns.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full p-3 inline-block mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                <p className="text-muted-foreground">Engage your audience with compelling, high-quality content.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full p-3 inline-block mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO</h3>
                <p className="text-muted-foreground">Optimize your online presence and drive more organic traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                Hear from our satisfied clients and learn how we've helped them achieve their marketing goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md text-left">
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground">
                    "The team at this marketing agency has been an invaluable partner in helping us grow our business.
                    Their expertise and strategic approach have been key to our success."
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      width={50}
                      height={50}
                      alt="Client Logo"
                      className="rounded-full"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-muted-foreground">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-left">
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground">
                    "I've been working with this marketing agency for years, and they consistently deliver results.
                    Their team is knowledgeable, responsive, and truly cares about the success of our business."
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      width={50}
                      height={50}
                      alt="Client Logo"
                      className="rounded-full"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-muted-foreground">CMO, Globex Corporation</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-left">
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground">
                    "This marketing agency has been a game-changer for our business. Their innovative strategies and
                    attention to detail have helped us reach new heights in our industry."
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      width={50}
                      height={50}
                      alt="Client Logo"
                      className="rounded-full"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">Bob Johnson</h4>
                      <p className="text-muted-foreground">Founder, Startup X</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default page