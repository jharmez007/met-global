import { ContactHeader, ContactSection, OfficesCTA, ScrollToTop  } from "../../../components";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Met Global for your freight forwarding needs.",
};

export default function FreightForwardingPage() {
  return (
    <div>
      <ContactHeader />
      <ContactSection />
      <OfficesCTA />
      <ScrollToTop />
    </div>
  );
}