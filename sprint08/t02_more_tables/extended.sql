USE ucode_web;
CREATE TABLE IF NOT EXISTS powers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE NOT NULL,
    type ENUM('attack','defense') NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS heroes_powers
(
    hero_id INT NOT NULL,
    power_id INT NOT NULL,
    power_points INT NOT NULL,

    CONSTRAINT heroes_powers_to_heroes_fk 
    FOREIGN KEY (hero_id)  REFERENCES heroes (id) ON DELETE CASCADE,

    CONSTRAINT heroes_powers_to_powers_fk 
    FOREIGN KEY (power_id)  REFERENCES powers (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS races
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE heroes
    ADD race_id INT NULL
        AFTER class_role;

ALTER TABLE heroes 
    ADD CONSTRAINT heroes_races_fk 
        FOREIGN KEY (race_id) 
            REFERENCES races(id) ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS teams
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS heroes_teams
(
    hero_id INT NOT NULL,
    team_id INT NOT NULL,

    CONSTRAINT heroes_teams_to_heroes_fk 
    FOREIGN KEY (hero_id)  REFERENCES heroes (id) ON DELETE CASCADE,

    CONSTRAINT heroes_teams_to_teams_fk  
    FOREIGN KEY (team_id)  REFERENCES teams (id) ON DELETE CASCADE
);

