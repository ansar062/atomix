// packages/utils/src/classes/spacing.ts

export const spacingScale = {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
  };
  
  export function generateSpacing() {
    const classes: Record<string, string> = {};
  
    for (const [key, value] of Object.entries(spacingScale)) {
      classes[`p-${key}`] = `padding: ${value};`;
      classes[`pt-${key}`] = `padding-top: ${value};`;
      classes[`pb-${key}`] = `padding-bottom: ${value};`;
      classes[`pl-${key}`] = `padding-left: ${value};`;
      classes[`pr-${key}`] = `padding-right: ${value};`;
  
      classes[`m-${key}`] = `margin: ${value};`;
      classes[`mt-${key}`] = `margin-top: ${value};`;
      classes[`mb-${key}`] = `margin-bottom: ${value};`;
      classes[`ml-${key}`] = `margin-left: ${value};`;
      classes[`mr-${key}`] = `margin-right: ${value};`;
    }
  
    return classes;
  }
  