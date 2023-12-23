export const metadata = {
  title: 'Privacy Policy - Finances Pro',
  description: 'Personal Spending Manager',
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
            We do not collect, use, save, or have access to any of your personal data recorded in Finances Pro.
            </div>

            <div className="text-white text-center mt-6">
            Date: December 23, 2023
            </div>
          </div>

        </div>

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">App Analytics</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="text-white text-center mt-6">
            To help us better understand how people use Finances Pro app and to continue improving it, we use analytics information provided by App Store Connect. These service provide generalized data about app, such as usage patterns, and other anonymized statistics. This data is completely anonymous and cannot personally identify you in any way.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
