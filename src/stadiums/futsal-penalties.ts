export const FutsalPenalties: string = `{

	"name" : "Futsal penalties",

	"width" : 630,

	"height" : 500,

	"spawnDistance" : 200,

	"bg" : { "type" : "hockey", "width" : 200, "height" : 340, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "trait" : "line", "x" : 200, "y" : -280, "curve" : -90 },
		/* 1 */ { "trait" : "line", "x" : 0, "y" : -100, "curve" : 0 },
		/* 2 */ { "trait" : "line", "x" : 200, "y" : 280, "curve" : 90 },
		/* 3 */ { "trait" : "line", "x" : 0, "y" : 100, "curve" : 0 },
		/* 4 */ { "bCoef" : 0, "trait" : "line", "x" : 170, "y" : -340, "curve" : -90 },
		/* 5 */ { "bCoef" : 0, "trait" : "line", "x" : 200, "y" : -310, "curve" : -90 },
		/* 6 */ { "bCoef" : 0, "trait" : "line", "x" : 170, "y" : 340, "curve" : 90 },
		/* 7 */ { "bCoef" : 0, "trait" : "line", "x" : 200, "y" : 310, "curve" : 90 },
		/* 8 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 220, "y" : -100, "p0" : [210,100 ], "p1" : [210,-100 ] },
		/* 9 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 190, "y" : -100, "p0" : [210,100 ], "p1" : [210,-100 ], "curve" : -45, "_selected" : "segment" },
		/* 10 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 190, "y" : 100, "p0" : [210,100 ], "p1" : [210,-100 ], "curve" : -45, "_selected" : "segment" },
		/* 11 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 220, "y" : 100, "p0" : [210,100 ], "p1" : [210,-100 ] },
		/* 12 */ { "bCoef" : -0.1, "trait" : "line", "x" : 0, "y" : -340, "cMask" : ["red" ], "curve" : 20, "vis" : false, "color" : "000000" },
		/* 13 */ { "bCoef" : -0.1, "trait" : "line", "x" : 0, "y" : 340, "cMask" : ["red" ], "curve" : 20, "vis" : false, "color" : "000000" },
		/* 14 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -2.8 },
		/* 15 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 0.8 },
		/* 16 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -2.8, "curve" : 90 },
		/* 17 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 0.8, "curve" : 90 },
		/* 18 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -2.8, "curve" : -90 },
		/* 19 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 0.8, "curve" : -90 },
		/* 20 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -2.8, "curve" : -180 },
		/* 21 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 0.8, "curve" : -180 },
		/* 22 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -2.8, "curve" : 180 },
		/* 23 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 0.8, "curve" : 180 },

		/* 24 */ { "bCoef" : -2.45, "cMask" : ["ball" ], "x" : 225, "y" : 130, "curve" : -30, "color" : "000000" },
		/* 25 */ { "bCoef" : -2.45, "cMask" : ["ball" ], "x" : 225, "y" : 190, "curve" : -30, "color" : "000000" },
		/* 26 */ { "bCoef" : -2.45, "cMask" : ["ball" ], "x" : 225, "y" : -190, "curve" : -30, "color" : "000000" },
		/* 27 */ { "bCoef" : -2.45, "cMask" : ["ball" ], "x" : 225, "y" : -130, "curve" : -30, "color" : "000000" },

		/* 28 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 0, "y" : -340, "color" : "888888", "curve" : 0 },
		/* 29 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 0, "y" : -100, "color" : "888888", "curve" : 0 },
		/* 30 */ { "bCoef" : 0, "trait" : "line", "x" : 210, "y" : 340, "curve" : 30, "color" : "000000" },
		/* 31 */ { "bCoef" : 0, "trait" : "line", "x" : 240, "y" : 320, "curve" : 30, "color" : "000000" },
		/* 32 */ { "bCoef" : 0, "trait" : "line", "x" : 210, "y" : -335, "curve" : -30, "color" : "000000" },
		/* 33 */ { "bCoef" : 0, "trait" : "line", "x" : 240, "y" : -320, "curve" : -30, "color" : "000000" },
		/* 34 */ { "trait" : "line", "x" : -200, "y" : -340, "curve" : 0 },
		/* 35 */ { "trait" : "line", "x" : 200, "y" : -340, "curve" : 0 },
		/* 36 */ { "trait" : "line", "x" : -200, "y" : 340, "curve" : 0 },
		/* 37 */ { "trait" : "line", "x" : 200, "y" : 340, "curve" : 0 },
		/* 38 */ { "trait" : "line", "x" : -200, "y" : 340, "curve" : 0 },
		/* 39 */ { "trait" : "line", "x" : 200, "y" : -340, "curve" : 0 },
		/* 40 */ { "trait" : "line", "x" : 200, "y" : 340, "curve" : 0 },
		/* 41 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 0, "y" : 102, "color" : "888888", "curve" : 0 },
		/* 42 */ { "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "x" : 0, "y" : 340, "color" : "888888", "curve" : 0 },

		/* 43 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 200, "y" : -100.533340454 },
		/* 44 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 260, "y" : -100 },
		/* 45 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 200, "y" : 100 },
		/* 46 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 260, "y" : 100 },
		/* 47 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 260, "y" : -100 },
		/* 48 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 260, "y" : 100 }

	],

	"segments" : [
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 0, "v1" : 1, "curve" : -90 },
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 2, "v1" : 3, "curve" : 90 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 1, "v1" : 3, "curve" : 0, "x" : 80 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 4, "v1" : 5, "curve" : -90 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 6, "v1" : 7, "curve" : 90 },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 8, "v1" : 9, "y" : -80, "p0" : [210,100 ], "p1" : [210,-100 ] },
		{ "curve" : -45, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 9, "v1" : 10, "x" : 215, "p0" : [210,100 ], "p1" : [210,-100 ], "_selected" : true },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 10, "v1" : 11, "y" : 80, "p0" : [210,100 ], "p1" : [210,-100 ] },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 11, "v1" : 8, "x" : 245, "p0" : [210,100 ], "p1" : [210,-100 ] },

		{ "vis" : false, "bCoef" : -0.1, "cMask" : ["red" ], "v0" : 12, "v1" : 13, "curve" : 17.2316542913 },

		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 14, "v1" : 15, "x" : 0 },
		{ "curve" : 90, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 16, "v1" : 17, "x" : 0 },
		{ "curve" : -90, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 18, "v1" : 19, "x" : 0 },
		{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 20, "v1" : 21, "x" : 0 },
		{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 22, "v1" : 23, "x" : 0 },

		{ "curve" : -30, "vis" : true, "color" : "000000", "bCoef" : -4, "cMask" : ["ball" ], "v0" : 24, "v1" : 25, "x" : 170 },
		{ "curve" : -30, "vis" : true, "color" : "000000", "bCoef" : -4, "cMask" : ["ball" ], "v0" : 26, "v1" : 27, "x" : 170 },

		{ "curve" : 0, "vis" : true, "color" : "888888", "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 28, "v1" : 29, "x" : 0 },
		{ "curve" : 30, "vis" : true, "color" : "000000", "bCoef" : 0, "trait" : "line", "v0" : 30, "v1" : 31 },
		{ "color" : "000000", "bCoef" : 0, "trait" : "line", "v0" : 32, "v1" : 33, "curve" : -30 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 34, "v1" : 35, "curve" : 0, "x" : 80 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 36, "v1" : 37, "curve" : 0, "x" : 80 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 39, "v1" : 40, "curve" : 0, "x" : 80 },
		{ "curve" : 0, "vis" : true, "color" : "888888", "bCoef" : 0, "cMask" : ["blue" ], "trait" : "line", "v0" : 41, "v1" : 42, "x" : 0 },

		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 43, "v1" : 44 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 45, "v1" : 46 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 47, "v1" : 48 }

	],

	"goals" : [
		{ "p0" : [210,100 ], "p1" : [210,-100 ], "team" : "blue" },

		{ "team" : "red", "p0" : [200,-102.533340454 ], "p1" : [-1,-102.533340454 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [-1,-102.533340454 ], "p1" : [0,-23.5333404541 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [-1,-24.5333404541 ], "p1" : [-15,-21.5333404541 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [-15,-21.5333404541 ], "p1" : [-15,11.4666595459 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [-15,11.4666595459 ], "p1" : [-4,18.4666595459 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [-3,18.4666595459 ], "p1" : [0,99.4666595459 ], "trait" : "goalNet" },
		{ "team" : "red", "p0" : [0,99.4666595459 ], "p1" : [200,101.466659546 ], "trait" : "goalNet" }

	],

	"discs" : [
		{ "pos" : [200,100 ], "trait" : "goalPost", "color" : "FFFFFF", "bCoef" : 1, "radius" : 5 },
		{ "pos" : [200,-100 ], "trait" : "goalPost", "color" : "FFFFFF", "bCoef" : 1, "radius" : 5 },

		{ "radius" : 3, "pos" : [200,-340 ], "color" : "FFFF55", "bCoef" : 0, "trait" : "line" },
		{ "radius" : 3, "pos" : [200,340 ], "color" : "FFFF55", "bCoef" : 0, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -370, "trait" : "ballArea", "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -370, "trait" : "ballArea", "cMask" : ["all" ] },

		{ "normal" : [0,1 ], "dist" : -406, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -409, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -223, "bCoef" : 0.1, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -260, "bCoef" : 0.1 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.1,
		"kickStrength" : 5,
		"bCoef" : 0.45

	},

	"ballPhysics" : {
		"radius" : 8,
		"color" : "6ED548",
		"bCoef" : 0.45

	}
}`;
