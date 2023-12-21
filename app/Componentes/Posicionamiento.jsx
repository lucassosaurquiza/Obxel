import React from 'react'

const Posicionamiento = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Web Positioning
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Positioning Matters</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A well-positioned website can increase your visibility, improve your branding, and boost conversion rates.
              Choose the right pricing plan for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
              <p>Basic</p>
              <h3 className="text-lg font-bold">$9.99/mo</h3>
              <ul className="list-disc list-inside mt-4">
                <li>5 Keywords</li>
                <li>Basic Support</li>
                <li>1 Update per Month</li>
              </ul>
              <button variant="default">Choose Plan</button>
            </div>
            <div className="p-4">
              <p>Pro</p>
              <h3 className="text-lg font-bold">$29.99/mo</h3>
              <ul className="list-disc list-inside mt-4">
                <li>25 Keywords</li>
                <li>Priority Support</li>
                <li>Unlimited Updates</li>
              </ul>
              <button variant="default">Choose Plan</button>
            </div>
            <div className="p-4">
              <p>Premium</p>
              <h3 className="text-lg font-bold">$99.99/mo</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Unlimited Keywords</li>
                <li>24/7 Support</li>
                <li>Unlimited Updates</li>
              </ul>
              <button variant="default">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posicionamiento