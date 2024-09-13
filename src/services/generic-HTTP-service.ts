/*
This here , model would be responsible for All the logic For fetching the data from the server

We will make this Modul generic. So we can use it for any other data type
and not only for User. 
*/

import apiClient from "./api-client";

// we must Create an Interface to Tell the Generic function what type of data we are expecting
interface Entity {
  id: number;
}

class HTTP_Generic_Service {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  //Here we'll put the logic for sending an http request to our server(the backend) to get the data we need.
  //we will define it as a generic function so we can use it for any other data type

  // we can either do:  getAllData<T>(endpoint: string) or build a constructor
  // and pass the endpoint as a parameter to the constructor when creating an instance of the class
  // and put it instead of the endpoint in the when we do "apiClient.get<T[]>(endpoint)"
  getAllData<T>() {
    //clean up function that allows us to cancel the request
    //and cancel asynchronous tasks that might take a long time
    //to complete

    //We are doing that As best practice For example:
    //if the user navigates away from the page before the request is completed
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    }); //this will allow us to cancel the request

    return { request, cancel: () => controller.abort() };
    // return await apiClient.get("/users");
  }

  /*
  Delete user
  */

  async delete_Received_Data(id: number) {
    const delete_Data_Request = await apiClient.delete(
      `${this.endpoint}/${id}`
    );
    return delete_Data_Request;
  }

  //   async getUser(id) {
  //     return await apiClient.get(`/users/${id}`);
  //   }

  // Both generic functions and Generic Interfaces are used to create reusable components.
  async create_New_Data<T>(entity: T) {
    return await apiClient.post(this.endpoint, entity);
  }

  //If a function uses The the generic interface , It must extend it
  async update_Data<T extends Entity>(updated_Entity: T) {
    return await apiClient.put(
      `${this.endpoint}/${updated_Entity.id}`,
      updated_Entity
    );
  }
}

// We don't want to create an instant of the class, like we do now,
// Because we need to pass an endpoint.

// That is why we will export a function that create an instance of the class
const create = (endpoint: string) => new HTTP_Generic_Service(endpoint);

export default create;
