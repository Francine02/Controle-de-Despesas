package com.backend.security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.backend.entities.User;
import com.backend.repositories.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {// Filtro que executa uma vez por requisição
    @Autowired
    TokenService tokenService;

    @Autowired
    UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        var token = this.recoverToken(request); //Extrai do cabeçalho da requisição
        var login = tokenService.verificationToken(token);//Verifica a validade do token usando o TokenService. Retorna o email associado ao token se for válido.

        if (login != null) {//Verifica se o token é valido
            User user = userRepository.findByEmail(login).orElseThrow();//Busa o usuário no banco de dados pelo email recuperado no token

            var authorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));//Define um papel para o usuário
            var authentication = new UsernamePasswordAuthenticationToken(user, null, authorities);//Cria um objeto de autenticação, usado para representar a identidade do usuário autenticado
            SecurityContextHolder.getContext().setAuthentication(authentication);//Define a autenticação no contexto de segurança do Spring Security
        }
        filterChain.doFilter(request, response);//Permite que a requisição prossiga para o próximo filtro na cadeia
    }

    private String recoverToken(HttpServletRequest request) {//Extrai o token do cabeçalho da requisição
        var auth = request.getHeader("Autorização");//Obtém o valor do cabeçalho

        if (auth == null)
            return null;

        return auth.replace("Bearer", "");//Remove a parte Bearer do cabeçalho, retornando apenas o token
    }
}
