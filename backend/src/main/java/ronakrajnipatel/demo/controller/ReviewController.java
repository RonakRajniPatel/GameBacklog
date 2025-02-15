package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.service.ReviewService;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/review/")
public class ReviewController {
    @Autowired
    ReviewService service;

    @GetMapping("/reviews")   // maps HTTP GET requests for "/"
    public List<Review> getGames() {
        return service.getReviews();
    }

    @GetMapping("/{gameid}/{app_userid}")
    public Review getProductById(@PathVariable int gameid, @PathVariable int app_userid) {
        return service.getReviewById(gameid, app_userid);
    }

    @PostMapping("/review")
    public void addGame(@RequestBody Review review) {
        service.addReview(review);
    }

    @PutMapping("/review")
    public void updateGame(@RequestBody Review review) {
        service.updateReview(review);
    }

    @DeleteMapping("/{gameid}/{app_userid}")
    public void deleteGame(@PathVariable int gameid, @PathVariable int app_userid) {
        service.deleteReview(gameid, app_userid);
    }
}