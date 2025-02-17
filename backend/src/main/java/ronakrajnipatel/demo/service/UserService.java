package ronakrajnipatel.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ronakrajnipatel.demo.model.AppUser;
import ronakrajnipatel.demo.repository.UserRepo;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public List<AppUser> getUsers() {
        return repo.findAll();
    }

    public AppUser getUserById(int appuserid) {
        return repo.findById(appuserid).orElse(null);
    }

    public void addUser(AppUser AppUser) {
        repo.save(AppUser);
    }

    public void updateUser(AppUser AppUser) {
        repo.save(AppUser);
    }

    public void deleteUser(int appuserid) {
        repo.deleteById(appuserid);
    }
}
