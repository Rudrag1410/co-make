import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-emerald-950 text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Terms & <span className="italic text-gold">Conditions</span>
          </h1>
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px]">
            Legal Agreement & Usage Guidelines
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
                  1. Agreement to Terms
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  By accessing or using the Comake Homes Real Estate website,
                  you agree to be bound by these Terms & Conditions. If you do
                  not agree to all of these terms, then you are prohibited from
                  using the site and must discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  2. Intellectual Property Rights
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  Unless otherwise indicated, the Site is our proprietary
                  property and all source code, databases, functionality,
                  software, website designs, audio, video, text, photographs,
                  and graphics on the Site (collectively, the
                  &quot;Content&quot;) and the trademarks, service marks, and
                  logos contained therein are owned or controlled by us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  3. User Representations
                </h2>
                <p className="text-emerald-950/70 leading-relaxed mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 text-emerald-950/70 space-y-2">
                  <li>
                    You have the legal capacity and you agree to comply with
                    these Terms & Conditions.
                  </li>
                  <li>
                    You are not a minor in the jurisdiction in which you reside.
                  </li>
                  <li>
                    You will not access the Site through automated or non-human
                    means.
                  </li>
                  <li>
                    You will not use the Site for any illegal or unauthorized
                    purpose.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  4. Property Listings
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  While we strive to provide accurate information regarding
                  property prices, availability, and features, all listings are
                  subject to change without notice. Comake Homes does not
                  guarantee the accuracy of any information provided by
                  third-party developers or partners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  In no event will we or our directors, employees, or agents be
                  liable to you or any third party for any direct, indirect,
                  consequential, exemplary, incidental, special, or punitive
                  damages, including lost profit, lost revenue, loss of data, or
                  other damages arising from your use of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  6. Governing Law
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  These terms shall be governed by and defined following the
                  laws of the United Arab Emirates. Comake Homes Real Estate and
                  yourself irrevocably consent that the courts of Dubai shall
                  have exclusive jurisdiction to resolve any dispute which may
                  arise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                  7. Contact Us
                </h2>
                <p className="text-emerald-950/70 leading-relaxed">
                  In order to resolve a complaint regarding the Site or to
                  receive further information regarding use of the Site, please
                  contact us at <strong>comakehomes88@gmail.com</strong>.
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
