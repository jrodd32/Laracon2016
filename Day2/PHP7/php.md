# The PHP 7 Story
Zeev Suraski

## How he became involved
(Told the story of how him and his friends rewrote PHPfi into the open source version of PHP (PHP3) that exists today)

## History
### PHP 3
Released in June 1998

New Features:

    - Fully fledged language
    - Easily extensible

Compiler was inherently wrong (a loop running 1000 times would be parsed at the text level 1000 times)

### PHP 4
Released 2000

New Features:

    - Zend engine
        Fast
        Modular
    - Sesions
    - Downwards compatability(!)
    - Language Plugins (debuggers, caches)

### PHP 5
Released July 2004

New Features:

    - New "true" object model
    - Not slower!

### PHP 6
Existed but never released.

Premise

    PHP 6 = PHP 5 + unicode full unicode support

Both increased the memory footprint and decreased the number of requests that could be handled per second

Pronouced dead March, 11 2010 at 11:09:37

### PHP 7
#### Leading up to PHP 7
2012:

    Began researching introducing JIT (Just in time) into PHP. Led by Dmitry Stogov

    6x faster on benchmarking tests

2014:

    No performance gains in real-world workloads

    The gains were lost (in theory, didn't have a clear cut answer) in memory performance

    JIT guesses what should be loaded and there were a lot of incorrect guesses so they were not getting any benefits

    Post-JIT Timeline
        Janurary:
            Split from mainstream PHP
            Internas focus only (no new features)
            Stay 100% compatible
        March:
            Compiled core
            Ran Bench.php
            Ran Wordpress
        May:
            Moved from POC to public community project
        August:
            Merged back to main project (47 to 2 vote)
    Ended up running most real world apps almost 2x faster

    Memory Consumption of the data structures were reduced

    Memory Manger CPU Overhead went from 20% to 5% on WP

    PHP 7 is > 2x faster than 5.6

    Badoo Case Study (Look up on Google)

### More Info
http://bit.ly/phpperf

http://bit.ly/phpmandel

### New Features
http://bit.ly/php7news

### Going Forward
7.1 is 20-30% faster on benchmarks which translates to 3-5% realworld