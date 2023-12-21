// import Mantenimiento from "../Componentes/Mantenimiento";

export default function Plantillas() {
  return (
    <>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">
                Últimas Tecnologías y Tendencias en Desarrollo Web
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Sumérgete en nuestro análisis en profundidad sobre las últimas innovaciones y tendencias en el mundo del desarrollo web.
                Desde tecnologías emergentes hasta valiosos insights de mercado, exploramos cada rincón del panorama digital para brindarte información clave que potencie tu conocimiento y guíe tu estrategia.
                Mantente a la vanguardia con nuestro análisis detallado que fusiona la experiencia técnica con una visión estratégica del desarrollo web.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Smart Inbox</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Seamless Integration</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Seamless Integration allows you to connect with your favorite apps and services without leaving your
                    inbox.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Advanced Customization</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    With Advanced Customization, you can personalize your email client to suit your preferences and work
                    style.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Powerful Search</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Our Powerful Search feature allows you to find any email, contact, or file in seconds.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Reliable Security</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    With Reliable Security, your data is always safe and protected.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <img className="text-white h-6 w-6 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Easy Collaboration</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Easy Collaboration allows you to share and edit documents with your team in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Templates</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our diverse and extensive collection of templates.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <div className="p-4 border border-gray-200 shadow-sm rounded-lg ">
              <img
                alt="Template 1"
                className="w-full object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-lg font-semibold">Template 1</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This is a description for Template 1.</p>
              <button className="mt-4">Use Template</button>
            </div>
            <div className="p-4 border border-gray-200 shadow-sm rounded-lg ">
              <img
                alt="Template 2"
                className="w-full object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-lg font-semibold">Template 2</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This is a description for Template 2.</p>
              <button className="mt-4">Use Template</button>
            </div>
            <div className="p-4 border border-gray-200 shadow-sm rounded-lg ">
              <img
                alt="Template 3"
                className="w-full object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-lg font-semibold">Template 3</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This is a description for Template 3.</p>
              <button className="mt-4">Use Template</button>
            </div>
            <div className="p-4 border border-gray-200 shadow-sm rounded-lg ">
              <img
                alt="Template 4"
                className="w-full object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-lg font-semibold">Template 4</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This is a description for Template 4.</p>
              <button className="mt-4">Use Template</button>
            </div>
          </div>
        </div>
      </section>
    </>

    // <Mantenimiento />
  )
}
