-- Drop tables if they exist (order matters because of foreign keys)
DROP TABLE IF EXISTS Reviews;
DROP TABLE IF EXISTS Games;
DROP TABLE IF EXISTS AppUsers;
DROP TABLE IF EXISTS App_Users;

-- Create Users table
CREATE TABLE AppUsers (
    AppUserId INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Email VARCHAR(255) NOT NULL UNIQUE,
    First VARCHAR(255),
    Last VARCHAR(255),
    Birthday DATE,
    Country VARCHAR(255),
    Age INT,
    Location VARCHAR(255)
);

-- Create Games table
CREATE TABLE Games (
    GameId INT PRIMARY KEY,
    Release DATE,
    Name VARCHAR(255),
    Genre VARCHAR(255),         -- storing array values as comma-separated strings
    Summary VARCHAR(2000),
    Storyline VARCHAR(2000),
    Rating FLOAT,
    RatingCount VARCHAR(50),
    Franchise VARCHAR(255),
    Publishers VARCHAR(255),    -- comma-separated if multiple
    Developers VARCHAR(255),    -- comma-separated if multiple
    GameEngine VARCHAR(255),
    CoverURL VARCHAR(512),
    Themes VARCHAR(255),        -- comma-separated if multiple
    Category VARCHAR(255),
    Keywords VARCHAR(255),      -- comma-separated if multiple
    GameModes VARCHAR(255)      -- comma-separated if multiple
);

-- Create Reviews table with composite primary key & foreign keys
CREATE TABLE Reviews (
    GameId INT,
    AppUserId INT,
    Review VARCHAR(2000),
    Ratings INT,
    Hours FLOAT,
    DateStarted DATE,
    DateFinished DATE,
    Status INT,
    PRIMARY KEY (GameId, AppUserId),
    CONSTRAINT FK_Reviews_Games
        FOREIGN KEY (GameId)
        REFERENCES Games(GameId),
    CONSTRAINT FK_Reviews_AppUsers
        FOREIGN KEY (AppUserId)
        REFERENCES AppUsers(AppUserId)
        ON DELETE CASCADE
);

------------------------------------------------------------------
-- Seed Data
------------------------------------------------------------------

-- Insert 10 Users
INSERT INTO AppUsers (Email, First, Last, Birthday, Country, Age, Location) VALUES
  ('alice@example.com', 'Alice', 'Smith', '1990-01-15', 'USA', 33, 'New York'),
  ('bob@example.com', 'Bob', 'Johnson', '1985-03-22', 'USA', 38, 'Los Angeles'),
  ('charlie@example.com', 'Charlie', 'Williams', '1992-07-10', 'USA', 31, 'Chicago'),
  ('david@example.com', 'David', 'Brown', '1988-11-05', 'USA', 35, 'Houston'),
  ('emma@example.com', 'Emma', 'Jones', '1995-02-28', 'USA', 28, 'Phoenix'),
  ('frank@example.com', 'Frank', 'Miller', '1980-06-17', 'USA', 43, 'Philadelphia'),
  ('grace@example.com', 'Grace', 'Davis', '1993-09-12', 'USA', 30, 'San Antonio'),
  ('henry@example.com', 'Henry', 'Wilson', '1987-04-03', 'USA', 36, 'San Diego'),
  ('isabella@example.com', 'Isabella', 'Moore', '1991-12-25', 'USA', 32, 'Dallas'),
  ('jack@example.com', 'Jack', 'Taylor', '1989-08-30', 'USA', 34, 'San Jose');

