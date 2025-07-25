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
@Table(name = "appusers")
public class AppUser  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appuserid;
    private String email;
    private String first;
    private String last;
    private Date birthday;
    private String country;
    private int age;
    private String location;
}

