export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Privacy Policy of the<br></br>Finances Pro</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="text-white text-center mt-6">
            We respect any data of our clients and always strive to meet high security standards.
            We do not collect, use or store any personal data.
            </div>

            <div className="text-white text-center mt-6">
            Date: December 23, 2023
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
