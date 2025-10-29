import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-2 sm:px-4 md:px-6 bg-background min-h-[80vh]">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
            <p className="text-primary mb-8 font-medium">Last Updated: October 28, 2024</p>
            <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By subscribing to Xtreamlink ISP services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Xtreamlink provides internet connectivity services at various speed tiers. We strive to deliver reliable, high-speed internet access, but service quality may vary based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Location and infrastructure availability</li>
                <li>Network congestion and usage patterns</li>
                <li>Equipment quality and configuration</li>
                <li>Environmental and weather conditions</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Service Plans and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Service plans are offered at the speeds and prices advertised at the time of subscription. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modify pricing with 30 days notice to existing customers</li>
                <li>Change service plans and offerings</li>
                <li>Discontinue promotional pricing at the end of promotional periods</li>
                <li>Apply taxes, fees, and surcharges as required by law</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Advertised speeds represent maximum possible speeds under optimal conditions. Actual speeds may vary based on numerous factors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Installation and Equipment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Professional Installation:</strong> We provide professional installation at no charge for standard installations. Non-standard installations may incur additional fees.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Equipment:</strong> We provide necessary equipment including modems and routers. This equipment remains our property and must be returned upon service termination. Loss or damage to equipment may result in replacement charges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Customer Equipment:</strong> You may use your own compatible equipment. We provide limited support for third-party equipment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use our services for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Illegal activities or transmission of illegal content</li>
                <li>Spamming, phishing, or distributing malware</li>
                <li>Unauthorized access to computer systems or networks</li>
                <li>Excessive bandwidth consumption that degrades service for others</li>
                <li>Operating servers for commercial purposes on residential plans</li>
                <li>Copyright infringement or intellectual property violations</li>
                <li>Harassment, threats, or distribution of harmful content</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Violation of this policy may result in service suspension or termination without refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Billing:</strong> Services are billed monthly in advance. Payment is due on the date specified in your billing statement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Late Payments:</strong> Accounts not paid within 15 days of the due date may incur late fees and service interruption. Accounts 30 days past due may be suspended or terminated.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Payment Methods:</strong> We accept major credit cards, debit cards, and electronic bank transfers. You authorize us to charge your payment method for all applicable fees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Service Level Agreement (SLA)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We guarantee 99.9% network uptime for all service plans. This excludes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Scheduled maintenance (with advance notice)</li>
                <li>Force majeure events</li>
                <li>Issues caused by customer equipment or configuration</li>
                <li>Third-party service provider outages</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If we fail to meet this SLA, you may be eligible for service credits. Contact customer support to request credits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Service Suspension and Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>By Customer:</strong> You may cancel service at any time with 30 days notice. You are responsible for all charges through the end of the notice period.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>By Xtreamlink:</strong> We may suspend or terminate service for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Non-payment of fees</li>
                <li>Violation of Acceptable Use Policy</li>
                <li>Fraudulent activity or false information</li>
                <li>Abusive behavior toward staff</li>
                <li>Illegal use of services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Xtreamlink shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption arising from the use or inability to use our services. Our total liability shall not exceed the amount you paid for services in the three months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect and process your personal information as described in our Privacy Policy. By using our services, you consent to such collection and processing. We implement reasonable security measures but cannot guarantee absolute security of your data transmitted over our network.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Network Management</h2>
              <p className="text-muted-foreground leading-relaxed">
                We employ reasonable network management practices to ensure optimal service for all customers. During periods of network congestion, we may temporarily reduce speeds for high-bandwidth users to maintain service quality for all customers. This is done without regard to the content, application, or service being accessed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. We will provide notice of material changes via email or account notification at least 30 days before the effective date. Continued use of services after changes take effect constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the state in which you receive service. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that you may assert claims in small claims court if they qualify.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="font-semibold text-white">Email:</span> <a href="mailto:legal@xtreamlink.com" className="text-primary hover:underline">legal@xtreamlink.com</a>
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

export default TermsAndConditions;