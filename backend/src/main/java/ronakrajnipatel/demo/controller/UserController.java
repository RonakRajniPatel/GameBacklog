package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ronakrajnipatel.demo.model.User;
import ronakrajnipatel.demo.service.UserService;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/user/")
public class UserController {
    @Autowired
    UserService service;

    @GetMapping("/users")   // maps HTTP GET requests for "/"
    public List<User> getUsers() {
        return service.getUsers();
    }
}