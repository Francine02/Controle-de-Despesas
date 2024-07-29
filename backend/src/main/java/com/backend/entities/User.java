package com.backend.entities;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Getter //Gerando pelo Lombok os Getters/Setters/Constructors
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity 
@Table(name = "tb_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String password;
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Expense> expenses;
}
