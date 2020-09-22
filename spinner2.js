//completes one rotation of the spinner
const spinner2 = function(numRotate) {
  const spinStrings = [`\r|   `, `\r/   `, `\r-   `, `\r\\   `];
  for (let i = 0; i < numRotate; i++) {
    setTimeout(() => {
      for (let j = 0; j < spinStrings.length; j++) {
        setTimeout(() => {
          process.stdout.write(spinStrings[j]);
        }, j * 200 + 100);
      }
    }, 800 * i);
  }
  setTimeout(() => {
    console.log('');
  }, 800 * numRotate + 200);
};
spinner2(20);


