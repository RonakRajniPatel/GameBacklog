package ronakrajnipatel.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    private int app_userid;
    private String first;
    private String last;
    private Date birthday;
    private String country;
    private int age;
    private String location;
}

