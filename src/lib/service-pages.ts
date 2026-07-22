import type { PageHeroIcon } from "@/components/PageHero";

export type ServiceAboutHighlight = {
  label: string;
  detail: string;
};

export type ServiceAboutIcon =
  | "printer"
  | "bike"
  | "calendar"
  | "layers"
  | "sparkles";

export type ServiceOfferingIcon =
  | "printer"
  | "shirt"
  | "layers"
  | "cylinder"
  | "flame"
  | "droplets"
  | "sun"
  | "gem"
  | "box"
  | "bike"
  | "calendar"
  | "sparkles"
  | "hardhat"
  | "hand"
  | "shield"
  | "shield-check"
  | "bag"
  | "uniform"
  | "presentation"
  | "rocket"
  | "users"
  | "type";

export type ServiceOfferingItem = {
  title: string;
  description: string;
  points: string[];
  icon: ServiceOfferingIcon;
  image: string;
  imageAlt?: string;
};

/** Temporary shared placeholder until per-offering assets are ready */
export const SERVICE_OFFERING_PLACEHOLDER_IMAGE =
  "https://images.pexels.com/photos/38600407/pexels-photo-38600407.jpeg";

export type ServicePageContent = {
  slug: string;
  hero: {
    eyebrow: string;
    eyebrowIcon?: PageHeroIcon;
    title: string;
    titleAccent?: string;
    subtitle?: string;
    description?: string;
  };
  about: {
    eyebrow: string;
    eyebrowIcon?: ServiceAboutIcon;
    title: string;
    subtitle?: string;
    paragraphs: string[];
    highlights?: ServiceAboutHighlight[];
  };
  offerings?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: ServiceOfferingItem[];
  };
  cta?: {
    title: string;
    titleAccent?: string;
    description: string;
    primaryLabel?: string;
  };
};

