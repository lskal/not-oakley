export type TCategory =
  | "sunglasses"
  | "prescription"
  | "meta"
  | "goggles"
  | "helmets"
  | "apparel"
  | "accessories"
  | "shoes";

export type TLensTechnology =
  | "PRIZM"
  | "PRIZM_POLARIZED"
  | "POLARIZED"
  | "TRANSITIONS"
  | "STANDARD"
  | "CLEAR";

export type TFit =
  | "low-bridge"
  | "high-bridge"
  | "universal"
  | "regular"
  | "n/a";

export type TProductVariant = {
  id: string;
  sku?: string;
  name?: string;
  price: number;
  currency: "USD" | "EUR";
  inStock: boolean;

  frameColor?: string;
  lensColor?: string;
  lensTechnology?: TLensTechnology;

  size?: string;
  fit?: TFit;

  images: string[];
};

export type TProductSpecs = {
  // Eyewear-ish
  hasPrescription?: boolean;
  lightTransmission?: string;
  lightConditions?: string;
  baseLensColor?: string;

  // Helmets
  mips?: boolean;
  boa?: boolean;

  // Shoes/Apparel
  gender?: "men" | "women" | "unisex";
  material?: string;

  // Universal “flex pocket”
  tags?: string[];
};

export type TProduct = {
  id: number;
  slug: string;
  name: string;
  brand: "Oakley";
  category: TCategory;

  description: string;
  url?: string;

  // For listings (quick render)
  heroImage: string;
  minPrice: number;
  maxPrice?: number;

  variants: TProductVariant[];

  specs?: TProductSpecs;
  createdAt?: string;
};

export type TBannerImage = {
  id: number;
  backGroundImage?: string;
  preTitle?: string;
  title?: string;
  subtitle?: string;
  ctaBannerValues?: TCtaBanner[];
  layoutBanner?: "left" | "center" | "right";
};

export type TCtaBanner = {
  id: number;
  ctaValue?: string;
  ctaLink?: string;
};

export type TBannerContainer = TBannerImage[];
