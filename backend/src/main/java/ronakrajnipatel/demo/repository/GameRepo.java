package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.Game;

@Repository
public interface GameRepo extends JpaRepository<Game, Integer> {

}