export const PRINTING_SERVICE_PAGE: ServicePageContent = {
  slug: "printing",
  hero: {
    eyebrow: "Printing Services",
    eyebrowIcon: "layers",
    title: "Printing Services",
    titleAccent: "in Dubai",
    description:
      "In-house offset, digital, fabric, UV, and more — quality production at competitive rates.",
  },
  about: {
    eyebrow: "About this service",
    eyebrowIcon: "printer",
    title: "Printing Services In Dubai",
    subtitle: "Complete in-house printing for every brief",
    paragraphs: [
      "We offer a comprehensive range of printing services designed to meet the diverse needs of businesses and individuals. We are one of the very few suppliers with a complete in-house production facility for fabrication, branding, and printing services in Dubai, which gives us an edge over our competitors to offer you the best quality at very competitive rates. Whether you’re searching for printing services near me or specialized offset and digital printing services, our expert team ensures that every project is dedicated to delivering top-notch results for every project that comes our way.",
    ],
    highlights: [
      {
        label: "In-house production",
        detail: "Fabrication, branding, and print under one roof in Dubai.",
      },
      {
        label: "Competitive rates",
        detail: "Quality output without the multi-vendor markup.",
      },
      {
        label: "Expert team",
        detail: "Offset, digital, fabric, UV, and specialty finishes.",
      },
    ],
  },
  offerings: {
    eyebrow: "What we offer",
    title: "Printing Solutions",
    description:
      "From offset and fabric to UV and metal engraving—choose the process that fits your materials, volume, and finish.",
    items: [
      {
        title: "Offset & Digital Printing",
        description:
          "We specialize in offset printing, using advanced digital offset printing machines to create sharp, accurate, and high-quality results for large-scale projects. Whether you’re working on brochures, magazines, or packaging materials, our digital offset printing service offers precision and consistency.",
        points: [
          "Sharp, accurate results for large-scale runs",
          "Brochures, magazines, and packaging materials",
          "Precision and colour consistency on every job",
        ],
        icon: "printer",
        image: "/images/services/printing/offset-digital.webp",
        imageAlt: "Offset and digital printing production",
      },
      {
        title: "Fabric Printing",
        description:
          "Looking for fabric printing in Dubai? We use various techniques to apply designs to fabric, whether for custom apparel, promotional products, or home textiles. Our eco-friendly digital fabric printing ensures vibrant results that are also sustainable, perfect for any custom project.",
        points: [
          "Custom apparel, promos, and home textiles",
          "Eco-friendly digital fabric printing",
          "Vibrant colour that holds up in daily use",
        ],
        icon: "shirt",
        image: "/images/services/printing/fabric.webp",
        imageAlt: "Fabric printing samples",
      },
      {
        title: "Screen Printing",
        description:
          "With years of experience in screen printing in Dubai, we are experts in turning your creative ideas into durable and vibrant prints. From custom apparel to promotional items, our screen printing services deliver lasting quality.",
        points: [
          "Durable, vibrant prints for apparel and promos",
          "Ideal for bulk runs and brand merch",
          "Lasting quality built for repeated wear",
        ],
        icon: "layers",
        image: "/images/services/printing/screen.webp",
        imageAlt: "Screen printing work",
      },
      {
        title: "Round Printing",
        description:
          "Our round printing service is ideal for applying stunning graphics to cylindrical objects like mugs, bottles, and cans. Whether it’s for personalized merchandise or branding, we guarantee exceptional results and high-quality prints.",
        points: [
          "Graphics for mugs, bottles, and cans",
          "Personalized merchandise and branding",
          "Clean registration on curved surfaces",
        ],
        icon: "cylinder",
        image: "/images/services/printing/round.webp",
        imageAlt: "Round printing on cylindrical products",
      },
      {
        title: "Heat Transfer",
        description:
          "We offer heat transfer printing for detailed and durable designs on a variety of fabrics and materials. Ideal for customizing clothing or promotional items, our heat transfer process ensures sharp and long-lasting prints.",
        points: [
          "Detailed designs on fabrics and soft goods",
          "Custom clothing and promotional items",
          "Sharp, long-lasting heat transfer finishes",
        ],
        icon: "flame",
        image: "/images/services/printing/heat-transfer.webp",
        imageAlt: "Heat transfer printing",
      },
      {
        title: "Sublimation Printing",
        description:
          "Our sublimation printing in Dubai service is perfect for producing vibrant, high-quality prints on a variety of materials, including fabrics, ceramics, and metal. We also offer sublimation shirt printing and sublimation print on demand, ensuring your designs look vivid and last long.",
        points: [
          "Vibrant prints on fabric, ceramic, and metal",
          "Sublimation shirt printing available",
          "Print-on-demand options for flexible runs",
        ],
        icon: "droplets",
        image: "/images/services/printing/sublimation.webp",
        imageAlt: "Sublimation printing samples",
      },
      {
        title: "UV Printing",
        description:
          "Our UV printing companies utilize cutting-edge technology to provide high-resolution, durable prints on various surfaces such as plastics, glass, acrylic, and metal. Whether you need UV printing logos or vibrant custom prints, we ensure your designs stand out.",
        points: [
          "High-resolution prints on plastic, glass, and acrylic",
          "UV logos and custom surface graphics",
          "Durable finishes that stand out on display",
        ],
        icon: "sun",
        image: "/images/services/printing/uv.webp",
        imageAlt: "UV printing on hard surfaces",
      },
      {
        title: "Metal Engraving",
        description:
          "We also provide metal engraving services, offering a precise and sophisticated way to engrave designs on different metal types like aluminum, brass, and stainless steel. Whether for corporate gifts or custom signage, our metal engraving machines deliver accuracy and long-lasting results.",
        points: [
          "Engraving on aluminum, brass, and stainless steel",
          "Corporate gifts and custom signage",
          "Precise, long-lasting engraved detail",
        ],
        icon: "gem",
        image: "/images/services/printing/metal-engraving.webp",
        imageAlt: "Metal engraving samples",
      },
    ],
  },
  cta: {
    title: "Ready to brief your next",
    titleAccent: "print job?",
    description:
      "Tell us about your offset, fabric, UV, sublimation, or specialty print needs. Our Dubai team will confirm process, timeline, and pricing so production starts with a clear plan.",
    primaryLabel: "Request a quote",
  },
};

