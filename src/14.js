  const getRandomJSCode = () => {
    let code = '';
    // Generate a random integer between 1 and 100
    const num = Math.floor(Math.random() * 100) + 1;
    if (num % 2 === 0) {
      code = `console.log('Hello World');`;
    } else {
      code = `const foo = () => { console.log('Foo!'); };`;
    }
    return code;
  };
  getRandomJSCode();