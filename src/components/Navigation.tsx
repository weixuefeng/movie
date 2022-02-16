/*
 * @Author: pony@diynova.com
 * @Date: 2022-02-16 11:44:51
 * @LastEditors: pony@diynova.com
 * @LastEditTime: 2022-02-16 16:15:44
 * @FilePath: /movie/src/components/Navigation.tsx
 * @Description: Navigation
 */
import React, { Fragment, useState } from 'react'
import { MenuAlt2Icon, InformationCircleIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'

const navigation = {
  category: [
    {
      name: 'Projects',
      href: '/'
    },
    {
      name: 'Valut',
      href: '/'
    },
    {
      name: 'Treasury',
      href: '/'
    },
    {
      name: 'Forum',
      href: '/'
    },
    {
      name: 'LitePaper',
      href: '/'
    }
  ]
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="header">
        <nav id="siteNav">
          <div>
            <div>
              <div>
                <div className="navigation-container">
                  <div id="siteLogo">
                    <a href="https://newtonproject.org">
                      <span>MovieDAO</span>
                      <img src="" alt="" />
                    </a>
                  </div>
                  <div className="navigation">
                    {navigation.category.map((item, index) => (
                      <div className="item" key={index}>
                        <a href={item.href}>{item.name}</a>
                      </div>
                    ))}
                  </div>
                </div>

                {/** mobile */}
                <div className="mobileMenuBtn">
                  <button type="button" className="" onClick={() => setMobileMenuOpen(true)}>
                    <span className="sr-only">Open menu</span>
                    <MenuAlt2Icon aria-hidden="true" />
                  </button>
                </div>
                {/* Logo (lg-) */}
                <Link href="/">
                  <a className="mobileMenuLogo">
                    <span className="sr-only">MovieDAO</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="mobileMenu" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="menu">
              <div className="closeBtn">
                <button type="button" onClick={() => setMobileMenuOpen(false)}>
                  <span>Close menu</span>
                  <XIcon aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="pages">
                {navigation.category.map(page => (
                  <div key={page.name}>
                    <Link href={page.href}>
                      <a href={page.href}>{page.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
