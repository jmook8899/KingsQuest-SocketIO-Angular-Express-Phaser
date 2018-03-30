KingsQuest is a 8-bit MMORPG using BrowserQuests open source sprites. On the frontend side, this project uses Angular for the main page, and Phaser, an HTML5 framework for the game itself. Uses Express for the backend and SocketIO for multiplayer gameplay.

-- Features --

As of now, I have implemented user creation(no database entries yet),
a welcome page that disables user input until they click a play button,
a basic chat system for players to interact with one another (similar to Runescape's chat system),
very basic NPC interaction,
click based player movement with an A* pathfinding algorithm library for Phaser with collision detection,
basic zone teleportation (by checking if a players end path is a certain coordinate to teleport them to another coordinate).
Map generated by using BrowserQuest open source sprites with Tiled, a map generating application.