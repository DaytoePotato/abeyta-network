import { COMPANY } from '@/lib/constants';

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-orange max-w-none">
            <p className="text-gray-400 mb-6">
              Last updated: January 2024
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              {COMPANY.name} collects information you provide directly when using our services:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Service request details and project specifications</li>
              <li>Payment information processed through Square</li>
              <li>Communications and support ticket history</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>Provide and improve our tech support services</li>
              <li>Process payments and send invoices</li>
              <li>Communicate about appointments and service updates</li>
              <li>Respond to inquiries and support requests</li>
              <li>Send service reminders and promotional offers (with your consent)</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-400 mb-6">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>Payment processors (Square) for transaction processing</li>
              <li>Equipment suppliers for warranty purposes</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Data Security</h2>
            <p className="text-gray-400 mb-6">
              We implement appropriate security measures to protect your information, including
              encrypted connections (HTTPS), secure payment processing, and access controls.
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-400 mb-6">
              You have the right to access, correct, or delete your personal information.
              Contact us at {COMPANY.email} to exercise these rights.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies</h2>
            <p className="text-gray-400 mb-6">
              Our website uses essential cookies to maintain your session and preferences.
              We do not use tracking cookies for advertising purposes.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-6">
              For questions about this privacy policy, contact us at:
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
