### Lab 1, Beginner Track
0. Fork this repo
1. Open your terminal and navigate to your projects directory.
2. Run this: `git clone https://github.com/YOUR-GITHUB-ACCOUNT/foundations-js-lab1.git`
3. `cd lab1-beg-track`
4. Run `npm install`.
5. Your assignment is to finish the js files in the lib directory. 
There are detailed instructions in the comments. Be sure to read everything. 
6. To verify the correctness of your assignments, run `npm test`. This will
run the included automated test suite on your code. Your code must pass all
of these tests to earn full credit. Additionally, all the tests passing doesn't
automatically earn full credit; you must implement the code as specified in the
comments of the code. When in doubt, ask a question in the class slack chanel.

The `npm test` command will also run jshint on your code, to provide at least
some certainy on the quality of your code's style. To receive full credit, there
should also be no errors or warnings from jshint.

7. If you want to run the test suite for only a particular excercise, use this
command `node_modules/mocha/bin/mocha test/excercise1Tests.js` replacing 
the number in excercise1Tests.js, with the number of the excercise you would
like to run the tests for.
