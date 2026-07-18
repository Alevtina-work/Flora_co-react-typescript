import React from 'react';
import { Link } from 'react-router-dom';

interface SocialMediaLink {
  id: number;
  name: string;
  icon: string | null;
}

const Footer = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    { id: 1, name: 'social1', icon: null },
    { id: 2, name: 'social2', icon: null },
    { id: 3, name: 'social3', icon: null },
    { id: 4, name: 'social4', icon: null },
  ];

  return (
    <footer className="w-full bg-footer-background border-t border-footer-border py-12 md:py-12">
      <div className="w-full max-w-[1134px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Company Info Section */}
            <div className="flex flex-col gap-5 md:gap-[22px] w-full md:w-[26%]">
              <div className="flex items-start">
                <img
                  src="/images/img_logo.png"
                  alt="Flora&Co Logo"
                  className="h-6 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-sm leading-xl text-text-green-light font-normal font-['Segoe_UI_Symbol']">
                Лучшие растения мира в вашем саду!
                <br />
                Вы будете в восторге от этого великолепия!
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-4 md:gap-4 w-full md:w-[14%] self-center">
              <h3 className="text-lg leading-2xl text-text-green font-normal font-['Outfit']">
                Контакты
              </h3>
              <div className="flex flex-col gap-3 md:gap-3">
                {/* Phone */}
                <div className="flex items-center gap-3 md:gap-3">
                  <button
  className="w-[34px] h-[34px] min-w-[34px] min-h-[34px] bg-icon-button-bg rounded-xl flex items-center justify-center hover:bg-primary-green-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
  aria-label="Phone contact"
>
  <img
    src="/images/img_icons.svg"
    alt="Phone"
    className="w-4 h-4 object-contain flex-shrink-0"
  />
</button>
                  <a
  href="tel:+78120000000"
  className="text-sm leading-sm whitespace-nowrap text-text-green-medium font-normal font-['Outfit'] hover:text-primary-green transition-colors duration-200"
>
  +7 (812) ***-**-**
</a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 md:gap-3">
                  <button
  className="w-[34px] h-[34px] min-w-[34px] min-h-[34px] bg-icon-button-bg rounded-xl flex items-center justify-center hover:bg-primary-green-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
  aria-label="Email contact"
>
  <img
    src="/images/img_icons_teal_900_01.svg"
    alt="Email"
    className="w-4 h-4 object-contain flex-shrink-0"
  />
</button>
                  <a
                    href="mailto:hello@floraco.com"
                    className="text-sm leading-sm text-text-green-medium font-normal font-['Outfit'] hover:text-primary-green transition-colors duration-200"
                  >
                    hello@floraco.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col gap-3 md:gap-[14px] w-full md:w-auto">
              <h3 className="text-lg leading-2xl text-text-green font-normal font-['Outfit']">
                Мы в соцсетях
              </h3>
              <div className="flex items-center gap-3 md:gap-3 flex-wrap">
                {socialMediaLinks?.map((social) => (
                  <button
                    key={social.id}
                    className="w-[46px] h-[46px] bg-background-main border border-icon-button-border rounded-lg flex items-center justify-center hover:bg-primary-green-light hover:border-primary-green transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green p-3"
                    aria-label={`Visit our ${social?.name} page`}
                  >
                    {social.icon && (
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-6 pt-8 border-t border-border-green-light">
            {/* Copyright */}
            <div className="flex justify-center items-center">
              <p className="text-xs leading-xs tracking-[1px] uppercase text-text-green-light font-normal font-['Segoe_UI_Symbol'] text-center sm:text-left">
                © 2024 Flora&Co Botanical Store. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <nav className="flex items-center gap-6 md:gap-6" role="navigation" aria-label="Legal navigation">
              <Link
                to="/privacy-policy"
                className="text-xs leading-xs tracking-[1px] uppercase text-text-green-light font-normal font-['Segoe_UI_Symbol'] hover:text-primary-green transition-colors duration-200 focus:outline-none focus:underline"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-xs leading-xs tracking-[1px] uppercase text-text-green-light font-normal font-['Segoe_UI_Symbol'] hover:text-primary-green transition-colors duration-200 focus:outline-none focus:underline"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;