package tn.bonlivraison.bonlivraison.entity;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;

public enum Role {
    USER(Set.of(new SimpleGrantedAuthority("ROLE_USER"))),
    ADMIN(Set.of(new SimpleGrantedAuthority("ROLE_ADMIN")));

    private final Set<SimpleGrantedAuthority> authorities;

    Role(Set<SimpleGrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public Set<SimpleGrantedAuthority> getAuthorities() {
        return authorities;
    }
}
