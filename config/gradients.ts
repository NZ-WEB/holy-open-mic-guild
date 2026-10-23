export interface GradientSpot {
  /** Geometry in the 1920 × 1080 design canvas. */
  x: number;
  y: number;
  width: number;
  height: number;
  color: readonly [number, number, number];
  opacity: number;
  stops: readonly [number, number][];
}

const coverSpot: GradientSpot = {
  x: 730,
  y: -210,
  width: 1520,
  height: 1480,
  color: [243, 18, 16],
  opacity: 1,
  stops: [
    [0, 0.8],
    [42, 0.4],
    [75, 0.08],
    [100, 0],
  ],
};

const cornerSpot: GradientSpot = {
  x: 650,
  y: 280,
  width: 1600,
  height: 1250,
  color: [237, 15, 0],
  opacity: 1,
  stops: [
    [0, 0.48],
    [42, 0.192],
    [75, 0.024],
    [100, 0],
  ],
};

/** A preset owns the entire composition, including the number of spots. */
export const gradientVariants = {
  right: [coverSpot],
  "top-right": [
    {
      x: 1274,
      y: -455,
      width: 1150,
      height: 1000,
      color: [237, 15, 0],
      opacity: 0.7,
      stops: [
        [0, 0.64],
        [42, 0.32],
        [75, 0.08],
        [100, 0],
      ],
    },
  ],
  "bottom-right": [cornerSpot],
  diagonal: [
    {
      x: -650,
      y: -580,
      width: 1300,
      height: 1000,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
    cornerSpot,
  ],
  "diagonal-left": [
    {
      x: -650,
      y: -580,
      width: 1300,
      height: 1000,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
    { ...cornerSpot, x: -540 },
  ],
  none: [],
  left: [
    {
      x: 1150,
      y: -740,
      width: 1300,
      height: 1100,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
    {
      x: -650,
      y: 370,
      width: 1500,
      height: 1300,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.48],
        [42, 0.192],
        [75, 0.024],
        [100, 0],
      ],
    },
  ],
  "left-accent": [
    {
      x: 1250,
      y: -580,
      width: 1300,
      height: 1000,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
    { ...cornerSpot, x: -540 },
  ],
  spotlight: [
    {
      x: 401,
      y: 60,
      width: 1836,
      height: 1507,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.64],
        [42, 0.32],
        [75, 0.08],
        [100, 0],
      ],
    },
  ],
  chapter: [
    {
      x: 850,
      y: -210,
      width: 1520,
      height: 1480,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.48],
        [42, 0.192],
        [75, 0.024],
        [100, 0],
      ],
    },
    {
      x: 1274,
      y: -455,
      width: 1150,
      height: 1000,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
  ],
  closing: [
    {
      x: -670,
      y: -650,
      width: 1300,
      height: 1100,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.16],
        [42, 0.064],
        [75, 0.008],
        [100, 0],
      ],
    },
    {
      x: 900,
      y: 450,
      width: 1500,
      height: 1300,
      color: [237, 15, 0],
      opacity: 1,
      stops: [
        [0, 0.48],
        [42, 0.192],
        [75, 0.024],
        [100, 0],
      ],
    },
  ],
} as const satisfies Record<string, readonly GradientSpot[]>;

export type GradientVariant = keyof typeof gradientVariants;

/** Match the defaults of the deck layouts when frontmatter omits a preset. */
export function resolveGradientVariant(
  variant: unknown,
  layout: string,
): GradientVariant {
  if (typeof variant === "string" && Object.hasOwn(gradientVariants, variant))
    return variant as GradientVariant;
  if (layout === "code") return "left";
  if (layout === "image-center") return "diagonal";
  if (layout === "speaker") return "top-right";
  if (layout === "chapter") return "chapter";
  if (layout === "photo") return "none";
  if (layout === "quote") return "diagonal-left";
  return "right";
}

export interface SlideFrameProps {
  variant?: GradientVariant;
  showLogo?: boolean;
  showNumbers?: boolean;
}
