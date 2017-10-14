# TodoApp
Ionic Todo App

Commands executed in sequence:

Open cmd

```bash
$ npm install ionic cordova -g //To install ionic & cordava in the machine globally
$ ionic -v //To check the version
$ cordova -v // To check cordova version
$ ionic start todo blank //This will setup ionic project in our local $todo is the app name
$ ionic lab // This will launch ionic lab, and we can test our changes as needed at runtime.

```

This is a template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

=======
