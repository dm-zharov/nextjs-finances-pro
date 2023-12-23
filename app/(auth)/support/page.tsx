export const metadata = {
  title: 'Support - Finances Pro',
  description: 'Personal Spending Manager',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Contact Me</h1>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="text-white text-center mt-6">
            If you have any questions, feel free to get in touch at:
            </div>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="text-white text-center mt-6">
              <a href="mailto:contact@zharov.dev" class="link">contact@zharov.dev</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}