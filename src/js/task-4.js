// Перетворити рядок на новий рядок,
// де кожен символ у новому рядку відповідає
// "(" якщо цей символ з'являється лише один раз у вихідному рядку
// або ")" якщо цей символ з'являється більше одного разу у вихідному рядку.
// Ігноруйте використання великих букв при визначенні дубліката символу.
// Приклади "din" => "((("; "recede" => "()()()"

function transform(str) {
  const symbols = {};
  let result = str;

  for (let i = 0; i < str.length; i += 1){
    const letter = str[i];
    symbols[letter] = symbols[letter] ? symbols[letter] + 1 : 1;
  }

  const symbArr = Object.entries(symbols);

  symbArr.forEach(([key, value]) => {
    const newSymbol = value === 1 ? '(' : ')';
    result = result.replaceAll(key, newSymbol);
  });

  return result;
}

console.log(transform('din')); // "((("
console.log(transform('recede')); // "()()()"