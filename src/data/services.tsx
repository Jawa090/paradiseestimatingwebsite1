import React from 'react';
import { Building2, HardHat, UtilityPole, Construction, Container, PenTool, Hammer, PaintBucket, Trello, Wrench, Home, Warehouse, CircuitBoard, Workflow, Package, PackageOpen, Building, Package2, PackageCheck, PackageMinus, PackagePlus, PackageSearch, PackageX } from 'lucide-react';

export const servicesData = [
  {
    id: 'site-preparation',
    title: 'Site Preparation',
    icon: <Building2 size={40} />,
    shortDescription: 'Comprehensive site preparation services including clearing, grading, and infrastructure preparation.',
    description: 'Our site preparation services provide all the groundwork needed to ensure your construction project starts on solid footing. We offer comprehensive solutions including site clearing, grading, soil compaction, drainage planning, and utility preparation. Our experienced team uses advanced equipment and techniques to prepare your site efficiently and according to specifications, setting the foundation for a successful construction project.',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Complete site clearing and vegetation removal',
      'Precise land grading and leveling',
      'Soil testing and compaction',
      'Drainage system planning and installation',
      'Utility preparation and coordination',
      'Erosion control measures',
      'Access road construction',
      'Environmental compliance management'
    ],
    processSteps: [
      {
        title: 'Site Assessment',
        description: 'We conduct thorough site evaluations to understand terrain, soil conditions, and project requirements.'
      },
      {
        title: 'Planning',
        description: 'We develop detailed site preparation plans including grading, drainage, and utility considerations.'
      },
      {
        title: 'Execution',
        description: 'Our skilled operators use specialized equipment to efficiently prepare your site according to plan.'
      },
      {
        title: 'Quality Control',
        description: 'We perform rigorous inspections to ensure all site preparation meets required specifications.'
      }
    ],
    faqs: [
      {
        question: 'How long does site preparation typically take?',
        answer: 'Timeline varies based on site size, complexity, and weather conditions, but most residential sites can be prepared within 1-3 weeks while commercial projects may take 2-8 weeks.'
      },
      {
        question: 'Do you handle permitting for site preparation?',
        answer: 'Yes, we can assist with obtaining necessary permits including grading permits, environmental permits, and other local authorizations required for site work.'
      },
      {
        question: 'How do you handle environmental concerns during site preparation?',
        answer: 'We implement best practices for environmental protection including erosion control, dust management, and wildlife protection measures as required by local regulations.'
      },
      {
        question: 'Can you work with challenging terrain or soil conditions?',
        answer: 'Yes, our team has experience with various challenging conditions including sloped terrain, rocky soil, wet areas, and contaminated soil requiring remediation.'
      }
    ],
    relatedServices: ['excavation', 'concrete', 'demolition']
  },
  {
    id: 'material-takeoff',
    title: 'Material Takeoff',
    icon: <PackageOpen size={40} />,
    shortDescription: 'Precise material quantity calculations for accurate procurement and budgeting.',
    description: 'Our material takeoff services provide detailed quantity calculations for all construction materials needed for your project. We meticulously analyze plans and specifications to create comprehensive material lists with accurate quantities, helping you procure exactly what you need for your project. Our precise takeoffs minimize waste, reduce costs, and ensure you have the right materials when you need them.',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Comprehensive material quantity calculations',
      'Detailed breakdown by construction phase',
      'Waste factor calculations',
      'Unit cost analysis',
      'Digital takeoff technology utilization',
      'Procurement schedule recommendations',
      'Budget optimization strategies',
      'Material alternatives comparison'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We carefully review construction documents to understand project scope and requirements.'
      },
      {
        title: 'Digital Takeoff',
        description: 'Using advanced software, we calculate precise material quantities needed for each element.'
      },
      {
        title: 'Quality Check',
        description: 'We verify calculations and cross-reference with specifications to ensure accuracy.'
      },
      {
        title: 'Final Report',
        description: 'We deliver a comprehensive material list organized by phase, area, or material type.'
      }
    ],
    faqs: [
      {
        question: 'What information do you need for a material takeoff?',
        answer: 'We typically need complete construction plans, specifications, finish schedules, and any special requirements or preferences for materials.'
      },
      {
        question: 'How accurate are your material takeoffs?',
        answer: 'Our takeoffs are typically within 2-3% accuracy when working with complete and detailed plans, helping minimize overages while ensuring sufficient materials.'
      },
      {
        question: 'How quickly can you complete a material takeoff?',
        answer: 'Turnaround time depends on project size and complexity, but most residential takeoffs can be completed within 3-5 business days, while larger commercial projects may require 5-10 days.'
      },
      {
        question: 'Can you provide takeoffs for specific trades only?',
        answer: 'Yes, we can provide targeted takeoffs for specific trades or phases such as framing, drywall, concrete, or finishes depending on your needs.'
      }
    ],
    relatedServices: ['lumber-takeoffs', 'concrete', 'flooring']
  },
  {
    id: 'commercial-estimating',
    title: 'Commercial Estimating',
    icon: <Building size={40} />,
    shortDescription: 'Comprehensive cost estimating for commercial construction projects of all sizes.',
    description: 'Our commercial estimating service delivers detailed cost analyses for all types of commercial construction projects, including office buildings, retail spaces, warehouses, and industrial facilities. We provide accurate estimates covering all project phases from site work through final finishes, helping you plan budgets, secure financing, and make informed project decisions.',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Comprehensive project cost analysis',
      'Division-based cost breakdowns',
      'Value engineering options',
      'Phased construction estimates',
      'Budget tracking and reconciliation',
      'Contractor bid verification',
      'Life-cycle cost analysis',
      'Cash flow projections'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We thoroughly review plans, specifications, and site conditions to understand project scope.'
      },
      {
        title: 'Quantity Takeoff',
        description: 'We perform detailed quantity calculations for all project elements and materials.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current market rates for materials and labor to develop accurate cost estimates.'
      },
      {
        title: 'Final Report',
        description: 'We deliver comprehensive estimates with detailed breakdowns, assumptions, and recommendations.'
      }
    ],
    faqs: [
      {
        question: 'How do you account for regional cost differences?',
        answer: 'We maintain current cost databases for different regions and adjust our estimates based on local material and labor rates, permit costs, and building code requirements.'
      },
      {
        question: 'Can you provide estimates at different design stages?',
        answer: 'Yes, we offer conceptual, schematic, design development, and construction document stage estimates with appropriate levels of detail and contingency for each phase.'
      },
      {
        question: 'Do you provide bid validation services?',
        answer: 'Yes, we can review contractor bids to ensure they are complete, accurate, and competitive, helping you select the right contractors for your project.'
      },
      {
        question: 'How do you handle change orders and cost updates?',
        answer: 'We can provide change order pricing analysis and estimate updates throughout the project to help you track budget impact of design changes or unforeseen conditions.'
      }
    ],
    relatedServices: ['material-takeoff', 'concrete', 'mep']
  },
  {
    id: 'residential-estimating',
    title: 'Residential Estimating',
    icon: <Home size={40} />,
    shortDescription: 'Detailed cost estimates for custom homes, renovations, and residential developments.',
    description: 'Our residential estimating services provide comprehensive cost analyses for all types of residential projects, from custom homes to multi-family developments. We deliver accurate estimates that account for all aspects of residential construction, helping homeowners, builders, and developers plan effectively and stay within budget throughout their projects.',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Detailed whole-house cost estimates',
      'Room-by-room breakdown options',
      'Finishes and fixture allowances',
      'Material alternatives comparison',
      'Labor cost analysis',
      'Project timeline correlation',
      'Subcontractor scope definitions',
      'Cost-saving recommendations'
    ],
    processSteps: [
      {
        title: 'Plan Review',
        description: 'We analyze architectural plans, specifications, and finish schedules to understand project requirements.'
      },
      {
        title: 'Quantity Calculation',
        description: 'We perform detailed takeoffs for all materials and elements required for the home.'
      },
      {
        title: 'Cost Analysis',
        description: 'We apply current residential construction rates to develop accurate cost estimates.'
      },
      {
        title: 'Final Report',
        description: 'We deliver comprehensive, easy-to-understand estimates organized by construction phase or room.'
      }
    ],
    faqs: [
      {
        question: 'How detailed are your residential estimates?',
        answer: 'Our estimates can be as detailed as you need, from high-level budget figures to comprehensive line-item breakdowns of every material and process in your home.'
      },
      {
        question: 'Can you estimate renovation projects?',
        answer: 'Yes, we provide detailed estimates for renovations and remodels, accounting for demolition, working in existing conditions, and phasing considerations.'
      },
      {
        question: 'How do you handle allowances for finishes?',
        answer: 'We can include specific allowances for finishes and fixtures based on your preferences and budget, or provide cost ranges for different quality levels.'
      },
      {
        question: 'Can you help with cost reduction strategies?',
        answer: 'Yes, we can identify potential cost savings through material alternatives, design modifications, or construction method changes without compromising quality.'
      }
    ],
    relatedServices: ['lumber-takeoffs', 'finish-carpentry', 'renovation']
  },
  {
    id: 'earthwork',
    title: 'Earthwork',
    icon: <Trello size={40} />,
    shortDescription: 'Precise earthwork quantity calculations and cost estimates for site development.',
    description: 'Our earthwork estimating service provides detailed calculations and cost analysis for all types of earthmoving operations. We deliver accurate cut and fill calculations, soil management plans, and comprehensive cost estimates for grading, excavation, and site preparation work. Our experienced estimators utilize advanced software to ensure precise quantities and optimal earthwork planning.',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Cut and fill volume calculations',
      'Material shrinkage/swell factor analysis',
      'Earthwork balancing strategies',
      'Soil import/export calculations',
      'Equipment productivity analysis',
      'Erosion control estimating',
      'Digital terrain modeling',
      'Phased earthwork plans'
    ],
    processSteps: [
      {
        title: 'Site Analysis',
        description: 'We review site plans, topographic surveys, and geotechnical reports to understand existing and proposed conditions.'
      },
      {
        title: 'Quantity Calculation',
        description: 'Using specialized software, we calculate precise earthwork volumes and material requirements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current equipment rates, labor costs, and material prices to develop accurate earthwork estimates.'
      },
      {
        title: 'Final Report',
        description: 'We deliver comprehensive earthwork analyses with clear volume calculations and cost breakdowns.'
      }
    ],
    faqs: [
      {
        question: 'How accurate are your earthwork calculations?',
        answer: 'Using advanced 3D modeling software, our earthwork calculations are typically within 3-5% accuracy when working with quality survey data.'
      },
      {
        question: 'Do you account for soil conditions in your estimates?',
        answer: 'Yes, we incorporate geotechnical information to account for different soil types, expansion/compression factors, and handling requirements.'
      },
      {
        question: 'Can you optimize cut and fill to reduce costs?',
        answer: 'Yes, we can analyze various grading scenarios to balance earthwork, minimize material import/export, and reduce overall earthwork costs.'
      },
      {
        question: 'How do you estimate rock excavation?',
        answer: 'We incorporate geotechnical information to identify potential rock areas and provide appropriate unit prices or allowances for rock excavation methods.'
      }
    ],
    relatedServices: ['site-preparation', 'excavation', 'demolition']
  },
  {
    id: 'cost-planning',
    title: 'Cost Planning',
    icon: <Package2 size={40} />,
    shortDescription: 'Strategic construction cost planning and budget management services.',
    description: 'Our cost planning service helps clients develop comprehensive construction budgets and financial strategies for projects of all types and sizes. We provide initial cost assessments, budget development, phasing strategies, and ongoing cost management throughout the project lifecycle. Our experienced team helps you make informed financial decisions and maintain budget control from concept to completion.',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Conceptual cost modeling',
      'Detailed budget development',
      'Cost benchmarking analysis',
      'Value engineering strategies',
      'Cash flow projection',
      'Phasing options analysis',
      'Contingency management',
      'Market trend assessment'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We thoroughly review project goals, requirements, and constraints to understand financial parameters.'
      },
      {
        title: 'Budget Development',
        description: 'We create comprehensive project budgets with appropriate detail for the project stage.'
      },
      {
        title: 'Strategy Creation',
        description: 'We develop cost management strategies including procurement approaches, phasing, and contingency planning.'
      },
      {
        title: 'Monitoring Framework',
        description: 'We establish systems for tracking costs throughout the project lifecycle.'
      }
    ],
    faqs: [
      {
        question: 'When should cost planning begin?',
        answer: 'Cost planning should ideally start at the earliest project stages to establish realistic budgets and influence design decisions when changes are least expensive.'
      },
      {
        question: 'How do you handle project uncertainty in early phases?',
        answer: 'We incorporate appropriate contingencies and allowances based on the project phase, with larger contingencies in early stages that can be reduced as design progresses and details become clearer.'
      },
      {
        question: 'Can you help us prioritize project elements within our budget?',
        answer: 'Yes, we can help identify core project requirements versus desirable features, providing cost information to help you make informed decisions about project priorities.'
      },
      {
        question: 'How do you track costs during construction?',
        answer: 'We establish cost tracking systems that monitor expenditures against budgets, track change orders, project final costs, and provide regular financial reporting.'
      }
    ],
    relatedServices: ['commercial-estimating', 'residential-estimating', 'value-engineering']
  },
  {
    id: 'value-engineering',
    title: 'Value Engineering',
    icon: <PackageCheck size={40} />,
    shortDescription: 'Strategic cost optimization while maintaining quality and performance.',
    description: 'Our value engineering service helps clients optimize project costs without sacrificing quality or performance. We analyze designs, specifications, and construction methods to identify cost-saving opportunities while maintaining or enhancing project functionality and value. Our systematic approach considers lifecycle costs, constructability, and performance requirements to deliver the best overall value.',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Design and specification review',
      'Alternative solution analysis',
      'Material substitution options',
      'Construction method optimization',
      'Lifecycle cost assessment',
      'System performance evaluation',
      'Cost-benefit analysis',
      'Implementation roadmaps'
    ],
    processSteps: [
      {
        title: 'Project Review',
        description: 'We analyze current designs, specifications, and estimates to identify potential improvement areas.'
      },
      {
        title: 'Alternative Development',
        description: 'We research and develop alternative solutions that could reduce costs while maintaining performance.'
      },
      {
        title: 'Analysis',
        description: 'We evaluate alternatives based on initial cost, lifecycle cost, constructability, and performance metrics.'
      },
      {
        title: 'Recommendation',
        description: 'We present findings with clear cost comparisons and implementation recommendations.'
      }
    ],
    faqs: [
      {
        question: 'When is the best time for value engineering?',
        answer: 'While value engineering can happen at any project phase, it provides the greatest benefit when conducted early in design when changes have minimal impact on schedule and design costs.'
      },
      {
        question: 'Will value engineering reduce quality?',
        answer: 'No, true value engineering maintains or improves functionality while reducing costs. We never recommend cost reductions that would compromise quality or performance requirements.'
      },
      {
        question: 'What typical cost savings can be expected?',
        answer: 'Value engineering typically identifies potential savings of 5-15% of construction costs, though actual implementation rates vary based on project constraints and owner preferences.'
      },
      {
        question: 'How do you evaluate lifecycle costs versus initial costs?',
        answer: 'We analyze both initial costs and long-term operational costs including maintenance, energy use, and replacement to ensure recommendations provide true value over the project lifespan.'
      }
    ],
    relatedServices: ['cost-planning', 'commercial-estimating', 'residential-estimating']
  },
  {
    id: 'bid-management',
    title: 'Bid Management',
    icon: <Package size={40} />,
    shortDescription: 'Comprehensive tender preparation, analysis, and contractor selection services.',
    description: 'Our bid management service streamlines the contractor procurement process by preparing comprehensive bid packages, managing the bidding process, analyzing submissions, and helping you select the right contractors for your project. Our structured approach ensures fair competition, comparable bids, and optimal contractor selection based on experience, capacity, and value.',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Bid package preparation',
      'Contractor prequalification',
      'Bid solicitation management',
      'Pre-bid meeting coordination',
      'RFI response coordination',
      'Bid analysis and leveling',
      'Interview assistance',
      'Contract negotiation support'
    ],
    processSteps: [
      {
        title: 'Preparation',
        description: 'We develop comprehensive bid packages with clear scopes of work and submission requirements.'
      },
      {
        title: 'Solicitation',
        description: 'We identify qualified contractors, distribute bid packages, and manage the bid process.'
      },
      {
        title: 'Analysis',
        description: 'We evaluate and normalize bids to ensure accurate comparisons between different proposals.'
      },
      {
        title: 'Recommendation',
        description: 'We provide detailed bid analysis reports with clear contractor selection recommendations.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure bids are comparable?',
        answer: 'We create structured bid forms, clearly defined scopes of work, and detailed requirements. After receipt, we carefully analyze bids to normalize differences and ensure fair comparison.'
      },
      {
        question: 'How do you prequalify contractors?',
        answer: 'We evaluate contractors based on experience with similar projects, financial stability, references, safety records, current workload, and capacity to perform the work.'
      },
      {
        question: 'What if bids come in over budget?',
        answer: 'We help identify cost reduction options, evaluate value engineering opportunities, reassess project scope, or develop negotiation strategies to align with budget constraints.'
      },
      {
        question: 'Can you manage multiple bid packages for phased projects?',
        answer: 'Yes, we can develop and manage multiple bid packages for different project phases or trade divisions, coordinating the entire process to optimize scheduling and costs.'
      }
    ],
    relatedServices: ['cost-planning', 'commercial-estimating', 'value-engineering']
  },
  {
    id: 'plan-review',
    title: 'Plan Review',
    icon: <PackageSearch size={40} />,
    shortDescription: 'Thorough construction document review to identify issues before construction.',
    description: 'Our plan review service provides comprehensive analysis of construction documents to identify inconsistencies, errors, omissions, and constructability issues before they impact your project. Our experienced team reviews plans, specifications, and other documents to help you resolve issues during design, reducing delays, change orders, and cost overruns during construction.',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Interdisciplinary coordination review',
      'Code compliance assessment',
      'Constructability evaluation',
      'Design conflict identification',
      'Specification consistency review',
      'Dimensional verification',
      'Detail completeness check',
      'Building system integration review'
    ],
    processSteps: [
      {
        title: 'Document Collection',
        description: 'We gather all relevant construction documents, specifications, and project requirements.'
      },
      {
        title: 'Systematic Review',
        description: 'Our team methodically reviews documents for errors, omissions, and coordination issues.'
      },
      {
        title: 'Issue Documentation',
        description: 'We document all findings clearly with references to affected drawings and specifications.'
      },
      {
        title: 'Resolution Tracking',
        description: 'We provide systems to track issue resolution through design team responses and revisions.'
      }
    ],
    faqs: [
      {
        question: 'When should a plan review be conducted?',
        answer: 'Plan reviews are most valuable at major design milestones, particularly at 30%, 60%, and 90% completion, with a final review before bidding or construction.'
      },
      {
        question: 'What types of issues do you typically find?',
        answer: 'Common issues include dimensional discrepancies, conflicting building systems, missing details, specification inconsistencies, and constructability challenges.'
      },
      {
        question: 'How do plan reviews save money?',
        answer: 'Identifying and resolving issues during design can reduce change orders, rework, delays, and claims during construction, typically saving 5-15 times the cost of the review itself.'
      },
      {
        question: 'Do you check for code compliance?',
        answer: 'Yes, we can include code compliance review as part of our plan review service, checking for adherence to applicable building, fire, accessibility, and energy codes.'
      }
    ],
    relatedServices: ['commercial-estimating', 'residential-estimating', 'value-engineering']
  },
  {
    id: 'scheduling',
    title: 'Construction Scheduling',
    icon: <PackagePlus size={40} />,
    shortDescription: 'Detailed project timelines and resource planning for efficient project delivery.',
    description: 'Our construction scheduling service develops comprehensive project timelines that optimize workflow, resource allocation, and project delivery. From master schedules to detailed look-ahead plans, we create realistic schedules that account for all project activities, dependencies, and constraints. Our scheduling expertise helps you plan effectively, track progress, and manage time-related risks throughout your project.',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Critical path method scheduling',
      'Resource-loaded timelines',
      'Milestone tracking',
      'Trade coordination sequencing',
      'Procurement and long-lead planning',
      'Weather impact considerations',
      'Schedule risk analysis',
      'Progress monitoring systems'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We review project documents and requirements to understand scope, constraints, and objectives.'
      },
      {
        title: 'Schedule Development',
        description: 'We create detailed schedules with appropriate activities, durations, and logical relationships.'
      },
      {
        title: 'Resource Optimization',
        description: 'We analyze resource requirements and optimize allocation across project activities.'
      },
      {
        title: 'Monitoring Framework',
        description: 'We establish systems for tracking progress and updating schedules throughout the project.'
      }
    ],
    faqs: [
      {
        question: 'What scheduling software do you use?',
        answer: 'We primarily use industry-standard software such as Primavera P6 and Microsoft Project, but can work with other systems based on client preferences.'
      },
      {
        question: 'How detailed are your schedules?',
        answer: 'We tailor schedule detail to project needs, from high-level master schedules with hundreds of activities to detailed schedules with thousands of activities for complex projects.'
      },
      {
        question: 'Can you integrate procurement activities into the schedule?',
        answer: 'Yes, we incorporate procurement processes including shop drawing preparation, approvals, fabrication, and delivery to ensure materials arrive when needed.'
      },
      {
        question: 'How do you handle schedule delays?',
        answer: 'We analyze delay impacts, identify recovery options, and help implement appropriate acceleration measures while documenting time-related issues for proper project management.'
      }
    ],
    relatedServices: ['commercial-estimating', 'residential-estimating', 'plan-review']
  },
];
