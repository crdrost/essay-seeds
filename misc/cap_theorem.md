# The CAP Theorem

Some clues here:

    http://pl.atyp.us/wordpress/index.php/2009/11/availability-and-partition-tolerance/
    http://www.julianbrowne.com/article/viewer/brewers-cap-theorem
    
Brewer's CAP theorem says that you cannot have "Consistency, Availability, and 
Partition tolerance." These words are misleading. A better phrasing might look
like this:

> Imagine a service implemented by a distributed system of nodes: you 
> choose a node which is "up", you make a request, and it gives you a
> response. Any such service cannot simultaneously guarantee three things:
>
> * Universality: The service implemented by all nodes is the same.
> * Health: All the nodes are up.
> * Responsiveness: Service requests are quickly processed.

The basic idea is to consider a *partition* among the nodes: anything which 
stops them from communicating with each other. Imagine that we have five nodes,
and the first one just received a service request, but it turns and realizes 
that it can't see nodes 3, 4, or 5. Perhaps a new user is to be created. The 
network looks like this now, with a partition between two groups:

    1* 2 | 3 4 5

The most basic thing that can happen next is that the system can become two 
separate services running in parallel: the service implemented by 3, 4, and 5 
could differ tangibly from the service implemented by 1 and 2. The new info
distributed by * could just naively flow from 1 to 2:

    1* 2* | 3 4 5

And at this point if you ask "who are the users?" you will get a different 
answer from 2 than you will from 4.

Another choice is offered by *quorums*. Node #1 might know that it's in a 
network of 5 nodes, and when it finds out that this network has shrunk to 2, it
might just return failure. I will describe a dead node with parentheses.

    (1) (2) | 3 4 5

Notice that now both 1 and 2 have become unresponsive. This is "partition
tolerant, but not available": the network becomes "unhealthy" because some of
the nodes are not up. 



The exact connection here is a little bit tenuous but bear with me. We're not
even talking about databases here -- just nodes which are all trying to 
implement one single service. Now imagine a "partition" -- literally, any 
divider which blocks communication between some of the nodes. You have a couple
options. The nodes could all begin to disagree -- that's certainly one option.

