# Zero to API w/ Lumen
Amand Folson - @AmbassadorAwsum

## About Lumen

    Microframework
    Circa April 2015
    Trimmed down Laravel
    Larvel upgrade path

## Why Lumen

    Microservices / APIs are the most common usecase

### REST APIs

    Represetnational State Transfer
    Can return XML, JSON, YAML, Markdown
    Rapidly gaining adoption over SOAP/XML-RPC
        No need to know order of parameters
    Oftens HTTPS-based
        Many things natively speak HTTP
    Stateless
        No sessions!
        HATEOAS
            Hyper media as the engne of application state
                Basically you click links to navigate
    HTTP Methods
        Get
        Options
        Put
        Post
        Patch
        Delete

### Coming from Laravel
    You can use composer to install

    Facades & Eloquent
        Disabled by default

    Routing
        Very similar

    Artisan
        Still available
            No serve command
            No key:generate
            No tinker
            No env
            No down
            No vendor:publish

    Migrations
        Install
        Refresh
        Reset
        Rollback
        Status
        db:seed

        Faker and model factories still work

        Migrations can still be created via the CLI

    Make Command
        Has
            make:migration
        Does not have
            make:model
            make:controller
            make:auth

### Resources

    Resource is a gatway to an area of an appliation
        In this case, we hit /pokemon
        We can get a single Pokemon or a collection of them

### Routes

    $app->get('pokemon', 'PokemonController@index');
    (Basic difference is $app->get vs. Route::get)

### Views

    Graphic / view heavy vies are not meant for Lumen

    Options
        JSON
        Fractal
            Package maintaged by the League
            Provides a consitent interface for the user by transforming the data into the structure we want the user to consume
            Ex.) return $this->item($pokemon, new PokemonTransformer());

### Controllers
    Examples of the Pokemon controllers (Too much to type. Nothing looked different)

    Rate limit your delete requests

### Model
    Again nothing different

### Authentication
    AuthServiceProvider provided
        Needs to be uncommented in app.php
        Doesn't maintain sessions
    PLENTY of other options
        JWT
    Middleware is available
    Don't throw security out the door because there aren't forms

### Testing
    Still available

## Beyond this talk
    HATEOAS and Hypermedia
    Rate Limiting
    Running APIs at scale
    Events
    Queues
    Caching
    Encrypion
    Logging
    Deploying

## Resources
    Paul Redomond's Book
        https://www.apress.com/9781484221860

    Build APIs you Won't Hate by Phil Sturgeon (Laravel 4)

    RESTful Web APIs by Leonard Richardson, Mike Amundsen, & Sam Ruby
        Super in-depth

    Undisturbed REST by Mike Stowe
        Super deep dive
        No code