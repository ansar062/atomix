// packages/utils/src/classes/typography.ts

const fontSizes = {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  };
  
  const fontWeights = {
    normal: '400',
    medium: '500',
    bold: '700',
  };
  
  export function generateTypography() {
    const classes: Record<string, string> = {};
  
    Object.entries(fontSizes).forEach(([key, value]) => {
      classes[`text-${key}`] = `font-size: ${value};`;
    });
  
    Object.entries(fontWeights).forEach(([key, value]) => {
      classes[`font-${key}`] = `font-weight: ${value};`;
    });
  
    return classes;
  }
  