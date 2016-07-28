### Laravel 5.3
Probably needs another week or 2 for documentation then it will be released.

## State of Laravel
750K download on packagist last month
25K a day

## Folder Structure Changes

### Routes
There are two files now: web.php and api.php
    Maps to the two middleware objects
    API comes with a throttler bundled

### Removed several from project root
Routes, listeners, etc will be removed until they are created

### Comes with Elixer 6 now
Webpack over browserify -- Said webpack is just what you do now

### Vue.js and npm
Setups Vue for you

## General Features
# Controllers
    No longer need to extend Controller for controllers
    If you have a single action controller you can just name the function __invoke()
        At that point in the route you don't need the action

# Console
    Inside Kernel.php you can write console commands as a closure

    You can define your console commands as a route file under the Routes folder then require the route file in Kernel.php

# Queue Workers
    The child processes are now forked from the master queue worker so you can set timeouts on the process
        Handy if you have a worker that's running but not doing anything / stuck in a loop
        Most likely event is an HTTP process to an external source that's hanging
    You can also set a max number of attempts

## Advanced Stuff
# Scout
    It is an optional package
    It is a driver based full text search on Eloquent

    Hooks into Eloquents events
        save, delete, update, etc in DB

    Once you have your driver configed (Algolia) it will push directly to there. Which keeps your search and DB in sync

    You can stop things from syncing to search
    You can reindex to search with ->makeSearchable on your Eloquent calls
    You can remove from search with

    You can queue your operations to sync to DB

    You can limit your searches by ->where
    Doesn't use all the Eloquent where clauses but it does handle equals

    The search drivers are going to be a lot better than a LIKE clause

# Mailable Objects
    You can create mail classes that sends mail (artisan make:mail {mailClassName} ??)
        The class basically sets the view
        Everything for the mail is done in the build action
    You pass the data into the new Mail class
        Anything public is available in mail
    It's basically just a cleaner API for mailing
    You can queue the sending of the mail
    The default driver comes with a responsive template out of the box

# User Notifications
    Notification directory is only there if you "make" a new notification
    function via()
        allows you to select how you send the Notifiable object
            mail
            database
            slack
            SMS
            ex: function via() {
                return ['mail', 'database'];
            }
        A notification Event is fired. You can do whatever you want in there.
    General outline
        ->line -- line of text
        ->action -- call to action
    Has default states
        default
        success
        error
    You can set route Notifications
        Convention is routeNotificationForSlack
                      routeNotificationForNexmo (sms)
    All the notifications can be Queued

# Multiple Auth Drivers (in 5.2 but updated in 5.3)
    You can have seperate auth for web or api

    Laravel Passport (optional package)
        It's a full OAuth 2 server implementation for robust API authentication

    (A package can register migrations without having to export them to your app)

    You can set Scopes on tokens
        Ex.) User scope in Github vs Repo scope

    Using the latest League/OAuth2 package as a base, which uses JWT

    To use Middleware just add the scope and scopes to the Middleware routes
        scope is having a single scope
        scopes means you have to have all the scopes

    You can update HTTP/Kernal to add a route to Middleware that will create an API token on the request
        The token is embeded in JWT so that way only your own app knows about the token
        This lets you make valid API requests from within your own API without passing the tokens

    You can configure expirations and token refreshes