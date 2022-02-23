# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

None, other than Yarn (see below). I also added a .prettierrc file so team mates can share formatting, but opted against e.g. husky to lint before committing, as this would have entailed adding lots of dependencies, and actually a shared .prettierrc file is quite an elegant way of sharing code formatting conventions.

#### Yarn (not technically a frontend library)
Yarn replaces npm as project package manager.

I started by attempting to fix the security vulnerabilities highlighted by `$ npm audit` in the branch `ali/security-fix`. I also encountered numerous missing peer dependencies and fixed these using `$ npm install [dependency] --save-dev`, but this had the unfortunate consequence of clogging up `package.json`. Noticing a Yarn lockfile as well as `package-lock.json`, I decided to investigate addressing the security vulnerabilities and missing peer dependencies using Yarn. 

After upgrading from Yarn 1.x to Yarn 3 following their [migration guidelines](https://yarnpkg.com/getting-started/migration#step-by-step), I found the experience of upgrading existing project dependencies using `$ yarn upgrade-interactive`(available after installing the interactive tools with `$ yarn plugin import interactive-tools`) to be very easy and fast. I was also taken by Yarn's 'Zero-Installs' approach, having read [Why you should check-in your node dependencies](https://www.jackfranklin.co.uk/blog/check-in-your-node-dependencies/) last year and agreeing with it all.

However, I spent a good couple of hours trying to get this working and ended up reverting to Yarn Classic and a node_modules folder. There are still 11 high and 1 critical vulnerabilities showing with `$ yarn audit`, but I have concluded that resolving them is beyond the scope of this test.



### Q) What's the command to start the application locally?

`yarn start`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

* Better handling of the data e.g. multiple legs
* Sort out SASS class name loading

### Q) Which parts are you most proud of? And why?

Data fetching: it doesn't use any external libraries, making use of native JS fetch and React's useEffect and useState. It loads gracefully with a loading component and handles errors cleanly.

### Q) Which parts did you spend the most time with? What did you find most difficult?

Security - see above!

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

Good, I wish I'd spent less time on yarn etc and more time on the app itself!