-- Insert 10 Games
INSERT INTO Games (GameId, Release, Name, Genre, Summary, Storyline, Rating, RatingCount, Franchise, Publishers, Developers, GameEngine, CoverURL, Themes, Category, Keywords, GameModes)
VALUES
  (1, '2017-03-03', 'The Legend of Zelda: Breath of the Wild', 'Action-adventure,Open world', 'An expansive adventure in a vast open world.', 'Link awakens to defeat Calamity Ganon.', 9.5, '5000', 'The Legend of Zelda', 'Nintendo', 'Nintendo EPD', 'Proprietary', 'https://example.com/zelda.jpg', 'Fantasy,Adventure', 'Adventure', 'open world,exploration,puzzle', 'Single-player'),
  (2, '2018-04-20', 'God of War', 'Action,Adventure', 'Kratos embarks on a journey with his son in Norse mythology.', 'A father-son journey through dangerous realms.', 9.3, '4000', 'God of War', 'Sony Interactive Entertainment', 'Santa Monica Studio', 'Custom', 'https://example.com/godofwar.jpg', 'Mythology,Action', 'Action', 'action,mythology,boss battles', 'Single-player'),
  (3, '2018-10-26', 'Red Dead Redemption 2', 'Action-adventure,Western', 'A sprawling epic of life as an outlaw.', 'Arthur Morgan''s story in the fading Wild West.', 9.7, '6000', 'Red Dead', 'Rockstar Games', 'Rockstar Studios', 'RAGE', 'https://example.com/rdr2.jpg', 'Western,Crime', 'Open World', 'outlaw,western,story-rich', 'Single-player,Multiplayer'),
  (4, '2015-05-19', 'The Witcher 3: Wild Hunt', 'Action RPG,Open world', 'Geralt of Rivia''s journey in a war-torn fantasy world.', 'A monster hunter searches for his missing ward.', 9.8, '7000', 'The Witcher', 'CD Projekt', 'CD Projekt Red', 'REDengine 3', 'https://example.com/witcher3.jpg', 'Fantasy,Adventure', 'RPG', 'open world,story,choices', 'Single-player'),
  (5, '2017-10-27', 'Super Mario Odyssey', 'Platformer,Adventure', 'Mario explores various kingdoms to rescue Princess Peach.', 'A globe-trotting adventure with Mario.', 9.4, '4500', 'Super Mario', 'Nintendo', 'Nintendo EPD', 'Proprietary', 'https://example.com/marioodyssey.jpg', 'Adventure,Family', 'Platformer', 'platform,exploration,3D', 'Single-player'),
  (6, '2001-11-15', 'Halo: Combat Evolved', 'Shooter,Sci-fi', 'Master Chief battles against alien forces.', 'An epic space war in a futuristic setting.', 9.0, '5500', 'Halo', 'Microsoft Game Studios', 'Bungie', 'Blam', 'https://example.com/halo.jpg', 'Sci-fi,Military', 'Shooter', 'fps,multiplayer,campaign', 'Single-player,Multiplayer'),
  (7, '2011-11-18', 'Minecraft', 'Sandbox,Survival', 'Build and explore an infinite world made of blocks.', 'A creative sandbox with endless possibilities.', 9.2, '10000', 'Minecraft', 'Mojang', 'Mojang Studios', 'Proprietary', 'https://example.com/minecraft.jpg', 'Creativity,Exploration', 'Sandbox', 'building,survival,multiplayer', 'Survival,Creative,Multiplayer'),
  (8, '2017-09-26', 'Fortnite', 'Battle Royale,Shooter', 'A fast-paced battle royale game with building mechanics.', 'Survive against 99 other players.', 8.5, '20000', 'Fortnite', 'Epic Games', 'Epic Games', 'Unreal Engine 4', 'https://example.com/fortnite.jpg', 'Battle Royale,Competition', 'Shooter', 'battle royale,multiplayer,building', 'Multiplayer'),
  (9, '2016-05-24', 'Overwatch', 'Shooter,Team-based', 'A team-based shooter with unique heroes.', 'Heroes battle in dynamic, objective-based gameplay.', 8.8, '8000', 'Overwatch', 'Blizzard Entertainment', 'Blizzard Entertainment', 'Proprietary', 'https://example.com/overwatch.jpg', 'Teamwork,Action', 'Shooter', 'heroes,multiplayer,team', 'Multiplayer'),
  (10, '2020-12-10', 'Cyberpunk 2077', 'Action RPG,Open world', 'A futuristic RPG set in a sprawling metropolis.', 'V navigates the underbelly of a dystopian future.', 7.5, '5000', 'Cyberpunk', 'CD Projekt', 'CD Projekt Red', 'REDengine 4', 'https://example.com/cyberpunk2077.jpg', 'Futuristic,Dystopia', 'RPG', 'open world,cyberpunk,action', 'Single-player');
