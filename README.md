# localize - Compile time inlining

This is a proof of concept for inlining (infusing) localization messages at compile time,
using Babel to do the transformation.

There are two plugins implemented here:

* localize-es5-plugin.js
* localize-es2015-plugin.js

Babel is configured to use them via the `babel` property in `package.json`.

To test it out run:

```bash
yarn babel src.js
```