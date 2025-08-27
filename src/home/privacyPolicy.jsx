import React, { useEffect } from 'react'

const privacyPolicy = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // empty dependency array ensures it runs only once
const privacyData = {
  lastUpdated: "August 2025",
  sections: [
    {
      id: "overview",
      title: "1. Overview",
      content: [
        {
          type: "paragraph",
          text: "At Marcadeo, protecting your data is our top priority. We only use the information you choose to share with us to deliver the services you request."
        }
      ]
    },
    {
      id: "how-we-use-data",
      title: "2. How We Use Platform Data",
      content: [
        {
          type: "paragraph",
          text: "When you connect your Meta or Instagram account, we may access:"
        },
        {
          type: "list",
          items: [
            "Account insights (reach, impressions, engagement metrics)",
            "Content performance (how posts, stories, or campaigns are performing)",
            "Public profile details needed to connect your account"
          ]
        },
        {
          type: "paragraph",
          text: "We use this data to:"
        },
        {
          type: "list",
          items: [
            "Provide influencers with clear performance reports",
            "Help brands see which campaigns are working best",
            "Match brands with influencers for better partnerships",
            "Support link-in-bio and content tracking features"
          ]
        }
      ]
    },
    {
      id: "what-we-dont-do",
      title: "3. What We Don’t Do",
      content: [
        {
          type: "list",
          items: [
            "❌ We do not sell your data",
            "❌ We do not share personal information with third parties outside the services we provide",
            "❌ We do not post content on your behalf without your permission"
          ]
        }
      ]
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content: [
        {
          type: "paragraph",
          text: "All data is handled securely and used only to provide insights, reports, and marketing tools for our clients. You are always in control of your account and can revoke access at any time."
        }
      ]
    },
    {
      id: "contact",
      title: "5. Contact Us",
      content: [
        {
          type: "paragraph",
          text: "If you have any questions about this Privacy Policy or your data, contact us:"
        },
        {
          type: "contact",
          items: [
            { title: "Email", value: "privacy@marcadeo.com", color: "text-orange-600" },
            { title: "Support", value: "Response within 48 hours", color: "text-gray-600" }
          ]
        }
      ]
    }
  ]
};

  return (
  <>
                    {/* Hero Section */}
                    <section className="bg-gradient-to-tl to-white from-orange-100 py-30 md:py-40 h-[70vh] md:h-[50vh] lg:h-[calc(70vh-4rem)]">
                        <div className="container mx-auto px-6">
                            <div className="text-center max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out_forwards]">
                             
                                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                                    Privacy <span className="text-orange-500">Policy</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                                </p>
                                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 inline-block">
                                    <p className="text-gray-700 font-medium">Last updated: {privacyData.lastUpdated}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Content Section */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="grid lg:grid-cols-4 gap-12">
                                {/* Table of Contents
                                <div className="lg:col-span-1 animate-[slideInLeft_0.8s_ease-out_forwards]">
                                    <div className="bg-gray-50 rounded-xl p-6 sticky top-50">
                                        <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                                        <nav className="space-y-2">
                                            {privacyData.sections.map((section, index) => (
                                                <a
                                                    key={index}
                                                    href={`#${section.id}`}
                                                    className="block text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm"
                                                >
                                                    {section.title}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div> */}

                                {/* Main Content */}
                                <div className="lg:col-span-3 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s]">
                                    <div className="max-w-none text-gray-600 leading-7">
                                        {privacyData.sections.map((section, index) => (
                                            <section key={index} id={section.id} className="mb-12">
                                                <h2 className="text-orange-600 font-bold text-2xl mt-8 mb-4">{section.title}</h2>
                                                {section.subsections ? (
                                                    section.subsections.map((subsection, subIndex) => (
                                                        <div key={subIndex}>
                                                            {subsection.title && (
                                                                <h3 className="text-gray-900 font-semibold text-2xl mt-6 mb-3">
                                                                    {subsection.title}
                                                                </h3>
                                                            )}
                                                            {subsection.content.map((content, contentIndex) => (
                                                                <div key={contentIndex}>
                                                                    {content.type === "paragraph" && (
                                                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.text }} />
                                                                    )}
                                                                    {content.type === "list" && (
                                                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                                                            {content.items.map((item, itemIndex) => (
                                                                                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                    {content.type === "contact" && (
                                                                        <div className="bg-orange-50 rounded-lg p-6 mt-6">
                                                                            <div className="grid md:grid-cols-2 gap-6">
                                                                                {content.items.map((item, itemIndex) => (
                                                                                    <div key={itemIndex}>
                                                                                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                                                                        <p className={item.color} dangerouslySetInnerHTML={{ __html: item.value }} />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))
                                                ) : (
                                                    section.content.map((content, contentIndex) => (
                                                        <div key={contentIndex}>
                                                            {content.type === "paragraph" && (
                                                                <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.text }} />
                                                            )}
                                                            {content.type === "list" && (
                                                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                                                    {content.items.map((item, itemIndex) => (
                                                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                                                    ))}
                                                                </ul>
                                                            )}
                                                            {content.type === "contact" && (
                                                                <div className="bg-orange-50 rounded-lg p-6 mt-6">
                                                                    <div className="grid md:grid-cols-2 gap-6">
                                                                        {content.items.map((item, itemIndex) => (
                                                                            <div key={itemIndex}>
                                                                                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                                                                <p className={item.color} dangerouslySetInnerHTML={{ __html: item.value }} />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                )}
                                            </section>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
  )
}

export default privacyPolicy
