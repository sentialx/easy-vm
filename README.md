# easy-vm

`easy-vm` is a simple Node.js library which helps with running securely untrusted code with whitelisted Node modules.

# Installation

```bash
$ npm install easy-vm
```

# Quick example
```javascript
const EasyVM = require('easy-vm');

const vm = new EasyVM({
  console: true,
  sandbox: {
    test: 'A test variable'
  },
  require: {
    builtin: ['fs'],
    mock: {
      fs: {
        readFile: (path: string) => {
          console.log("Nice try!");
        }
      }
    }
  }
});

vm.run(`
  const fs = require('fs');
  fs.readFile(''); // Outputs: Nice try!
  
  console.log(test); // Outputs: A test variable
`);
```

# Documentation

## Class `EasyVM`

An `EasyVM` can be used to create a sandbox.

### `new EasyVM(options)`

  * `options` VMOptions
    * `console` boolean - Whether to enable console in the sandbox or not.
    * `sanbox` object - A global object in VM
    * `require` VMRequireOptions | false - False to disable require or object to enable require with options.
      * `builtin` string[] - Array of allowed builtin modules, Use `['*']` to accept all.
      * `mock` object - Collection of mocked Node modules.
      
#### Methods

`EasyVM.run(code, filename)`

 * `code` string
 * `filename` string (optional) - Path to which Node's `require()` relates.
