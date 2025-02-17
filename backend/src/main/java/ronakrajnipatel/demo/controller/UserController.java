package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ronakrajnipatel.demo.model.AppUser;
import ronakrajnipatel.demo.service.UserService;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/user/")
public class UserController {
    @Autowired
    UserService service;

    @GetMapping("/users")   // maps HTTP GET requests for "/"
    public List<AppUser> getUsers() {
        return service.getUsers();
    }

    @GetMapping("/{appuserid}")
    public AppUser getProductById(@PathVariable int appuserid) {
        return service.getUserById(appuserid);
    }

    @PostMapping("/user")
    public void addUser(@RequestBody AppUser appUser) {
        service.addUser(appUser);
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody AppUser appUser) {
        service.updateUser(appUser);
    }

    @DeleteMapping("/{appuserid}")
    public void deleteUser(@PathVariable int appuserid) {
        service.deleteUser(appuserid);
    }
}