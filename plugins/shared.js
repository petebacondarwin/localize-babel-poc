module.exports = function getHelpers(t) {

  function isLocalizeTag(identifier, state) {
    return identifier.node.name === (state.opts.LOCALIZE_NAME || 'localize');
  }

  function isGlobal(identifier) {
    return !identifier.scope.hasBinding(identifier.node.name);
  }

  function buildLocalizeReplacement(messageParts, expressions) {
    let mappedString = messageParts[0];
    for (let i = 1; i < messageParts.length; i++) {
      mappedString = t.binaryExpression('+', mappedString, wrapInParensIfNecessary(expressions[i - 1]));
      mappedString = t.binaryExpression('+', mappedString, messageParts[i]);
    }
    return mappedString;
  }

  function wrapInParensIfNecessary(expression) {
    if (t.isBinaryExpression(expression)) {
      return t.parenthesizedExpression(expression);
    } else {
      return expression;
    }
  }

  function unwrapCallExpression(expression) {
    return t.isCallExpression(expression) ? expression.arguments[0] : expression;
  }

  function convertQuasiToLiteral(quasi) {
    return t.stringLiteral(quasi.value.cooked);
  }

  return {convertQuasiToLiteral, isLocalizeTag, isGlobal, buildLocalizeReplacement, wrapInParensIfNecessary, unwrapCallExpression};
};
