import Image from "next/image";
import Link from "next/link";
import Section from "./custom/Section";

export default function Footer() {
  return (
    <Section className="bg-[#2F2F2F] lg:min-h-fit text-zinc-400 snap-end">
      <div className="flex flex-col md:flex-row justify-center items-center lg:text-left text-center gap-8 lg:items-start lg:justify-between">
        <div className="">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NeoPhyte Consulting Services"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm mt-4">
            © NeoPhyte Consultancy Services. All rights reserved.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-white font-semibold uppercase mb-4 text-sm">
            Services
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/web-development"
                className="hover:text-white transition-colors"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/app-development"
                className="hover:text-white transition-colors"
              >
                App Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/maintenance"
                className="hover:text-white transition-colors"
              >
                Website Maintenance
              </Link>
            </li>
            <li>
              <Link
                href="/services/hosting"
                className="hover:text-white transition-colors"
              >
                Domain & Hosting
              </Link>
            </li>
            <li>
              <Link
                href="/services/marketing"
                className="hover:text-white transition-colors"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services/design"
                className="hover:text-white transition-colors"
              >
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold uppercase mb-4 text-sm">
            Company
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/our-work"
                className="hover:text-white transition-colors"
              >
                Our Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Careers Section */}
        <div>
          <h3 className="text-white font-semibold uppercase mb-4 text-sm">
            Careers
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-white transition-colors"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Norms Section */}
        <div>
          <h3 className="text-white font-semibold uppercase mb-4 text-sm">
            Company Norms
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
