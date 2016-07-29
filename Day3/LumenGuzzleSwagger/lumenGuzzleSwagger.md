# Lumen, Guzzle & Swagger
Jeremy Lindblom - @phpbard
A Practical Approach to API Design - https://leanpub.com/restful-api-design

## APIs w/ Lumen, Guzzle & Swagger
In just defining a route you are making a lot of decisions on how your application is going to work

### Questions that need answered
Common Methods

    Get
    Put
    Dele
    Options
    Post
    Patch
    Delete

Status Codes

    503 - Service unavailable
    201 - Created
    429 - Too many requests

Should the API version go in the URL or in the headers?
What do we do with the payload?
HATEOAS?

    HAL
    JSON-LD
    JSON-API
    Custom

Authentication?

    HTTP Basic Auth
    OAuth 2.0
    JWT
    Signature V4
    OAuth 1.0a

### Dingo API

    Content negotiation
    Authentication adapters (inc. JWT & OAuth2)
    API versioning (in the headers)
    Rate limiting middleware
    Response builder/transformers
        Comes with Fractal library

https://github.com/Oplus1/lumendingojwtapi

### Client Side
#### HTTP Clients

    file_get_contents(and stream contexts)
    cURL
    HTTP extension
    Libraries: Buzz, Requests, Guzzle

#### Swagger

    Representation of your RESTful API
    JSON or YAML
    Large ecosystem
    Documentatino generation
    Code generation
    Gateway integration (eg. Amazon API Gateway)

Swagger has a new name as of this year. It is now called OpenAPI or OAI. (https://openapis.org/)

Currently working on version 3 of the spec.

Swagger Doc Levels

    Info
    Paths
    Parameters
    Responses