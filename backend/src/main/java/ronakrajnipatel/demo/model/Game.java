package ronakrajnipatel.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Games")
public class Game {
    @Id
    private int gameid;
    private Date release;
    private String name;
    private String genre;
    private String summary;
    private String storyline;
    private float rating;
    private String ratingcount;
    private String franchise;
    private String publishers;
    private String developers;
    private String gameengine;
    private String coverurl;
    private String themes;
    private String category;
    private String keywords;
    private String gamemodes;
}

