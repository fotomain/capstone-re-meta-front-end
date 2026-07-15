import path from 'path';

export default {
  process(_src: string, filename: string) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(filename))};`
    };
  },
};
