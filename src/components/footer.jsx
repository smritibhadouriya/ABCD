import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const footerData = {
  company: {
    description:
      "Unlocking growth with creativity, data, and technology-driven digital experiences.",
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/marcadeoenterprises/",
        color: "hover:text-orange-400",
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/marcadeo/posts/",
        color: "hover:text-orange-400",
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        ),
      },
        {
        name: "Instagram",
        url: "https://www.instagram.com/marcadeo.media/",
        color: "hover:text-orange-400",
        icon: (
         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.148-3.228 1.667-4.771 4.919-4.919 1.266-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.073 1.689-.073 4.948s.014 3.667.073 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.948-.073c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.073-1.689.073-4.948s-.014-3.667-.073-4.948c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
    </svg>
        ),
      },
    ],
  },
  sections: [
    {
      title: "ABOUT US",
      links: [
        { label: "Company Profile", url: "/" },
        { label: "Careers", url: "/contact" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Terms & Conditions", url: "/termsAndCondition" },
        { label: "Privacy Policy", url: "/privacyPolicy" },
        { label: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { label: "CashIntern", url: "https://cashintern.com/" },
        { label: "Trackopia", url: "https://trackopia.com/" },
        { label: "Festinator", url: "https://festinator.com/" },
        { label: "Earnadda", url: "https://earnadda.co.in/" },
        { label: "Cashbackgullak", url: "http://cashbackgullak.com/" },
        { label: "Rewarddunia", url: "https://www.rewarddunia.com/" },
      ],
    },
  ],
};

const Footer = () => {
  const products = footerData.sections.find(section => section.title === "PRODUCTS").links;
  const half = Math.ceil(products.length / 2);
  const firstColumn = products.slice(0, half);
  const secondColumn = products.slice(half);

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 px-4 md:px-8 lg:px-12 text-gray-700 border-t border-slate-200">
      <div className="px-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Logo and Socials */}
   <div className="flex flex-col items-start text-left md:mt-3">
  <div className="flex items-center justify-start mb-4">
    <img
      src={Logo}
      alt="Marcadeo Logo"
      className="h-15 mr-4 transition-transform hover:scale-105"
    />
    <div className="flex flex-col items-start">
      <p className="text-sm leading-relaxed mb-3">
        {footerData.company.description}
      </p>
    </div>
  </div>
  <div className="flex space-x-3">
    {footerData.company.socials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-500 ${social.color} transition-colors`}
        aria-label={`Visit our ${social.name} page`}
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>

        {/* About Us and Support Sections */}
        {footerData.sections
          .filter(section => section.title !== "PRODUCTS")
          .map((section) => (
            <div
              key={section.title}
              className={section.title === "ABOUT US" ? "md:ml-10" : ""} // Shift "ABOUT US" left
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* Products Section in Two Columns */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">PRODUCTS</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <ul className="space-y-2">
              {firstColumn.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {secondColumn.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-10 text-center text-sm text-gray-500 border-t pt-4 border-gray-200 ">
        © {new Date().getFullYear()} Marcadeo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;