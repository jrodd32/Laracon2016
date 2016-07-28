# Code Smells Talk
Sandi Metz

## Classic Smells
Alternative Classes w/ Different Interfaces
Comments
Data Class
Data Clumps
Divergent Change
Duplicated Code
Feature Envy
Inappropriate Intimacy
Incomplete Library Client
Large Class
Lazy Class
Long Method
Long Parameter List
Message Chanins
Middle Man
Parallel Inheritance Hierarchies
Primitve Obession
Refused Bequest
Shotgon Surgery
Speculative Generality
Switch Statements

## Grouped into Categories
### Bloaters
    Long Method
    Large Class
    Data Clumps (Two or bits of code that always appear together)
    Long Parameter List
    Primitive Obsession
        Passing a datatype as an object and performing operations based on it

### Tool Abusers
    Switch Statements (conditionals)
    Refused Bequest (Stopping the usage of an inherited class)
    Alternative Classes w/ Different Interfaces
    Temporary Field

### Change Preventers
    Divergent Change
    Shotgun Surgery (Duplication or code / concept)
    Parallel Inheritance Hierarchies

### Dispensables
    Lazy Class
    Speculative Generality
    Data Class
    Duplicated Code

### Couplers
    Feature Envy
    Inappropriate Intimacy
    Message Chains (aka Law of Delimiter)
    Middle Man

## Refactoring
Altering the arrangement of code without changing its behavior

### Refactoring Recipe
Every refactoring recipe (Martin Folwers book is being referenced a lot) can be mapped to a code smell
If you can indentify code smells you can look up the refactoring recipes to fix them

### Testing
Do not try to learn testing by retro fitting tests around existing code

Creating objects that play the roles of objects that cause slow tests can be helpful (Example about not querying DB on tests)

### Look for a series for methods across classes that have the same suffix
Refactor those into a single method on a class

( She refactored several classes into a module and two classes )

## Tools
PHP scrutnizer