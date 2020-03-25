// helper functions

let globalCssModule;

const mapToCssModules = (className = '', cssModule = globalCssModule) => {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
};
export {mapToCssModules};

export function colog() {
  if (process.env.NODE_ENV === 'development')
    console.log.apply(this, arguments);
}


