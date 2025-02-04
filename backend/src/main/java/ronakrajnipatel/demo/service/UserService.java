package ronakrajnipatel.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ronakrajnipatel.demo.model.User;
import ronakrajnipatel.demo.repository.UserRepo;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public List<User> getUsers() {
        return repo.findAll();
    }

    public User getUserById(int userId) {
        return repo.findById(userId).orElse(null);
    }

    public void addUser(User user) {
        repo.save(user);
    }

    public void updateUser(User user) {
        repo.save(user);
    }

    public void deleteUser(int userId) {
        repo.deleteById(userId);
    }
}
