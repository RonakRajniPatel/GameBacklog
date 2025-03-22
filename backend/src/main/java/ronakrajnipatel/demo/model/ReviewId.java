package ronakrajnipatel.demo.model;

import jakarta.persistence.Embeddable;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
@Data
public class ReviewId implements Serializable {
    private int gameid;
    private int appuserid;

    public int getGameId() { return gameid; }
    public int getAppUserId() { return appuserid; }

    public ReviewId(int gameid, int appuserid) {
        this.gameid = gameid;
        this.appuserid = appuserid;
    }
}
