
if (process.env.npm_execpath.match(/yarn/)) {
  console.log("Use NPM instead of YARN");
  process.exit(1);
}