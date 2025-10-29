import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-2 sm:px-4 md:px-6 bg-background min-h-[80vh]">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="text-primary mb-8 font-medium">Last Updated: October 28, 2024</p>
            <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Xtreamlinq ISP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our internet services and visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-bold mb-3 mt-4">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that identifies you as an individual, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information and credit card details</li>
                <li>Social Security Number (for credit checks)</li>
                <li>Government-issued ID for service verification</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6">Service Usage Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We automatically collect certain information about your use of our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>IP addresses and device identifiers</li>
                <li>Bandwidth usage and data consumption</li>
                <li>Service quality metrics and connection logs</li>
                <li>Browser type and operating system</li>
                <li>Websites visited (in aggregate for network management only)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To provide, maintain, and improve our internet services</li>
                <li>To process billing and collect payments</li>
                <li>To respond to customer service requests and support needs</li>
                <li>To send administrative information and service updates</li>
                <li>To manage network performance and prevent fraud</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To personalize your experience and improve our offerings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Service Providers:</strong> With vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                <li><strong>With Consent:</strong> When you've given us permission to share</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do NOT sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability rights</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="font-semibold text-white">Email:</span> <a href="mailto:privacy@xtreamlinq.com" className="text-primary hover:underline">privacy@xtreamlinq.com</a>
                </li>
                <li>
                  <span className="font-semibold text-white">Phone:</span> <a href="tel:8889283252" className="text-primary hover:underline">(888) 928-3252</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;