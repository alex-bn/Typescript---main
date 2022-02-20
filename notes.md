1) Plain definition + overview
2) Why do we care?
3) Examples
4) When to use this?

Basic types in TS:
# Type    -> Easy way to refer to the different properties + functions that a value has
# Value     -> Is anything that we can assign to a variable

> Primitive_Type:    number, string, boolean, symbol, void, null, undefined
> Object_Type:       functions, classes, arrays, objects
---
> Types are used by the TS compiler to analyze our code for errors.
> Types allow other engineers to understand what values are flowing around our codebase.


Type annotations in action:
# Type annotations    -> Code we add to tell the TS what type of value a variable will refer to
# Type inference      -> TS tries to figure out what type of value a variable refers to

> Type Inference: if Variable declaration and Variable initialization are on the same line (same expression), TS will figure out the type of the variable for us

# Type Annotations, when to use:
> When a function returns the 'any' type and we need to clarify it
> When we declare a variable on one line then initialize it later
> When we want a variable to have a type that can't be inferred

 -----
'false'              -> JSON.parse() ->    boolean    
'4'                  -> JSON.parse() ->    number    
'{"value":5}'        -> JSON.parse() ->    {value: number}    
'{"name": "alex"}'   -> JSON.parse() ->    {name: string}    
-----
> any   -> is a type, just as 'string' or 'boolean' are
        -> means TS has no idea what this is - can't check for correct property references
        -> avoid variables with 'any' at all costs
-----
# Type annotations for functions:
> code we add to tell TS what type of arguments a function will receive and what type of vales it will return
# Type inference for functions:
> type inference only works around the return value of a function
-----

# Typed Arrays -> Arrays where each element is some consistent type of value
> TS can do type inference when extracting values from an arrays
> TS can prevent us from from adding incompatible values to the array
> we can get help with 'map', 'forEach', 'reduce' functions
> Flexible - arrays can still contain multiple different types

# Where to use typed arrays? --> Any time we need to represent a collection of with some arbitrary sort order