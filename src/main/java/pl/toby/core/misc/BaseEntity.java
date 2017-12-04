package pl.toby.core.misc;

import javax.persistence.*;
import java.util.UUID;

@MappedSuperclass
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private final UUID id;

    public BaseEntity() {
        id = null;
    }

    public UUID getId() {
        return id;
    }
}
