import {gql} from "apollo-angular";

const GET_USER = gql`
query getUserId($id:Int!){
  users(id:$id){
    ... userDetails
    
  }
}

fragment userDetails on User{
    email
    password
    title
    firstName
    lastName
    dob
    contactNumber
    address
    gender
    designation
    role
  
}

`

const CREATE_USER = gql`
mutation addUser($UserRequest: UserRequest!) {
   addUser(input:$UserRequest){
    email
    password
    title
    firstName
    lastName
    dob
    contactNumber
    address
    gender
    designation
    role
    
  }
}
`

export {GET_USER, CREATE_USER};
