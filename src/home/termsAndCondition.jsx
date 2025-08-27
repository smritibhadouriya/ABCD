import React, { useEffect } from 'react'

const termsAndCondition = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
          const termsData = {
            lastUpdated: "August 2025",
            sections: [
                {
                    id: "acceptance",
                    title: "1. Acceptance of Terms",
                    content: [
                        {
                            type: "paragraph",
                            text: "By accessing or using our website and services, you agree to these terms and conditions, which include our Privacy Policy. If you do not agree with these terms, please do not use our website or services."
                        }
                    ]
                },
                {
                    id: "use-of-services",
                    title: "2. Use of Our Services",
                    content: [
                        {
                            type: "paragraph",
                            text: "You must use our services in accordance with these terms and any applicable laws and regulations. You agree not to engage in any illegal or unauthorized activities while using our website and services."
                        }
                    ]
                },
                {
                    id: "user-responsibilities",
                    title: "3. User Responsibilities",
                    content: [
                        {
                            type: "paragraph",
                            text: "When using our website and services, you agree to:"
                        },
                        {
                            type: "list",
                            items: [
                                "Comply with all applicable laws and regulations",
                                "Not engage in any activities that may harm our website or services"
                            ]
                        }
                    ]
                },
                {
                    id: "intellectual-property",
                    title: "4. Intellectual Property",
                    content: [
                        {
                            type: "paragraph",
                            text: "All content on our website, including text, graphics, logos, images, and software, is the property of Marcadeo Media Pvt. Ltd. and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission."
                        }
                    ]
                },
                {
                    id: "limitation-of-liability",
                    title: "5. Limitation of Liability",
                    content: [
                        {
                            type: "paragraph",
                            text: "We do not guarantee the accuracy, completeness, or reliability of any content on our website. We are not liable for any damages or losses resulting from your use of our website or services."
                        }
                    ]
                },
                {
                    id: "governing-law",
                    title: "6. Governing Law",
                    content: [
                        {
                            type: "paragraph",
                            text: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in India."
                        }
                    ]
                },
                {
                    id: "changes",
                    title: "7. Changes to Terms",
                    content: [
                        {
                            type: "paragraph",
                            text: "We may update these terms and conditions from time to time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review these terms periodically."
                        }
                    ]
                },
                {
                    id: "contact",
                    title: "8. Contact Us",
                    content: [
                        {
                            type: "paragraph",
                            text: "If you have any questions or concerns about these terms and conditions, please contact us:"
                        },
                        {
                            type: "contact",
                            items: [
                                { title: "Email", value: "info@marcadeo.in", color: "text-orange-600" },
                                { title: "Address", value: "Marcadeo Media Pvt. Ltd., India", color: "text-gray-600" },
                                { title: "Response Time", value: "We respond to inquiries within 48 hours", color: "text-gray-600" }
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
                            
                                <h1 className="text-4xl  font-bold text-gray-900 leading-tight mb-6">
                                    Terms and <span className="text-orange-500">Conditions</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Welcome to Better Digital Experience with Marcadeo Media Pvt. Ltd. These Terms govern your use of our services.
                                </p>
                                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 inline-block">
                                    <p className="text-gray-700 font-medium">Last updated: {termsData.lastUpdated}</p>
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
                                    <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                                        <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                                        <nav className="space-y-2">
                                            {termsData.sections.map((section, index) => (
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
                                </div> 
                                {/* Main Content */}
                                <div className="lg:col-span-3 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s]">
                                    <div className="max-w-none text-gray-600 leading-7">
                                        {termsData.sections.map((section, index) => (
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
                                                                    <div className="grid md:grid-cols-3 gap-4">
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

                    {/* Call to Action 
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-6 text-center">
                            <div className="max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease-out_forwards_0.4s]">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Questions About Our Terms and Conditions?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    We're here to help. Contact our support team for any questions or concerns.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        Contact Support Team
                                    </button>
                                    <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                                        Back to Home
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>*/}
                </>
  )
}

export default termsAndCondition