export const RIDER_EQUIPMENT_SERVICE_PAGE: ServicePageContent = {
  slug: "rider-equipment",
  hero: {
    eyebrow: "Rider Equipment",
    eyebrowIcon: "bike",
    title: "Rider Equipment",
    titleAccent: "in Dubai",
    description:
      "Custom-branded rider kits and field gear that put your logo in motion across the UAE.",
  },
  about: {
    eyebrow: "About this service",
    eyebrowIcon: "bike",
    title: "Rider Equipment",
    subtitle: "Visibility, comfort, and performance for every shift",
    paragraphs: [
      "We specialize in providing branded rider equipment that not only boosts your brand visibility but also offers top-tier quality and comfort. From helmets to food delivery bags, each product is designed to offer superior performance and style for your team.",
      "Whether you run a delivery fleet or a field sales team, Baharnani kits riders with durable, well-branded gear built for UAE conditions—so your logo stays sharp, your team stays comfortable, and every route becomes brand exposure.",
    ],
    highlights: [
      {
        label: "Brand on the move",
        detail: "Eye-catching designs that raise awareness with every delivery.",
      },
      {
        label: "Comfort first",
        detail: "Gear built for long shifts without sacrificing professionalism.",
      },
      {
        label: "Custom branding",
        detail: "Kits tailored to your colours, logo, and fleet identity.",
      },
    ],
  },
  offerings: {
    eyebrow: "What we offer",
    title: "Rider Equipment Solutions",
    description:
      "From helmets and pads to bags and uniforms—branded gear that protects your team and puts your logo on the road.",
    items: [
      {
        title: "Helmets",
        description:
          "Elevate your team’s visibility and professional appearance with our bespoke bike helmets. We employ premium-quality safety helmets to ensure durability in the harshest conditions. Whether you’re looking for a helmet shop near me or customized helmets for your team, we’ve got you covered with top-notch designs and branding.",
        points: [
          "Premium safety helmets built for harsh conditions",
          "Custom branding for a professional fleet look",
          "Durable finishes that keep your logo sharp",
        ],
        icon: "hardhat",
        image: "/images/services/rider-equipment/helmets.webp",
        imageAlt: "Branded rider helmets",
      },
      {
        title: "Gloves",
        description:
          "Our exceptional glove branding service offers protection, comfort, and a refined showcase for your logo. We provide rider gloves near me, ensuring the highest standards of quality and functionality for your team. Our custom gloves add a layer of professionalism and consistency to your brand’s image, ensuring your team always presents a polished look.",
        points: [
          "Protection and comfort for daily riding",
          "Logo branding that stays clear and consistent",
          "Polished, professional look across the fleet",
        ],
        icon: "hand",
        image: "/images/services/rider-equipment/gloves.webp",
        imageAlt: "Branded rider gloves",
      },
      {
        title: "Knee Pads",
        description:
          "Safeguard your team while maintaining consistent brand representation with our expertly branded knee pads. Our advanced branding services not only enhance visual appeal but also guarantee long-lasting durability, ensuring your logo remains prominent on your knee pads for maximum impact.",
        points: [
          "Essential protection for active riders",
          "Durable branding that holds up on the road",
          "Consistent brand visibility on every shift",
        ],
        icon: "shield",
        image: "/images/services/rider-equipment/knee-pads.webp",
        imageAlt: "Branded knee pads",
      },
      {
        title: "Elbow Pads",
        description:
          "Our custom-printed elbow pads offer essential protection while presenting a unified and professional image for your team. Through our superior branding services, your logo will be both durable and visually striking, making your team stand out.",
        points: [
          "Custom-printed elbow protection",
          "Unified look across your rider kit",
          "Durable, high-impact logo placement",
        ],
        icon: "shield-check",
        image: "/images/services/rider-equipment/elbow-pads.webp",
        imageAlt: "Branded elbow pads",
      },
      {
        title: "Jacket & Reflective Vest",
        description:
          "Achieve a professional and cohesive look for your team with our high-quality printed reflective vests and jackets. Combining essential protection with stylish branding, our creative printing solutions ensure your team stands out confidently and safely. Our custom reflective vests and customized reflective safety vests are designed for high visibility in any working environment.",
        points: [
          "Printed jackets and reflective safety vests",
          "High visibility for safer night and day routes",
          "Cohesive branding across the full kit",
        ],
        icon: "shirt",
        image: "/images/services/rider-equipment/jacket-reflective-vest.webp",
        imageAlt: "Branded jackets and reflective vests",
      },
      {
        title: "Food Delivery Bags",
        description:
          "Enhance your brand recognition with our custom-printed food delivery bags in UAE. Designed for durability and frequent use, our high-quality branding ensures your bags remain professional and easily identifiable, promoting your brand effectively. We offer food delivery bags suppliers and food delivery bag manufacturers that cater to your specific needs, ensuring the best quality for your team.",
        points: [
          "Custom-printed bags built for frequent use",
          "Easily identifiable branding on every delivery",
          "Durable construction for UAE fleet conditions",
        ],
        icon: "bag",
        image: "/images/services/rider-equipment/food-delivery-bags.webp",
        imageAlt: "Custom food delivery bags",
      },
      {
        title: "Rider Uniform",
        description:
          "Our rider uniform service offers bespoke, high-quality apparel meticulously designed to meet your specific needs. Our team of seasoned professionals engages closely with you to accurately understand and fulfill your requirements, ensuring your team looks professional and feels comfortable at all times.",
        points: [
          "Bespoke apparel tailored to your brief",
          "Professional look with all-day comfort",
          "Close collaboration from design to delivery",
        ],
        icon: "uniform",
        image: "/images/services/rider-equipment/rider-uniform.webp",
        imageAlt: "Custom rider uniforms",
      },
    ],
  },
  cta: {
    title: "Ready to kit out your",
    titleAccent: "rider fleet?",
    description:
      "Tell us what you need—helmets, bags, uniforms, or a full branded kit. Our Dubai team will map sizing, branding, and delivery so your riders look sharp from day one.",
    primaryLabel: "Request a quote",
  },
};

