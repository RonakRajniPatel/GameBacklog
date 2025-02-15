package ronakrajnipatel.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@IdClass(ReviewId.class)
@Table(name = "Reviews")
public class Review {
    @Id
    private int gameid;
    @Id
    private int app_userid;
    private String review;
    private int ratings;
    private float hours;
    private Date datestarted;
    private Date datefinished;
    private int status;
}

