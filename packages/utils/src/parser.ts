// packages/utils/src/parser.ts
import { utilityClasses } from './index';

export function parseClassNames(classNames: string): React.CSSProperties {
  const styles: Record<string, string> = {};
  const classList = classNames.split(' ');

  for (const cls of classList) {
    const css = utilityClasses[cls];
    if (!css) continue;

    const declarations = css.split(';').filter(Boolean);
    for (const decl of declarations) {
      const [prop, value] = decl.split(':').map((x) => x.trim());
      if (prop && value) {
        styles[prop as keyof React.CSSProperties] = value;
      }
    }
  }

  return styles;
}
