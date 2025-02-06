package ronakrajnipatel.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ronakrajnipatel.demo.model.App_User;
import ronakrajnipatel.demo.repository.UserRepo;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public List<App_User> getUsers() {
        return repo.findAll();
    }

    public App_User getUserById(int app_userid) {
        return repo.findById(app_userid).orElse(null);
    }

    public void addUser(App_User App_User) {
        repo.save(App_User);
    }

    public void updateUser(App_User App_User) {
        repo.save(App_User);
    }

    public void deleteUser(int app_userid) {
        repo.deleteById(app_userid);
    }
}
