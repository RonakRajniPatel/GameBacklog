package ronakrajnipatel.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ronakrajnipatel.demo.model.Game;
import ronakrajnipatel.demo.repository.GameRepo;

import java.util.List;

@Service
public class GameService {

    @Autowired
    GameRepo repo;

    public List<Game> getGames() {
        return repo.findAll();
    }

    public Game getGameById(int gameid) {
        return repo.findById(gameid).orElse(null);
    }

    public void addGame(Game Game) {
        repo.save(Game);
    }

    public void updateGame(Game Game) {
        repo.save(Game);
    }

    public void deleteGame(int gameid) {
        repo.deleteById(gameid);
    }
}
