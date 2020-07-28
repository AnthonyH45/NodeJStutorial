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
- <b>before</b> updating a library, think about
  * "Type of update"
  * "Is the project configured properly and can accomodate it"
  * "Mitigate security issues"
- Semantic versioning
  * <b>1</b>.0.0 => major version, might need to rewrite
  * 1.<b>2</b>.0 => minor version, mostly safe to update, double check
  * 1.2.<b>3</b> => patch version, should be safe to update
  - updating: `npm update <name_of_package>@<optional version number>`
  - `package.json` configuring for updates
    * `~` or `1.1.x` => update to latest <b>patch</b>
      * `~1.0.0` => greater than or equal to this version
    * `^` or `1.x.1` => updates minor version
    * `*` or `x.0.0` => update to latest major 
- `package-lock.json` => guarantees exact installs, like a normal lock file, it stops and prevents modification or deletion of the wrong modules. So it <b>should be committed</b> to the repo
- `npm outdated` shows whats outdated
- `npm audit` and `npm audit fix` can fix (or at least attempt) to resovle certain conflicts and issues regarding version numbers and security issues 
- Common debugging practices without a debugger
  * running the program, as it should work, but see whats up
  * explain the issue to a rubber duck
  * read the code again
  * take a break, go for a walk
  * ~~When in doubt, system.out~~ spam console.log()!!!
- instead of guessing whats happening, debuggers can walk you through, instrution byt instruction, what the code is doing
- Debugging process
  * Identify the bug
  * Find the culprit code
  * analyze why its happening
  * fix it
  * validate the fix
- Force javascript debugger, use the `debugger` keyword to force a breakpoint
- Since debugging gives full access, Node prevents debugging of running code as bad actors can inject arbitrary cod, so instead node has the `inspect` mode (`--inspect` or `--inspect=<HOST>:<PORT>`)
- avoid using public IPs or `0.0.0.0` as the host as some random can connect and take ur process over
- use `--inspect-brk` to stop just before the code
- `node inspect <file>.js`
- Very similar to GDB, `c` to continue, `n` for next, `s` for step in, same as next, but if the next line is a function, it steps into it, `o` for step out, execute the remaining code and jump back to where we came from, `r` to restart
- `sb()` to add breakpoint to current line
- `sb(<N>)` to add breakpoint on line number `N`
- `cb('file,js',<N>)` clear the breakpoint at line number `N`
- `list(<N>)` list source code with `N` lines before and after execution point
- `exec <EXPR>` evaluate expression inside the context, useful for things like `exec i` to find whats inside `i`
- `CTRL+D` or `exit` to exit
- `create a launch.json file` is used for debugging and can be shared with coworkers so everyone can debug with the same setup
- debugging is cool in vscode, to watch variables, just click the plus button and add their name. To set a break point, click the left space next to the line number, to set a conditional breakpoint, right click and hit conditional breakpoint.
- Node has built in stuff to handle file paths
- using the `promise` namespace on the builtin stuff lets you use async and await so we have synchronous code without blocking
- check if dirs and files exist <b>before</b> creating them.
- if you need to parse stuff, see if there is a package already. 
- things to consider when building web apps and APIs
  * routing
  * supporting diff content types
  * authentication/authorization
  * reading/writing data
  * time to market
- HTTP module in Node.JS
  * http.Server
  * http.IncomingMessage
  * http.ServerResponse
- _streams_ are how data is sent, chunk by chunk
- Express as the web framework to handle the bigger workload Node has a problem with
  * Features
  * abstracts complexity
  * solves common problems
  * used by a lot (means support!)
- HTTP verbs: `POST` , `PUT` , `GET` and more, these are the common ones
- route parameters = `/products/123`
- query parameters = `/products?sort=desc`
- URL syntax: `scheme:[//authority]path[?query][#fragment]`
  * scheme: protocol
  * authority: 2 things
    * user info: user@pass OR localhost OR google,microsoft & other domanins
    * host: 127.0.0.1 OR 1.1.1.1 OR microsoft.com
  * path: `/blah`
  * query: `?stuff=more_stuff`, deliminated by `&` or `;`, like `?page=1&pageSize-20`
  * fragment: More specificity, like sort order, or anchors
- `/product/1`,`/product/2` => express route pattern of `/product/:id`
- CRUD is a common web resource, like the express app we just made
  * Create
  * Read
  * Update
  * Delete