# keep-calm-keep-testing
E2E UI Testing


## Things I did
Getting started: Add the usual npm init + git init - nothing special here

Lets get babelling: Add:
- @babel/core: The core of everything babel
- @babel/preset-env: //todo understand
- @babel/polyfill: //todo understand
- @babel/register: //todo understand
- babelrc: configurations for babel -> currently only a target which is chrome, will add others later

Baby steps: Added a simple feature file, some steps, a world and some assertions
- feature file: gerkin language test description
- step fils: actual code which is executed during each gerkin step
- world: shared functions / variables across the tests... use sparingly
- cucumber for executing the feature file
- chai for my assertions
// Troubles: The folder structure is important. I initally had the world file in a different location which caused issues
