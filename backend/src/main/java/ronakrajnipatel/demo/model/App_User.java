package ronakrajnipatel.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

//@Data
//@AllArgsConstructor
@Component
@Entity
@Table(name = "App_Users")
public class App_User  {
    @Id
    private int App_UserId;
    private String First;
    private String Last;
    private Date Birthday;
    private String Country;
    private int Age;
    private String Location;
}

