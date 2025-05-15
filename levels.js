// levels.js

// Game Level Definitions
// Each object in this array represents a level.
// - name: Display name of the level.
// - time: Time limit in seconds.
// - lemmingsToRelease: Total number of lemmings that will spawn.
// - requiredToSave: Number of lemmings that must reach the exit.
// - releaseRate: Milliseconds between each lemming spawning.
// - entryPoint: {x, y} tile coordinates for where lemmings appear.
// - exitPoint: {x, y} tile coordinates for the level exit.
// - map: An array of strings representing the level's terrain.
//   - '0': Empty space
//   - '1': Solid, indestructible ground
//   - '2': Diggable ground
//   - 'E': Entry point marker (visual only, actual spawn is entryPoint)
//   - 'X': Exit point marker (visual only, actual exit is exitPoint)
// - availableSkills: An object where keys are skill names (e.g., 'digger', 'blocker')
//   and values are the number of times that skill can be used (Infinity for unlimited).

const gameLevels = [
    {
        name: "Level 1: A Simple Stroll",
        time: 60,
        lemmingsToRelease: 3,
        requiredToSave: 2,
        releaseRate: 3000,
        entryPoint: { x: 1, y: 2 }, // Start on the ground
        exitPoint: { x: 10, y: 2 },
        map: [
            //012345678901
            "111111111111", // 0
            "100000000001", // 1
            "1E111111111X1", // 2 (Lemmings walk on this solid line)
            "111111111111", // 3
        ],
        availableSkills: {
            'digger': 0, // No diggers needed, or give one for experimentation
            // 'floater': 0, 'bomber': 0, 'blocker': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 2: The First Drop",
        time: 90,
        lemmingsToRelease: 5,
        requiredToSave: 3,
        releaseRate: 2500,
        entryPoint: { x: 1, y: 1 }, // Start on a platform
        exitPoint: { x: 1, y: 5 },  // Exit directly below
        map: [
            //0123
            "1111", // 0
            "1E01", // 1 (Platform)
            "1221", // 2 (Diggable section)
            "1001", // 3 (Empty space to fall through)
            "1001", // 4 (Empty space)
            "1X01", // 5 (Exit platform)
            "1111", // 6
        ],
        availableSkills: {
            'digger': 3,
        }
    },
    {
        name: "Level 3: Digging Past Obstacles",
        time: 120,
        lemmingsToRelease: 8,
        requiredToSave: 5,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 13, y: 1 }, // Exit on the same level, but past a wall
        map: [
            //012345678901234
            "111111111111111", // 0
            "1E00011100000X1", // 1 (Path -> Wall -> Path -> Exit)
            "122221112222221", // 2 (Diggable layer under the path and wall)
            "111111111111111", // 3
        ],
        availableSkills: {
            'digger': 5, // Enough to dig under the wall section
            // Note: This level still uses vertical diggers.
            // To "dig through a wall" horizontally would require a 'Basher' or 'Miner'.
            // This design has them dig *down* to get past the wall.
        }
    },
    {
        name: "Level 4: Block and Dig", // (This was previously Level 3)
        time: 120,
        lemmingsToRelease: 10,
        requiredToSave: 6,
        releaseRate: 1800,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 13, y: 13 },
        map: [
            //012345678901234
            "111111111111111", //0
            "1E0000000000001", //1
            "122222222222221", //2
            "100000000000001", //3
            "101111111111001", //4
            "100000000001001", //5
            "111112222201001", //6
            "100000000001001", //7
            "100111111111001", //8
            "100100000000001", //9
            "100100222222221", //10
            "100100000000001", //11
            "100111111111101", //12
            "1000000000000X1", //13
            "111111111111111", //14
        ],
        availableSkills: {
            'digger': 6,
            'blocker': 3,
        }
    },
    {
        name: "Level 5: Bridge the Gap", // (This was previously Level 4)
        time: 150,
        lemmingsToRelease: 12,
        requiredToSave: 8,
        releaseRate: 1500,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 3 }, // Changed exit to be more accessible with a bridge
        map: [
            //01234567890123456789
            "11111111111111111111", //0
            "1E000000000000000001", //1 Start platform
            "12222200000000002221", //2 Gap in the middle, ends are diggable
            "111111000000000011X1", //3 Exit platform
            "11111111111111111111", //4 Solid base
        ],
        availableSkills: {
            'builder': 10, // Focus on builder
            'digger': 2,   // Maybe a small initial dig needed
            'blocker': 2,
        }
    },
 {
        name: "Level 6: Bashful Beginnings",
        time: 100,
        lemmingsToRelease: 5,
        requiredToSave: 3,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 10, y: 1 },
        map: [
            //012345678901
            "111111111111", //0
            "1E022222220X1", //1 (Path -> Bashable Wall -> Path -> Exit)
            "111111111111", //2
        ],
        availableSkills: {
            'basher': 5,
        }
    },
    {
        name: "Level 7: Bash and Drop",
        time: 120,
        lemmingsToRelease: 8,
        requiredToSave: 5,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 8, y: 5 },
        map: [
            //0123456789
            "1111111111", //0
            "1E02220001", //1
            "1111120001", //2
            "1000020001", //3
            "1000022201", //4
            "10000000X1", //5
            "1111111111", //6
        ],
        availableSkills: {
            'basher': 6,
            'digger': 3,
        }
    },
    {
        name: "Level 8: Miner Adjustments",
        time: 100,
        lemmingsToRelease: 5,
        requiredToSave: 3,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 6, y: 4 },
        map: [
            //01234567
            "11111111", //0
            "1E000001", //1
            "12222201", //2 (Mine diagonally through this)
            "10000201", //3
            "100000X1", //4
            "11111111", //5
        ],
        availableSkills: {
            'miner': 5,
        }
    },
    {
        name: "Level 9: Mine, Bash, Drop!",
        time: 180,
        lemmingsToRelease: 10,
        requiredToSave: 7,
        releaseRate: 1800,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 12, y: 6 },
        map: [
            //01234567890123
            "11111111111111", //0
            "1E002220000001", //1
            "11111120111101", //2
            "10000020100101", //3
            "10222220100101", //4
            "10000000100101", //5
            "111111111000X1", //6
            "11111111111111", //7
        ],
        availableSkills: {
            'miner': 4,
            'basher': 4,
            'digger': 4,
            'blocker': 2,
        }
    },
    {
        name: "Level 10: Gentle Descent",
        time: 90,
        lemmingsToRelease: 5,
        requiredToSave: 4,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 1, y: 10 },
        map: [
            //0123
            "1111", //0
            "1E01", //1
            "1001", //2
            "1001", //3
            "1001", //4
            "1001", //5
            "1001", //6
            "1001", //7
            "1001", //8
            "1001", //9
            "1X01", //10
            "1111", //11
        ],
        availableSkills: {
            'floater': 5, // All lemmings must be floaters
        }
    },
    {
        name: "Level 11: Float and Dig",
        time: 150,
        lemmingsToRelease: 8,
        requiredToSave: 5,
        releaseRate: 1800,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 10, y: 10 },
        map: [
            //012345678901
            "111111111111", //0
            "1E0000000001", //1
            "100000000001", //2
            "100111111001", //3
            "100122221001", //4 (Dig through here after floating down)
            "100100001001", //5
            "100100001001", //6
            "100000000001", //7
            "100000000001", //8
            "122222222221", //9
            "1X0000000001", //10
            "111111111111", //11
        ],
        availableSkills: {
            'floater': 8,
            'digger': 5,
        }
    },
    {
        name: "Level 12: Bombs Away!",
        time: 120,
        lemmingsToRelease: 10,
        requiredToSave: 1, // Only need one survivor after the blast
        releaseRate: 1500,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 8, y: 1 },
        map: [
            //0123456789
            "1111111111", //0
            "1E0111110X1", //1 (Indestructible wall in the middle)
            "12222222221", //2
            "1111111111", //3
        ],
        availableSkills: {
            'bomber': 3, // Need to bomb the '1's
            'blocker': 2, // To stop others from walking into blast
        }
    },
    {
        name: "Level 13: Strategic Demolition",
        time: 180,
        lemmingsToRelease: 15,
        requiredToSave: 8,
        releaseRate: 1500,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 13, y: 7 },
        map: [
            //012345678901234
            "111111111111111", //0
            "1E0000000000001", //1
            "111221111122111", //2 (Bomb sections or dig carefully)
            "100000000000001", //3
            "101111111111101", //4
            "101222222222101", //5
            "101000000000101", //6
            "1011111111111X1", //7
            "111111111111111", //8
        ],
        availableSkills: {
            'bomber': 5,
            'digger': 10,
            'blocker': 4,
        }
    },
    {
        name: "Level 14: The Gauntlet",
        time: 240,
        lemmingsToRelease: 20,
        requiredToSave: 10,
        releaseRate: 1000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 10 },
        map: [
            //01234567890123456789
            "11111111111111111111", //0
            "1E000000000000000001", //1
            "12211122111221112221", //2 Series of small walls and dig spots
            "10000000000000000001", //3 Long drop
            "11111222222222111111", //4 Dig platform
            "10000000000000000001", //5 Another drop
            "10011111111111111001", //6
            "10012220002222221001", //7
            "10010000000000001001", //8
            "10011111221111111001", //9
            "100000000000000000X1", //10
            "11111111111111111111", //11
        ],
        availableSkills: {
            'digger': 15,
            'builder': 10,
            'blocker': 5,
            'floater': 10, // For the drops
            'basher': 5,
        }
    },
    {
        name: "Level 15: Final Ascent",
        time: 300,
        lemmingsToRelease: 25,
        requiredToSave: 15,
        releaseRate: 1000,
        entryPoint: { x: 1, y: 13 }, // Start at the bottom
        exitPoint: { x: 18, y: 1 },  // Exit at the top right
        map: [
            //01234567890123456789
            "111111111111111111X1", //0
            "10000000000000000001", //1
            "10111110011111111001", //2
            "10100010010000001001", //3
            "10102210010111101001", //4
            "10100010010100101001", //5
            "10111110010100101001", //6
            "10000000010100101001", //7
            "11111111110100101001", //8
            "10000000000100101001", //9
            "10222222222100101001", //10
            "10000000000000101001", //11
            "11111111111111101001", //12
            "1E000000000000000001", //13
            "11111111111111111111", //14
        ],
        availableSkills: {
            'builder': 20,
            'digger': 10,
            'miner': 10,
            'basher': 10,
            'blocker': 8,
            'bomber': 3,  // For tight spots or indestructible errors
            'floater': 5, // In case of accidental long falls from building
        }
    },

        {
        name: "Level 1: The First March",
        time: 60,
        lemmingsToRelease: 5,
        requiredToSave: 3,
        releaseRate: 2500,
        entryPoint: { x: 1, y: 1 }, // Top-leftish
        exitPoint: { x: 13, y: 1 }, // Top-rightish
        map: [
            //012345678901234
            "111111111111111", // 0
            "1E00000000000X1", // 1 (Entry and Exit on same level)
            "122222222222221", // 2 (A diggable floor for fun, not required)
            "111111111111111", // 3
        ],
        availableSkills: {
            'digger': 3, // Give a few just in case they want to play around
            // 'floater': 0, 'bomber': 0, 'blocker': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
        {
        name: "Level 2: Dig Down, Drop In",
        time: 90,
        lemmingsToRelease: 8,
        requiredToSave: 5,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 10, y: 7 },
        map: [
            //0123456789012
            "1111111111111", // 0
            "1E00000000001", // 1 Lemmings start here
            "1222222222221", // 2 First diggable layer
            "1000000000001", // 3 Gap
            "1222222222221", // 4 Second diggable layer (optional to dig through)
            "1000000000001", // 5 Gap
            "1111111111001", // 6 Lower platform
            "1000000000X01", // 7 Exit on this platform
            "1222222222221", // 8 Solid ground below exit path
            "1111111111111", // 9
        ],
        availableSkills: {
            'digger': 10, // Plenty for digging
            // 'floater': 0, 'bomber': 0, 'blocker': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
        {
        name: "Level 3: Through the Wall",
        time: 120,
        lemmingsToRelease: 10,
        requiredToSave: 6,
        releaseRate: 1800,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 13, y: 1 },
        map: [
            //012345678901234
            "111111111111111", //0
            "1E00020000000X1", //1 Lemmings walk, hit diggable wall ('2'), then to exit
            "122222222222221", //2 Solid floor
            "111111111111111", //3
        ],
        availableSkills: {
            'digger': 5, // For the wall. Since digger only digs down, this implies a "Basher" or "Miner" is needed.
                         // Or, the level design needs a pit before the wall that a Digger can make.
                         // Let's adjust for Digger-only focus for now.
            // 'blocker': 0, 'floater': 0, 'bomber': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 1: The Drop",
        time: 60,
        lemmingsToRelease: 5,
        requiredToSave: 3,
        releaseRate: 2500,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 10, y: 10 },
        map: [
            //0123456789012
            "1111111111111", // 0
            "1E00000000001", // 1
            "1222222222201", // 2
            "1000000000201", // 3
            "1011111111201", // 4
            "1010000001201", // 5
            "1010111101201", // 6
            "1010100101201", // 7
            "1010100101201", // 8
            "1010000000201", // 9
            "10222222222X1", // 10
            "1111111111111", // 11
        ],
        availableSkills: {
            'digger': 5,
            // 'floater': 0, 'bomber': 0, 'blocker': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 2: Two Paths",
        time: 90,
        lemmingsToRelease: 8,
        requiredToSave: 5,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 11 },
        map: [
            //01234567890123456789
            "11111111111111111111", // 0
            "1E000000000000000001", // 1
            "12222211122222222221", // 2
            "10000011100000000001", // 3
            "10000011100000000001", // 4
            "12222200022222111101", // 5
            "10000000000000100101", // 6
            "10000022200000100101", // 7
            "11111100011111100101", // 8
            "10000000000000000101", // 9
            "10000000000000000101", // 10
            "122222222222222222X1", // 11
            "11111111111111111111", // 12
        ],
        availableSkills: {
            'digger': 8,
            // 'floater': 0, 'bomber': 0, 'blocker': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 3: Block and Dig",
        time: 120,
        lemmingsToRelease: 10,
        requiredToSave: 6,
        releaseRate: 1800,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 13, y: 13 },
        map: [
            //012345678901234
            "111111111111111", //0
            "1E0000000000001", //1
            "122222222222221", //2
            "100000000000001", //3
            "101111111111001", //4
            "100000000001001", //5
            "111112222201001", //6
            "100000000001001", //7
            "100111111111001", //8
            "100100000000001", //9
            "100100222222221", //10
            "100100000000001", //11
            "100111111111101", //12
            "1000000000000X1", //13
            "111111111111111", //14
        ],
        availableSkills: {
            'digger': 6,
            'blocker': 3,
            // 'floater': 0, 'bomber': 0, 'builder': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 4: Bridge the Gap",
        time: 150,
        lemmingsToRelease: 12,
        requiredToSave: 8,
        releaseRate: 1500,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 3 },
        map: [
            //01234567890123456789
            "11111111111111111111", //0
            "1E0000000000000000X1", //1
            "122222100000000122221", //2
            "100000100000000100001", //3
            "100000100000000100001", //4
            "100000111111111100001", //5
            "122222000000000022221", //6
            "100000000000000000001", //7
            "11111111111111111111", //8
        ],
        availableSkills: {
            'digger': 4, // Maybe to dig out of start or a small pit
            'builder': 10,
            'blocker': 2,
            // 'floater': 0, 'bomber': 0, 'basher': 0, 'miner': 0
        }
    },
    {
        name: "Level 5: The Gauntlet",
        time: 240,
        lemmingsToRelease: 20,
        requiredToSave: 10,
        releaseRate: 1000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 10 },
        map: [
            //01234567890123456789
            "11111111111111111111", //0
            "1E000000000000000001", //1
            "12211122111221112221", //2 Series of small walls and dig spots
            "10000000000000000001", //3 Long drop
            "11111222222222111111", //4 Dig platform
            "10000000000000000001", //5 Another drop
            "10011111111111111001", //6
            "10012220002222221001", //7
            "10010000000000001001", //8
            "10011111221111111001", //9
            "100000000000000X001", //10 Exit on this platform
            "11111111111111111111", //11 Solid base below exit path
        ],
        availableSkills: {
            'digger': 15,
            'builder': 10,
            'blocker': 5,
            'floater': 10, // For the drops
            'basher': 5,
        }
    },
    {
        name: "Level 6: The Final Ascent",
        time: 300,
        lemmingsToRelease: 25,
        requiredToSave: 15,
        releaseRate: 1000,
        entryPoint: { x: 1, y: 13 }, // Start at the bottom
        exitPoint: { x: 18, y: 1 },  // Exit at the top right
        map: [
            //01234567890123456789
            "111111111111111111X1", //0
            "10000000000000000001", //1
            "10111110011111111001", //2
            "10100010010000001001", //3
            "10102210010111101001", //4
            "10100010010100101001", //5
            "10111110010100101001", //6
            "10000000010100101001", //7
            "11111111110100101001", //8
            "10000000000100101001", //9
            "10222222222100101001", //10
            "10000000000000101001", //11
            "11111111111111101001", //12
            "1E000000000000000001", //13
            "11111111111111111111", //14
        ],
        availableSkills: {
            'builder': 20,
            'digger': 10,
            'miner': 10,
            'basher': 10,
            'blocker': 8,
            'bomber': 3,  // For tight spots or indestructible errors
            'floater': 5, // In case of accidental long falls from building
        }
    },
        {
        name: "Level 16: Precision Bombing",
        time: 180,
        lemmingsToRelease: 10,
        requiredToSave: 5,
        releaseRate: 2000,
        entryPoint: { x: 1, y: 1 },
        exitPoint: { x: 18, y: 1 },
        map: [
            //01234567890123456789
            "11111111111111111111", //0
            "1E00111000111000110X1", //1 Requires precise bombing of '1's
            "122211122211122211221", //2 Diggable underneath for safety/alternative
            "11111111111111111111", //3
        ],
        availableSkills: {
            'bomber': 4,  // Limited bombs
            'blocker': 6, // To protect groups from blasts or guide them
            'digger': 5,  // To make safe pits or alternative routes
        }
    },
    // Add more levels here, gradually introducing 'miner', 'basher', 'floater', 'bomber'
    // and combining them in interesting ways.
];
