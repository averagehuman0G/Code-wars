//https://www.codewars.com/kata/convert-all-the-cases/train/javascript
function changeCase(identifier, targetCase) {
  if (identifier.length == 0) {
    console.log(identifier);
    return '';
  }

  //camel case
  if (targetCase == 'camel') {
    let newIdentifier;
    let upperCase;
    let lastDashIndex;
    let howManyDashes = 0;
    let lastIndex;

    for (let i = 0; i < identifier.length; i++) {
      if (isNaN(identifier[i]) && identifier[i] === '-') {
        howManyDashes++;

        upperCase = identifier[++i].toUpperCase();
        if (howManyDashes === 1) {
          newIdentifier = identifier.slice(0, --i) + upperCase;
        } else {
          newIdentifier += identifier.slice(lastDashIndex, --i) + upperCase;
        }
        lastIndex = newIdentifier.length + 1;
        lastDashIndex = i + 2;
      }
    }
    return newIdentifier + identifier.slice(++lastIndex);
  }
  //snake
  if (targetCase == 'snake') {
    for (let i = 0; i < identifier.length; i++) {
      //if uppercase letter input WORKS!!
      if (isNaN(identifier[i]) && identifier[i].toUpperCase() === identifier[i]) {
        let lowercase = identifier[i].toLowerCase();
        let newIdentifier = identifier.slice(0, i) + '_' + lowercase + identifier.slice(++i);
        return newIdentifier;
      }
    }
  }

  //kebab

  if (targetCase == 'kebab') {
    if (identifier.includes('_') && !identifier.includes('-')) {
      return identifier.replace(/_/g, '-');
    }
  }

  if (targetCase != 'camel' || targetCase != 'snake' || targetCase != 'kebab') return undefined;
}
