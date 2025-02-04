package ronakrajnipatel.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

//@Data
//@AllArgsConstructor
@Component
@Entity
public class User  {
    @Id
    private int userId;
    private String firstName;
    private String lastName;
    private Date birthday;
    private String country;
    private int age;
    private String location;
}

