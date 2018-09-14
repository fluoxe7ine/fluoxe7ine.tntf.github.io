# Try Not To Fail (TNTF)

> Try not to fail - web game, where the main goal is to match color with his name without fail.

#### Technology stack:
  - VueJs + Router
  - Express Js
  - MongoDB + Mongoose extension
  - Bootstrap

#### Some historical stuff:
> TNTF was my first serious programming project, so looking straight-forward, this 
> repository has  A LOT OF MISTAKES and glitches. I really want to improve this code,
> but I don't have much time for this project. So, if you want to contribute - follow
> the guide below.    

### How to contribute (or just run localhost): 
Add some scripts for developing to `package.json`:
    `"scripts": {
        "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "build": "node build/build.js"
     }`

Install the dependencies and devDependencies:
```sh
$ cd tntf
$ npm install
```
To run frontent-side on localhost:8080:
```sh
$ npm run dev
```

For production environments...
```sh
$ npm run build
```

To run the server on localhost:3000:
```sh
$ node server.js
```

And after all that stuff, if you want to PR, please remove useless scripts in `package.json` and remain just starting server script.

### Todos

 - Rewrite logic
 - Rewrite server-side rendering
 - Rewrite CSS without Bootstrap using CSS Grid and Flexbox
 - Add some additional content