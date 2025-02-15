package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.Review;
import ronakrajnipatel.demo.model.ReviewId;

@Repository
public interface ReviewRepo extends JpaRepository<Review, ReviewId> {

}
