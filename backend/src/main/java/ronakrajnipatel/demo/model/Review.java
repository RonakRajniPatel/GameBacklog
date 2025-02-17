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
@IdClass(ReviewId.class)
@Table(name = "Reviews")
public class Review {
    @Id
    private int gameid;
    @Id
    private int appuserid;
    private String review;
    private int ratings;
    private float hours;
    private Date datestarted;
    private Date datefinished;
    private int status;
}