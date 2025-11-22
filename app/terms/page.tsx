import { COMPANY } from '@/lib/constants';

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-orange max-w-none">
            <p className="text-gray-400 mb-6">
              Last updated: January 2024
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Services</h2>
            <p className="text-gray-400 mb-6">
              {COMPANY.name} provides technology support services including but not limited to
              network installation, WiFi optimization, troubleshooting, and managed IT services
              for residential and commercial clients in the Central Texas area.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Service Agreements</h2>
            <p className="text-gray-400 mb-6">
              Service quotes are valid for 30 days unless otherwise specified. Final pricing
              may vary based on actual site conditions. Equipment costs are separate from labor
              unless explicitly bundled. All equipment purchases include manufacturer warranties.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>Hourly services: Payment due upon completion</li>
              <li>Project bundles: 50% deposit required, balance due upon completion</li>
              <li>Subscriptions: Billed monthly in advance</li>
              <li>Late payments subject to 1.5% monthly interest</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Warranty & Support</h2>
            <p className="text-gray-400 mb-6">
              Our labor is warranted for 30 days from service completion. Equipment carries
              manufacturer warranties which we will assist in processing. Subscription clients
              receive ongoing support as specified in their service level agreement.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cancellation Policy</h2>
            <p className="text-gray-400 mb-6">
              Appointments may be rescheduled with 24-hour notice at no charge. Cancellations
              with less than 24-hour notice may incur a $50 fee. Subscription services may be
              cancelled with 30 days written notice.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-400 mb-6">
              {COMPANY.name} is not liable for data loss, business interruption, or indirect
              damages. Our liability is limited to the amount paid for services. We recommend
              clients maintain backups of important data before any service work.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Client Responsibilities</h2>
            <p className="text-gray-400 mb-6">
              Clients must provide accurate information about their systems and requirements,
              ensure safe access to service areas, and backup important data. Clients are
              responsible for maintaining licensed software on their systems.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-400 mb-6">
              These terms are governed by the laws of the State of Texas. Any disputes will
              be resolved in the courts of Bell County, Texas.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact</h2>
            <p className="text-gray-400 mb-6">
              Questions about these terms? Contact us at:
              <br />
              Email: {COMPANY.email}
              <br />
              Phone: {COMPANY.phone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
