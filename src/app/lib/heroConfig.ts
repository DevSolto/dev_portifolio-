import type { Line } from "./useTypewriterSequence";
import rawConfig from "./hero.config.json";

type HeroButtonVariant = "default" | "outline";

type HeroButtonConfig = {
  label: string;
  variant: HeroButtonVariant;
  targetId: string;
};

type HeroConfig = {
  headline: string;
  subheadline: string;
  badge: {
    label: string;
  };
  buttons: HeroButtonConfig[];
  terminal: {
    title: string;
    prompt: string;
    pauseMs?: number;
    theme?: {
      textClassName?: string;
      cursorClassName?: string;
      glow?: boolean;
      glowClassName?: string;
    };
    lines: Line[];
  };
};

const heroConfig = rawConfig as HeroConfig;

export const heroSequence: Line[] = heroConfig.terminal.lines.map((line) => ({
  type: line.type,
  text: line.text,
  delay: line.delay,
  speed: line.speed,
}));

export type { HeroConfig, HeroButtonConfig };
export default heroConfig;
