export const QUOTE_SERVICE_OPTIONS = [
  { id: "exhibition-stand", label: "Exhibition Stand" },
  { id: "corporate-gifts", label: "Corporate Gifts" },
  { id: "printing", label: "Printing Services" },
  { id: "rider-equipment", label: "Rider Equipment" },
  { id: "acrylic-fabrication", label: "Acrylic Fabrication" },
  { id: "event-management", label: "Event Management" },
  { id: "website-development", label: "Website Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "exhibition-kiosk", label: "Exhibition Kiosk" },
  { id: "other", label: "Other" },
] as const;

export type QuoteServiceId = (typeof QUOTE_SERVICE_OPTIONS)[number]["id"];
