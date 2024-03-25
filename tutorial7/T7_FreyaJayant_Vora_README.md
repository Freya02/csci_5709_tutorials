# Tutorial 7

This tutorial is a backend API that supports the following endpoints:
* GET /users
* GET /user/\<id>
* GET /user?firstName=\<firstName>
* PUT /update/\<id>
* POST /add
* DELETE /delete/\<id>

Other details:
* **Date Created**: 25 March 2024
* **Last Modification Date**: 25 March 2024
* **Git URL**: 
* **Render Deployment URL**: 

## Authors

* [Freya Jayant Vora](fr793929@dal.ca)

## Deployment

I deployed this project on Render, following these steps:

* Containerized the application using Docker.
* Pushed the Docker image to Docker Hub.
* Created a new Render service using the Docker image URL.
* Deployed the service on Render.

## Built With

* [Spring Boot](https://spring.io/projects/spring-boot) - The backend framework used
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud-based database service used for storing user data
* [Docker](https://www.docker.com/) - Containerization tool used for deployment
* [Render](https://render.com/) - Platform used for hosting the deployed application

## Sources Used

In the development of this project, code snippets and concepts from external sources were referenced and adapted to meet the requirements. Below are the sources along with details on their implementation and modifications:

### Spring Data MongoDB Documentation

The Spring Data MongoDB documentation served as a valuable resource for understanding and implementing data access operations with MongoDB in a Spring Boot application. Specifically, the following sections were referenced:

- **Endpoint Implementation**: Code snippets for defining controller endpoints and handling CRUD operations were adapted from the documentation's section on [Creating a RESTful Web Service](https://spring.io/guides/gs/rest-service/).

- **Repository Custom Queries**: Custom query methods in the repository interface were inspired by examples provided in the documentation's section on [Query Methods](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#repositories.query-methods).

These resources provided essential guidance on structuring the application's architecture and implementing MongoDB-specific functionalities. The code snippets were modified to suit the project's requirements, such as customizing response messages and handling edge cases.

### MongoDB Atlas Documentation

The MongoDB Atlas documentation offered comprehensive guidance on setting up and managing MongoDB databases in the cloud. Information from the documentation was referenced to configure the application's connection to the MongoDB Atlas cluster, including authentication and network settings.

By leveraging the insights and best practices outlined in the MongoDB Atlas documentation, the project ensured secure and efficient interaction with the database service.



### UserController.java

*Lines 19-26*

```java
@GetMapping("/users")
public ResponseEntity<GetApiResponse> getAllUsers() {
    List<User> users = userRepository.findAll();
    if (users.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new GetApiResponse("No users found", false));
    }
    return ResponseEntity.ok(new GetApiResponse ("Users retrieved", true, users));
}
```

The code above was created by adapting the code from [Spring Data MongoDB - Reference Documentation](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#repositories.query-methods) as shown below:

```java
@GetMapping("/person/{id}")
public ResponseEntity<Person> findById(@PathVariable String id) {

  Optional<Person> person = repository.findById(id);

  return person.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
}
```

- The above code was implemented by the authors of the Spring Data MongoDB documentation.
- This code was used as a reference for implementing a GET endpoint to retrieve all users from the MongoDB database.
- I modified the code to handle cases where no users are found and to return a custom response message.

### UserRepository.java

*Lines 7-12*

```java
public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByEmail(String email);

    Optional<User> findByFirstName (String firstName);
}
```

The code above was created by adapting the code from [Spring Data MongoDB - Reference Documentation](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#repositories.query-methods) as shown below:

```java
public interface PersonRepository extends MongoRepository<Person, String> {

  List<Person> findByLastname(String lastname);

  List<Person> findByFirstnameAndLastname(String firstname, String lastname);

  List<Person> findByAddress_City(String city);
}
```

- The above code was implemented by the authors of the Spring Data MongoDB documentation.
- This code was used as a reference for defining custom query methods in a Spring Data MongoDB repository interface.
- I modified the code to define query methods for finding users by their first name.

## Testing the APIs

You can use the following URLs to test the deployed APIs:

- **GET /users**: Retrieve a list of all users.
  - Test URL: `https://web-tut7.onrender.com/users`

- **GET /user/{id}**: Retrieve user details by ID.
  - Test URL: `https://web-tut7.onrender.com/user/{id}`

- **PUT /update/{id}**: Update user details by ID.
  - Test URL: `https://web-tut7.onrender.com/update/{id}`

- **POST /add**: Add a new user.
  - Test URL: `https://web-tut7.onrender.com/add`

- **GET /user/user?firstName=\<firstName>**: Retrieve user details by first name.
  - Test URL: `https://web-tut7.onrender.com/user?firstName=\<firstName>`

- **DELETE /delete/{id}**: Delete user by ID.
  - Test URL: `https://web-tut7.onrender.com/delete/{id}`

## Acknowledgments

* [Spring Boot](https://spring.io/projects/spring-boot): Official documentation and tutorials were helpful in learning Spring Boot.
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Cloud-based database service used for storing user data.
* [Docker](https://www.docker.com/): Official documentation and community forums provided valuable insights into Docker containerization.
* [Render](https://render.com/): Platform provided free hosting for deploying the Spring Boot application.
