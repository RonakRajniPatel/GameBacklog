package ronakrajnipatel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ronakrajnipatel.demo.model.Game;
import ronakrajnipatel.demo.service.GameService;

import java.util.List;

@RestController          // or @RestController for REST APIs
@RequestMapping("/game/")
public class GameController {
    @Autowired
    GameService service;

    @GetMapping("/games")   // maps HTTP GET requests for "/"
    public List<Game> getGames() {
        return service.getGames();
    }

    @GetMapping("/{gameid}")
    public Game getProductById(@PathVariable int gameid) {
        return service.getGameById(gameid);
    }

    @PostMapping("/game")
    public void addGame(@RequestBody Game game) {
        service.addGame(game);
    }

    @PutMapping("/game")
    public void updateGame(@RequestBody Game game) {
        service.updateGame(game);
    }

    @DeleteMapping("/{gameid}")
    public void deleteGame(@PathVariable int gameid) {
        service.deleteGame(gameid);
    }
}