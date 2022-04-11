USE ucode_web;

SELECT * FROM
(
    SELECT heroes.name AS hero_name, SUM(heroes_powers.power_points) AS total_power
    FROM heroes_powers
    JOIN heroes ON heroes_powers.hero_id = heroes.id
    JOIN powers ON heroes_powers.power_id = powers.id GROUP BY hero_name ORDER BY total_power DESC
) AS top_1 LIMIT 1;

SELECT * FROM
(
    SELECT heroes.name AS hero_name, SUM(heroes_powers.power_points) AS total_power
    FROM heroes_powers
    JOIN heroes ON heroes_powers.hero_id = heroes.id
    JOIN powers ON heroes_powers.power_id = powers.id GROUP BY hero_name ORDER BY total_power ASC
) AS top_1 LIMIT 1;

SELECT heroes.name AS hero_name, teams.name AS team_name, SUM(heroes_powers.power_points) AS total_power
FROM heroes_teams
JOIN heroes ON heroes_teams.hero_id = heroes.id
JOIN teams ON heroes_teams.team_id = teams.id
JOIN heroes_powers ON heroes_powers.hero_id = heroes.id WHERE teams.name = 'Avengers' GROUP BY hero_name ORDER BY total_power DESC;

SELECT * FROM
(
    SELECT teams.name AS team_name, SUM(heroes_powers.power_points) AS total_power
    FROM teams
    JOIN heroes_teams ON heroes_teams.team_id = teams.id
    JOIN heroes ON heroes.id = heroes_teams.hero_id
    JOIN heroes_powers ON heroes_powers.hero_id = heroes.id
    JOIN powers ON heroes_powers.power_id = powers.id GROUP BY team_name ORDER BY total_power ASC
) AS top_1 WHERE top_1.team_name = 'Avengers' OR top_1.team_name = 'Hydra';