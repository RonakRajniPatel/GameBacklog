package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.service.ReviewService;
import ronakrajnipatel.demo.model.ReviewId;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/review/")
public class ReviewController {
    @Autowired
    ReviewService service;

    @GetMapping("/reviews")   // maps HTTP GET requests for "/"
    public List<Review> getReviews() {
        return service.getReviews();
    }

    @GetMapping("/{appuserid}")
    public List<Review> getProductById(@PathVariable int appuserid) {
        return service.getUserReviews(appuserid);
    }

    @GetMapping("/{gameid}/{appuserid}")
    public Review getProductById(@PathVariable int gameid, @PathVariable int appuserid) {
        return service.getReviewById(gameid, appuserid);
    }

    @PostMapping("/review")
    public void addReview(@RequestBody Review review) {
        service.addReview(review);
    }

    @PutMapping("/review")
    public void updateReview(@RequestBody Review review) {
        service.updateReview(review);
    }

    @DeleteMapping("/{gameid}/{appuserid}")
    public void deleteReview(@PathVariable int gameid, @PathVariable int appuserid) {
        service.deleteReview(gameid, appuserid);
    }
}