USE ucode_web;

SELECT heroes.name AS hero_name, teams.name AS team_name
FROM heroes_teams
RIGHT JOIN heroes ON heroes_teams.hero_id = heroes.id
LEFT JOIN teams ON heroes_teams.team_id = teams.id;

SELECT heroes.name AS hero_name, powers.name AS power_name
FROM heroes_powers
RIGHT JOIN heroes ON heroes_powers.hero_id = heroes.id
LEFT JOIN powers ON heroes_powers.power_id = powers.id;

SELECT heroes.name AS hero_name, teams.name AS team_name, powers.name AS power_name , heroes_powers.power_points AS power_points, powers.type AS type
FROM heroes
JOIN heroes_teams ON heroes.id = heroes_teams.hero_id 
JOIN teams ON teams.id = heroes_teams.team_id
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON powers.id = heroes_powers.power_id;