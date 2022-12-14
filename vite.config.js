import { defineConfig } from 'vite';

const htmlImport = {
  name: 'htmlImport',
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param {string} code The file as a string.
   * @param {string} id The absolute path.
   * @returns {{code: string}}
   */
  transform(code, id) {
    if (/^.*\.html$/g.test(id)) {
      code = `export default \`${code.replace(/<!--[\s\S]*?-->/g, '')}\``;
    }
    return { code };
  },
};

export default defineConfig({
  plugins: [htmlImport],
});
