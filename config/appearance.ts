export type Tone = "neutral" | "red" | "blue" | "green" | "gold";
export const tones = {
  neutral: "rgba(255, 255, 255, 0.2)",
  red: "#ff7166",
  blue: "#a7b9f4",
  green: "#41e786",
  gold: "#e4bd83",
} as const satisfies Record<Tone, string>;
