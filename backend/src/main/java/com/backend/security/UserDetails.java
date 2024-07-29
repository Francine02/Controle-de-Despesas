package com.backend.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.backend.entities.User;
import com.backend.repositories.UserRepository;

public class UserDetails implements UserDetailsService {//Esta classe é responsável por carregar os detalhes do usuário para autenticação
    @Autowired
    private UserRepository userRepository;

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = this.userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado!"));//Chama o userRepository para encontrar um usuário no banco de dados pelo email

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());// Cria uma instância da classe User do Spring Security, que é uma implementação padrão de UserDetails e cria uma lista vazia de autoridades (roles) para o usuário
    }

}
