package ronakrajnipatel.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.model.ReviewId;
import ronakrajnipatel.demo.repository.ReviewRepo;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepo repo;

    public List<Review> getReviews() {
        return repo.findAll();
    }

    public List<Review> getUserReviews(int appuserid) {
        return repo.findByappuserid(appuserid);
    }
    public Review getReviewById(int gameid, int appuserid) {
        return repo.findById(new ReviewId(gameid, appuserid)).orElse(null);
    }

    public void addReview(Review Review) {
        System.out.println("This is the service call");
        System.out.println(Review);
        repo.save(Review);
    }

    public void updateReview(Review Review) {
        repo.save(Review);
    }

    public void deleteReview(int gameid, int appuserid) {
        repo.deleteById(new ReviewId(gameid, appuserid));
    }
}
