# GraphQL
GraphQL is a query language developed by Facebook. It is an efficient and flexible runtime for APIs when compared to REST.

**The Features of GraphQL are:**

- Strongly Typed Schema
- Efficient Data Fetching
- Hierarchical Queries
- Real-Time Subscriptions –optional to read
- Introspection – optional to read

## GraphQL vs REST

![GraphQL vs REST](/Day9/images/GraphQLvsREST.PNG)

## Schema & Entry Points

The schema defines the structure, types, and capabilities of an API. It servers as a contract between the client and the server, providing a standardized way to describe the available data and operations.

**The Schema Consists of:**

- Object Types and Fields
- Scalars
- Queries
- Mutations and Inputs
- Interfaces
- Enums
- 
**Entry Points:** The Query and Mutations are entry points in every GraphQL Application.

## Types:

GraphQL is a type language, and The GraphQL Schema Definition Language(SDL) is used to create the schema in GraphQL.

### Object:

Objects represent the object returned from the server. Objects contain fields. 
Ex: Consider User object with fields like id, firstName, lastName, email, and password etc.

**Syntax:**

```gql
type ObjectName{
  """
  fields
  """
}
```

### Scalars

A GraphQL object type has a name and fields, and every field should be a concrete data type. Scalars are used to define the data type of fields with no dub-fields(leaves)

The Scalar types:

**Int:** A signed 32‐bit integer.

**Float:** A signed double-precision floating-point value.

**String:** A UTF‐8 character sequence.

**Boolean:** true or false

**ID:** A unique identifier that is not human-readable.

### Enum

Enum (Enumeration Types) are a special type of scalar that allows only predefined values. Enums allows you to:

- Validate that any arguments of this type are one of the allowed values
- Communicate through the type system that a field will always be one of a finite set of values

Ex: Role in users can be an enum with roles like JOBSEEKER and EMPLOYER.

```gql

enum EnumName{
  """
  VALUES
  """
}

```

### Query

The Query is the most important type in GraphQL. The queries define the structure of data retrieved by the client from the server.

The characteristics of the query are: 

1. Fetching Data
2. Hierarchical Structure
3. Single Endpoint (`/graphql`)
4. Strong Typing 
5. Fields and Arguments
6. Variables
7. Aliases
8. Fragments

```gql

query QueryName{

  Object{
    """
    fields
    """
  }

}


```

**Arguments:**

Arguments can be passed to the fields of the Object. 
Ex: To get the user whose id is 1. 

**Variable:**
Variables are dynamic arguments. Syntax: `$varname: Type= detaultValue`
Ex: To get the user info of a user after login. In this scenario, the id varies.

**Alias:**
Alias is used to query the same field with different arguments.
Ex: Consider that each user has a role like JOBSEEKER and EMPLOYER. To get all the users categorized as Jobseekers and employers using a single query, alias can be used. 

**Fragments:**
Fragments are reusable units in GraphQL. Fragments contain fields. These fragments can be included in any query. The syntax for fragments is  ` fragment name on Object{}` and in query `… fragmentname`

### Mutation

The mutation is used to modify the data on the GraphQL server. The client can define mutations to create, update and delete the data. Mutations are used to write operations with side effects. 

```gql

mutation MutationName($varname: Type=default value){

  createObject(var: $varname){
    """
    fields
    """
  }

}


```

### Input

A mutation can contain different operations like create and update and the fields for these operations vary. In such scenarios, an input can be created and used in mutation for different operations. 

Ex: For registration, a user is created all fields are passed but the id as it is created in the service but in the update profile, the id should be sent from the client.

```gql
input InputName{
  """
  fields
  """
}
type mutation{
    createObject (input: InputName): Object
    updateObject (id: ID!, input: InputName): Object
}
```

### Interface:

The interface is an abstract type that includes the fields that should be included to implement that interface.

```gql
interface InterfaceName{
    """
    fields
    """
}

type Object implements InterfaceName{
   
   """
   interface fields
   other fields
   """
}


```

### Union:
Union types are a combination of two or more concrete objects returned by the server.

```gql
mutation UnionName = Object1 | Object2
```











