import { Link } from 'react-router-dom';

const Footer = () => {
  const socialMediaLinks = [
    { id: 1, name: 'social1', icon: null },
    { id: 2, name: 'social2', icon: null },
    { id: 3, name: 'social3', icon: null },
    { id: 4, name: 'social4', icon: null },
  ];

  const sectionTitleClass =
    "text-lg leading-2xl text-text-green font-normal font-sans";

  const contactButtonClass =
    'flex h-[34px] w-[34px] min-h-[34px] min-w-[34px] items-center justify-center rounded-xl bg-icon-button-bg transition-colors duration-200 hover:bg-primary-green-light focus:outline-none focus:ring-2 focus:ring-primary-green';

  const socialButtonClass =
    'flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-icon-button-border bg-background-main p-3 transition-all duration-200 hover:border-primary-green hover:bg-primary-green-light focus:outline-none focus:ring-2 focus:ring-primary-green';

  const contactLinkClass =
    "text-sm leading-sm font-normal font-sans text-text-green-medium transition-colors duration-200 hover:text-primary-green";

  const footerTextClass =
    "text-xs leading-xs tracking-[1px] uppercase text-text-green-light font-normal font-['Segoe_UI_Symbol']";

  const footerLinkClass =
    `${footerTextClass} hover:text-primary-green transition-colors duration-200 focus:outline-none focus:underline`;
  return (
    <footer className="w-full bg-footer-background border-t border-footer-border py-12">
      <div className="w-full max-w-[1134px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <div className="flex flex-col gap-5 md:gap-[22px] w-full md:w-[26%]">
              <img
                src="/images/img_logo.png"
                alt="Flora&Co Logo"
                className="h-6 w-auto object-contain"
                loading="lazy"
              />
              <p className="text-sm leading-xl text-text-green-light font-normal font-['Segoe_UI_Symbol']">
                Лучшие растения мира в вашем саду!
                <br />
                Вы будете в восторге от этого великолепия!
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-4 w-full md:w-[14%] self-center">
              <h3 className={sectionTitleClass}>
                Контакты
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <button
                    className={contactButtonClass}
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
                    className={`${contactLinkClass} whitespace-nowrap`}
                  >
                    +7 (812) ***-**-**
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className={contactButtonClass}
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
                    className={contactLinkClass}
                  >
                    hello@floraco.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-[14px] w-full md:w-auto">
              <h3 className={sectionTitleClass}>
                Мы в соцсетях
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                {socialMediaLinks.map((social) => (
                  <button
                    key={social.id}
                    className={socialButtonClass}
                    aria-label={`Visit our ${social.name} page`}
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

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-6 pt-8 border-t border-border-green-light">

            <p className={`${footerTextClass} text-center sm:text-left`}>
              © 2024 Flora&Co Botanical Store. All rights reserved.
            </p>

            <nav
              className="flex items-center gap-6"
              role="navigation"
              aria-label="Legal navigation"
            >
              <Link
                to="/privacy-policy"
                className={footerLinkClass}
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className={footerLinkClass}
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