-- Insert 30 Reviews (composite key: GameId, AppUserId)
INSERT INTO Reviews (GameId, AppUserId, Review, Ratings, Hours, DateStarted, DateFinished, Status) VALUES
  -- User 1
  (1, 1, 'Absolutely breathtaking open world.', 10, 40.5, '2022-01-01', '2022-02-01', 1),
  (4, 1, 'Immersive story and deep choices.', 9, 60.0, '2022-03-01', '2022-04-15', 1),
  (7, 1, 'Endless creativity, fun multiplayer experience.', 8, 120.0, '2022-05-01', '2022-05-20', 1),

  -- User 2
  (2, 2, 'Emotional and powerful, a must-play.', 10, 30.0, '2022-01-10', '2022-02-05', 1),
  (3, 2, 'An epic narrative with rich details.', 9, 50.0, '2022-02-10', '2022-03-20', 1),
  (5, 2, 'Fun and charming, classic Mario magic.', 9, 20.0, '2022-04-01', '2022-04-15', 1),

  -- User 3
  (1, 3, 'Stunning visuals and a living world.', 10, 35.0, '2022-06-01', '2022-07-01', 1),
  (8, 3, 'Intense battles and creative building mechanics.', 8, 25.0, '2022-07-05', '2022-07-20', 1),

  -- User 4
  (6, 4, 'Classic shooter experience with great multiplayer.', 9, 40.0, '2022-08-01', '2022-08-20', 1),
  (9, 4, 'Team-based gameplay that really stands out.', 8, 30.0, '2022-09-01', '2022-09-15', 1),
  (10, 4, 'Ambitious but buggy launch.', 6, 45.0, '2022-10-01', '2022-10-20', 1),

  -- User 5
  (4, 5, 'Deep narrative and compelling characters.', 10, 55.0, '2022-11-01', '2022-12-01', 1),
  (7, 5, 'Great creative outlet with endless possibilities.', 9, 80.0, '2023-01-01', '2023-01-25', 1),

  -- User 6
  (2, 6, 'A refreshing take on mythological action.', 9, 32.0, '2023-02-01', '2023-02-20', 1),
  (5, 6, 'Mario never disappoints.', 9, 18.0, '2023-03-01', '2023-03-15', 1),
  (9, 6, 'Engaging team play and dynamic heroes.', 8, 28.0, '2023-04-01', '2023-04-15', 1),

  -- User 7
  (3, 7, 'A gripping western tale.', 10, 70.0, '2023-05-01', '2023-06-01', 1),
  (8, 7, 'Fast-paced and competitive.', 8, 22.0, '2023-06-05', '2023-06-20', 1),

  -- User 8
  (1, 8, 'A timeless adventure.', 10, 40.0, '2023-07-01', '2023-07-30', 1),
  (4, 8, 'The Witcher at its finest.', 9, 60.0, '2023-08-01', '2023-08-30', 1),
  (10, 8, 'Could have been better with more polish.', 7, 50.0, '2023-09-01', '2023-09-25', 1),

  -- User 9
  (6, 9, 'Classic sci-fi shooter action.', 9, 35.0, '2023-10-01', '2023-10-20', 1),
  (7, 9, 'Innovative sandbox creativity.', 9, 100.0, '2023-11-01', '2023-11-30', 1),

  -- User 10
  (2, 10, 'Immersive action and story.', 10, 28.0, '2023-12-01', '2023-12-20', 1),
  (5, 10, 'Fun, vibrant, and full of surprises.', 9, 22.0, '2024-01-01', '2024-01-15', 1),
  (8, 10, 'A wild and ever-changing battlefield.', 8, 30.0, '2024-02-01', '2024-02-20', 1),
  (10, 10, 'Interesting world but lacking polish.', 7, 42.0, '2024-03-01', '2024-03-15', 1);