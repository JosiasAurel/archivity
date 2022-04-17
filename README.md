# ARCHIVITY

A mechanism for matching funds to public goods providing value.

## How should it work?

A project is submitted to the protocol by some individual. The individual will take charge.
The submitted project is added to the pool of projects by the protocol.
A valid submission contains the following information about a project;

- A name
- The address of the wallet that will receive the project funds
- A link to the project
- A quick short description of the project

Once the project is accepted in the pool, it will be listed amongst funding recipients.

For the next X amount of time, projects in the pool will be able to accept individual contributions.

Once the X amount of time is elapsed, the protocol will send out F amout of funds to the project.

F is the matching funds of the protocol.

F is determined as sum( contributions.forEach(contrib = sqrt(contrib) ) )²
read -> "the square of the sum of the square root of individual contributions".

The total funds sent out. Ft = F + C where C is the total amount contributed individually.

The assumption on this method is that more individual contributions means there are more individuals finding value in the project.

The matching funds are gotten from the protocol's treasury.

Once funds have been sent out to the project, it is removed from the active pool and archived.

The pool can have a maximum of 10 projects at any period in time.
