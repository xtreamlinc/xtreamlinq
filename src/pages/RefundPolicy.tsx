import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-2 sm:px-4 md:px-6 bg-background min-h-[80vh]">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold text-white">Refund Policy</h1>
            <p className="text-primary mb-8 font-medium">Last Updated: October 28, 2024</p>
            <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We stand behind the quality of our service. New residential customers are covered by our 30-Day Money-Back Guarantee. If you're not satisfied with Xtreamlinq internet service for any reason within the first 30 days, you may cancel and receive a full refund of:
                  We stand behind the quality of our service. New residential customers are covered by our 30-Day Money-Back Guarantee. If you're not satisfied with Xtreamlinq internet service for any reason within the first 30 days, you may cancel and receive a full refund of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Monthly service fees paid</li>
                <li>Installation charges (if applicable)</li>
                <li>Equipment fees (if applicable)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To qualify for the money-back guarantee, you must cancel within 30 days of your installation date and return all equipment in good condition within 14 days of cancellation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Eligibility Requirements</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 30-Day Money-Back Guarantee applies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>New residential customers only</li>
                <li>First-time Xtreamlinq subscribers at the service address</li>
                  <li>First-time Xtreamlinq subscribers at the service address</li>
                <li>Standard installation and service packages</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                The guarantee does NOT apply to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Business accounts or commercial services</li>
                <li>Customers who previously received the guarantee at the same address</li>
                <li>Promotional or discounted special offers (where explicitly excluded)</li>
                <li>Third-party services or products</li>
                <li>Accounts terminated for policy violations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Refund Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To request a refund under our money-back guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact customer service at (888) 928-3252 or support@xtreamlinq.com</li>
                  <li>Contact customer service at (888) 928-3252 or support@xtreamlinq.com</li>
                <li>Request cancellation and refund within 30 days of installation</li>
                <li>Return all equipment within 14 days of cancellation notice</li>
                <li>Provide your account number and contact information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Refunds will be processed to the original payment method within 10 business days after we receive all returned equipment in acceptable condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Equipment Return Requirements</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All Xtreamlinq-provided equipment must be returned to qualify for a full refund:
                  All Xtreamlinq-provided equipment must be returned to qualify for a full refund:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modem/router and power adapter</li>
                <li>Ethernet cables provided by Xtreamlinq</li>
                  <li>Ethernet cables provided by Xtreamlinq</li>
                <li>Any other equipment provided during installation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                Equipment must be:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Returned within 14 days of cancellation</li>
                <li>In good working condition with no physical damage</li>
                <li>Complete with all original components and accessories</li>
                <li>Returned using the prepaid shipping label we provide</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Failure to return equipment or returning damaged equipment will result in equipment replacement charges being deducted from your refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Refunds After 30-Day Period</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After the initial 30-day period, refunds are handled as follows:
              </p>
              
              <h3 className="text-xl font-bold mb-3 mt-4">Service Cancellation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Monthly service fees are charged in advance. If you cancel service mid-month, you will not receive a prorated refund for the remainder of that month. Service will continue until the end of your current billing cycle.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-4">Service Outages</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you experience a service outage lasting more than 24 consecutive hours due to our network issues, you may be eligible for a prorated credit. Contact customer service to request an outage credit. Outages caused by customer equipment, third-party issues, or force majeure events are not eligible for credits.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-4">Billing Errors</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we identify or you report a billing error, we will investigate and issue a refund or credit within one billing cycle if the error is confirmed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items are not refundable under any circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Third-party services or subscriptions</li>
                <li>Custom installation fees for complex setups</li>
                <li>Additional service calls requested by the customer</li>
                <li>Charges for unreturned or damaged equipment</li>
                <li>Late payment fees or collections costs</li>
                <li>Fees for service restoration after suspension</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Service Credits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In lieu of refunds, we may offer service credits in certain situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Compensation for extended service disruptions</li>
                <li>Resolution of service quality issues</li>
                <li>Goodwill gestures for customer inconvenience</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Service credits are applied to your account and used toward future monthly charges. Credits cannot be redeemed for cash and have no value if the account is closed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Promotional Offers and Discounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you received promotional pricing or discounts and cancel service before the end of the promotional period, you may be required to repay some or all of the promotional value received. Specific terms are provided at the time of sign-up for promotional offers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Business Account Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Business accounts are not eligible for the 30-Day Money-Back Guarantee. Refund requests for business accounts are evaluated on a case-by-case basis. Business customers should review their Service Level Agreement for specific refund and credit terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you believe you're entitled to a refund that was denied, please contact our customer service team first to discuss the situation. Most refund disputes can be resolved through direct communication. If you remain unsatisfied, you may escalate the matter according to the dispute resolution process outlined in our Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Changes to Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. The version of the Refund Policy in effect at the time you subscribe to service governs your subscription.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about refunds or to initiate a refund request, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="font-semibold text-white">Email:</span> <a href="mailto:billing@xtreamlinq.com" className="text-primary hover:underline">billing@xtreamlinq.com</a>
                    <span className="font-semibold text-white">Email:</span> <a href="mailto:billing@xtreamlinq.com" className="text-primary hover:underline">billing@xtreamlinq.com</a>
                </li>
                <li>
                  <span className="font-semibold text-white">Phone:</span> <a href="tel:8889283252" className="text-primary hover:underline">(888) 928-3252</a>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our customer service representatives are available Monday-Friday 8am-8pm, Saturday-Sunday 9am-6pm.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;