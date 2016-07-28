# HTTP is dead. Long live HTTP/2
Ben Ramsey - Benramsey.com - @ramsey - github.com/ramsey - ben@benramsey.com
(Went over history of HTTP versions / releases)
When you say HTTP is dead you really mean that RFC 2616 is dead

## RFC 2616
June 1999
176 pages
Full of errors and ambiguity
Web get bigger than anticipated (API's etc.)

## HTTPbis
bis is Latin for two
Charted in 2007 to solve the problems above. Original charter forbode them from creating a new version of HTTP
Broke 2616 into 6 RFCs

## 723x is the new 2616
### Changes
Userinfo is disallowed (Basic auth username:password)
Multi-line headers deprecated
Two connection limit removed
Body now allowed on GET requests
Expect header is no longer extensible
201 allows for one or more resources created
301 & 302 may rewrite from POST to GET
400 no longer limited to syntax errors
426 Upgrade Required status code included
204, 404, 405, 414, 501 are now cacheable
Location may include relative URIs
Content-MD5 header removed
ETag is defined as applying to the selected representation

### Registries & Stuff
You can now add register statuses, authentication schemes and more to continue to grow HTTP to fit our needs

## HTTPbis Continued
2007 Google release SPDY
2010 ?
2011 Google release SPDY across all their services
2012 Twiter dplys SPDY on its servers
     Facebook announces plans for SPDY
     Wordpress.com announces support
     HTTPbis is now chartered to create a new version of HTTP. Which basically renamed SPDY into HTTP/2

## Why HTTP/2
SPDY showed that it really did increase performance on the web. Many more companies got on board after it became HTTP/2

### Problems with HTTP/1
Inadequate use of TCP (Transfer Connection Protocol)
Tansfer sizes and number of objects (Web pages, assests, images have continued to grow)
    The number of objects has gradually risen while the total size has grown considerably
    80 objects at 800K to 100 objects at 2100K per page load (2011-2015)

Latency issues
    While bandwidth has increased. Latency has not

HTTP Pipelining Problems
    Analogy of standing in a line at the bank or supermarket. You don't know if the person in front of you will be fast or slow
    Browsers have this feature turned off by default

### Binary Protocol
HTTP/1 is an ASCII protocol over TCP
HTTP/2 is a binary protocol over TCP - (Wireshark is a tool to inspect the binary traffic into human readable)

### Multiplexed streams
Only one connection is needed for the domain
All data can be sent over the single connection
There is no longer head of line blocking because the header elements have the order in them so they can be broken apart and reassembled.

### Priorities & Dependencies
Streams can have priorites specified on them. They can also be set to depend on other streams.
    Ex. ) You could set priority on the images that are higher on the page

### Header Compression
You won't have to use bandwidth sending headers multiple times

### Server push
The server can try to send stuff to the client if it knows that one request is usually followed by others. The client can then reply it already has it, or to stop sending them

## How might applications be different
No more image sprites
Inlining images might become a thing of the past
CSS/JS can be in multiple files
Domain sharding is unnecessary (and may reduce performance in HTTP/2)

## Support?
8.8% of the top sites support HTTP/2
All browsers except Safari and IE11 have full support for HTTP/2

### Preload Link Relationship
Still in draft
link: </path/to/style.css>; rel=preload; as=style

Check to see if the server protocol is over HTTP/2
    If it is not, nothing will really happen, it will just get sent to the client which will ignore it

Set the headers in the response creator object
ex.) return $response->header('Link', <css/path.css>, rel=preload, as=style, false) (false not to remove other link headers)