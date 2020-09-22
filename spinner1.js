
const spinner1 = function() {
  setTimeout(() => {
    process.stdout.write(`\r|   `);
  }, 100);
  setTimeout(() => {
    process.stdout.write(`\r/   `);
  }, 300);
  setTimeout(() => {
    process.stdout.write(`\r-   `);
  }, 500);
  setTimeout(() => {
    process.stdout.write(`\r\\    `);
  }, 700);
};

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    spinner1();
  }, 800 * i);
}

setTimeout(() => {
  console.log('');
}, 800 * 3 + 100);

