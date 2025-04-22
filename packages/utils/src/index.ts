// packages/utils/src/index.ts
import { generateSpacing } from './classes/spacing';
import { generateColors } from './classes/colors';
import { generateTypography } from './classes/typography';

export const utilityClasses = {
  ...generateSpacing(),
  ...generateColors(),
  ...generateTypography(),
};
