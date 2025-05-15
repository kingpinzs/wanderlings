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
    // Add more levels here, gradually introducing 'miner', 'basher', 'floater', 'bomber'
    // and combining them in interesting ways.
];
