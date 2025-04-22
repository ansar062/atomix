// packages/utils/src/classes/colors.ts

const colors = {
  primary: "#6366F1",
  secondary: "#8B5CF6",
  gray: {
    100: "#F3F4F6",
    900: "#111827",
  },
};

export function generateColors() {
  const classes: Record<string, string> = {};

  Object.entries(colors).forEach(([colorKey, value]) => {
    if (typeof value === "string") {
      classes[`bg-${colorKey}`] = `background-color: ${value};`;
      classes[`text-${colorKey}`] = `color: ${value};`;
    } else {
      Object.entries(value).forEach(([shade, shadeVal]) => {
        classes[`bg-${colorKey}-${shade}`] = `background-color: ${shadeVal};`;
        classes[`text-${colorKey}-${shade}`] = `color: ${shadeVal};`;
      });
    }
  });

  return classes;
}
