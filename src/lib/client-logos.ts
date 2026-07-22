export type ClientLogoAsset = {
  src: string;
  alt: string;
  name: string;
};

export const CLIENT_LOGOS: ClientLogoAsset[] = Array.from(
  { length: 30 },
  (_, index) => {
    const logoNumber = String(index + 1).padStart(2, "0");
    const name = `Logo-${logoNumber}`;

    return {
      src: `/images/brandLogos/${name}.png`,
      alt: `Brand logo ${logoNumber}`,
      name,
    };
  },
);
