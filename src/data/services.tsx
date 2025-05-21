
import React from 'react';
import { Building2, HardHat, UtilityPole, Construction, Container, PenTool, Hammer, PaintBucket, Trello, Wrench, Home, Warehouse, CircuitBoard, Workflow } from 'lucide-react';





export const servicesData = [ 
  {
    id: 'concrete',
    title: 'Concrete Estimating',
    icon: <Building2 size={40} />,
    shortDescription: 'Professional estimating services for concrete foundations, slabs, walls, and structural elements.',
    description: 'Our specialized concrete estimating service provides comprehensive cost analyses for all types of concrete work, including foundations, slabs, walls, and various structural elements. We account for formwork, rebar, concrete mix specifications, labor, and all associated costs to deliver highly accurate estimates for your concrete projects. Our experienced estimators understand the complexities of concrete construction and can help you optimize costs without compromising quality.',
    contentImage: '/Conceret.png',  
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all concrete elements',
      'Cost estimation for various concrete mix designs',
      'Formwork and reinforcement steel (rebar) calculations',
      'Labor and equipment cost analysis',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different construction methods'
    ],
    processSteps: [
      {
        title: 'Blueprint Analysis',
        description: 'We carefully review your plans and specifications to identify all concrete elements.'
      },
      {
        title: 'Quantity Takeoff',
        description: 'We calculate precise quantities of concrete, formwork, and reinforcement required.'
      },
      {
        title: 'Cost Application',
        description: 'We apply current material, labor, and equipment rates to develop accurate cost estimates.'
      },
      {
        title: 'Finalization & Review',
        description: 'We review all calculations for accuracy and provide a detailed estimate report.'
      }
    ],
    faqs: [
      {
        question: 'What information do you need for a concrete estimate?',
        answer: 'We typically need architectural and structural drawings, concrete specifications, geotechnical reports (if available), project location, and timeline information.'
      },
      {
        question: 'How long does it take to complete a concrete estimate?',
        answer: 'Turnaround time depends on project complexity, but most concrete estimates are completed within 3-5 business days.'
      },
      {
        question: 'Do you account for waste factors in concrete estimates?',
        answer: 'Yes, we include appropriate waste factors based on industry standards and project-specific conditions.'
      },
      {
        question: 'Can you provide estimates for specialty concrete finishes?',
        answer: 'Yes, we can estimate costs for various concrete finishes including stamped, stained, polished, and exposed aggregate concrete.'
      }
    ],
    relatedServices: ['masonry', 'steel-structural', 'excavation']
  },
  {
    id: 'masonry',
    title: 'Masonry Estimating',
    icon: <Construction size={40} />,
    shortDescription: 'Detailed quantity takeoffs and cost estimates for brick, block, stone, and other masonry work.',
    description: 'Our masonry estimating service delivers detailed quantity takeoffs and cost estimates for all types of masonry work, including brick, concrete block, natural stone, and manufactured stone. We account for materials, mortar, reinforcement, labor, equipment, and accessories to provide comprehensive estimates that help you bid with confidence. Our estimators understand the unique requirements of masonry construction and can help you optimize your approach for maximum efficiency.',
    contentImage: '/Masonry.png',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all masonry materials',
      'Detailed mortar and grout calculations',
      'Reinforcement and accessory estimating',
      'Labor cost analysis for various masonry systems',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different masonry options'
    ],
    
    processSteps: [
      {
        title: 'Blueprint Review',
        description: 'We analyze your plans to identify all masonry elements and requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of masonry units, mortar, reinforcement, and accessories.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all masonry elements.'
      }
    ],
    faqs: [
      {
        question: 'What types of masonry work do you estimate?',
        answer: 'We estimate all types of masonry work including brick, concrete block (CMU), natural stone, manufactured stone, glass block, and decorative masonry systems.'
      },
      {
        question: 'How do you account for complex masonry patterns?',
        answer: 'We carefully analyze architectural details to account for pattern complexity, bond types, and decorative elements that affect material quantities and labor costs.'
      },
      {
        question: 'Do you include scaffolding and equipment costs?',
        answer: 'Yes, our estimates typically include costs for necessary scaffolding, hoisting, and other equipment required for masonry installation.'
      },
      {
        question: 'Can you estimate historical masonry restoration projects?',
        answer: 'Yes, we have experience estimating historical masonry restoration and can account for the specialized materials and techniques required for these projects.'
      }
    ],
    relatedServices: ['concrete', 'excavation', 'renovation']
  },
  {
    id: 'roofing',
    title: 'Roofing Estimating',
    icon: <HardHat size={40} />,
    shortDescription: 'Comprehensive estimates for all types of roofing systems and materials.',
    description: 'Our roofing estimating service provides detailed cost analyses for all types of roofing systems, including shingle, metal, tile, flat, and commercial roofing. We account for materials, underlayment, flashing, ventilation, labor, and all associated components to deliver accurate and comprehensive roofing estimates. Our experienced estimators understand the unique requirements of different roofing systems and can help you optimize your approach for maximum efficiency and cost-effectiveness.',
    contentImage: '/Roofing.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all roofing materials',
      'Detailed estimates for various roofing systems',
      'Underlayment, flashing, and accessory calculations',
      'Labor cost analysis for different roof types',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different roofing options'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We review your roof plans and specifications to identify all elements and requirements.'
      },
      {
        title: 'Quantity Takeoff',
        description: 'We calculate precise quantities of roofing materials, underlayment, flashing, and accessories.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all roofing components.'
      }
    ],
    faqs: [
      {
        question: 'What types of roofing do you provide estimates for?',
        answer: 'We estimate all types of roofing systems including asphalt shingles, metal roofing, tile roofing, flat roofing (EPDM, TPO, PVC, modified bitumen), green roofs, and specialty roofing.'
      },
      {
        question: 'Do you account for roof penetrations and flashing?',
        answer: 'Yes, our estimates include all necessary flashings for roof penetrations, valleys, ridges, and edges to ensure a complete and accurate estimate.'
      },
      {
        question: 'How do you handle estimates for complex roof geometries?',
        answer: 'We use specialized estimating software and techniques to accurately calculate quantities for complex roof geometries, ensuring precise material takeoffs and waste factors.'
      },
      {
        question: 'Can you provide estimates for roof replacements and repairs?',
        answer: 'Yes, we can estimate both new construction roofing as well as roof replacements, repairs, and recovers, accounting for the specific requirements of each.'
      }
    ],
    relatedServices: ['insulation', 'openings', 'facade-works']
  },
  {
    id: 'hvac',
    title: 'HVAC Estimating',
    icon: <UtilityPole size={40} />,
    shortDescription: 'Detailed cost analysis for heating, ventilation, and air conditioning systems.',
    description: 'Our HVAC estimating service provides comprehensive cost analyses for all types of heating, ventilation, and air conditioning systems. We account for equipment, ductwork, piping, controls, insulation, labor, and all associated components to deliver accurate and detailed HVAC estimates. Our experienced estimators understand the complexities of HVAC systems and can help you optimize your approach for maximum efficiency and cost-effectiveness.',
    contentImage: '/havc.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all HVAC components',
      'Detailed estimates for various HVAC systems',
      'Ductwork, piping, and accessory calculations',
      'Labor cost analysis for installation and testing',
      'Equipment and material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different HVAC options'
    ],
    processSteps: [
      {
        title: 'Plan Review',
        description: 'We analyze your mechanical plans and specifications to identify all HVAC requirements.'
      },
      {
        title: 'Component Quantification',
        description: 'We calculate precise quantities of equipment, ductwork, piping, and accessories.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material, equipment, and labor rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all HVAC elements.'
      }
    ],
    faqs: [
      {
        question: 'What types of HVAC systems do you estimate?',
        answer: 'We estimate all types of HVAC systems including split systems, packaged units, VRF/VRV systems, chilled water systems, boiler systems, geothermal, and specialty HVAC applications.'
      },
      {
        question: 'Do you include controls and building automation in your estimates?',
        answer: 'Yes, our estimates typically include HVAC controls, thermostats, and building automation systems as specified in the project documents.'
      },
      {
        question: 'How do you account for energy efficiency requirements?',
        answer: 'We carefully review specifications for energy efficiency requirements and ensure that all estimated equipment and systems meet the specified performance criteria and code requirements.'
      },
      {
        question: 'Can you provide estimates for HVAC retrofits and upgrades?',
        answer: 'Yes, we can estimate both new construction HVAC as well as retrofits, upgrades, and replacements, accounting for the specific requirements and challenges of each.'
      }
    ],
    relatedServices: ['mep', 'insulation', 'openings']
  },
  {
    id: 'steel-structural',
    title: 'Steel Structural Estimating',
    icon: <Container size={40} />,
    shortDescription: 'Precise estimating for structural steel elements and frameworks.',
    description: 'Our structural steel estimating service delivers detailed quantity takeoffs and cost estimates for all types of structural steel work, including beams, columns, joists, decking, and connections. We account for fabrication, delivery, erection, welding, bolting, and all associated elements to provide comprehensive estimates that help you bid with confidence. Our estimators understand the complexities of structural steel construction and can help you optimize your approach for maximum efficiency.',
    contentImage: '/steel.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all structural steel elements',
      'Detailed weight and connection calculations',
      'Fabrication and erection labor analysis',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different structural options',
      'Coordination with other trades'
    ],
    processSteps: [
      {
        title: 'Structural Drawing Analysis',
        description: 'We review structural drawings to identify all steel elements and connection requirements.'
      },
      {
        title: 'Steel Quantification',
        description: 'We calculate precise quantities and weights of all structural steel members and connections.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material, fabrication, and erection rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all structural steel components.'
      }
    ],
    faqs: [
      {
        question: 'How detailed are your structural steel estimates?',
        answer: 'Our structural steel estimates include detailed breakdowns of all steel members by type, size, and weight, as well as connections, welding, bolting, and erection costs.'
      },
      {
        question: 'Do you include steel deck in your estimates?',
        answer: 'Yes, our estimates typically include metal decking, shear studs, and other related components when specified in the project documents.'
      },
      {
        question: 'How do you account for complex connections?',
        answer: 'We carefully analyze structural details to account for connection complexity, including moment connections, bracing connections, and specialty hardware that affects material quantities and labor costs.'
      },
      {
        question: 'Can you provide estimates for steel retrofits and modifications?',
        answer: 'Yes, we can estimate both new construction structural steel as well as retrofits, modifications, and additions, accounting for the specific requirements and challenges of each.'
      }
    ],
    relatedServices: ['concrete', 'excavation', 'lumber-takeoffs']
  },
  {
    id: 'mep',
    title: 'MEP Estimating',
    icon: <PenTool size={40} />,
    shortDescription: 'Complete mechanical, electrical, and plumbing systems estimating.',
    description: 'Our MEP estimating service provides comprehensive cost analyses for mechanical, electrical, and plumbing systems. We account for equipment, fixtures, piping, conduit, wiring, controls, and all associated components to deliver accurate and detailed MEP estimates. Our experienced estimators understand the complexities of MEP systems and can help you optimize your approach for maximum efficiency and cost-effectiveness across all building systems.',
    contentImage: '/mep.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all MEP components',
      'Detailed estimates for mechanical, electrical, and plumbing systems',
      'Piping, conduit, and wiring calculations',
      'Equipment and fixture specifications analysis',
      'Labor cost analysis for installation and testing',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns'
    ],
    processSteps: [
      {
        title: 'MEP Plan Review',
        description: 'We analyze your mechanical, electrical, and plumbing plans to identify all system requirements.'
      },
      {
        title: 'Component Quantification',
        description: 'We calculate precise quantities of all MEP equipment, fixtures, piping, conduit, and wiring.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material, equipment, and labor rates to develop accurate cost estimates.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all MEP elements by system.'
      }
    ],
    faqs: [
      {
        question: 'Can you estimate all MEP systems or just specific ones?',
        answer: 'We can estimate all MEP systems comprehensively or focus on specific systems (mechanical only, electrical only, or plumbing only) based on your needs.'
      },
      {
        question: 'How do you handle specialized systems like fire protection?',
        answer: 'We estimate specialized systems including fire protection, building automation, security, and telecommunications, accounting for all required components and labor.'
      },
      {
        question: 'Do you include permit and inspection costs?',
        answer: 'Yes, when requested, we can include estimated permit fees, inspection costs, and utility connection fees relevant to MEP systems.'
      },
      {
        question: 'How do you ensure coordination between MEP systems?',
        answer: 'Our estimators review for potential conflicts and coordination issues between systems, helping identify challenges before they impact construction costs.'
      }
    ],
    relatedServices: ['hvac', 'openings', 'renovation']
  },
  {
    id: 'finish-carpentry',
    title: 'Finish Carpentry Estimating',
    icon: <Hammer size={40} />,
    shortDescription: 'Detailed estimates for interior and exterior finish carpentry work.',
    description: 'Our finish carpentry estimating service delivers detailed quantity takeoffs and cost estimates for all types of interior and exterior finish carpentry, including trim, moldings, cabinetry, countertops, doors, windows, and built-ins. We account for materials, labor, hardware, finishes, and all associated components to provide comprehensive estimates that help you bid with confidence. Our estimators understand the precision required for finish carpentry and can help you optimize your approach for maximum quality and efficiency.',
    contentImage: '/finishes.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all finish carpentry elements',
      'Detailed estimates for trim, cabinetry, and millwork',
      'Hardware and accessory calculations',
      'Labor cost analysis for installation',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Finish specifications analysis'
    ],
    processSteps: [
      {
        title: 'Drawing Analysis',
        description: 'We review architectural drawings, elevation details, and finish schedules to identify all carpentry elements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of trim, cabinetry, millwork, and associated hardware.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all finish carpentry components.'
      }
    ],
    faqs: [
      {
        question: 'How detailed are your finish carpentry estimates?',
        answer: 'Our estimates include detailed breakdowns of all trim types, cabinetry units, hardware, and labor costs, organized by room or location for easy reference.'
      },
      {
        question: 'Do you estimate both stock and custom millwork?',
        answer: 'Yes, we can provide estimates for both standard manufactured items and custom millwork, accounting for the different material and labor requirements of each.'
      },
      {
        question: 'How do you account for different wood species and finishes?',
        answer: 'We carefully review specifications for wood species, veneer grades, and finish requirements to ensure accurate material pricing for each element.'
      },
      {
        question: 'Can you estimate historical or restoration finish carpentry?',
        answer: 'Yes, we have experience estimating historical reproduction and restoration carpentry, accounting for the specialized materials, techniques, and skills required.'
      }
    ],
    relatedServices: ['drywall-finishes', 'flooring', 'renovation']
  },
  {
    id: 'drywall-finishes',
    title: 'Drywall & Finishes Estimating',
    icon: <PaintBucket size={40} />,
    shortDescription: 'Accurate takeoffs for drywall, painting, and other interior finishes.',
    description: 'Our drywall and finishes estimating service provides detailed quantity takeoffs and cost estimates for all types of interior wall and ceiling systems, including drywall, plaster, painting, wallcovering, and specialty finishes. We account for materials, labor, equipment, and all associated components to deliver accurate and comprehensive estimates. Our experienced estimators understand the nuances of interior finishes and can help you optimize your approach for maximum efficiency and quality.',
    contentImage: '/Drywall.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all drywall and finish materials',
      'Detailed estimates for various wall and ceiling systems',
      'Paint, wallcovering, and specialty finish calculations',
      'Labor cost analysis for different finish applications',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different finish options'
    ],
    processSteps: [
      {
        title: 'Plan and Specification Review',
        description: 'We analyze architectural plans, finish schedules, and specifications to identify all finish requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of drywall, framing, paint, wallcovering, and other finishes.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate for all finishes.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all interior finish elements.'
      }
    ],
    faqs: [
      {
        question: 'What types of wall and ceiling systems do you estimate?',
        answer: 'We estimate all types of systems including standard drywall, fire-rated assemblies, sound-rated assemblies, moisture-resistant assemblies, plaster, veneer plaster, and specialty systems.'
      },
      {
        question: 'How do you handle complex drywall details and finishes?',
        answer: 'We carefully analyze architectural details for soffits, coffers, curved surfaces, and other complex elements to account for additional materials and labor.'
      },
      {
        question: 'Do you include primer and multiple coats of paint in your estimates?',
        answer: 'Yes, our estimates account for the specified primer and finish coats, as well as any specialty preparation or application techniques required.'
      },
      {
        question: 'Can you estimate specialty finishes like Venetian plaster or faux finishes?',
        answer: 'Yes, we can estimate specialty decorative finishes, accounting for the specialized materials, techniques, and skilled labor required for proper execution.'
      }
    ],
    relatedServices: ['finish-carpentry', 'renovation', 'insulation']
  },
  {
    id: 'excavation',
    title: 'Excavation Estimating',
    icon: <Trello size={40} />,
    shortDescription: 'Comprehensive earthwork and excavation quantity takeoffs.',
    description: 'Our excavation estimating service provides detailed quantity takeoffs and cost estimates for all types of earthwork and excavation, including site clearing, grading, cut and fill operations, trenching, and soil management. We account for equipment, labor, hauling, soil conditions, and all associated factors to deliver accurate and comprehensive excavation estimates. Our experienced estimators understand the complexities of earthwork operations and can help you optimize your approach for maximum efficiency.',
    contentImage: '/Excavation.png',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all earthwork operations',
      'Cut and fill analysis and balancing',
      'Trenching and backfill calculations',
      'Equipment and labor cost analysis',
      'Soil management and disposal planning',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Consideration of site conditions and constraints'
    ],
    processSteps: [
      {
        title: 'Site Plan Analysis',
        description: 'We review civil plans, geotechnical reports, and site surveys to understand excavation requirements.'
      },
      {
        title: 'Quantity Calculation',
        description: 'We calculate precise volumes of cut, fill, import, export, and trenching operations.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current equipment, labor, and material rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all excavation operations.'
      }
    ],
    faqs: [
      {
        question: 'How do you account for different soil conditions?',
        answer: 'We review geotechnical reports and site information to factor in soil types, rock content, groundwater, and other conditions that affect excavation productivity and costs.'
      },
      {
        question: 'Do you include erosion control in your estimates?',
        answer: 'Yes, our estimates typically include temporary and permanent erosion control measures as specified in the project documents.'
      },
      {
        question: 'How do you handle contaminated soil or unexpected conditions?',
        answer: 'We can provide allowances for potential soil contamination or other adverse conditions, as well as unit prices for handling such materials if encountered.'
      },
      {
        question: 'Can you estimate dewatering costs?',
        answer: 'Yes, when groundwater is expected to be encountered, we include appropriate dewatering system costs based on the anticipated conditions and excavation depths.'
      }
    ],
    relatedServices: ['concrete', 'steel-structural', 'site-preparation']
  },
  {
    id: 'lumber-takeoffs',
    title: 'Lumber Takeoffs',
    icon: <Warehouse size={40} />,
    shortDescription: 'Detailed lumber and material quantity estimating for framing.',
    description: 'Our lumber takeoff service provides comprehensive material quantity lists and cost estimates for all types of wood framing, including dimensional lumber, engineered wood products, sheathing, and associated materials. We account for wall framing, floor and roof systems, structural connections, and waste factors to deliver accurate and detailed lumber takeoffs. Our experienced estimators understand framing systems and can help you optimize your material ordering and project planning.',
    contentImage: '/lumber.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all framing materials',
      'Detailed lists organized by framing system',
      'Hardware and connector calculations',
      'Waste factor considerations',
      'Material procurement recommendations',
      'Cost optimization suggestions',
      'Detailed line-item breakdowns',
      'Coordination with other building systems'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We review architectural and structural plans to identify all framing requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of lumber, engineered wood, sheathing, and connectors.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material rates to develop an accurate cost estimate for all framing materials.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed takeoff with organized material lists and cost breakdowns.'
      }
    ],
    faqs: [
      {
        question: 'How detailed are your lumber takeoffs?',
        answer: 'Our takeoffs provide piece counts for all framing members, organized by size, length, and location (walls, floors, roofs, etc.) with appropriate waste factors included.'
      },
      {
        question: 'Do you include hardware in your lumber takeoffs?',
        answer: 'Yes, we include specified connectors, hangers, straps, hold-downs, and fasteners required for proper structural performance.'
      },
      {
        question: 'How do you handle engineered wood products?',
        answer: 'We provide accurate quantities for all engineered wood including I-joists, LVL, LSL, PSL, and other engineered beams and headers based on the structural specifications.'
      },
      {
        question: 'Can you provide optimized cutting lists to minimize waste?',
        answer: 'Yes, upon request, we can provide optimized cutting lists that help minimize material waste for key framing elements.'
      }
    ],
    relatedServices: ['steel-structural', 'finish-carpentry', 'renovation']
  },
  {
    id: 'renovation',
    title: 'Renovation Estimating',
    icon: <Home size={40} />,
    shortDescription: 'Specialized estimating for renovation and remodeling projects.',
    description: 'Our renovation estimating service provides detailed cost analyses for all types of renovation, remodeling, and retrofit projects. We account for demolition, structural modifications, new construction elements, finishes, MEP adaptations, and all associated work to deliver accurate and comprehensive renovation estimates. Our experienced estimators understand the unique challenges of renovation projects and can help you anticipate and plan for the complexities involved.',
    contentImage: '/Renovation.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for demolition and new construction',
      'Detailed estimates for phased renovation work',
      'Consideration of existing conditions and constraints',
      'Contingency planning for unforeseen conditions',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Coordination of multiple trades and systems'
    ],
    processSteps: [
      {
        title: 'Existing Conditions Review',
        description: 'We analyze existing building information and renovation plans to understand the scope of work.'
      },
      {
        title: 'Scope Quantification',
        description: 'We calculate precise quantities for demolition, structural modifications, and new construction elements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate with appropriate contingencies.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all renovation elements and phases.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle unforeseen conditions in renovation estimates?',
        answer: 'We include appropriate contingency allowances based on the age, condition, and documentation of the existing building to account for potential unforeseen conditions.'
      },
      {
        question: 'Can you estimate phased renovations in occupied buildings?',
        answer: 'Yes, we can provide estimates for phased renovation work, accounting for temporary protection, after-hours work, and other factors required for occupied building projects.'
      },
      {
        question: 'How do you approach historic building renovations?',
        answer: 'For historic buildings, we account for specialized restoration techniques, material matching, and the additional care required when working with heritage structures.'
      },
      {
        question: 'Do you include code compliance upgrades in renovation estimates?',
        answer: 'Yes, we identify and include costs for building code compliance upgrades that may be triggered by renovation work, such as accessibility, fire protection, and energy code requirements.'
      }
    ],
    relatedServices: ['demolition', 'drywall-finishes', 'finish-carpentry']
  },
  {
    id: 'demolition',
    title: 'Demolition Estimating',
    icon: <Wrench size={40} />,
    shortDescription: 'Accurate estimating for demolition work and material disposal.',
    description: 'Our demolition estimating service provides detailed cost analyses for all types of demolition work, from selective interior demolition to complete building removal. We account for labor, equipment, material disposal, environmental considerations, and all associated elements to deliver accurate and comprehensive demolition estimates. Our experienced estimators understand the complexities of demolition operations and can help you plan for efficient and safe project execution.',
    contentImage: '/Demolition.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all demolition elements',
      'Detailed equipment and labor analysis',
      'Material disposal and recycling calculations',
      'Hazardous material considerations',
      'Temporary support and protection planning',
      'Salvage value assessments',
      'Detailed line-item breakdowns',
      'Phasing and sequencing recommendations'
    ],
    processSteps: [
      {
        title: 'Existing Conditions Review',
        description: 'We analyze existing building information and demolition plans to understand the scope of work.'
      },
      {
        title: 'Scope Quantification',
        description: 'We calculate precise quantities of materials to be removed and identify disposal requirements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current equipment, labor, and disposal rates to develop an accurate cost estimate.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all demolition operations.'
      }
    ],
    faqs: [
      {
        question: 'How do you approach hazardous materials in demolition estimates?',
        answer: 'We identify potential hazardous materials based on building age and type, and include allowances or unit prices for proper testing, removal, and disposal when required.'
      },
      {
        question: 'Do you include salvage value in your estimates?',
        answer: 'Yes, when applicable, we can account for the salvage value of recoverable materials such as architectural elements, metals, and reusable building components.'
      },
      {
        question: 'How do you handle structural demolition adjacent to buildings to remain?',
        description: 'We include costs for specialized techniques, temporary support, protection measures, and monitoring required when demolishing structures adjacent to or connected to buildings that will remain.'
      },
      {
        question: 'Can you estimate construction and demolition waste recycling?',
        answer: 'Yes, we can provide estimates that account for construction waste management plans, including sorting, recycling, and documentation required to meet LEED or other sustainability requirements.'
      }
    ],
    relatedServices: ['renovation', 'excavation', 'concrete']
  },
  {
    id: 'flooring',
    title: 'Flooring Estimating',
    icon: <Workflow size={40} />,
    shortDescription: 'Detailed estimates for all types of flooring materials and installation.',
    description: 'Our flooring estimating service provides comprehensive quantity takeoffs and cost analyses for all types of flooring materials and installation, including carpet, resilient flooring, tile, wood, stone, and specialty flooring. We account for materials, substrates, preparation, transitions, and labor to deliver accurate and detailed flooring estimates. Our experienced estimators understand the nuances of different flooring systems and can help you optimize your approach for maximum quality and efficiency.',
    contentImage: '/Flooring.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all flooring materials',
      'Detailed estimates for various flooring systems',
      'Substrate preparation and transition calculations',
      'Labor cost analysis for different installation methods',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Cost comparison of different flooring options'
    ],
    processSteps: [
      {
        title: 'Plan and Specification Review',
        description: 'We analyze architectural plans, finish schedules, and specifications to identify all flooring requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of flooring materials, accounting for patterns, waste, and transitions.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate for all flooring elements.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all flooring components by area.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle complex patterns and layouts?',
        answer: 'We carefully analyze installation plans for patterns, borders, feature strips, and other design elements to account for additional materials and labor required.'
      },
      {
        question: 'Do you include substrate preparation in your estimates?',
        answer: 'Yes, our estimates include necessary substrate preparation, including self-leveling compounds, moisture mitigation, crack isolation, and other requirements specified or needed for proper installation.'
      },
      {
        question: 'How do you estimate specialty flooring like terrazzo or epoxy?',
        answer: 'For specialty flooring, we account for the specific materials, preparation, installation techniques, and specialized labor required, as well as appropriate curing and protection time.'
      },
      {
        question: 'Do you include transitions and trim pieces in your estimates?',
        answer: 'Yes, we include all required transitions, reducers, thresholds, base materials, and other trim pieces necessary for complete flooring installation.'
      }
    ],
    relatedServices: ['finish-carpentry', 'renovation', 'concrete']
  },
  {
    id: 'facade-works',
    title: 'Facade Works Estimating',
    icon: <CircuitBoard size={40} />,
    shortDescription: 'Comprehensive estimating for exterior facade elements and finishes.',
    description: 'Our facade works estimating service provides detailed quantity takeoffs and cost analyses for all types of exterior building envelope systems, including cladding, curtain walls, storefronts, EIFS, rain screens, and architectural features. We account for materials, substrates, anchoring systems, waterproofing, and labor to deliver accurate and comprehensive facade estimates. Our experienced estimators understand the complexities of building envelope systems and can help you plan for efficient project execution.',
    contentImage: '/Facade.png',
    bannerImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all facade materials',
      'Detailed estimates for various exterior cladding systems',
      'Supporting structure and anchoring calculations',
      'Labor cost analysis for different installation methods',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Coordination with other building systems'
    ],
    processSteps: [
      {
        title: 'Elevation Analysis',
        description: 'We analyze architectural elevations, sections, and details to identify all facade elements and requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of facade materials, anchoring systems, and supporting elements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate for all facade works.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all facade components by elevation or system.'
      }
    ],
    faqs: [
      {
        question: 'What types of facade systems do you estimate?',
        answer: 'We estimate all types of facade systems including metal panel, ACM, terra cotta, stone, brick veneer, curtain wall, storefront, window wall, EIFS, stucco, fiber cement, and specialty cladding systems.'
      },
      {
        question: 'Do you include weather barriers in your estimates?',
        answer: 'Yes, our estimates include specified air barriers, vapor barriers, waterproofing, and flashing systems required for complete building envelope performance.'
      },
      {
        question: 'How do you approach complex geometries and custom elements?',
        answer: 'For projects with complex geometries or custom elements, we carefully analyze 3D information and details to account for the additional fabrication, coordination, and installation complexity.'
      },
      {
        question: 'Can you estimate facade restoration and recladding projects?',
        answer: 'Yes, we can provide estimates for facade restoration, recladding, and retrofits, accounting for work with existing conditions and the specialized techniques these projects require.'
      }
    ],
    relatedServices: ['roofing', 'openings', 'insulation']
  },
  {
    id: 'insulation',
    title: 'Insulation Estimating',
    icon: <Home size={40} />,
    shortDescription: 'Accurate takeoffs for thermal, acoustic, and other insulation materials.',
    description: 'Our insulation estimating service provides detailed quantity takeoffs and cost analyses for all types of building insulation, including thermal, acoustic, fire, and specialty insulation materials. We account for wall, roof, floor, and mechanical insulation, as well as associated vapor barriers and finishes to deliver accurate and comprehensive insulation estimates. Our experienced estimators understand the performance requirements of different insulation systems and can help you optimize your approach for maximum efficiency and code compliance.',
    contentImage: '/Facade.png',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all insulation materials',
      'Detailed estimates for various insulation systems',
      'Vapor barrier and air sealing calculations',
      'Labor cost analysis for different installation methods',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Energy code compliance considerations'
    ],
    processSteps: [
      {
        title: 'Plan and Specification Review',
        description: 'We analyze architectural and mechanical plans and specifications to identify all insulation requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of insulation materials for walls, roofs, floors, and mechanical systems.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate for all insulation elements.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all insulation components by system or location.'
      }
    ],
    faqs: [
      {
        question: 'What types of insulation do you estimate?',
        answer: 'We estimate all types of insulation including fiberglass, mineral wool, spray foam, rigid foam, cellulose, reflective, acoustic, fire protection, and specialty insulation products.'
      },
      {
        question: 'How do you handle energy code compliance in insulation estimates?',
        answer: 'We review applicable energy codes and project requirements to ensure that estimated insulation systems meet or exceed minimum R-value and installation quality requirements.'
      },
      {
        question: 'Do you include air sealing in your insulation estimates?',
        answer: 'Yes, when specified or required by code, we include appropriate air sealing systems, gaskets, sealants, and tapes necessary for proper building envelope performance.'
      },
      {
        question: 'Can you estimate mechanical insulation?',
        answer: 'Yes, we provide detailed estimates for HVAC ductwork, piping, and equipment insulation, accounting for the specific materials, thicknesses, and coverings required for each system.'
      }
    ],
    relatedServices: ['hvac', 'drywall-finishes', 'facade-works']
  },
  {
    id: 'openings',
    title: 'Openings Estimating',
    icon: <PenTool size={40} />,
    shortDescription: 'Detailed estimates for doors, windows, and other building openings.',
    description: 'Our openings estimating service provides comprehensive quantity takeoffs and cost analyses for all types of doors, windows, louvers, and related hardware. We account for materials, frames, glazing, hardware, and installation to deliver accurate and detailed estimates for building openings. Our experienced estimators understand the complexities of door and window systems and can help you optimize your approach for maximum efficiency and performance.',
     contentImage: '/Facade.png',
    bannerImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Accurate quantity takeoffs for all door and window types',
      'Detailed hardware schedules and pricing',
      'Glazing and specialty material calculations',
      'Labor cost analysis for installation',
      'Material procurement recommendations',
      'Value engineering suggestions',
      'Detailed line-item breakdowns',
      'Code compliance considerations'
    ],
    processSteps: [
      {
        title: 'Schedule and Specification Review',
        description: 'We analyze door and window schedules, elevations, and specifications to identify all opening requirements.'
      },
      {
        title: 'Material Quantification',
        description: 'We calculate precise quantities of doors, windows, frames, hardware, and associated materials.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current material and labor rates to develop an accurate cost estimate for all opening elements.'
      },
      {
        title: 'Final Report',
        description: 'We provide a detailed estimate with clear breakdowns of all door and window components.'
      }
    ],
    faqs: [
      {
        question: 'What types of door and window systems do you estimate?',
        answer: 'We estimate all types including wood, hollow metal, aluminum, fiberglass, and specialty doors; vinyl, aluminum, wood, fiberglass, and composite windows; as well as curtainwall, storefront, and specialty glazing systems.'
      },
      {
        question: 'How detailed are your hardware estimates?',
        answer: 'Our estimates include detailed breakdowns of all hardware items (hinges, closers, locks, exit devices, etc.) organized by opening for clear understanding of costs and requirements.'
      },
      {
        question: 'Do you account for specialty glazing requirements?',
        answer: 'Yes, we account for all specified glazing types including insulated, tempered, laminated, acoustical, fire-rated, bullet-resistant, and decorative glass.'
      },
      {
        question: 'Can you estimate automatic door operators and access control systems?',
        answer: 'Yes, we include costs for automatic operators, card readers, electric strikes, magnetic locks, and other access control components when specified.'
      }
    ],
    relatedServices: ['facade-works', 'finish-carpentry', 'hvac']
  }
];
