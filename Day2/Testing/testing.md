# Tests Should Tell a Story
## Stories
    Since the beginning of time people have been telling stories

    Your code tells a story

    Stories are not just told, they are interpreted

    In the future you may interrput your code differently than now

### Communicative Concerns to Consider
    Skill Level
    Ambiguous intent
    Cultural differences
    Language differences
    (Many more but couldn't get them all typed)

    **Ambiguity Leaves room for interruptation**

## Tests
### Anatomy of a Test
    Four Phase
        Setup environment and preconditions
        (Many more but couldn't get them all typed)

    AAA
        Aranage (Given)
        Act (When)
        Assert (Then)

    (X)UNIT tests
        setup()
        teardown()
        testingMethod()

    Spec/BDD Style
        Similar at a basic level
            Just has descriptive text inside of function names

        Supports Nested Contexts
            beforeEach()
            afterEach()
            context()

        Formatter Prints
            A User Repository
                When doing something
                    result of test

## Tips for Tests
    Be expressive
    Respect the cukes
    Behavior-driven development
        describe / design the application as how it appears to the stakeholder
        Feature driven workflow
        Embraces the concepts fo the Agile Manifeato
            Individuals and interactinos - over processes and tools
            Working software over comprehensive documentatino
            Customer collaboration over ?
            ? over ?

### Bad stories are signals
#### Plot Holes
    Mocking the object under test
    Global state mutations out of view of the test
    Implicit behavior - if it implied it isn't explicitly written down

#### No Descriptions
    Creating abstractions that provide no benefit
    No explanation why the environment is in the current state
    The world is bland and empty

#### Lack of Character Development
    Performing transformations on characters out of view of the test
    Mocking collaborations without clear reason

#### Switching Narratives
    Setting expectations on collaborators
    Blurring lines between suites

### Try TDD / BDD
    Give yourself two weeks

#### Feature first
    Build only what your client needs at that moment
    Supports slice plans
    Waste few resources to test an idea
    Provides readable, agreed upon specs for stakeholders
    Encourages collaboration

### Driving your design & code
    Write failing test first
        Evidence feature is incomplete
        Evidence feature is not coincidently passing
    Write smallest amount of code
    Listen to feedback & refactor code & test in pieces
    Taking small steps