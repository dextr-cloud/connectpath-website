// Customer success stories, migrated from the legacy connectpath.cx site (which is being retired).
// Text is as published there, with minor typo fixes. The original logos and PDF write-ups were no longer
// available when this was migrated, so stories are text-only.
export interface CaseStudy {
  slug: string
  company: string
  industry: string
  title: string
  summary: string
  customer: string[]
  challenge: string[]
  solution: string[]
  resultsLabel: "Benefits" | "Results"
  results: string[]
  technologies: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    "slug": "peace-hills-general-insurance",
    "company": "Peace Hills General Insurance",
    "industry": "Financial Services",
    "title": "A Holistic Contact Center View with ConnectPath CX",
    "summary": "How Peace Hills gained unified visibility across their contact center operations.",
    "customer": [
      "Peace Hills General Insurance Company has been serving Western Canada since 1982. They employ over 200 employees, who work with over 478 independent broker offices across British Columbia, Alberta, Saskatchewan, Manitoba, the Northwest Territories, Nunavut and Yukon Territory. The Peace Hills mission is to be a unique insurance company that truly cares. They are committed to best serving the communities in which they operate."
    ],
    "challenge": [
      "Peace Hills needed a contact center solution that was cost effective and could support some of their unique business operation’s needs. They wanted to deploy Amazon Connect but had additional features they required such as having over 700 Quick connects for their contacts, being able to customize specific features that ride on top of Amazon Connect like forced releasing agents if they miss a call. Peace Hills also required a more holistic view of their contact center environment with dashboards and reporting that were intuitive, easy to share and customizable."
    ],
    "solution": [
      "The customer deployed Amazon Connect initially and found they still required some additional features and custom functionality added to the environment. ConnectPath was then deployed onto their Amazon Connect instance. Once ConnectPath was deployed it helped provide the call control for the agents and the supervisor visibility required to better manage their contact center. The CloudHesive team was then able to custom develop a solution into ConnectPath to allow over 1100 contacts to be imported into their ConnectPath deployment. Because ConnectPath managed the call control on Amazon Connect, the team was able to customize how a call flow was handled if an agent misses a call whether that be a forced release or placing the agent back into a ready state. These types of custom activities can’t be done directly in Amazon Connect and ConnectPath solves these use cases."
    ],
    "resultsLabel": "Benefits",
    "results": [
      "The deployment of the ConnectPath platform was used to extend Amazon Connect into an omni-solution that fit the customer need while providing a platform for custom features to be added. It provides robust reporting and dashboards for both the agent and the supervisors. The solution that CloudHesive built for Peace Hills Insurance improved their usability and was customized to meet their business needs. Peace Hills Insurance has been extremely happy with the ConnectPath platform and CloudHesive’s ability to customize their Amazon Connect deployment and provide a go forward path for next generation innovation to drive a great customer experience."
    ],
    "technologies": [
      "Amazon Connect",
      "Contact Lens",
      "Custom development",
      "ConnectPath CX",
      "Lambda",
      "DynamoDB",
      "EventBridge",
      "S3"
    ]
  },
  {
    "slug": "district-of-columbia-government",
    "company": "District of Columbia Government",
    "industry": "Government",
    "title": "ConnectPath Enhances Customer, Agent and Supervisor Experience",
    "summary": "Government services delivered better with ConnectPath.",
    "customer": [
      "District of Columbia’s government is the official web portal for the District of Columbia’s government information and services. Launched in 1999, the award-winning web portal has grown to include over 100 websites for District agencies and topics ranging from sustainability to being an age friendly city to the quadrennial Presidential Inauguration."
    ],
    "challenge": [
      "While Amazon Connect provides the tools to build your own CCP, DC.Gov did not have the skillsets in-house nor the time to develop and maintain a functional UI. They approached the ConnectPath team to deploy ConnectPath CX to add a wide range of features to drive customer, agent and supervisor experience. DC.Gov also required additional omnichannel features and mobile support to continue adoption of their ever-growing range of services."
    ],
    "solution": [
      "The customer deployed Amazon Connect initially and realized they still required some additional features and custom functionality. ConnectPath was deployed within minutes leveraging DC.gov’s existing Amazon Connect instance. Once ConnectPath was deployed DC.gov was able to provide the call control for the agents and the supervisor visibility required to better manage their contact center. Because ConnectPath managed the call control on Amazon Connect, the team was able to customize how a call flow was handled if an agent misses a call whether that be a forced release or placing the agent back into a ready state. These types of custom activities can’t be done directly in Amazon Connect and ConnectPath solves these use cases."
    ],
    "resultsLabel": "Benefits",
    "results": [
      "ConnectPath’s streamlined deployment instantly extended their amazon connect platform into a true omni-channel contact center solution. This provided an open platform for future features, insights and the ever-growing list of communication channels to be added without increasing their operational workloads. Dashboards on both the agent and supervisor desktops gave DC.gov a real-time “live-look” to see all the interactions queued, this enabled the business to adjust to the volume and make the best use of their agent resources."
    ],
    "technologies": [
      "Amazon Connect",
      "Contact Lens",
      "ConnectPath CX",
      "Custom development"
    ]
  },
  {
    "slug": "morris-global-group",
    "company": "Morris Global Group",
    "industry": "Healthcare / Technology",
    "title": "ConnectPath Empowers Intelligent Remote Agents at Morris Global Group",
    "summary": "Healthcare technology company enables remote workforce with ConnectPath.",
    "customer": [
      "Morris Global Group, Ltd. (\"MGG\") is an international healthcare software and medical technology master distributor and marketing agency representing only ‘best-in-class’ products.",
      "Their formula for success is the ability to grow client’s product lines in new international markets. Over the years, they have built strong long-term relationships with their vast network of distribution partners across the globe to sell high quality products into the distributor, end-user, and retail channels.",
      "Morris Global Group’s latest innovative software platform, MCJ, utilizes Artificial Intelligence and a proprietary database of over 2 million cancer patients and their treatment outcomes to better inform the oncologists of those who are newly diagnosed. With a 96% probability, MCJ provides individualized survivability rates for each potential treatment path.",
      "For the first time in cancer care, the oncologist has instant access to data to provide the best possible outcome for the patient – and save the insurance company/payor 42% or more of their annual cancer costs."
    ],
    "challenge": [
      "Morris Global Group is an international company that needed fast deployment of contact center for their new teams who will be supporting and providing a Nurse on Call system to support MGG’s MCJ (My Cancer Journey).",
      "MCJ is a software platform and contact center for patient questions related to using their platform for cancer treatments. MCJ seamlessly blends high tech, real-world data and AI with high touch patient support, resulting in personalized, shared decision-making in cancer care. MGG's call center required monitoring and real metrics data dashboards for supervisors to assist agents on a day-to-day basis as well as provide the ability to service interactions in multiple languages and service patients from anywhere across the globe."
    ],
    "solution": [
      "CloudHesive built and deployed Amazon Connect and ConnectPath for Morris Global Group to meet their business requirements of multi-level customer support. ConnectPath provided Morris Global Group with more call control for the agents and a required granular visibility to supervisors to better manage their contact center.",
      "Because ConnectPath managed the call control on Amazon Connect, CloudHesive team was able to customize how a call flow was handled if an agent misses a call, needs to transfer a call, and even give a caller an option to leave voicemail with notification. Implementing ConnectPath also provided the functionality to the Agent to request assistance and Supervisors can use silent monitoring or whisper coaching to drive customer and agent experience."
    ],
    "resultsLabel": "Results",
    "results": [
      "The deployment of the ConnectPath platform was used to extend Amazon Connect into an omni-channel solution for the customer as well as provide a platform for other custom features to be added. ConnectPath provides robust reporting and dashboards for both the agent and the supervisors.",
      "Morris Global Group has been extremely happy with the ConnectPath platform and CloudHesive’s ability to customize Amazon Connect and provide a go forward path for next generation patient and agent experience."
    ],
    "technologies": []
  },
  {
    "slug": "percepta",
    "company": "Percepta",
    "industry": "Technology",
    "title": "ConnectPath Enhances Percepta’s Amazon Connect With Agility and Scalability",
    "summary": "Global customer relationship organization achieves flexibility with ConnectPath.",
    "customer": [
      "Percepta is a global customer relationship organization that manages all forms of contact with clients’ customers, prospective customers, suppliers, and distribution networks.",
      "They have positioned themselves as customer contact specialists, managing all aspects of the contact experience.",
      "From its inception, Percepta LLC has specialized in creating customer loyalty to its clients across the globe. Delivered exemplary service on multiple channels, delivered in multiple languages and provided an accelerated time-to-value for their customers. Percepta delivers world-class service across markets globally."
    ],
    "challenge": [
      "Percepta LLC realized that they needed an agile solution that can scale with their ever-increasing customer demands when transitioning a large automotive client to Amazon Connect. Percepta turned to CloudHesive for their expert knowledge, guidance on best practices and exceptional support.",
      "Percepta's requirements included configuration of security profiles, quick connects, agent status indicators and hierarchies for ease of management. Additionally, their desired customer journey included a deep-dive into their customer experience and required a different approach to their traditional contact center models."
    ],
    "solution": [
      "To meet the needs for Percepta’s client contact center, CloudHesive recommended Amazon Connect with ConnectPath integration.",
      "Amazon Connect is an affordable and easy to use solution that covers all the needs of the contact center. However, ConnectPath, on the other hand, is an enhancement for Amazon Connect. It gives agents and managers exceptional experience of everyday tasks and the ability to efficiently serve the customers. ConnectPath’s collaboration dashboard delivered insights into their contact center and delivered this information to the supervisors. Access to the agent's key-performance was crucial to successfully manage their high-volume contact center. ConnectPath also provided supervisors to keep track of agent activity and be able to join the call when support is needed for coaching and quality monitoring purposes."
    ],
    "resultsLabel": "Results",
    "results": [
      "ConnectPath is a full-featured agent dashboard for Amazon Connect that helps Percepta’s client contact center to improve efficiency, enhance customer experience, and make data-driven decisions that improve performance.",
      "ConnectPath together with Amazon Connect allows automotive companies to scale quickly and easily based on their business needs.",
      "Amazon Connect and ConnectPath are services billed on a pay-as-you-use basis which results in lower costs than traditional contact center solutions and the ability to scale as the need for seasonality arises."
    ],
    "technologies": []
  },
  {
    "slug": "ace-rent-a-car",
    "company": "ACE Rent A Car",
    "industry": "Travel & Hospitality",
    "title": "Enhancing Customer Experience: ACE Rent a Car’s Transformation with ConnectPath CX",
    "summary": "How a leading car rental company transformed their customer service with ConnectPath.",
    "customer": [
      "ACE Rent A Car is a leading car rental company known for its reliable service and affordable rates. ACE was founded in 1966 by Bob Sorensen and is headquartered in Indianapolis, Indiana. ACE offers a wide range of vehicles to meet the diverse needs of customers with a strong presence in various locations including both United States, Canada, Mexico, Iceland, Poland, United Kingdom, and many other countries. ACE provides rental services to both leisure and business travelers and prides itself on offering competitive rates, quality vehicles, and personalized service to ensure customer satisfaction."
    ],
    "challenge": [
      "ACE Rent A Car, a global leader in car rental, partnered with CloudHesive to modernize its Contact Center. ACE was dissatisfied with their current communication platform, and sought to address concerns such as low uptime, limited customer touch points, outdated technology, excessive costs, and frequent downtime prompting them to seek a different solution. They required a more dependable, user-friendly, and scalable system that would provide a seamless omni-channel experience to their customers."
    ],
    "solution": [
      "Recognizing ACE Rent A Car's unique demands and objectives, CloudHesive designed a complete approach that addressed their difficulties while providing a dependable, omni-channel experience. ACE implemented Amazon Connect and ConnectPathCX in minutes and was able to resolve their critical issues."
    ],
    "resultsLabel": "Benefits",
    "results": [
      "ConnectPathCX provided a cost-effective alternative to their former provider, with the goal of accommodating ACE's future growth and changing requirements while providing agents with real-time access to customer information. ConnectPathCX allows them to provide personalized and efficient support while also providing an excellent track record of uptime, minimizing service disruptions, and ensuring continuous customer service."
    ],
    "technologies": [
      "Amazon Connect",
      "ConnectPath CX"
    ]
  },
  {
    "slug": "city-of-atlanta-atl311",
    "company": "City of Atlanta (ATL311)",
    "industry": "Government",
    "title": "Large Municipality Deploys ConnectPath CX on Amazon Connect",
    "summary": "Delivering accessible government services with quality and accountability.",
    "customer": [
      "The mission of ATL311 is to provide the public with easy access to all City of Atlanta government services and information, while also providing quality service that emphasizes Accountability, Responsiveness, and Efficiency. They are a diverse workforce that provides a centralized point of contact to their vibrant business community, visitors, and constituency. Their vision is to be the City of Atlanta's world-class customer service center, creating, supporting, and sustaining the community through easy access to all city services. The goal of community response services is to allow residents to report non-emergency issues such as substance abuse, mental health, and/or poverty. ATL311 is the point of contact for these non-emergency service requests and has direct line of sight to the mayor of the city."
    ],
    "challenge": [
      "The City of Atlanta needed a cost-effective solution that was able to adapt to the ever-changing needs of the community. They also needed a solution that was easily administered and provided omnichannel capabilities and scale as events in the community dictated."
    ],
    "solution": [
      "The customer initially deployed a bare-bones Amazon Connect instance but feedback from their users warranted additional functionality that would require either custom development and ongoing maintenance or expensive third party addons. With ConnectPath they had a third option: a customizable, low-cost platform that continued to evolve to meet their needs."
    ],
    "resultsLabel": "Benefits",
    "results": [
      "The deployment of the ConnectPath platform was used to extend Amazon Connect into an omni-channel solution for the customer as well as provide a platform for the continuous deployment of features to the customer. It provides robust reporting and dashboards for both the agent and the supervisors with rich role-based access control. The solution that CloudHesive built for this municipality improved their usability and was customized to meet the needs of over 2 dozen departments. Not only have they been pleased with the solution and support of the solution, but they have also battle tested the solution through major weather events that impacted the city."
    ],
    "technologies": [
      "Amazon Connect",
      "Contact Lens",
      "ConnectPath CX",
      "Calabrio",
      "Custom development"
    ]
  },
  {
    "slug": "prince-william-county",
    "company": "Prince William County",
    "industry": "Government",
    "title": "Prince William County Deploys Amazon Connect and ConnectPath CX",
    "summary": "Virginia’s second-most populous county modernizes citizen services.",
    "customer": [
      "Prince William County is located on the Potomac River in the U.S. state of Virginia. As of the 2020 census, the population sits at 482,204 making it Virginia's second-most populous county. Its county seat is the independent city of Manassas. A part of Northern Virginia, Prince William County is part of the Washington metropolitan area. In 2019 it had the 20th-highest income of any county in the United States."
    ],
    "challenge": [
      "The functions of the Tax Administration are critical components of collecting, recognizing, and managing revenue in local governments. The Tax Administration Division at the county level is in charge of enrolling and accessing tangible personal property for individuals and businesses, as well as billing and collecting current and delinquent real and tangible personal property taxes and licenses, among other things. The Taxpayer services Team, which needed a solution to better track KPIs and taxpayer contacts, answers taxpayer questions. They were looking for a low-cost, easy-to-implement contact center solution."
    ],
    "solution": [
      "Prince William County implemented the ConnectPath and Amazon Connect solution, and as their needs expanded beyond a single team, they continued to expand the platform to include additional divisions. The solution implemented included custom integration and features developed in the ConnectPath platform specifically for the use case of Prince William County."
    ],
    "resultsLabel": "Benefits",
    "results": [
      "ConnectPath provides a single, intuitive interface to agents, contact center supervisors, system administrators, and back-office employees across multiple divisional teams, and has streamlined operational processes such as real-time contact monitoring and reporting on their effectiveness in providing citizen services. We were able to provide context around technical challenges they encountered using our cross-customer insights, reducing time to resolution. Finally, as the division's needs changed over time, ConnectPath was able to support them by responding to specific feature requests and proactively releasing features aligned with local government needs. The solution also enabled the customer to make better use of the entire Amazon Web Services eco-system in order to better serve their customers."
    ],
    "technologies": [
      "Amazon Connect",
      "Amazon Lambda",
      "ConnectPath CX",
      "Amazon S3",
      "Custom Integrations",
      "Amazon DynamoDB",
      "Custom Feature Development"
    ]
  },
  {
    "slug": "onesky-flight",
    "company": "OneSky Flight",
    "industry": "Travel & Hospitality",
    "title": "OneSky Flight’s Zendesk and ConnectPath Configuration",
    "summary": "Private aviation company integrates contact center with support platform.",
    "customer": [
      "OneSky Flight is an aviation portfolio consisting of an array of industry private jet travel solutions to fit any need. OneSky Flight's portfolio of aviation companies includes Flexjet, Sentient Jet, Skyjet, and Sirio in Europe. The companies of OneSky have one thing in common: “we fly people privately”.",
      "OneSky Flight is part of Kenn Ricci's Directional Aviation Group, headquartered in Richmond, VA and services customers globally."
    ],
    "challenge": [
      "OneSky Flight required a contact center solution that would be able to scale with their very unpredictable call volumes. Thus, they inquired about a pay-as-you-go model as traditional license-based solutions would not allow them to be as elastic as their business volume.",
      "OneSky also wanted to have omni-channel capabilities to provide their customers with the ability to choose how and when to initiate an interaction.",
      "Moreover, Zendesk integration was very crucial to their business and tight integration was required to provide agents with real-time, up-to-date information about their clients via a screen-pop.",
      "OneSky also needed to have the standard business oversight with robust dashboard and reporting."
    ],
    "solution": [
      "The customer deployed Amazon Connect initially and realized they still required some additional features and custom functionality.",
      "CloudHesive advised to use ConnectPath as an integration to their Amazon Connect instance. With ConnectPath, OneSky was instantly able to provide the call control for the agents and the supervisor visibility which was required to better manage their contact center. The additional visibility for supervisors included call recordings, call transcriptions and sentiment analysis. Another important feature is built-in reporting that ConnectPath offered which enabled supervisors to effectively manage and monitor contact center.",
      "These features are all standard in the ConnectPath platform and OneSky was able to realize benefits within first few days of deployment.",
      "The CloudHesive team worked directly with OneSky Flight to configure and improve Zendesk Customer Profiles and set up the AppFlow Connection to Zendesk. Zendesk was integrated into ConnectPath to screen pop the relevant customer information for the agent based on a matching phone number in Zendesk."
    ],
    "resultsLabel": "Results",
    "results": [
      "The deployment of ConnectPath platform was used to extend Amazon Connect into an omni-channel solution for the customer. It provided robust reporting and dashboards for both the agent and the supervisors.",
      "The integration that CloudHesive built for OneSky Flight improved the agent’s productivity and efficiency by saving them the time to enter information back into Zendesk.",
      "Instant information at the agents fingertips allowed OneSky to elevate their customer experience and attract more business.",
      "OneSky has been extremely happy with the ConnectPath platform and CloudHesive’s ability to integrate their internal systems."
    ],
    "technologies": []
  }
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug)
}
