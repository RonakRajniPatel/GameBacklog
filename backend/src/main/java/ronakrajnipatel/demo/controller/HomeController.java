package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ronakrajnipatel.demo.service.UserService;

@RestController          // or @RestController for REST APIs
@RequestMapping("/api/")
public class HomeController {
    @Autowired
    UserService service;

    @GetMapping("/home")   // maps HTTP GET requests for "/"
    public String home() {
        // return view name (for @Controller) or response data (for @RestController)
        return "home";
    }
}