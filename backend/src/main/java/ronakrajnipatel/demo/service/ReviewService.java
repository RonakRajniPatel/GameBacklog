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

    public Review getReviewById(int gameid, int app_userid) {
        return repo.findById(new ReviewId(gameid, app_userid)).orElse(null);
    }

    public void addReview(Review Review) {
        repo.save(Review);
    }

    public void updateReview(Review Review) {
        repo.save(Review);
    }

    public void deleteReview(int gameid, int app_userid) {
        repo.deleteById(new ReviewId(gameid, app_userid));
    }
}
