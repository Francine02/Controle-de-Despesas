package com.backend.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dto.ResponseDTO;
import com.backend.dto.LoginDTO;
import com.backend.dto.RegisterDTO;
import com.backend.entities.User;
import com.backend.repositories.UserRepository;
import com.backend.security.TokenService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")//Endpoint
    public ResponseEntity<?> login(@RequestBody LoginDTO requestBody) {
        User user = this.userRepository.findByEmail(requestBody.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!!")); //Busca o usuário pelo email. Se não encontrado, lança uma exceção

        if (passwordEncoder.matches(requestBody.password(), user.getPassword())) { //Verifica se a senha fornecida corresponde à senha armazenada. Se corresponder, gera um token JWT e retorna uma resposta ok com um ResponseDTO
            String token = this.tokenService.generateToken(user);

            return ResponseEntity.ok(new ResponseDTO(user.getUserName(), token));
        }
        return ResponseEntity.badRequest().build();//Se a senha não corresponder, retorna uma resposta badRequest
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO requestBody) {
        Optional<User> user = this.userRepository.findByEmail(requestBody.email());

        if (user.isEmpty()) {
            User newUser = new User();
            newUser.setEmail(requestBody.email());
            newUser.setUserName(requestBody.userName());
            newUser.setPassword(passwordEncoder.encode(requestBody.password()));

            this.userRepository.save(newUser);

            String token = this.tokenService.generateToken(newUser);

            return ResponseEntity.ok(new ResponseDTO(newUser.getUserName(), token));
        }
        return ResponseEntity.badRequest().build();
    }

}
