import { readFileSync, Stats, readFile, watchFile, unwatchFile } from 'fs';
// import { makeJSONPgSmartTagsPlugin, JSONPgSmartTags } from 'graphile-utils';
import * as JSON5 from 'json5';
const { JSONPgSmartTags } = require('postgraphile/plugins');

const TAGS_FILE = process.cwd() + '/postgraphile.tags.json5';

function handleTagsError(err: Error): void {
  console.error(`Failed to process '${TAGS_FILE}': ${err.message}`);
}

let initialTagsJSON = JSONPgSmartTags;
try {
  initialTagsJSON = JSON5.parse(readFileSync(TAGS_FILE, 'utf8'));
} catch (e) {
  // tslint:disable-next-line
  if (e['code'] !== 'ENOENT') {
    handleTagsError(e);
  }
}

let tagsListener: null | ((current: Stats, previous: Stats) => void) = null;
function makeJSONPgSmartTagsPlugin(initialTagsJSON, updateJSON) {
  if (!initialTagsJSON) {
    /*
     * Watch mode on the tags file is non-trivial, so only engage it if the file
     * exists when PostGraphile starts.
     */
    return;
  }
  if (tagsListener) {
    unwatchFile(TAGS_FILE, tagsListener);
    tagsListener = null;
  }
  if (updateJSON) {
    // tslint:disable-next-line:variable-name
    tagsListener = (_current, _previous): void => {
      readFile(TAGS_FILE, 'utf8', (err, data) => {
        if (err) {
          // tslint:disable-next-line
          if (err['code'] === 'ENOENT') {
            updateJSON(null);
          } else {
            handleTagsError(err);
          }
          return;
        }
        try {
          updateJSON(JSON5.parse(data));
        } catch (e) {
          handleTagsError(e);
        }
      });
    };

    watchFile(TAGS_FILE, { interval: 507 }, tagsListener);
  }
}
module.exports = makeJSONPgSmartTagsPlugin;
// Hacks for TypeScript/Babel import
module.exports.default = makeJSONPgSmartTagsPlugin;
Object.defineProperty(module.exports, "__esModule", { value: true });

