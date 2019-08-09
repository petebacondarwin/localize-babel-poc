const getHelpers = require('./shared');

module.exports = function({ types: t }) {
  const {isLocalizeTag, isGlobal, buildLocalizeReplacement} = getHelpers(t);

  return {
    visitor: {

      CallExpression(path, state) {
        const callee = path.get('callee');
        if (t.isIdentifier(callee.node) &&
            isLocalizeTag(callee, state) &&
            isGlobal(callee)) {
          let messagePartsArg = path.node.arguments[0];
          if (t.isCallExpression(messagePartsArg)) {
            messagePartsArg = messagePartsArg.arguments[0];
          }
          const messageParts = messagePartsArg.elements;
          const expressions = path.node.arguments.splice(1);
          path.replaceWith(buildLocalizeReplacement(messageParts, expressions));
        }
      }

    }
  }
};
