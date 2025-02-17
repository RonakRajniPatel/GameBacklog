package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.model.ReviewId;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review, ReviewId> {
    List<Review> findByappuserid(int appuserid);
}
