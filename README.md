# keep-calm-keep-testing
E2E UI Testing


## Things I did
Getting started: Add the usual npm init + git init - nothing special here ✔

Lets get babelling: Add: ✔
- @babel/core: The core of everything babel
- @babel/preset-env: This is a collection (preset) of plugins - which allow babel to support a range of things in
- @babel/polyfill: This is something which fills in the functional gaps of browsers you are required to support
- @babel/register: This is something which enables babel to do transpiling on run-time, as opposed to 
- babelrc: configurations for babel -> currently only a target which is chrome, will add others later

Baby steps: Added a simple feature file, some steps, a world and some assertions
- feature file: gerkin language test description
- step fils: actual code which is executed during each gerkin step
- world: shared functions / variables across the tests... use sparingly imo
- cucumber for executing the feature file
- chai for my assertions
// Troubles: The folder structure is important. I initally had the world file in a different location which caused issues
- I wonder if I can point to a new world file


Planning:
Add docker - get cucumber to run inside a docker container - easy?
Add more complicated steps which use webdriverio to click on things
- Webdriver npm
- Update docker to allow this to run - harder?
- Configure webdriver configuration -> eg headless in docker?
Add more feature files -> make sure you can specify why features to run
Check that @hooks work properly

Now we should have a fully running package which runs several features locally inside docker / which could be run in a pipeline

What's next:
- Can the tests run in parallel? how? cucumber js support? webdriver io support?
- How do you configure the webdriver to different environments? Overriding a base configuration file
- How do you reference constants from a file - eg. log in details loaded in? Must support different environments
- What kind of reporting tool should there be?
- how do you know whether it's with or without ui? Apart from reporting when it's not ui, does it matter?
- eslint
