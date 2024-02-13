function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'MemberExpression',
    message: 'Use `skills` instead of `this.skills`',
    test: 'this.skills',
    replace: 'skills'
  };
}