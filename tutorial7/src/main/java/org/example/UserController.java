package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {


    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public ResponseEntity<GetApiResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new GetApiResponse("No users found", false));
        }
        return ResponseEntity.ok(new GetApiResponse ("Users retrieved", true, users));
    }


    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addUser(@RequestBody User userRequest) {
        if (userRequest.getEmail() == null || userRequest.getFirstName() == null) {
            return ResponseEntity.badRequest().body(new ApiResponse("Email and firstName are required", false));
        }
        User newUser = new User(userRequest.getEmail(), userRequest.getFirstName());
        newUser.setEmail(userRequest.getEmail());
        newUser.setFirstName(userRequest.getFirstName());
        userRepository.save(newUser);
        return ResponseEntity.ok(new ApiResponse ("User added", true));
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String id, @RequestBody User userRequest) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (userRequest.getEmail() != null) {
                user.setEmail(userRequest.getEmail());
            }
            if (userRequest.getFirstName() != null) {
                user.setFirstName(userRequest.getFirstName());
            }
            userRepository.save(user);
            return ResponseEntity.ok(new ApiResponse (  "User updated", true));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<GetUserApiResponse> getUserById(@PathVariable String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.map(user -> ResponseEntity.ok(new GetUserApiResponse(true, user)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user")
    public ResponseEntity<GetUserApiResponse> getUserByfirstName(@RequestParam String firstName) {
        Optional<User> optionalUser = userRepository.findByfirstName (firstName);
        return optionalUser.map(user -> ResponseEntity.ok(new GetUserApiResponse(true, user)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUserById(@PathVariable String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userRepository.deleteById(id);
            return ResponseEntity.ok(new ApiResponse("User deleted successfully", true));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
