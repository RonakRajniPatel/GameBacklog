package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.AppUser;

@Repository
public interface UserRepo extends JpaRepository<AppUser, Integer> {

}
