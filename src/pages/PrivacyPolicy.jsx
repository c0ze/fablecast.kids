export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <span className="sticker border-lavender bg-lavender/10 text-cosmos">{'\uD83D\uDD12'} Privacy</span>
      <h1 className="mt-4 font-display text-4xl text-cosmos">Privacy Policy</h1>
      <p className="mt-2 text-sm text-cosmos/60">Last updated: February 9, 2026</p>

      <div className="mt-8 space-y-8 text-cosmos/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-cosmos">1. Who We Are</h2>
          <p className="mt-2">
            Fablecast (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates fablecast.kids, a children&rsquo;s story
            subscription service. This policy explains how we handle your information when you use our
            service. We are committed to protecting the privacy of our users and their families.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">2. What Data We Collect</h2>
          <p className="mt-2">
            We collect the <strong>minimum data necessary</strong> to operate the service:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li><strong>Email address</strong> &mdash; provided through Google Sign-In, used solely for account identification and essential service communications.</li>
            <li><strong>Display name</strong> &mdash; provided through Google Sign-In, used to personalize your experience.</li>
            <li><strong>Account preferences</strong> &mdash; child&rsquo;s age range, preferred language, and preferred series. You provide these during onboarding.</li>
            <li><strong>Subscription status</strong> &mdash; your selected plan and subscription dates.</li>
          </ul>
          <p className="mt-3">
            <strong>We do not collect, store, or process any other personal data.</strong> We do not
            collect browsing behavior, device fingerprints, location data, cookies for tracking, or
            any information from or about children directly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">3. How We Use Your Data</h2>
          <p className="mt-2">Your data is used exclusively to:</p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li>Authenticate your account via Google Sign-In.</li>
            <li>Deliver stories in your preferred language and age range.</li>
            <li>Manage your subscription plan.</li>
            <li>Send essential service communications (e.g., subscription confirmations or critical service updates).</li>
          </ul>
          <p className="mt-3">
            We will <strong>never</strong> use your data for advertising, profiling, or any purpose
            beyond operating the Fablecast service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">4. Advertising</h2>
          <p className="mt-2">
            <strong>Fablecast is and will remain ad-free for the lifetime of the product.</strong> We
            do not display advertisements, sell ad space, or share any data with advertising networks
            or third-party trackers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">5. Data Sharing</h2>
          <p className="mt-2">We do not sell, rent, or trade your personal data. We share data only with:</p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li><strong>Google (Firebase)</strong> &mdash; for authentication and secure data storage. Google&rsquo;s privacy policy applies to their processing of sign-in data.</li>
          </ul>
          <p className="mt-3">We do not use any other third-party services that receive your personal data.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">6. Data Storage &amp; Security</h2>
          <p className="mt-2">
            Your data is stored in Google Firebase (Firestore) with encryption at rest and in transit.
            We retain your data only for as long as your account is active. Upon account deletion, all
            your data is permanently removed within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">7. Children&rsquo;s Privacy (COPPA &amp; GDPR-K)</h2>
          <p className="mt-2">
            Fablecast is a service for parents and guardians to provide stories to their children.
            <strong> We do not knowingly collect personal information directly from children under 13
            (or under 16 in the EU/EEA).</strong> All accounts must be created by a parent or legal
            guardian using their own Google account.
          </p>
          <p className="mt-2">
            If we learn that we have inadvertently collected data from a child without parental
            consent, we will delete it promptly. If you believe a child has provided us with personal
            data, please contact us at the address below.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">8. Your Rights</h2>
          <p className="mt-2">Depending on your jurisdiction, you may have the right to:</p>

          <h3 className="mt-4 font-display text-lg text-cosmos">All Users</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your account and all associated data.</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">EU/EEA Residents (GDPR)</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>Right to data portability.</li>
            <li>Right to restrict or object to processing.</li>
            <li>Right to withdraw consent at any time.</li>
            <li>Right to lodge a complaint with your local Data Protection Authority.</li>
          </ul>
          <p className="mt-2">
            Legal basis for processing: Contractual necessity (providing the service you subscribed to)
            and legitimate interest (maintaining account security).
          </p>

          <h3 className="mt-4 font-display text-lg text-cosmos">Japan Residents (APPI)</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>Right to request disclosure of personal data held.</li>
            <li>Right to request correction, addition, or deletion.</li>
            <li>Right to request cessation of use.</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">US Residents (CCPA / State Laws)</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>Right to know what personal information is collected.</li>
            <li>Right to request deletion.</li>
            <li>Right to non-discrimination for exercising your rights.</li>
            <li>We do not sell personal information.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">9. International Data Transfers</h2>
          <p className="mt-2">
            Your data may be processed in the United States through Google Firebase. Where data is
            transferred outside your jurisdiction, it is protected by Google&rsquo;s data processing
            agreements and Standard Contractual Clauses (for EU/EEA transfers).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">10. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. Material changes will be communicated via
            email to the address associated with your account. Continued use of the service after
            notification constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">11. Contact Us</h2>
          <p className="mt-2">
            For any privacy-related questions, data requests, or concerns, please contact us at:
          </p>
          <p className="mt-2 font-semibold">privacy@fablecast.kids</p>
        </section>
      </div>
    </article>
  );
}
