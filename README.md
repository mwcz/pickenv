[![npm version](https://badge.fury.io/js/pickenv.svg)](https://badge.fury.io/js/pickenv)

# pickenv

`process.env` too big?  Get only the environment variables you want.


## example

```
npm install --save pickenv
```

Then write some regular expressions that match the environment variables you want to retrieve.  This example retrieves all the envs that start with "HIST".

```
import pickenv from "pickenv";

pickenv(["HIST.*"]);

// result:
// {
//   HISTCONTROL: "ignoredups",
//   HISTSIZE: "1000"
// }
```

Why is this useful, you might ask?  That's a good question.
