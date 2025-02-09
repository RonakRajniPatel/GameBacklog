package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ronakrajnipatel.demo.model.App_User;
import ronakrajnipatel.demo.service.UserService;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/user/")
public class UserController {
    @Autowired
    UserService service;

    @GetMapping("/users")   // maps HTTP GET requests for "/"
    public List<App_User> getUsers() {
        return service.getUsers();
    }

    @GetMapping("/{app_userid}")
    public App_User getProductById(@PathVariable int app_userid) {
        return service.getUserById(app_userid);
    }

    @PostMapping("/user")
    public void addUser(@RequestBody App_User appUser) {
        service.addUser(appUser);
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody App_User appUser) {
        service.updateUser(appUser);
    }

    @DeleteMapping("/{app_userid}")
    public void deleteUser(@PathVariable int app_userid) {
        service.deleteUser(app_userid);
    }
}