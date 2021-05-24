const svgr = require('@svgr/core').default;
const {readFileSync, writeFileSync} = require('fs');
const {resolve} = require('path');
const prettier = require('prettier');
const {optimize} = require('svgo');

const config = {
  readFromBasePath: resolve('statics'),
  svgFile: `${process.argv[2]}`,
  saveOutputInPath: resolve('components/SVGs'),
  componentName: process.argv[3],
};

const svgPath = `${config.readFromBasePath}/${config.svgFile}.svg`;

const svgCode = readFileSync(svgPath);

const rePattern = new RegExp(/<svg\b([\s\S]*?)\/svg>/g);

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

async function start() {
  try {
    const jsCode = await svgr(svgCode, {
      icon: true,
    });

    const svgString = jsCode.match(rePattern)[0];
    // const optimizedSvgString = optimize(svgString, {
    //   plugins: [{removeViewBox: false}, {removeAttrs: {attrs: 'fill'}}],
    // });
    const componentName = (config.componentName || config.svgFile)
      .replace('-', '')
      .capitalize();

    writeFileSync(
      `${config.saveOutputInPath}/${componentName}Svg.tsx`,
      prettier.format(`
          import { memo } from "react";
            
            const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
                ${svgString}
            );
            
            const ${componentName}Svg = memo(${componentName})
            export {${componentName}Svg};
            `)
    );
  } catch (error) {
    console.error(error);
  }
}

start();
