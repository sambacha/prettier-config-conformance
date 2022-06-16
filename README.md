# [prettier-config-conformance](#)

> prettier configuration for optimizing diff/AST's

## Quickstart

```sh
wget https://raw.githubusercontent.com/sambacha/prettier-config-conformance/master/.prettierrc.js
```

```bash
wget https://raw.githubusercontent.com/sambacha/prettier-config-conformance/master/.prettierrc.json
```

```bash
curl -O https://raw.githubusercontent.com/sambacha/prettier-config-conformance/master/.prettierrc.json
```

### whitespace

[source@airbnb/javascript#whitespace--in-braces](https://github.com/airbnb/javascript#whitespace--in-braces)

- 19.12 Add spaces inside curly braces. eslint: object-curly-spacing

```jsx
// bad
const foo = { clark: 'kent' };

// good
const foo = { clark: 'kent' };
```

#### arrow-parens

- 8.4 Always include parentheses around arguments for clarity and consistency.
  eslint: arrow-parens

[source@airbnb/javascript#arrows--one-arg-parens](https://github.com/airbnb/javascript#arrows--one-arg-parens)

> Why? Minimizes diff churn when adding or removing arguments.

```jsx
// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
);

// good
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
);

// bad
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

##### one var

- 13.2 Use one const or let declaration per variable or assignment. eslint:
  one-var

> Why? It’s easier to add new variable declarations this way, and you never have
> to worry about swapping out a ; for a , or introducing punctuation-only diffs.
> You can also step through each declaration with the debugger, instead of
> jumping through all of them at once.

##### [ref:eslint/rules/one-var](https://eslint.org/docs/rules/one-var)

```jsx
// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
  goSportsTeam = true;
dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

#### 20.2 Additional trailing comma: Yup. eslint: comma-dangle

    Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the trailing comma problem in legacy browsers.

```diff
// bad - git diff without trailing comma
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

#### 8.6 Enforce the location of arrow function bodies with implicit returns. eslint: implicit-arrow-linebreak

```js
// bad
(foo) => bar;

(foo) => bar;

// good
(foo) => bar;
(foo) => bar;
(foo) => bar;
```

## Parser Differences

[see prettier playground](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEB6AVOgOlABO3AAQAcBDMAa1IHM5dTiBLAOgCc4BnY6DuHfIgDMArlDAxG0egBNpAUQBuCGABlGHeFDit+6VDlKzFytRoTaAFFhCC4MMAAtrAGlxwlsXAF4AfLmD8uJBQGrjSpDCk3v6BuLioqERQEPBhcGCMALakADa4AIwAzIUA7EHQSqwwHLgwELgOcAAeuAq5wnQArIUAnLFBDqSMAJLSSLjWAAxN3X0ggQC+OIHBoQBWHFJeuABSAMoA8gByzBqsjFDUjIIAnhbhka5Qwjk5rgBMAJTLeLjsMMJWHh3Mo2JxuFBpAB1RgwBxWX5xLQAd1wACVwTw4BYNtBXAFEXEGnBDNoOOMCUSqRNwNBNDAALQwG7EPjIGkMYg5RhgCKSKCoXFQADcjlIrF4MC8AFUACoAMQZAA5rP04ktCQtvr9tVqQM4QBBiBIeMhQOLWBBkQAFcUIDjIEC5ZGkG4Og0AI1Y5Aodj2pEycDUWmQMFYHU93sofrIGUuyEEuV4BrgmQ9cFkGZUpEuwhocHlEFY2RgEnjKFIwjq+pADhgmRyUIcsPB5Dge3tsMYClhN0dZx5MBrF14VWt3uo2QTSbgBo2TT2F2oOTgAEVhCk4NOcsmQGQJdpHR7SOmcjXiOdYDDpHDkErJgaLxBeFDvcRHc7Xe6QABHDfwccjQdFBVnUeka3YP9GHYccaCnJBEx3WcQF4TJGFDcNkI4JcV3XTcMIjEBIg9a9byQd4DTDIZuUuABhCBMngp1XhrYReFlE9gMQ3cFA6YZIWUPYwHOY0AEFIT2ZkV23XgFgWIA)

### Example Typescript file


```typescript
/**
 * @package api.response
 * @function addEventListener
 */
 addEventListener("fetch", event => {
    const data = {
      // @note decimal 1337 converts to hex value 539
      chaiId: "0x539"
    }
  
    const json = JSON.stringify(data, null, 2)
  
    return event.respondWith(
      new Response(json, {
        headers: {
          "content-type": "application/json;charset=UTF-8"
        }
      })
    )
  })
```

Typescript Compiler

```json

[
    {
      "type": "Block",
      "value": "*\n * @package api.response\n * @function addEventListener\n ",
      "range": [0, 62],
      "loc": {
        "start": { "line": 1, "column": 0 },
        "end": { "line": 4, "column": 3 }
      },
      "placement": "endOfLine",
      "leading": true,
      "trailing": false,
      "nodeDescription": "ExpressionStatement"
    },
    {
      "type": "Line",
      "value": " @note decimal 1337 converts to hex value 539",
      "range": [121, 168],
      "loc": {
        "start": { "line": 7, "column": 4 },
        "end": { "line": 7, "column": 51 }
      },
      "placement": "ownLine",
      "leading": true,
      "trailing": false,
      "nodeDescription": "Property chaiId"
    }
  ]
```

