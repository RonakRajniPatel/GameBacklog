package ronakrajnipatel.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

//@Data
//@AllArgsConstructor
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "App_Users")
public class App_User  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int app_userid;
    private String email;
    private String first;
    private String last;
    private Date birthday;
    private String country;
    private int age;
    private String location;
}

