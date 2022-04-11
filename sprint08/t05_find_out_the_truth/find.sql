SELECT heroes.id, heroes.name, heroes.description, heroes.class_role, races.name AS race
FROM heroes
JOIN heroes_teams ON heroes_teams.hero_id = heroes.id 
JOIN teams ON heroes_teams.team_id = teams.id 
JOIN races ON heroes.race_id = races.id
AND races.name!='Human'
AND LOCATE('a', heroes.name) > 0
AND heroes.class_role != 'dps'
GROUP BY heroes.name HAVING COUNT(heroes.name) > 1
ORDER BY heroes.id DESC;