USE ucode_web;
INSERT INTO powers (name, type)
VALUES
('bloody fist', 'attack'),
('iron shield', 'defense'),
('power1', 'attack'),
('power2', 'attack'),
('power3', 'defense'),
('power4', 'attack'),
('power5', 'attack'),
('power6', 'defense'),
('power7', 'defense'),
('power8', 'attack'),
('power9', 'defense');

INSERT INTO races (name)
VALUES
('Human'),
('Kree'),
('Race1'),
('Jopa'),
('Race2'),
('Nos'),
('Uho'),
('Race3'),
('Nechto');

INSERT INTO teams (name)
VALUES
('Avengers'),
('Hydra'),
('Girls'),
('Boys'),
('Dudes');

SET FOREIGN_KEY_CHECKS=0;
UPDATE heroes SET race_id = 4 WHERE id = 1;
UPDATE heroes SET race_id = 4 WHERE id = 2;
UPDATE heroes SET race_id = 2 WHERE id = 3;
UPDATE heroes SET race_id = 1 WHERE id = 4;
UPDATE heroes SET race_id = 3 WHERE id = 5;
UPDATE heroes SET race_id = 5 WHERE id = 6;
UPDATE heroes SET race_id = 9 WHERE id = 7;
UPDATE heroes SET race_id = 2 WHERE id = 8;
UPDATE heroes SET race_id = 5 WHERE id = 9;
UPDATE heroes SET race_id = 7 WHERE id = 10;
UPDATE heroes SET race_id = 10 WHERE id = 11;
SET FOREIGN_KEY_CHECKS=1;

INSERT INTO heroes_teams (hero_id, team_id)
VALUES
(1, 1),
(2, 1),
(4, 1),
(10, 2),
(11, 2),
(9, 2),
(1, 2),
(3, 4),
(5, 4),
(6, 4);

INSERT INTO heroes_powers (hero_id, power_id, power_points)
VALUES
(1, 2, 200),
(2, 1, 110),
(9, 1, 110),
(10, 3, 40),
(11, 4, 160),
(4, 5, 170),
(6, 4, 90),
(7, 6, 130),
(5, 7, 105),
(3, 9, 110),
(8, 11, 145);




