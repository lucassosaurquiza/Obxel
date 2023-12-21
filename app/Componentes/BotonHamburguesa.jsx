'use client'

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function BotonHamburguesa() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <GiHamburgerMenu className="text-gray-300 text-3xl hover:text-[#11E096] transition duration-300 ease-in-out cursor-pointer lg:hidden" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <button
                      type="button"
                      className="flex justify-end ml-auto text-emerald-400 hover:text-emerald-200 transition duration-300 ease-in-out"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col justify-center items-center">
                    <Link href='/' onClick={closeModal}>
                      <p className="text-sm text-gray-500 font-bold mb-3 hover:text-[#11E096] transition duration-300 ease-in-out cursor-pointer">
                        Inicio
                      </p>
                    </Link>
                    <Link href='/Precios' onClick={closeModal}>
                      <p className="text-sm text-gray-500 font-bold hover:text-[#11E096] transition duration-300 ease-in-out cursor-pointer">
                        Precios
                      </p>
                    </Link>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
