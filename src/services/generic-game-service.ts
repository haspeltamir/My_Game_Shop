// import apiClient from "./api-client";

//here we will create the HTTP service for the user entity
// what this service, will just fit the user entity data on the generic HTTP service and we will be able
// to preform all the CRUD operations on the user entity

import createHttpService from "./generic-HTTP-service";
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// provide the endpoint for the user entity
export default createHttpService("/users");
