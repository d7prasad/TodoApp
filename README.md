# TodoApp
Ionic Todo App

Commands executed in sequence:

Open cmd

```bash
$ To use Git ssh to push - edit the config with git ssh url - $ git config --local -l or -e(-l - list, -e edit)
$ sudo apt-get install build-essential - this if for only UBUNTU machine to set-up npm properly in the machine.
$ npm install ionic cordova -g //To install ionic & cordava in the machine globally
$ ionic -v //To check the version
$ cordova -v // To check cordova version
$ ionic start todo blank //This will setup ionic project in our local, $todo is the app name
$ ionic lab // This will launch ionic lab, and we can test our changes as needed at runtime.

Toast-message: This will like a two seconds pop-up displays at the bottom of the screen upon user click on add Todo. This can be achieved using ionic toast controller

// To publish the code to Ionic

$ionic link - Provide username and password of the account


```

To create New Page

```bash
$ ionic generate page ArchiveTodos //Delete the archived-todo.modules.ts file once created, else the app may not run properly, and delete @IonicPage() from archived-todos.ts, as we doesn't ' deal with lazy loading as now, since this is part of this todo.ts. Add an entry for this newly created page in app.module.ts by importing it and in the dependencies.
```

To Serve ionic to test in mobile
```bash

$ ionic serve -c - This will start the app, please install ionic DevApp to view the app connected to the same wifi network
$ ionic login - To set-up an ionic login details
$ ionic link - to link an app, 
$ ionic link --pro-id a5a801c3 to associate an app
$ git push ionic master - to push the changes
visit ionic in the we https://dashboard.ionicjs.com/login
Go [here](https://dashboard.ionicjs.com/app/2ffc9e59/code/builds/list) to view some more commands actually

e.g:
$ npm install -g ionic@latest - Install the latest Ionic CLI

$ ionic start --pro-id 2ffc9e59 - Connect your app to Ionic Pro

$ git push ionic master - Push your code up to the dashboard!

4. Add your own external Repository as the default origin (optional)
$ git remote add origin [YOUR_REPOSITORY_URL]
$ git push --set-upstream origin master   
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