export const EVENT_MANAGEMENT_SERVICE_PAGE: ServicePageContent = {
  slug: "event-management",
  hero: {
    eyebrow: "Event Management",
    eyebrowIcon: "calendar",
    title: "Event Management",
    titleAccent: "in Dubai",
    description:
      "End-to-end corporate launches, activations, and conferences across Dubai & the GCC.",
  },
  about: {
    eyebrow: "About this service",
    eyebrowIcon: "calendar",
    title: "Event Management Services",
    subtitle: "One accountable team from brief to show day",
    paragraphs: [
      "We deliver end-to-end management for corporate launches, conferences, brand activations, and private functions across Dubai and the GCC. Our commitment to excellence is reflected in a dedicated production team that owns venue, vendors, staffing, and run-of-show—so you stay focused on guests while every detail stays on timeline.",
      "From developing the event concept and arranging venues to designing the experience, setting up AV and stages, event branding, entertainment, and full on-site management, Baharnani keeps every moving part aligned under one roof.",
    ],
    highlights: [
      {
        label: "Full production planning",
        detail: "Concept, budget, venue sourcing, and a clear run-of-show.",
      },
      {
        label: "Vendor coordination",
        detail: "AV, staging, catering, and décor managed as one programme.",
      },
      {
        label: "On-site direction",
        detail: "Staffing and a single point of contact through close.",
      },
    ],
  },
  offerings: {
    eyebrow: "What we offer",
    title: "Event Management Solutions",
    description:
      "End-to-end capabilities for conferences, product launches, and annual corporate gatherings—from first concept through show-day management across Dubai and the GCC.",
    items: [
      {
        title: "Developing Event Concept",
        description:
          "We shape a clear event concept around your goals, audience, and brand—so every decision from venue to entertainment supports one coherent experience. Ideal for conferences, product launches, and annual corporate gatherings that need a strong creative and strategic foundation.",
        points: [
          "Goal-led concepts for conferences, launches, and gatherings",
          "Audience journey and experience mapping",
          "Creative direction aligned to your brand",
        ],
        icon: "sparkles",
        image: "/images/services/event-management/developing-event-concept.webp",
        imageAlt: "Event concept development",
      },
      {
        title: "Arranging Venues",
        description:
          "We source and secure venues that fit your brief, guest count, and production needs across Dubai and the GCC. From boardroom seminars to large annual gatherings, we handle site visits, negotiations, and logistics so the location works for both guests and the show.",
        points: [
          "Venue sourcing matched to format and capacity",
          "Site visits, negotiations, and booking support",
          "Layouts that work for staging, AV, and flow",
        ],
        icon: "calendar",
        image: "/images/services/event-management/arranging-venues.webp",
        imageAlt: "Event venue arrangement",
      },
      {
        title: "Designing Events",
        description:
          "We design the full event experience—run-of-show, guest flow, décor direction, and branded moments—so the day feels intentional from arrival to close. Design covers conferences, product launches, and corporate celebrations with the same attention to detail.",
        points: [
          "Run-of-show and guest journey design",
          "Look-and-feel, décor, and spatial planning",
          "Formats for seminars, launches, and annual events",
        ],
        icon: "presentation",
        image: "/images/services/event-management/designing-events.webp",
        imageAlt: "Event design and planning",
      },
      {
        title: "Setting Up Audio Visual Equipment",
        description:
          "Clear sound and sharp visuals keep audiences engaged. We plan and set up audio visual equipment—screens, projectors, microphones, mixing, and playback—so presentations, launches, and keynotes run without technical surprises.",
        points: [
          "Screens, projection, mics, and mixing",
          "Tech rehearsals before show day",
          "On-site AV operators when you need them",
        ],
        icon: "sun",
        image: "/images/services/event-management/setting-up-av.webp",
        imageAlt: "Event audio visual setup",
      },
      {
        title: "Setting Up Stages",
        description:
          "We design and set up stages that frame speakers, products, and performances with the right scale and finish. From compact seminar platforms to launch stages and annual gathering centres, staging is built for sightlines, branding, and safe show-day use.",
        points: [
          "Stage design scaled to room and audience",
          "Safe build, dress, and strike",
          "Integration with branding and AV",
        ],
        icon: "box",
        image: "/images/services/event-management/setting-up-stages.webp",
        imageAlt: "Event stage setup",
      },
      {
        title: "Event Branding",
        description:
          "Extend your brand across every touchpoint—stage backdrops, signage, badges, digital screens, and guest materials. Our event branding keeps conferences, product launches, and corporate gatherings visually consistent and on-message.",
        points: [
          "Backdrops, signage, and stage branding",
          "Guest materials and digital screen graphics",
          "Cohesive look across the full venue",
        ],
        icon: "layers",
        image: "/images/services/event-management/event-branding.webp",
        imageAlt: "Event branding and graphics",
      },
      {
        title: "Entertainment",
        description:
          "We coordinate entertainment that fits the tone of your event—hosts, performers, music, and interactive moments for product launches and annual corporate gatherings, or lighter breaks for conferences and seminars.",
        points: [
          "Hosts, performers, and music booking",
          "Programming matched to your audience",
          "Cueing and timing with the run-of-show",
        ],
        icon: "rocket",
        image: "/images/services/event-management/entertainment.webp",
        imageAlt: "Event entertainment",
      },
      {
        title: "Event Management",
        description:
          "One accountable team owns the brief through close—vendor coordination, staffing, timelines, and on-site direction. Whether it’s a conference, product launch, or annual corporate gathering, we manage the day so you can focus on guests and outcomes.",
        points: [
          "Single point of contact from brief to close",
          "Vendor, staffing, and timeline control",
          "On-site direction for show-day execution",
        ],
        icon: "users",
        image: "/images/services/event-management/event-management.webp",
        imageAlt: "Full event management",
      },
    ],
  },
  cta: {
    title: "Ready to plan your next",
    titleAccent: "corporate event?",
    description:
      "Share your date, guest count, and goals—our Dubai team will map concept, venue, production, and budget so show day runs with one accountable partner.",
    primaryLabel: "Request a quote",
  },
};

