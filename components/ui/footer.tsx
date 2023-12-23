import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Support */}
            <div className="text-gray-400 text-sm mr-4 font-semibold">Support : <a href="mailto:contact@zharov.dev">contact@zharov.dev</a></div>

          </div>

        </div>
      </div>
    </footer>
  )
}
