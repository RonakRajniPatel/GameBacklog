package ronakrajnipatel.demo.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@EqualsAndHashCode
public class ReviewId implements Serializable {
    private int gameid;
    private int app_userid;

    public ReviewId(int gameid, int app_userid) {
        this.gameid = gameid;
        this.app_userid = app_userid;
    }
}
