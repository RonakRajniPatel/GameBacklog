package ronakrajnipatel.demo.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@EqualsAndHashCode
public class ReviewId implements Serializable {
    private int gameid;
    private int appuserid;

    public ReviewId(int gameid, int appuserid) {
        this.gameid = gameid;
        this.appuserid = appuserid;
    }
}
