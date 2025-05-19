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
@Table(name = "Reviews")
public class Review {

    @EmbeddedId
    private ReviewId reviewId;
    private String review;
    private int ratings;
    private float hours;
    private Date datestarted;
    private Date datefinished;
    private String status;

    // This is the unidirectional relationship:
    @MapsId("gameid")
    @ManyToOne(optional = true)
    @JoinColumn(name = "gameid", insertable = false, updatable = false)
    private Game game;       // So we can access game data via review.getGame()

    public Review(int gameid, int appuserid) {
        reviewId = new ReviewId(gameid, appuserid);
    }
}