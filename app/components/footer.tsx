import Link from "next/link";
import SVGLogo from "./svg-logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="flex-shrink-0 mx-auto w-64 text-center md:mx-0 md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center items-center md:justify-start"
            >
              <SVGLogo />
              <strong className="text-base font-extrabold tracking-tight text-slate-800 md:text-lg">
                Summary AI
              </strong>
            </Link>
            <p className="mt-3 text-sm text-slate-700">
              Beautifully crafted notes powered by AI.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap flex-grow justify-center mt-10 -mb-10 text-center md:mt-0 md:pl-24">
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LINKS
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <a
                  href="mailto:support@labhouse.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Support
                </a>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LEGAL
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Link href="/terms" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy" className="link link-hover">
                  Privacy policy
                </Link>
                <Link href="/california-privacy" className="link link-hover">
                  California Privacy Notice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
