import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function TablerIcon({
  children,
  className,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      {children}
    </svg>
  );
}

/** Event Management & Exhibition Stands */
export function BuildingPavilionIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
      <path d="M6 21l0 -9" />
      <path d="M18 21l0 -9" />
      <path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
    </TablerIcon>
  );
}

/** Corporate Gifts */
export function GiftIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
      <path d="M12 8l0 13" />
      <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
    </TablerIcon>
  );
}

/** Printing Services */
export function FileTypographyIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
      <path d="M11 18h2" />
      <path d="M12 18v-7" />
      <path d="M9 12v-1h6v1" />
    </TablerIcon>
  );
}

/** Creative Agency / Code Cobble */
export function CodeIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </TablerIcon>
  );
}

/** Rider Equipment */
export function BikeIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M2 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M12 19v-4l-3 -3l5 -4l2 3h3" />
      <path d="M13.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </TablerIcon>
  );
}

/** Acrylic Fabrication */
export function LayersSelectedIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M8 10.5l6.492 -6.492" />
      <path d="M13.496 16l6.504 -6.504l-6.504 6.504" />
      <path d="M8.586 15.414l10.827 -10.827" />
      <path d="M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
      <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
    </TablerIcon>
  );
}

/** Why Baharnani — In-house production */
export function BuildingWarehouseIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M3 21v-13l9 -4l9 4v13" />
      <path d="M13 13h4v8h-10v-6h6" />
      <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
    </TablerIcon>
  );
}

/** Why Baharnani — Dedicated team */
export function Settings2Icon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </TablerIcon>
  );
}

/** Why Baharnani — Venue-ready delivery */
export function TruckDeliveryIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
      <path d="M3 9l4 0" />
    </TablerIcon>
  );
}

export type ServiceIconComponent = typeof BuildingPavilionIcon;

/** Icons keyed by service slug (and shared roles). */
export const SERVICE_ICONS: Record<string, ServiceIconComponent> = {
  "exhibition-stand": BuildingPavilionIcon,
  "event-management": BuildingPavilionIcon,
  "corporate-gifts": GiftIcon,
  printing: FileTypographyIcon,
  "creative-agency": CodeIcon,
  "website-development": CodeIcon,
  "rider-equipment": BikeIcon,
  "acrylic-fabrication": LayersSelectedIcon,
};

export function getServiceIcon(slug: string): ServiceIconComponent {
  return SERVICE_ICONS[slug] ?? BuildingPavilionIcon;
}
