import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-emerald-950 text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Privacy <span className="italic text-gold">Policy</span>
          </h1>
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px]">
            Your Data Security Is Our Priority
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-emerald max-w-none">
            <p className="text-emerald-950/60 mb-8 italic">
              Last Updated: May 2024
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  1. Introduction
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  Welcome to Comake Homes Real Estate. We are committed to
                  protecting your personal information and your right to
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-emerald-950/70 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide
                  to us when you:
                </p>
                <ul className="list-disc pl-6 text-emerald-950/70 space-y-2">
                  <li>
                    Register on our website or express an interest in obtaining
                    information about our properties.
                  </li>
                  <li>
                    Participate in activities on the website or otherwise
                    contact us.
                  </li>
                  <li>
                    The personal information we collect may include names, phone
                    numbers, email addresses, and mailing addresses.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-emerald-950/70 leading-relaxed mb-4">
                  We use personal information collected via our website for
                  various business purposes, including:
                </p>
                <ul className="list-disc pl-6 text-emerald-950/70 space-y-2">
                  <li>To facilitate account creation and the logon process.</li>
                  <li>
                    To send you administrative information, such as property
                    updates or legal notices.
                  </li>
                  <li>To respond to your inquiries and offer support.</li>
                  <li>
                    To send you marketing and promotional communications (you
                    can opt-out at any time).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  We only share information with your consent, to comply with
                  laws, to provide you with services, to protect your rights, or
                  to fulfill business obligations. We do not sell or rent your
                  personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  5. Data Security
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you enter, submit, or
                  access your personal information. However, please remember
                  that no method of transmission over the Internet is 100%
                  secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  6. Contact Us
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  If you have questions or comments about this policy, you may
                  email us at <strong>comakehomes88@gmail.com</strong>
                  or visit our office at Al Barsha 1, Dubai, UAE.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
