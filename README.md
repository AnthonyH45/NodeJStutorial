# NodeJStutorial
Following this guide here: [https://docs.microsoft.com/en-gb/learn/modules/intro-to-nodejs/1-introduction](https://docs.microsoft.com/en-gb/learn/modules/intro-to-nodejs/1-introduction)

# Notes:
- Node.js is the open source server-side JavaScript runtime environment, basically lets JavaScript be run <b>outside</b> the browser, its a wrapper for the JS engine called V8 which powers chrome, opera, edge.
- package manager is NPM
- u can do A LOT, like http servers, microservices, CLI apps, ML, IoT, drivers for databases, etc
- Node.js has access to OS since its outside the browser
- "single threaded event loop model" to handle concurrency 
- (single thread = only one thing at a time)
- (event loop = execute, process, pull from queue and repeat, like Fetch-Decode-Execute CPU cycles)
- ![diagram](https://docs.microsoft.com/en-gb/learn/advocates/intro-to-nodejs/media/event-loop.svg)
- bc of V8, we can get performance close to C
- has non-blocking I/O APIs
- blocking I/O calls stop until I/O is done
- non-blocking lets other tasks keep going while we wait for I/O
- VScode, Atom are written in JS and TypeScript, running an embedded version of Node.js
- millions of modules and libraries
- has a Read-Print-Evaluate-Loop (REPL) like Python and other languages
- just enter `node`
- `node file.js` to run a file
- running `npm init` walks you through creating a `package.json` 
- regardless of using node, you should have a way to `run`,`test`, and `build` your project
- in the `scripts` portion of the `package.json` we can specify what each do
```
"scripts" : {
    "<action>" : "command"
}
```
- invoked using `npm <action>`
- `git clone https://github.com/MicrosoftDocs/node-essentials.git`
- then took `node-dependencies/3-exercise-package-json` out
- dependency is 3rd party reusable library code
- Things to consider about packages/depencencies/libraries
  * "Should i write this code?"
  * "Saving time"
  * "Maintenance"
  * "Size"
  * "Licensing"
  * "Actively maintained"
- adding the `--save-dev` flag to `npm install` will add it as a devDependency in `package.json`