const getHelpers = require('./shared');

module.exports = function({ types: t }) {
  const {isLocalizeTag, isGlobal, buildLocalizeReplacement} = getHelpers(t);
  return {
    visitor: {
      TaggedTemplateExpression(path, state) {
        const tag = path.get('tag');
        if (isLocalizeTag(tag, state) &&
            isGlobal(tag)) {
          const messageParts = path.node.quasi.quasis.map(convertQuasiToLiteral);
          path.replaceWith(buildLocalizeReplacement(messageParts, path.node.quasi.expressions));
        }
      }
    }
  }

  function convertQuasiToLiteral(quasi) {
    return t.stringLiteral(quasi.value.cooked);
  }
};
