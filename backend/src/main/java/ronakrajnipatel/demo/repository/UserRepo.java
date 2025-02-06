package ronakrajnipatel.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ronakrajnipatel.demo.model.App_User;

@Repository
public interface UserRepo extends JpaRepository<App_User, Integer> {

}
