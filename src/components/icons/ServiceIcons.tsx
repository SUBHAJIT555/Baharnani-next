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

/** Why Us — Commercial print / graphics */
export function TransformPointTopRightIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
      <path d="M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
      <path
        d="M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"
        fill="currentColor"
      />
      <path d="M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
      <path d="M11 5h2" />
      <path d="M5 11v2" />
      <path d="M19 11v2" />
      <path d="M11 19h2" />
    </TablerIcon>
  );
}

/** Why Us — Acrylic / fabrication */
export function BoxAlignBottomIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5" />
      <path d="M4 9v.01" />
      <path d="M4 4v.01" />
      <path d="M9 4v.01" />
      <path d="M15 4v.01" />
      <path d="M20 4v.01" />
      <path d="M20 9v.01" />
    </TablerIcon>
  );
}

/** Why Us — Corporate gifts delivery */
export function PackageExportIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12v9" />
      <path d="M12 12l-8 -4.5" />
      <path d="M15 18h7" />
      <path d="M19 15l3 3l-3 3" />
    </TablerIcon>
  );
}

/** Why Us — Venue map / installs */
export function MapPin2Icon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" />
      <path d="M9 4v13" />
      <path d="M15 7v5" />
      <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
      <path d="M19 18v.01" />
    </TablerIcon>
  );
}

/** Why Us — Accountable team */
export function UserCheckIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      <path d="M15 19l2 2l4 -4" />
    </TablerIcon>
  );
}

/** Why Us — Colour control / artwork */
export function ColorFilterIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M13.58 13.79c.27 .68 .42 1.43 .42 2.21c0 1.77 -.77 3.37 -2 4.46a5.93 5.93 0 0 1 -4 1.54c-3.31 0 -6 -2.69 -6 -6c0 -2.76 1.88 -5.1 4.42 -5.79" />
      <path d="M17.58 10.21c2.54 .69 4.42 3.03 4.42 5.79c0 3.31 -2.69 6 -6 6a5.93 5.93 0 0 1 -4 -1.54" />
      <path d="M6 8a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </TablerIcon>
  );
}

/** Why Us — Strategy + production touchpoints */
export function RouteSquare2Icon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
      <path d="M3 17h4v4h-4l0 -4" />
      <path d="M17 3h4v4h-4l0 -4" />
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

/** Mobile App Development */
export function DeviceMobileIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </TablerIcon>
  );
}

/** Exhibition Kiosk */
export function BrandAppleArcadeIcon(props: IconProps) {
  return (
    <TablerIcon {...props}>
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401-.691l0 -4.75" />
      <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27" />
      <path d="M12 7l0 6" />
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
  "mobile-app-development": DeviceMobileIcon,
  "exhibition-kiosk": BrandAppleArcadeIcon,
  "rider-equipment": BikeIcon,
  "acrylic-fabrication": LayersSelectedIcon,
};

export function getServiceIcon(slug: string): ServiceIconComponent {
  return SERVICE_ICONS[slug] ?? BuildingPavilionIcon;
}
