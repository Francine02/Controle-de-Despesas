package com.backend.security;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.backend.entities.User;

@Service
public class TokenService {
    @Value("${api.token.secret}") // Valor da variável de ambiente
    private String keySecret;

    public String generateToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(keySecret); // Algoritmo de assinatura usando o HMAC com a chave secreta

            String token = JWT.create() // Cria o token JWT
                    .withIssuer("backend") // Defini o emissor do token
                    .withSubject(user.getEmail()) // Define o assunto do token como o email
                    .withExpiresAt(this.generateExpireToken())// A data de expiração do token
                    .sign(algorithm);// Assina o token usando o algoritmo configurado

            return token;

        } catch (JWTCreationException exception) {
            throw new RuntimeException("Erro de autenticação!!"); // Captura exceções durante a criação do token e lança uma exceção de tempo de execução com uma mensagem de erro.
        }
    }

    public String verificationToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(keySecret);
            // Verifica e decodifica o token JWT.
            return JWT.require(algorithm) // Configura a verificação com o algoritmo
                    .withIssuer("backend")//Emissor
                    .build()//Constrói o verificador do token
                    .verify(token)//Verifica o token
                    .getSubject(); //Retorna o assunto(email)

        } catch (JWTVerificationException exception) {
            return null;
        }
    }

    private Instant generateExpireToken() {//Para a data limite do token
        return LocalDateTime.now()//Obtém a data e hora atuais
                .plusHours(2)//Adiciona 2 horas para a data e hora atuais
                .plusMinutes(30)//Adiciona 30 minutos
                .atZone(ZoneId.systemDefault()) // Defina o fuso horário do sistema
                .toInstant();//Converte para Instant
    }
}
