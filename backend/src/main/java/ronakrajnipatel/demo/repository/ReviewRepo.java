package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.model.ReviewId;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review, ReviewId> {

    @Query("SELECT r FROM Review r WHERE r.reviewId.appuserid = ?1")
    List<Review> findByappuserid(int appuserid);


}