export const ACRYLIC_FABRICATION_SERVICE_PAGE: ServicePageContent = {
  slug: "acrylic-fabrication",
  hero: {
    eyebrow: "Acrylic Fabrication",
    eyebrowIcon: "layers",
    title: "Acrylic Fabrication",
    titleAccent: "in UAE",
    description:
      "Custom acrylic displays, signage, boxes, stands, and letter cutouts—locally produced for quick delivery.",
  },
  about: {
    eyebrow: "About this service",
    eyebrowIcon: "layers",
    title: "Acrylic Fabrication",
    subtitle: "Custom acrylic in Dubai & the UAE, built to your specs",
    paragraphs: [
      "Our acrylic fabrication in UAE ensures that every project is tailored to your specifications. We specialize in acrylic fabrication Dubai and offer a wide range of products designed to meet your unique needs. Whether you’re looking for acrylic fabric for a custom project or a standard acrylic fabrication solution, we guarantee durable and beautifully designed products.",
      "From signage and display boxes to stands and letter cutouts, Baharnani cuts, bonds, polishes, and finishes acrylic locally—so you get quicker delivery, cleaner edges, and pieces that hold up in busy UAE environments.",
    ],
    highlights: [
      {
        label: "Local production",
        detail: "UAE-made acrylic for faster turnaround and tighter quality control.",
      },
      {
        label: "Custom fabrication",
        detail: "Signage, boxes, stands, and letter cutouts built to your brief.",
      },
      {
        label: "Precision finish",
        detail: "CNC cutting, polishing, and detailing for a premium install.",
      },
    ],
  },
  offerings: {
    eyebrow: "What we offer",
    title: "Acrylic Fabrication Solutions",
    description:
      "Signage, boxes, stands, and letter cutouts—precision acrylic fabricated in Dubai to match your brand and install needs.",
    items: [
      {
        title: "Acrylic Signage",
        description:
          "In the visual marketing world, acrylic signage stands out as a powerful tool for businesses to make a lasting impression. We specialize in creating custom acrylic signage designs that not only capture attention but also enhance brand presentation. Our acrylic signage in Dubai ranges from vivid displays to streamlined logos that are sure to fascinate and engage your target audience.",
        points: [
          "Custom acrylic signage designed for brand impact",
          "Vivid displays and streamlined logo treatments",
          "Durable finishes for Dubai retail and corporate spaces",
        ],
        icon: "layers",
        image: "/images/services/acrylic-fabrication/acrylic-signage.webp",
        imageAlt: "Custom acrylic signage",
      },
      {
        title: "Acrylic Boxes",
        description:
          "Our acrylic box services offer versatile and stylish storage solutions for various needs. Whether you’re looking for acrylic display boxes to showcase products or need acrylic storage boxes in Dubai for organizing items, we design and manufacture boxes that are both functional and aesthetically pleasing. These boxes are perfect for showcasing valuables while ensuring protection and durability.",
        points: [
          "Display and storage boxes built to your dimensions",
          "Clear, stylish protection for products and valuables",
          "Functional designs for retail and corporate use",
        ],
        icon: "box",
        image: "/images/services/acrylic-fabrication/acrylic-boxes.webp",
        imageAlt: "Acrylic display and storage boxes",
      },
      {
        title: "Acrylic Stands",
        description:
          "Enhance your displays with our high-quality acrylic stands, designed to add elegance and functionality to any setting. Our acrylic display stands are perfect for showcasing products, informational brochures, and promotional materials. We also offer acrylic floor display stands, which are ideal for larger displays, giving your items maximum visibility in any environment.",
        points: [
          "Counter and floor acrylic display stands",
          "Ideal for products, brochures, and promos",
          "Clean, elegant builds for maximum visibility",
        ],
        icon: "presentation",
        image: "/images/services/acrylic-fabrication/acrylic-stands.webp",
        imageAlt: "Acrylic display stands",
      },
      {
        title: "Acrylic Letter Cutout",
        description:
          "Make a bold statement with our acrylic letter cutouts, perfect for creating striking signage and decorative elements. Our precision-cut acrylic letters are available in various fonts, sizes, and colors, allowing you to customize them to match your branding and style. Whether for indoor or outdoor use, our acrylic letters for wall displays are designed for long-lasting durability and resistance to the elements.",
        points: [
          "Precision-cut letters in custom fonts and sizes",
          "Colour-matched to your brand",
          "Indoor and outdoor wall displays built to last",
        ],
        icon: "type",
        image: "/images/services/acrylic-fabrication/acrylic-letter-cutout.webp",
        imageAlt: "Acrylic letter cutouts",
      },
    ],
  },
  cta: {
    title: "Ready to fabricate your next",
    titleAccent: "acrylic piece?",
    description:
      "Share drawings, sizes, or brand references—our Dubai team will confirm materials, finish, timeline, and install so production starts with a clear plan.",
    primaryLabel: "Request a quote",
  },
};

const SERVICE_PAGES: Record<string, ServicePageContent> = {
  [PRINTING_SERVICE_PAGE.slug]: PRINTING_SERVICE_PAGE,
  [RIDER_EQUIPMENT_SERVICE_PAGE.slug]: RIDER_EQUIPMENT_SERVICE_PAGE,
  [EVENT_MANAGEMENT_SERVICE_PAGE.slug]: EVENT_MANAGEMENT_SERVICE_PAGE,
  [ACRYLIC_FABRICATION_SERVICE_PAGE.slug]: ACRYLIC_FABRICATION_SERVICE_PAGE,
};

export function getServicePageContent(slug: string) {
  return SERVICE_PAGES[slug] ?? null;
}
