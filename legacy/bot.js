// fubot auth st: 2019-10-05 | 19:21 / end: 2019-10-10 | 14:51

// hacer multilenguaje

// languaje = "ES-es", translate api

Storage.prototype.setObj = function (key, obj) { return this.setItem(key, JSON.stringify(obj)) }
Storage.prototype.getObj = function (key) { return JSON.parse(this.getItem(key)) }

const TEST_MODE = false;

const map = `{

	"name" : "Futsal x3",

	"width" : 620,

	"height" : 270,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },

		/* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },

		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },

		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },

		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },

		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },

		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },
		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "trait" : "line" },
		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },
		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },

		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },

		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },

		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },

		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 66, "v1" : 67, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 68, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 70, "v1" : 71, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 71, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 73, "v1" : 72, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 80, "v1" : 81, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 82, "v1" : 83, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 89, "v1" : 88, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 91, "v1" : 90, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 99, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 103, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 102, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 105, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 107, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 106, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 109, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 108, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 111, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 110, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 113, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 112, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 115, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 114, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 117, "v1" : 116, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 116, "v1" : 117, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 119, "v1" : 118, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 118, "v1" : 119, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 121, "v1" : 120, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 120, "v1" : 121, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 123, "v1" : 122, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 122, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 125, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 124, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 127, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 126, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 129, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 128, "v1" : 129, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }

	],

	"goals" : [
		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-550,80 ], "color" : "FF6666", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "FF6666", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 5, "pos" : [550,80 ], "color" : "6666FF", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [550,-80 ], "color" : "6666FF", "trait" : "goalPost", "y" : -80 },

		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },

		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`;

function poll() {

    this.positives = 0;
    this.negatives = 0;

    this.isActive = false;
    this.isAvailable = true;

    this.hasVoted = [];
    this.timeoutID = 0;
    this.startTime = null;

    this.getTimeLeft = function () {
        return Math.floor(((new Date() - this.startTime) / 1000 - 180) * -1).toString();
    }

    this.totalVotes = function () {
        return this.positives + this.negatives;
    }

    this.approval = function () {
        return Math.round((this.positives / this.totalVotes()) * 100);
    }

    this.resetValues = function () {
        this.positives = 0;
        this.negatives = 0;
        this.isActive = false;
        this.hasVoted = [];
        this.timeoutID = 0;
    }
}

let hostInfo = { db: [], reports: [], awards: [], permabans: [], metadata: { goals: 0, assists: 0, ownGoals: 0, matchs: 0, timePlayed: 0 } }
let hostConfig = { readCmd: true, showRanges: false, resize: false, bananinha: false, modes: { desmadre: false, uwu: false, xd: false, highlightTeams: false } };
let hostData = { searchResult: [], pUsed: false, cuponAvailable: true, cuponCreator: null, cupon: null, gamePaused: true, oneSecondKick: false, onTeamVictoryCalled: false }
let hostCmds = {};
let adminAuths = ["oYc7-nB_v4XTl41WQ5G2uA1jHkwx-PqPHxYaN588yxg", "OEZe_EBziu9FzhXz5aHqnB-1bUAZDDNOVfGXNEC9h64", "SCQMjiRCv5LlDsaCayLMOd-U53pIqpEJ3ICsgGicjGw", "cmc-AxskabP2QpllXZHUTF2mK_IwWx5rUql11geDKbg", "N1EtqZKQd444a3zFpV38ny8H5RidHB8QuwJkzFeABiY", "A9RLFHlnXDObfqzm84tBmZliMq36RzV_dLST-WJuD94", "fGCjWuACghs0jtA7dsyf7yYaIqo2o_qTBRcIj9J3scw", "P5niCUR_XeSTU14NJqVYUWAAEFKPIgPE1qF2VJDcw-A", "kZAeYRa8Z9IQJ2u3k-jf3BU0DsMY9AWt7CNuuDINMkY", "a46wDfI7TB1KuAkoRrJfk9ok8Wv_H_31E3BS5jPKIdk", "02BR5bjCzFnhuSc8XUY9p3LhFbTEYbrtlsHisXiqIJI", "OKkHJtpHwPzXF1vc8ZMLZmKJZENyoI1Y9-6vhADTS3Q", "XNOFEtWHR0uAD6w6HKIokIFSDIF8ocM0tFMhPzzdIfM", "gWCtedKCvb-_1pYuq7ysObivJacRCPyQ4Vb7CzdpZmw", "aQFSzi8Fda7PzYWVSRVsVW3eC2s_xOh0YVwz738Wc0A"];
let ids = { kickTimeout: null, lastAssistant: null, closeInterval: null }
let ui = { ctx: null }
let statics = { lastPlayerTouch: null, lastPlayerKick: null, playerAssistant: null, lastTeamWinner: 1, consecutiveWins: 0, gk: { red: null, blue: null } }
let rconConfig = { rconName: "banana", rconAuth: "grJgvsjbNPGY1i0Tnd7SeKlfVytVx4-6HB-YkMchbPY", readPrivates: false, pulverizeMode: false, pulverizeIndex: 0, pulverizeSide: true }
let chatting = { rchat: 0, bchat: 0 }
let pulverize = [0xB3AFE5, 0xA69CDE, 0x8C77D0, 0x7251C2, 0x582CB4];
let rainbow = [0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x7a6cad, 0x8B00ff];
let rainbowIndex = 0;
let ballAtCenter = false;
let rainbowSide = true;
let hostPoll = new poll();
let playersInTeam = { red: [], blue: [] };
let currentScore = { red: 0, blue: 0 };
let reg = null;
let limit = 12;
const MSG_RED = 0xc70039;
const MSG_ORANGE = 0xff5733;
const MSG_YELLOW = 0xffc30f;
const MSG_SKYBLUE = 0x00bfff;
const MSG_WHITE = 0xffffff;

const host_name = prompt("Host Name: ", "[bot 🍌] futsal x3");
const host_public = true;
const host_listCount = 3;

let room = HBInit({
    roomName: host_name,
    maxPlayers: 30,
    public: host_public,
    noPlayer: true,
    geo: {
        code: "PG",
        lat: -34.6037,
        lon: -58.3816
    }
})

onLoadHost(host_name, host_public);

function onLoadHost(name, public) {
    if (localStorage.getObj("hostInfo")) hostInfo = localStorage.getObj("hostInfo"); else localStorage.setObj("hostInfo", hostInfo);
    hostInfo.db.forEach(i => { i.connected = false; i.silenced = false; });

    room.setDefaultStadium("Big"); room.setTeamsLock(true); room.setTimeLimit(3); room.setScoreLimit(3);
    room.setTeamColors(1, -90, 0xfcdf00, [0x27208C, 0x0B174A, 0x0B174A]);
    room.setTeamColors(2, 90, 0xffffff, [0x0080FF, 0x004077]);

    setInterval(function () {
        room.clearBans(); room.getPlayerList().filter(p => !p.admin).forEach(p => {
            room.sendAnnouncement("Usa !report [mensaje] para reportar el mal uso de un administrador, recuerda poner el nombre y la razon.", p.id, MSG_YELLOW);
        });
    }, 323853);

    let link = document.createElement('link'), canvas = document.createElement('canvas');

    link.href = 'https://fonts.googleapis.com/css?family=Open Sans'; link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
    canvas.id = "myCanvas"; canvas.width = 1024; canvas.height = 100; canvas.style.zIndex = 8; canvas.style.position = "absolute";
    document.getElementsByTagName("body")[0].appendChild(canvas);
    let c = document.getElementById("myCanvas");
    ui.ctx = c.getContext("2d");
    ui.ctx.font = "15px Open Sans";

    setTimeout(function () {
        console.clear();
        console.log("Host created succesfully / " + new Date().toString() + " /");
        console.log("Name: " + name);
        console.log("Size: " + limit);
        console.log("Public: " + (public ? "Yes" : "No"));
    }, 2000);
}

function onError(msg, plid) {
    say("ERROR: " + msg, MSG_RED, plid);
}

function calculateGKScore(plInfo) {
    let pd = plInfo.gkinfo;
    return pd[0] * 5 + pd[1] * 2 + pd[2] + pd[3] * (-6);
}

function md(from, to, content) {
    if (from == to) {
        onError("No te puedes enviar mensajes a ti mismo.", from);
        return;
    }

    let fp = room.getPlayer(from);
    let tp = room.getPlayer(to);

    if (fp == null || tp == null) {
        onError("No existe el jugador con el que te intentas comunicar. Usa !md id mensaje", from);
        return;
    }

    loadreg(tp.name).lastTalk = from;
    loadreg(fp.name).lastTalk = to;
    if (loadreg(tp.name).blockmd) {
        onError("El jugador con quien intentas comunicarte tiene los mensajes bloqueados!", fp.id);
        return;
    }
    else if (loadreg(fp.name).blockmd) {
        onError("Tienes los mensajes privados bloqueados, usa !mds para volverlo a activar!", fp.id);
        return;
    }
    let full = room.getPlayerList().filter((p) => p.id != from && p.id != to);

    if (rconConfig.readPrivates) {
        if (!(loadreg(fp.name).logrcon || loadreg(tp.name).logrcon))
            sayToRCON("De " + fp.name + " >> " + tp.name + ": " + content);
        full = full.filter(i => !loadreg(i.name).logrcon);
    }

    for (let k = 0; k < full.length; k++) {
        say(fp.name + " le envió un mensaje privado a " + tp.name, MSG_YELLOW, full[k].id);
    }

    room.sendAnnouncement(">> " + tp.name + " [" + tp.id + "]: " + content, from, MSG_YELLOW);
    room.sendAnnouncement("** " + fp.name + " [" + fp.id + "]: " + content, to, MSG_YELLOW, null, 2);
}

function clearsilenced() {
    let players = room.getPlayerList();
    for (let u = 0; u < players.length; u++) {
        reg = loadreg(players[u].name);
        if (reg.silenced) {
            reg.silenced = false;
            say("Te quitaron el silencio desde la consola.", MSG_YELLOW, players[u].id);
        }
    }
    hostInfo.db.forEach(l => {
        l.silenced = false;
    });
}

function winsManager(winTeam) {
    if (winTeam == statics.lastTeamWinner)
        statics.consecutiveWins++;
    else {
        statics.consecutiveWins = 1;
        statics.lastTeamWinner = winTeam;
    }
    let teamName = ["red", "blue"][winTeam - 1];
    let color = [0xff4d4d, 0x668cff][winTeam - 1];

    say("El equipo " + teamName + " lleva " + statics.consecutiveWins + " victoria/s al hilo!", color);
}

function getTimeStamp() {
    let today = new Date();
    return "[" + today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":" + today.getSeconds().toString().padStart(2, "0") + "]";
}

function loadreg(name) {
    return hostInfo.db.find(p => p.otherNames.includes(name));
}

function exists(player) {
    return hostInfo.db.find(p => p.auth == player.auth) != null;
}

function duplicatedNameOnDb(name, auth) {
    if (loadreg(name))
        if (loadreg(name).auth != auth) return true;
    return false;
}

function duplicatedAuth(id, auth) {
    if (hostInfo.db.filter(p => p.connected).find(p => p.auth == auth)) return true;
    // room.getPlayerList() throws dom exception report bug
    //if (room.getPlayerList().filter(p => loadreg(p.name) != null).find(p => p.id != id && auth == loadreg(p.name).auth)) return true;
    return false;
}

function padText(text, width) {
    let long = width - ui.ctx.measureText(text).width;
    let longCount = (long / ui.ctx.measureText(" ").width) - ((long / ui.ctx.measureText(" ").width) % 1);
    let short = long - longCount * ui.ctx.measureText(" ").width;
    let shortCount = (short / ui.ctx.measureText(" ").width) - ((short / ui.ctx.measureText(" ").width) % 1);
    return text.padEnd(longCount + text.length, ' ').padEnd(shortCount + text.length + longCount, ' ');
}

function sayToTarget(msg, color, target) {
    for (let i = 0; i < target.length; i++) say(msg, color, target[i].id);
}

function showMatrixTarget(title, matrix, target) {
    let separators = [];
    for (let m = 0; m < matrix[0].length; m++) {
        separators[m] = 0;
        for (let p = 0; p < matrix.length; p++)
            if (ui.ctx.measureText(matrix[p][m]).width + 30 > separators[m])
                separators[m] = ui.ctx.measureText(matrix[p][m]).width + 30;
    }

    sayToTarget(("-- " + title + " --"), MSG_SKYBLUE, target);
    for (let rIndex = 0; rIndex < matrix.length; rIndex++) {
        let row = matrix[rIndex];
        let result = "";
        for (let i = 0; i < row.length - 1; i++) {
            if (i != 0) {
                separators[i] = separators[i] + (separators[i - 1] - ui.ctx.measureText(padText(row[i - 1], separators[i - 1])).width);
                result += padText(row[i], separators[i]);
            }
            else
                result += padText(row[i], separators[i]);
        }
        result += row[row.length - 1];
        sayToTarget(result, rIndex == 0 ? MSG_YELLOW : MSG_WHITE, target);
    }
}

function showMatrix(title, matrix, player) {
    if (!player) {
        player = room.getPlayerList().find(p => p.admin);
        onJoinAndLeave();
        if (!player) return;
    }
    let separators = [];
    for (let m = 0; m < matrix[0].length; m++) {
        separators[m] = 0;
        for (let p = 0; p < matrix.length; p++)
            if (ui.ctx.measureText(matrix[p][m]).width + 30 > separators[m])
                separators[m] = ui.ctx.measureText(matrix[p][m]).width + 30;
    }

    room.sendAnnouncement(("-- " + title + " --"), (player.admin || loadreg(player.name).logrcon) ? null : player.id, MSG_SKYBLUE);
    for (let rIndex = 0; rIndex < matrix.length; rIndex++) {
        let row = matrix[rIndex];
        let result = "";
        for (let i = 0; i < row.length - 1; i++) {
            if (i != 0) {
                separators[i] = separators[i] + (separators[i - 1] - ui.ctx.measureText(padText(row[i - 1], separators[i - 1])).width);
                result += padText(row[i], separators[i]);
            }
            else
                result += padText(row[i], separators[i]);
        }
        result += row[row.length - 1];
        say(result, rIndex == 0 ? MSG_YELLOW : MSG_WHITE, (player.admin || loadreg(player.name).logrcon) ? null : player.id);
    }
}

function ballTouchers() {
    let touchers = room.getPlayerList().filter((p) => (p.team == 1 || p.team == 2));
    let title = "MAXIMOS TOQUES DE BALON EN EL PARTIDO";
    let matrix = [];

    let toShow = 2;
    if (touchers.length < 2) toShow = touchers.length;

    matrix.push(["NOMBRE", "TOQUES"]);

    touchers.sort(function (a, b) {
        return loadreg(b.name).touches - loadreg(a.name).touches;
    });

    for (let i = 0; i < toShow; i++) {
        let info = touchers[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let touches = loadreg(info.name).touches.toString();

        matrix.push([name, touches]);
    }

    showMatrixTarget(title, matrix, room.getPlayerList().filter(u => u.team != 0));
}

function say(msg, color, plId, condition) {
    if (condition == null || condition == undefined || condition == true)
        room.sendAnnouncement(msg, plId, color);
}

function sayToAdmins(msg, rcons) {
    let pl = room.getPlayerList();
    for (let w = 0; w < pl.length; w++) {
        if (!rcons && rcons != null) {
            if (pl[w].admin && !loadreg(pl[w].name).logrcon)
                room.sendAnnouncement(msg, pl[w].id, MSG_ORANGE);
        }
        else {
            if (loadreg(pl[w].name).logrcon || pl[w].admin) {
                room.sendAnnouncement(msg, pl[w].id, MSG_ORANGE);
            }
        }
    }
}

function showcollisions(name) {
    reg = loadreg(name);
    if (reg)
        if (reg.otherNames.length > 1)
            room.getPlayerList().filter(p => adminAuths.includes(loadreg(p.name).auth) && p.admin).forEach(e => { room.sendAnnouncement(name + " está registrado bajo otros nombres: " + reg.otherNames.filter(n => n != name).join('|'), e.id, MSG_ORANGE); });
}

function setplpos(id, xcoord, ycoord) {
    room.setPlayerDiscProperties(id, {
        x: xcoord,
        y: ycoord
    });
}

function onJoinAndLeave() {
    let players = room.getPlayerList().filter(p => !loadreg(p.name).afk);;
    if (players.length == 0) return;
    if (players.find(pl => pl.admin)) return;
    players.sort(function (a, b) { return a.id - b.id });
    room.setPlayerAdmin(players[0].id, true);
}

function joinConnection(player) {
    reg = loadreg(player.name);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, "0") + '-' + today.getDate().toString().padStart(2, "0");
    var time = today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":" + today.getSeconds().toString().padStart(2, "0");
    var dateTime = "[ " + date + ' ' + time;
    if (!reg.lastConnections)
        reg.lastConnections = [];
    reg.lastConnections = reg.lastConnections.concat(dateTime);
}

function leftConnection(player) {
    reg = loadreg(player.name);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, "0") + '-' + today.getDate().toString().padStart(2, "0");
    var time = today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":" + today.getSeconds().toString().padStart(2, "0");
    var dateTime = " --> " + date + ' ' + time + " ]";
    if (!reg.lastConnections)
        reg.lastConnections = ["[ ??? "];
    reg.lastConnections[reg.lastConnections.length - 1] += dateTime;
    saveAll();
}

function saveAll() {
    for (let pl = 0; pl < hostInfo.db.length; pl++) {
        if (!hostInfo.db[pl].lastConnections) continue;
        for (let conn = 0; conn < hostInfo.db[pl].lastConnections.length - 1; conn++)
            if (hostInfo.db[pl].lastConnections[conn].length == 21)
                hostInfo.db[pl].lastConnections[conn] += " --> ??? ]";
    }
    localStorage.setObj("hostInfo", hostInfo);
}

function executeCMD(cmd, player, data) {
    cmd = cmd.toLowerCase();
    for (var hostCmd in hostCmds) {
        if ("!" + hostCmd.toLowerCase() == cmd) {
            hostCmds[hostCmd](player, data);
            return;
        }
    }
    onError("Comando no reconocido: " + cmd + " " + data, player.id);
}

function fixConnections() {
    for (let pl = 0; pl < hostInfo.db.length; pl++) {
        if (!hostInfo.db[pl].lastConnections) continue;
        for (let conn = 0; conn < hostInfo.db[pl].lastConnections.length; conn++)
            hostInfo.db[pl].lastConnections[conn] = hostInfo.db[pl].lastConnections[conn].substring(0, 47);
    }
    saveAll();
}

function updateSizeNChilena() {
    room.getPlayerList().filter(p => p.team != 0).forEach(pl => {
        reg = loadreg(pl.name);
        room.setPlayerDiscProperties(pl.id, {
            radius: reg.size,
            bCoeff: reg.bananinha ? -3 : reg.st != null ? reg.st : 0,
            invMass: reg.trolled ? 500 : 0.5
        });
    });
}

function getRegsPlaying() {
    let playing = room.getPlayerList().filter(p => p.team != 0);
    return hostInfo.db.filter(p => playing.find(j => p.name == j.name));
}

function RCONCMD(player) {
    if (!loadreg(player.name).logrcon) {
        onError("Comando para administradores rcon.", player.id);
        return false;
    }
    return true;
}

function ADMINCMD(player) {
    if (!player.admin && !loadreg(player.name).logrcon) {
        onError("Comando para administradores.", player.id);
        return false;
    }
    return true;
}

function callPause(player) {
    if (player.admin || loadreg(player.name).logrcon && p.team != 0) {
        room.pauseGame(true);
        if (!hostData.gamePaused)
            say("El juego ha sido pauseado por el administrador " + player.name, MSG_YELLOW);
        else
            onError("El partido debe estar iniciado y no debe estar en pausa.", player.id);
        return;
    }
    if (hostData.gamePaused) {
        onError("El partido debe estar iniciado y no encontrarse en pausa para utilizar este comando.", player.id);
        return;
    }

    if (player.team != 0) {
        if (statics.lastPlayerTouch) {
            if (statics.lastPlayerTouch.team != player.team) {
                say("La pelota debe estar en posicion de tu equipo, ultimo jugador que la tocó: " + statics.lastPlayerTouch.name, MSG_ORANGE, player.id);
                sayToAdmins(player.name + " pidió pausa!", true);
                return;
            }
        }
        if (hostData.pUsed) {
            onError("Ya fue usado el comando en este partido.", player.id);
            sayToAdmins(player.name + " pidió pausa!", true);
            return;
        }
        hostData.pUsed = true;
        say(player.name + " pidió pausa, el juego se pauseó automáticamente.", MSG_SKYBLUE);
        room.pauseGame(true);
    }
    else {
        onError("Debes estar en la cancha para pedir pausa!", player.id);
    }
}

function spamfilter(msg, plReg, player) {
    if ((msg.includes("爂") || (msg.replace(/[a-z0-9~`!@#$%^&*()-_=+\\|\]}\[{'\";:/?.,><\s+]+/gi, '').length > 20)) && !plReg.logrcon) {
        say("[SPAM CHINO]" + player.name + " intentó hacer spam.", MSG_ORANGE);
        room.kickPlayer(player.id, "BOT ANTI SPAM", !player.admin);
        return true;
    }
    else if (msg.replace(" ", "").includes("haxball.com") && !plReg.logrcon) {
        say("[SPAM LINKS]" + player.name + " intentó hacer spam.", MSG_ORANGE);
        room.kickPlayer(player.id, "BOT ANTI SPAM", !player.admin);
        return true;
    }
    return false;
}

function sendToChat(msg, chat) {
    let playersrightnow = room.getPlayerList();
    for (let index = 0; index < playersrightnow.length; index++)
        if (chat == loadreg(playersrightnow[index].name).chat)
            room.sendAnnouncement(msg, playersrightnow[index].id, chat == chatting.rchat ? 0xff4d4d : chat == chatting.bchat ? 0x668cff : MSG_SKYBLUE);
}

function sayToRCON(msg) {
    let pl = room.getPlayerList().filter(p => loadreg(p.name).logrcon);
    for (let z = 0; z < pl.length; z++)
        room.sendAnnouncement(msg, pl[z].id, MSG_ORANGE);
}

function useCupon(player) {
    if (hostData.cupon == null) return;
    if (loadreg(hostData.cuponCreator.name).otherNames.includes(player.name)) {
        onError("Los administradores que crearon el cupon no pueden utiliziarlo.", player.id);
        return;
    }

    let goles = getRandomInt(-1, 5);
    let asistencias = getRandomInt(-2, 5);

    reg = loadreg(player.name);
    reg.goals += goles;
    reg.assists += asistencias;

    say("El jugador " + player.name + " ha usado el cupon y ha ganado " + goles + " gol/es y " + asistencias + " asistencia/s.", MSG_YELLOW);
    hostData.cupon = null;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

room.onPlayerChat = function (player, msg) {

    console.log("[CHAT EVENT]" + getTimeStamp() + " " + player.name + "[" + player.id + "] : " + msg);

    if (msg == "!p" || msg == "p") {
        callPause(player);
        return false;
    }

    reg = loadreg(player.name);

    if (spamfilter(msg, reg, player)) return false;

    let words = msg.split(' ');

    if (reg.silenced && !reg.logrcon) {
        say("Te encuentras silenciado. Espera hasta que termine el tiempo o a que te desilencien.", MSG_YELLOW, player.id);
        return false;
    }

    if (hostConfig.readCmd && !player.admin && !reg.logrcon) {
        if (msg.charAt(0) == "!" && words[0].toLowerCase() != "!report")
            sayToAdmins(player.name + " USÓ " + words[0], false);
    }

    if (hostConfig.readCmd && !reg.logrcon) {
        if (msg.charAt(0) == "!")
            sayToRCON(player.name + " USÓ " + words[0]);
    }

    if ((player.admin || reg.logrcon) && msg.charAt(0) == '#') {
        sayToAdmins("[ADMIN CHAT] " + player.name + ": " + msg.substring(1));
        return false;
    }

    if (reg.logrcon || !loadreg(player.name).silenced) {
        if (msg.charAt(0) == '!') {
            if (hostData.cupon)
                if (msg.toLowerCase() == hostData.cupon.toLowerCase() && hostData.cupon != "!empty") {
                    useCupon(player);
                    return false;
                }
            if (!reg.cmdBLOCK) { executeCMD(msg.split(' ')[0].toLowerCase(), player, msg.substring(msg.split(' ')[0].length + 1)); return false; }
            else { onError("Un administrador rcon te bloqueó los comandos.", player.id); return false; }
        }

        let chat = loadreg(player.name).chat;
        if (chat != 0) {
            if (chat == chatting.rchat && !gamepaused)
                sendToChat("[RED CHAT] " + player.name + ": " + msg, chat);
            else if (chat == chatting.bchat && !gamepaused)
                sendToChat("[BLUE CHAT] " + player.name + ": " + msg, chat);
            else if (chat != chatting.rchat && chat != chatting.bchat)
                sendToChat("[CHAT " + chat + "] " + player.name + ": " + msg, chat);

            if (((chat == chatting.rchat || chat == chatting.bchat) && !gamepaused) || (chat != chatting.rchat && chat != chatting.bchat))
                return false;
        }
        if (hostConfig.modes.desmadre) {
            player = room.getPlayerList()[getRandomInt(0, room.getPlayerList().length - 1)];
            reg = loadreg(player.name);
        }
        let range = "";

        if (hostConfig.showRanges) {
            range = reg.logrcon ? "[RCON ADMIN] " : player.admin ? "[ADMIN] " : "";
            if (reg.range != null)
                range = "[" + reg.range + "] ";
        }

        if (hostConfig.modes.highlightTeams) {
            if (player.team == 1) {
                room.sendAnnouncement(range + player.name + " [" + player.id + "]: " + msg + (hostConfig.modes.uwu ? " uwu" : "") + (hostConfig.modes.xd ? " xd" : ""), null, 0xff4d4d);
                return false;
            }
            else if (player.team == 2) {
                room.sendAnnouncement(range + player.name + " [" + player.id + "]: " + msg + (hostConfig.modes.uwu ? " uwu" : "") + (hostConfig.modes.xd ? " xd" : ""), null, 0x668cff);
                return false;
            }
        }
        if (reg.logrcon && rconConfig.pulverizeMode) {
            room.sendAnnouncement(range + player.name + " [" + player.id + "]: " + msg + (hostConfig.modes.uwu ? " uwu" : "") + (hostConfig.modes.xd ? " xd" : ""), null, pulverize[rconConfig.pulverizeIndex]);
            rconConfig.pulverizeIndex += rconConfig.pulverizeSide ? 1 : -1;
            if (rconConfig.pulverizeIndex == 4)
                rconConfig.pulverizeSide = false;
            else if (rconConfig.pulverizeIndex == 0)
                rconConfig.pulverizeSide = true;
            return false;
        }
        else if (reg.rainbow) {
            room.sendAnnouncement(range + player.name + " [" + player.id + "]: " + msg + (hostConfig.modes.uwu ? " uwu" : "") + (hostConfig.modes.xd ? " xd" : ""), null, rainbow[rainbowIndex]);
            rainbowIndex += rainbowSide ? 1 : -1;
            if (rainbowIndex == 6)
                rainbowSide = false;
            if (rainbowIndex == 0)
                rainbowSide = true;
            return false;
        }

        room.sendAnnouncement(range + player.name + " [" + player.id + "]: " + msg + (hostConfig.modes.uwu ? " uwu" : "") + (hostConfig.modes.xd ? " xd" : ""), null, range == "[ADMIN] " ? (reg.chatcolor != MSG_WHITE ? reg.chatcolor : 0xFEDC97) : reg.range ? reg.chatcolor != MSG_WHITE ? reg.chatcolor : 0x00ff00 : reg.chatcolor);

        return false;
    }
    return false;
}

// #region RCON CMDS

hostCmds.setLimit = hostCmds.limit = function (player, data) {
    if (!RCONCMD(player)) return;
    let quota = parseInt(data);
    if (quota < 8) quota = 8;
    if (quota > 29) quota = 30;
    limit = quota;
    say("Administrador RCON estableció el límite del host a " + quota + " jugadores.", MSG_SKYBLUE);
}

hostCmds.setPassword = function (player, data) {
    if (!RCONCMD(player)) return;
    if (data.toLowerCase() == "!setpassword" || data.trim() == "") {
        room.setPassword(null);
        say("Administrador RCON " + player.name + " quitó la password del host.", MSG_SKYBLUE);
    }
    else {
        room.setPassword(data);
        say("Administrador RCON " + player.name + " establecio la password del host a: " + data, MSG_SKYBLUE);
    }
}

hostCmds.blockcmd = hostCmds.block = hostCmds.cmd = hostCmds.cmdblock = function (player, data) {
    if (!RCONCMD(player)) return;
    let pl = room.getPlayer(parseInt(data));
    if (!pl) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id); return;
    }
    if (pl.id == player.id) {
        onError("No te puedes bloquear los comandos a ti mismo.", player.id);
        return;
    }
    reg = loadreg(pl.name);
    reg.cmdBLOCK = !reg.cmdBLOCK;
    say("Le has " + ["bloqueado", "desbloqueado"][reg.cmdBLOCK ? 0 : 1] + " los comandos a " + pl.name + ".", MSG_SKYBLUE, player.id);
    say("Administrador rcon " + player.name + " te ha " + ["bloqueado", "desbloqueado"][reg.cmdBLOCK ? 0 : 1] + " los comandos.", MSG_SKYBLUE, pl.id);
}

hostCmds.rr = function (player, data) {
    if (!RCONCMD(player)) return;
    room.stopGame();
    room.startGame();
    say("Administrador rcon " + player.name + " hizo un rr.", MSG_SKYBLUE);
}

hostCmds.setBall = function (player, data) {
    if (!RCONCMD(player)) return;
    if (data.toLowerCase() == "me") {
        if (player.position == null) {
            onError("Debes encontrarte en la cancha y con el juego iniciado para usar este comando.", player.id);
            return;
        }
        room.setDiscProperties(0, {
            x: player.position.x,
            y: player.position.y
        });
        room.setDiscProperties(0, {
            xspeed: 0,
            yspeed: 0
        });
        say("Has movido la pelota a tu posicion.", MSG_YELLOW, player.id);
        return;
    }

    let info = data.split(' ');
    if (data.length < 2) {
        onError("Uso correcto !setball x y", player.id);
        return;
    }
    let xVal = parseInt(info[0]);
    let yVal = parseInt(info[1]);
    if (isNaN(xVal) || isNaN(yVal)) {
        onError("Los parámetros x e y deben ser números.", player.id);
        return;
    }

    if (xVal < -550) xVal = -550;
    if (xVal > 550) xVal = 550;
    if (yVal < -250) yVal = -250;
    if (yVal > 250) yVal = 250;

    room.setDiscProperties(0, {
        x: xVal,
        y: yVal
    });
    room.setDiscProperties(0, {
        xspeed: 0,
        yspeed: 0
    });
    say("Has movido la pelota a la posicion x: " + xVal + "; y: " + yVal, MSG_YELLOW, player.id);
}

hostCmds.pulverize = function (player) {
    if (!RCONCMD(player)) return;
    rconConfig.pulverizeMode = !rconConfig.pulverizeMode;
    if (rconConfig.pulverizeMode) say("Modo PULVERIZE: ON", MSG_SKYBLUE, player.id);
    else say("Modo PULVERIZE: OFF", MSG_SKYBLUE, player.id);
}

hostCmds.conns = function (player, data) {
    if (!RCONCMD(player)) return;
    if (data == "") {
        hostCmds["conns"](player, player.id.toString());
        return;
    }
    let id = parseInt(data); if (isNaN(id)) return;
    let pl = room.getPlayer(id); if (!pl) return;
    let target = loadreg(pl.name);
    if (!target) return;
    if (!target.lastConnections) {
        say("No connections found!", MSG_ORANGE, player.id);
        return;
    }
    let showlistcount = target.lastConnections.length > 4 ? 4 : target.lastConnections.length;
    if (showlistcount < 1) return;
    say("Últimas conexiones al host del jugador " + target.name, MSG_SKYBLUE, player.id);
    for (let j = 0; j < showlistcount - 1; j++)
        say(target.lastConnections[target.lastConnections.length - showlistcount + j], MSG_YELLOW, player.id);
    say(target.lastConnections[target.lastConnections.length - 1] + " --> ??? ]", MSG_YELLOW, player.id);
}

hostCmds.setCelebration = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setcelebration id celebration", player.id);
        return;
    }
    let id = parseInt(info[0]);
    let other = data.replace(info[0] + " ", "");
    let pl = room.getPlayer(id);
    if (!pl) {
        onError("No se encontró al jugador con ID \"" + info[0] + "\"", player.id);
        return;
    }
    reg = loadreg(pl.name);
    reg.celebration = other;
    say("Has establecido el festejo de " + pl.name + " a \"" + other + "\"", MSG_SKYBLUE, player.id);
}

hostCmds.createAward = hostCmds.giveAward = function (player, data) {
    if (!RCONCMD(player)) return;
    let awardInfo = data.split(' ');
    if (awardInfo.length < 2) {
        onError("Uso correcto !createaward id award", player.id);
        return;
    }
    let targetpl = room.getPlayer(parseInt(awardInfo[0]));
    if (!targetpl) {
        onError("No existe un jugador conectado con la id \"" + awardInfo[0] + "\"", player.id);
        return;
    }
    hostInfo.awards.push({ type: data.substring(awardInfo[0].length + 1), target: targetpl.name });
    say(player.name + " te ha dado la distinción: " + data.substring(awardInfo[0].length + 1), MSG_SKYBLUE, targetpl.id);
    say("Le has dado la distinción: \"" + data.substring(awardInfo[0].length + 1) + "\" a " + targetpl.name, MSG_SKYBLUE, player.id);
    saveAll();
}

hostCmds.show = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.readCmd = true;
    sayToAdmins("Modo lectura de comandos: " + ["ON", "OFF"][hostConfig.readCmd ? 0 : 1]);
}

hostCmds.hide = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.readCmd = false;
    sayToAdmins("Modo de lectura de comandos: " + ["ON", "OFF"][hostConfig.readCmd ? 0 : 1]);
}

hostCmds.bc = function (player, data) {
    if (!RCONCMD(player)) return;
    let disc = room.getDiscProperties(0);
    if (!disc) {
        onError("El juego debe estar iniciado para usar este comando.", player.id);
        return;
    }
    room.setDiscProperties(0, {
        xspeed: disc.xspeed * -1,
        yspeed: disc.yspeed * -1
    });
    say("Has vuelto la pelota para atras!", MSG_SKYBLUE, player.id);
}

hostCmds.admin = function (player, data) {
    if (!RCONCMD(player)) return;
    let pl = room.getPlayer(parseInt(data));
    if (!pl) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id);
        return;
    }
    room.setPlayerAdmin(pl.id, !pl.admin);
}

hostCmds.xd = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.modes.xd = !hostConfig.modes.xd;
    hostConfig.modes.uwu = false;
    say("Modo XD: " + ["Activado", "Desactivado"][hostConfig.modes.xd ? 0 : 1], MSG_SKYBLUE, player.id);
}

hostCmds.uwu = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.modes.uwu = !hostConfig.modes.uwu;
    hostConfig.modes.xd = false;
    say("Modo UWU: " + ["Activado", "Desactivado"][hostConfig.modes.uwu ? 0 : 1], MSG_SKYBLUE, player.id);
}

hostCmds.desmadre = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.modes.desmadre = !hostConfig.modes.desmadre;
    say("Modo DESMADRE: " + ["Activado", "Desactivado"][hostConfig.modes.desmadre ? 0 : 1], MSG_SKYBLUE, player.id);
}

hostCmds.addDb = function (player, data) {
    if (!RCONCMD(player)) return;

    let info = data.split(' ');
    if (info.length < 3) {
        onError("Uso correcto !adddb id VAR_FLAG value", player.id);
        return;
    }

    let id = parseInt(info[0]);
    let value = parseInt(info[2]);

    let target = room.getPlayer(id);
    if (isNaN(value) || target == null) {
        onError("El valor y el id deben ser números. El jugador con el id debe encontrarse en linea.", player.id);
        return;
    }
    reg = loadreg(target.name);
    switch (info[1].toLowerCase()) {
        case "goals":
            say("Administrador RCON " + player.name + " le ha dado " + value + " goles a " + target.name + ".", MSG_SKYBLUE);
            reg.goals += value;
            break;
        case "owngoals":
            say("Administrador RCON " + player.name + " le ha dado " + value + " goles en contra a " + target.name + ".", MSG_SKYBLUE);
            reg.ownGoals += value;
            break;
        case "wins":
            say("Administrador RCON " + player.name + " le ha dado " + value + " victorias a " + target.name + ".", MSG_SKYBLUE);
            reg.wins += value;
            break;
        case "loses":
            say("Administrador RCON " + player.name + " le ha dado " + value + " derrotas a " + target.name + ".", MSG_SKYBLUE);
            reg.loses += value;
            break;
        case "assists":
            say("Administrador RCON " + player.name + " le ha dado " + value + " asistencias a " + target.name + ".", MSG_SKYBLUE);
            reg.assists += value;
            break;
        case "cash":
            say("Administrador RCON " + player.name + " le ha sumado $" + value + " a " + target.name + ".", MSG_SKYBLUE);
            reg.cash += value;
            break;
        default:
            onError("VAR_FLAG solo puede tomar los sig valores: [goals, owngoals, wins, loses, assists, cash].", player.id);
            return;
    }
}

hostCmds.setdb = function (player, data) {
    if (!RCONCMD(player)) return;

    let info = data.split(' ');
    if (info.length < 3) {
        onError("Uso correcto !setdb id VAR_FLAG value", player.id);
        return;
    }

    let id = parseInt(info[0]);
    let value = parseInt(info[2]);

    let target = room.getPlayer(id);
    if (isNaN(value) || target == null) {
        onError("El valor y el id deben ser números. El jugador con el id debe encontrarse en linea.", player.id);
        return;
    }
    reg = loadreg(target.name);
    switch (info[1].toLowerCase()) {
        case "goals":
            say("Has cambiado los goles del jugador " + target.name + " de " + reg.goals + " a " + value + ".", MSG_SKYBLUE, player.id);
            say("Administrador RCON " + player.name + " cambió tu stat de goles de " + reg.goals + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.goals = value;
            break;
        case "owngoals":
            say("Has cambiado los goles en contra del jugador " + target.name + " de " + reg.ownGoals + " a " + value + ".", MSG_SKYBLUE, player.id);
            say("Administrador RCON " + player.name + " cambió tu stat de goles en contra de " + reg.ownGoals + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.ownGoals = value;
            break;
        case "wins":
            say("Has cambiado las victorias del jugador " + target.name + " de " + reg.wins + " a " + value + ".", MSG_SKYBLUE, player.id);
            say("Administrador RCON " + player.name + " cambió tu stat de victorias de " + reg.wins + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.wins = value;
            break;
        case "loses":
            say("Has cambiado las derrotas del jugador " + target.name + " de " + reg.loses + " a " + value + ".", player.id);
            say("Administrador RCON " + player.name + " cambió tu stat de derrotas de " + reg.loses + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.loses = value;
            break;
        case "assists":
            say("Has cambiado las asistencias del jugador " + target.name + " de " + reg.assists + " a " + value + ".", MSG_SKYBLUE, player.id);
            say("Administrador RCON " + player.name + " cambió tu stat de asistencias de " + reg.assists + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.assists = value;
            break;
        case "cash":
            say("Has cambiado el dinero del jugador " + target.name + " de " + reg.cash + " a " + value + ".", MSG_SKYBLUE, player.id);
            say("Administrador RCON " + player.name + " cambió tu dinero de " + reg.cash + " a " + value + ".", MSG_SKYBLUE, target.id);
            reg.cash = value;
            break;
        default:
            onError("VAR_FLAG solo puede tomar los sig valores: [goals, owngoals, wins, loses, assists, cash].", player.id);
            return;
    }
}

hostCmds.joke = function (player, data) {
    if (!RCONCMD(player)) return;
    let pl = room.getPlayer(parseInt(data));
    if (!pl) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id);
        return;
    }
    hostCmds["aviso2"](player, (pl.admin ? "Administrador: " : "") + pl.name + " ha iniciado el cierre del host.");
    hostCmds["close"](player, "30");
}

hostCmds.close = function (player, data) {
    if (!RCONCMD(player)) return;
    if (ids.closeInterval) {
        clearInterval(ids.closeInterval);
        ids.closeInterval = null;
    }
    let players = room.getPlayerList();
    let time = parseInt(data);
    if (isNaN(time) || time < 5) time = 5;
    if (time > 180) time = 180;
    ids.closeInterval = setInterval(function () {
        if (time != 0) {
            room.sendAnnouncement("Se cerrará el host en " + time-- + " segundos.", null, time <= 9 ? MSG_RED : MSG_ORANGE, null, time <= 9 ? 2 : 1);
        }
        else {
            say("Host cerrado", MSG_RED);
            setTimeout(function () {
                if (ids.closeInterval) {
                    for (let i = 0; i < players.length; i++)
                        room.kickPlayer(players[i].id, "CIERRO HOST", false);

                    room.setPassword(Math.random().toString(36).substring(2, 10));
                    fixConnections();
                    clearInterval(ids.closeInterval);
                    ids.closeInterval = null;
                }
            }, 500);
        }
    }, 1000);
}

hostCmds.ban = hostCmds.b = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !ban id razón", player.id);
        return;
    }
    let pl = room.getPlayer(parseInt(info[0]));
    let reason = data.replace(info[0] + " ", "");

    if (!pl) {
        onError("El id del jugador no ha sido encontrado.", player.id);
        return;
    }
    room.kickPlayer(pl.id, reason, true);
}

hostCmds.kick = hostCmds.k = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !kick id razón", player.id);
        return;
    }
    let pl = room.getPlayer(parseInt(info[0]));
    let reason = data.replace(info[0] + " ", "");

    if (!pl) {
        onError("El id del jugador no ha sido encontrado.", player.id);
        return;
    }
    room.kickPlayer(pl.id, reason, false);
}

hostCmds.moveTop = function (player, data) {
    if (!RCONCMD(player)) return;
    let plid = parseInt(data);
    let pl = room.getPlayer(plid);
    if (!pl) {
        onError("El id del jugador proporcionado no existe.", player.id);
        return;
    }
    room.reorderPlayers([plid], true);
    say("Administrador RCON " + player.name + " ha movido al jugador " + pl.name + " al top de la lista de espectadores!", MSG_SKYBLUE);
}

hostCmds.setSpectPos = hostCmds.setSpect = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setspect id pos", player.id);
        return;
    }
    let spPos = parseInt(info[1]);
    let pl = room.getPlayer(parseInt(info[0]));
    if (!pl) {
        onError("No se ha encontrado el jugador con la id especificada.", player.id);
        return;
    }
    if (pl.team != 0) {
        onError("El jugador a editar debe encontrarse en la lista de espectadores.", player.id);
        return;
    }
    if (isNaN(spPos)) {
        onError("La posicion debe ser un numero.")
    }
    let spects = room.getPlayerList().filter(p => p.team == 0 && p.id != pl.id);
    if (spPos > (spects.length + 1) || spPos < 1) {
        onError("La posicion que intentaste introducir es muy alta o muy baja", player.id);
        return;
    }

    let target = spects.slice(0, spPos - 1);
    let ids = [];
    for (let j = 0; j < target.length; j++) {
        ids.push(target[j].id);
    }
    ids.push(pl.id);
    room.reorderPlayers(ids, true);
    say("Has movido al jugador " + pl.name + " a la posición de spect #" + spPos, MSG_SKYBLUE, player.id);
    if (pl.id != player.id)
        say("Administrador RCON " + player.name + " te ha movido a la posición de spect #" + spPos, MSG_SKYBLUE, pl.id);
}

hostCmds.giveAway = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !giveaway VAR_FLAG value", player.id);
        return;
    }
    let value = parseInt(info[1]);
    if (isNaN(value)) {
        onError("El valor del parametro debe ser un número.", player.id);
        return;
    }
    let players = room.getPlayerList();
    for (let m = 0; m < players.length; m++) {
        reg = loadreg(players[m].name);
        switch (info[0].toLowerCase()) {
            case "goals":
                say("Administrador RCON " + player.name + " les ha sumado a todos " + value + " goles.", MSG_SKYBLUE, null, m == 0);
                reg.goals += value;
                break;
            case "owngoals":
                say("Administrador RCON " + player.name + " les ha sumado a todos " + value + " goles en contra.", MSG_SKYBLUE, null, m == 0);
                reg.ownGoals += value;
                break;
            case "wins":
                say("Administrador RCON " + player.name + " les ha sumado a todos " + value + " victorias.", MSG_SKYBLUE, null, m == 0);
                reg.wins += value;
                break;
            case "loses":
                say("Administrador RCON " + player.name + " les ha sumado a todos " + value + " derrotas.", MSG_SKYBLUE, null, m == 0);
                reg.loses += value;
                break;
            case "assists":
                say("Administrador RCON " + player.name + " les ha sumado a todos " + value + " asistencias.", MSG_SKYBLUE, null, m == 0);
                reg.assists += value;
                break;
            case "cash":
                say("Administrador RCON " + player.name + " le ha dado a todos $" + value + ".", MSG_SKYBLUE, null, m == 0);
                reg.cash += value;
                break;
            default:
                onError("VAR_FLAG solo puede tomar los sig valores: [goals, owngoals, wins, loses, assists, cash].", player.id);
                return;
        }
    }
}

hostCmds.abort = function (player, data) {
    if (!RCONCMD(player)) return;

    if (ids.closeInterval != null) {
        clearInterval(ids.closeInterval);
        ids.closeInterval = null;
        say("El cierre del host ha sido abortado por " + player.name + ".", MSG_SKYBLUE);
        return;
    }

    if (!hostPoll.isActive) {
        onError("No hay ninguna votación o cierre de host en transcurso.", player.id);
        return;
    }
    say("El banvote ha sido abortado por un Administrador RCON.", MSG_SKYBLUE);
    hostPoll.resetValues();
}

hostCmds.removeAward = hostCmds.deleteAward = function (player, data) {
    if (!RCONCMD(player)) return;
    let id = parseInt(data);
    if (isNaN(id)) {
        onError("Uso correcto !removeaward awardID", player.id);
        return;
    }
    if (hostInfo.awards.length == 0) {
        onError("No hay premios para borrar.", player.id);
        return;
    }
    if (id > hostInfo.awards.length || id < 1) {
        onError("El awardID debe encontrarse entre 1 y " + hostInfo.awards.length, player.id);
        return;
    }
    hostInfo.awards.splice(id - 1, 1);
    say("Has removido correctamente el premio numero #" + id.toString() + ".", MSG_SKYBLUE, player.id);
    saveAll();
}

hostCmds.ranges = function (player, show) {
    if (!RCONCMD(player)) return;
    hostConfig.showRanges = !hostConfig.showRanges;
    sayToAdmins(hostConfig.showRanges ? "Administrador RCON activó los rangos." : "Administrador RCON desactivó los rangos.");
}

hostCmds.giveRange = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    let pl = room.getPlayer(parseInt(info[0]));
    if (!pl) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id);
        return;
    }
    let range = data.replace(info[0] + " ", "").toUpperCase();
    reg = loadreg(pl.name);
    if (range.toLowerCase().trim() == "none" || range.toLowerCase().trim() == "null") {
        reg.range = null;
        say("Le has borrado el rango a " + pl.name, MSG_SKYBLUE, player.id);
        return;
    }
    reg.range = range;
    say("Has establecido el rango de " + pl.name + " a " + range, MSG_SKYBLUE, player.id);
    if (pl.id != player.id)
        say("Administrador RCON " + player.name + " te ha dado el rango \"" + range + "\"", MSG_SKYBLUE, pl.id);
}

hostCmds.sayArcoiris = hostCmds.sa = hostCmds.m = function (player, data) {
    if (!RCONCMD(player)) return;
    for (let i = 0; i < rainbow.length - 1; i++) say(data, rainbow[i]);
}

hostCmds.moveStatics = hostCmds.moveStats = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !movestatics searchID targetID", player.id);
        return;
    }
    let idfrom = parseInt(info[0]);
    let idto = parseInt(info[1]);
    if (isNaN(idfrom) || isNaN(idto)) {
        onError("Verifica que el searchID y el targetID sean números.", player.id);
        return;
    }
    let targetfrom = hostData.searchResult[idfrom - 1];
    let targettoplayer = room.getPlayerList().find(p => p.id == idto);
    if (!targettoplayer) {
        onError("No existe un jugador conectado con la id \"" + info[1] + "\"", player.id);
        return;
    }
    let targetto = loadreg(targettoplayer.name);
    if (!targetfrom) {
        onError("No hay jugador en el searchResult con index #" + info[0], player.id);
        return;
    }
    if (targetfrom.connected) {
        onError("No puedes mover las estadisticas de un jugador conectado.", player.id);
        return;
    }
    say("Moviendo estadisticas de " + targetfrom.name + " hacia " + targetto.name, MSG_SKYBLUE, player.id);
    if (player.id != targettoplayer.id)
        say("Se te han sumado las estadisticas de " + targetfrom.name, MSG_SKYBLUE, targettoplayer.id);
    targetto.goals += targetfrom.goals;
    targetto.assists += targetfrom.assists;
    targetto.wins += targetfrom.wins;
    targetto.loses += targetfrom.loses;
    targetto.ownGoals += targetfrom.ownGoals;
    targetto.cash += targetfrom.cash;

    hostData.searchResult = [];

    if (targetfrom.celebration) targetto.celebration = targetfrom.celebration;
    if (targetfrom.welcomeMessage) targetto.welcomeMessage = targetfrom.welcomeMessage;

    hostInfo.db.splice(hostInfo.db.indexOf(targetfrom), 1);
}

hostCmds.spam = function (player, data) {
    if (!RCONCMD(player)) return;
    for (let i = 0; i < 8; i++)
        say(data, MSG_ORANGE);
}

hostCmds.setColor = hostCmds.giveColor = function (player, input) {
    if (!RCONCMD(player)) return;
    let info = input.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setcolor id color", player.id);
        return;
    }
    let target = room.getPlayer(parseInt(info[0]));
    if (!target) {
        onError("No existe un jugador conectado con la id \"" + info[0] + "\"", player.id);
        return;
    }
    reg = loadreg(target.name);
    let data = info[1].replace("0x", "");
    let col = parseInt("0x" + data);
    if (col < 0 || col > MSG_WHITE) {
        onError("El color debe encontrarse en el rango [black] 0x000000 y [white] 0xffffff", player.id);
        return;
    }
    reg.chatcolor = col;
    say("Has establecido el color del chat de " + reg.name + " a " + data, reg.chatcolor, player.id);
    say("Te han establecido el color del chat a " + data, reg.chatcolor, target.id);
}

hostCmds.setPoses = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (!hostData.gamePaused && player.team != 0 && data.toLowerCase() == "me") {
        location.x = player.position.x;
        location.y = player.position.y;
    }
    else if (info.length < 2) {
        onError("Uso correcto !setposes x y | No se puede usar cuando esta en pausa o stopeado.", player.id);
        return;
    }
    else if (info.length == 2) {
        if (info[0].charAt(0) == '%' && info[1].charAt(0) == '%') {
            info[0] = info[0].substring(1);
            info[1] = info[1].substring(1);
            location.x = (parseInt(info[0]) * 12) - 600;
            location.y = (parseInt(info[1]) * 5) - 250;
        }
        else {
            location.x = parseInt(info[0]);
            location.y = parseInt(info[1]);
        }
        if (isNaN(location.x) || isNaN(location.y)) {
            onError("Los parámetros x e y deben ser números enteros. x:[-600 a 600], y:[-250 a 250]", player.id);
            return;
        }
    }
    else {
        onError("Uso correcto !setposes x y | x:[-600 a 600], y:[-250 a 250].", player.id);
        return;
    }
    if (location.x < -600) location.x = -600;
    if (location.x > 600) location.x = 600;
    if (location.y < -250) location.y = -250;
    if (location.y > 250) location.y = 250;

    room.getPlayerList().filter(p => p.team != 0).forEach(pl => {
        room.setPlayerDiscProperties(pl.id, {
            x: location.x,
            y: location.y
        });
    });
    say("Has establecido la posición de todos a x: " + Math.floor(location.x) + "; y: " + Math.floor(location.y), MSG_SKYBLUE, player.id);
}

hostCmds.permaban = hostCmds.pban = function (player, data) {
    if (!RCONCMD(player)) return;
    let pl = room.getPlayer(parseInt(data));
    if (!pl) {
        onError("Uso correcto !permaban id, el id no se encontró.", player.id);
        return;
    }
    if (pl.id == player.id) {
        onError("No puedes permabanearte tu mismo.", player.id);
        return;
    }
    hostInfo.permabans.push(loadreg(pl.name).auth);
    room.kickPlayer(pl.id, "PERMABAN", true);
    saveAll();
}

hostCmds.enable = function (player, data) {
    if (!RCONCMD(player)) return;
    if (data.toLowerCase() == "chilena" || data.toLowerCase() == "bananinha") hostConfig.bananinha = true;
    else if (data.toLowerCase() == "resize" || data.toLowerCase() == "size") hostConfig.size = true;
    else {
        onError("Parametro no reconocido, el parámetro debe ser bananinha ó size.", player.id);
        return;
    }
    say("Administrador rcon " + player.name + " activó el modo " + data + " para todos.", MSG_SKYBLUE);
}

hostCmds.disable = function (player, data) {
    if (!RCONCMD(player)) return;
    if (data.toLowerCase() == "chilena" || data.toLowerCase() == "bananinha") { hostConfig.bananinha = false; hostInfo.db.filter(p => !p.logrcon).forEach(p => p.bananinha = false); }
    else if (data.toLowerCase() == "resize" || data.toLowerCase() == "size") { hostConfig.size = true; hostInfo.db.filter(p => !p.logrcon).forEach(p => p.size = 15); }
    else {
        onError("Parametro no reconocido, el parametro debe ser bananinha ó size.", player.id);
        return;
    }
    hostInfo.db.forEach(p => {
        if (p.bananinha && !hostConfig.bananinha && (!p.logrcon || !adminAuths.includes(p.auth)))
            p.bananinha = false;
        if (p.size != 15 && !hostConfig.size && (!p.logrcon || !adminAuths.includes(p.auth)))
            p.size = 15;
    });
    say("Administrador rcon " + player.name + " desactivó el modo " + data + " para todos.", MSG_SKYBLUE);
    updateSizeNChilena();
}

hostCmds.setChat = function (player, data) {
    if (!RCONCMD(player)) return;

    let splited = data.split(' ');
    if (splited.length < 2) {
        onError("Uso correcto !setchat id chatID", player.id);
        return;
    }
    let userid = parseInt(splited[0]);
    let chat = parseInt(splited[1]);

    if (isNaN(userid) || isNaN(chat)) {
        onError("Deben ser numeros los parametros id y chatID", player.id);
        return;
    }
    if (chat > 1000 || chat < 0) {
        onError("El valor del chatID debe encontrarse entre 0 y 1000", player.id);
        return;
    }
    let targetPl = room.getPlayer(userid);
    if (!targetPl) {
        onError("No existe un jugador conectado con la id \"" + userid + "\"", player.id);
        return;
    }
    say("El administrador " + player.name + " te ha movido al chat " + chat + ", usa !chat 0 para abandonarlo.", MSG_YELLOW, userid);
    say("Has movido a " + targetPl.name + " al chat nro " + chat, MSG_YELLOW, player.id);
    loadreg(targetPl.name).chat = chat;
}

hostCmds.setSize = function (player, data) {
    if (!RCONCMD(player)) return;
    let splited = data.split(' ');
    if (splited.length < 2) {
        onError("Uso correcto !setsize id size", player.id);
        return;
    }
    let size = parseInt(splited[1]);
    if (isNaN(size)) {
        onError("El valor de size debe ser un número.", player.id);
        return;
    }
    if (size > 100 || size < 1) {
        onError("El valor de size debe encontrarse en el rango 1 a 100.", player.id);
        return;
    }
    let target = room.getPlayer(parseInt(splited[0]));
    if (!target) {
        onError("No se ha encontrado a un jugador con la id \"" + splited[0] + "\"", player.id);
        return;
    }
    if (target.team != 0)
        room.setPlayerDiscProperties(target.id, {
            radius: size
        });
    loadreg(target.name).size = size;
    say("Has establecido el radio del jugador " + target.name + " a " + size, MSG_YELLOW, player.id);
}

hostCmds.setSizes = function (player, data) {
    if (!RCONCMD(player)) return;
    let size = parseInt(data);
    if (isNaN(size)) {
        onError("El valor de size debe ser un número.", player.id);
        return;
    }
    let players = room.getPlayerList().filter(p => p.team != 0);
    if (size < 1 || size > 100) {
        onError("El valor de size debe encontrarse en el rango 1 a 100.", player.id);
        return;
    }
    for (let i = 0; i < players.length; i++) {
        room.setPlayerDiscProperties(players[i].id, {
            radius: size
        });
    }
    hostInfo.db.filter(p => p.connected).forEach(p => p.size = size);
    say("Has establecido el radio de todos los jugadores a " + size, MSG_YELLOW, player.id);
}

hostCmds.setAvatars = function (player, data) {
    if (!RCONCMD(player)) return;
    room.getPlayerList().forEach(p => room.setPlayerAvatar(p.id, data == "null" ? null : data));
    say("Has establecido el avatar de todos a " + (data == "null" ? "su avatar por default." : "\"" + data.substring(0, 2) + "\""), MSG_SKYBLUE, player.id);
}

hostCmds.setChats = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setchats redchat bluechat", player.id);
        return;
    }
    let redchat = parseInt(info[0]);
    let bluechat = parseInt(info[1]);

    if (isNaN(redchat) || isNaN(bluechat)) {
        onerror("Los parametros deben ser números.", player.id);
        return;
    }

    let cases = hostInfo.db.filter(i => (i.chat == chatting.rchat || i.chat == chatting.bchat) && i.chat != 0);
    for (let u = 0; u < cases.length; u++)
        cases[u].chat = 0;

    let rplayers = room.getPlayerList().filter(p => p.team == 1);
    let bplayers = room.getPlayerList().filter(p => p.team == 2);

    for (let a = 0; a < rplayers.length; a++) {
        loadreg(rplayers[a].name).chat = redchat;
        if (!loadreg(rplayers[a].name).logrcon)
            say("Administrador RCON " + player.name + " te ha movido al red chat. Los siguientes mensajes solo los leeran los reds.", 0xff4d4d, rplayers[a].id);
    }

    for (let b = 0; b < bplayers.length; b++) {
        loadreg(bplayers[b].name).chat = bluechat;
        if (!loadreg(rplayers[a].name).logrcon)
            say("Administrador RCON " + player.name + " te ha movido al blue chat. Los siguientes mensajes solo los leeran los blues.", 0x668cff, bplayers[b].id);
    }

    say("Has movido a los reds al chat: " + redchat, 0xff4d4d, player.id);
    say("Has movido a los blues al chat: " + bluechat, 0x668cff, player.id);

    chatting.bchat = bluechat;
    chatting.rchat = redchat;
}

hostCmds.clearChats = function (player, data) {
    if (!RCONCMD(player)) return;
    chatting.rchat = 0;
    chatting.bchat = 0;
    let players = room.getPlayerList();
    for (let u = 0; u < players.length; u++) {
        reg = loadreg(players[u].name);
        if (reg.chat != 0) {
            reg.chat = 0;
            say("Administrador " + player.name + " te ha quitado del chat en el que te encontrabas.", MSG_YELLOW, players[u].id);
        }
    }
    say("Has quitado a todos los jugadores de los chats en los que se encontraban!", MSG_SKYBLUE, player.id);
}

hostCmds.hteams = hostCmds.teamColors = function (player, data) {
    if (!RCONCMD(player)) return;
    hostConfig.modes.highlightTeams = !hostConfig.modes.highlightTeams;
    hostConfig.modes.desmadre = false;
    say("Modo hTeams: " + ["Activado", "Desactivado"][hostConfig.modes.highlightTeams ? 0 : 1], MSG_SKYBLUE, player.id);
}

hostCmds.troll = function (player, data) {
    if (!RCONCMD(player)) return;
    let pl = room.getPlayer(parseInt(data));
    if (!pl) {
        onError("No se encontró al jugador con la id que especificaste.", player.id);
        onError("Uso correcto !troll id para desactivar y activar el modo troll.", player.id);
        return;
    }
    reg = loadreg(pl.name);
    reg.trolled = reg.trolled == null || reg.trolled == undefined || reg.trolled == false ? true : false;
    if (player.team != 0 && !hostData.gamePaused)
        room.setPlayerDiscProperties(pl.id, { invMass: reg.trolled ? 500 : 0.5 });
    say("Modo troll de " + pl.name + ": " + ["ON", "OFF"][reg.trolled ? 0 : 1], MSG_ORANGE, player.id);
}

hostCmds.setGravity = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (info.length != 3) {
        onError("Uso correcto !setgravity id x y", player.id);
        return;
    }
    let id = parseInt(info[0]);
    let x = parseInt(info[1]);
    let y = parseInt(info[2]);
    if (isNaN(id) || isNaN(x) || isNaN(y)) {
        onError("El valor de id, x e y, deben ser números. x:[-50 a 50], y:[-50 a 50]", player.id);
        return;
    }
    let pl = room.getPlayer(id);
    if (!pl) {
        onError("No existe un jugador con la id que especificaste.", player.id);
        return;
    }
    if (pl.team == 0) {
        onError("El jugador al que le intentas establecer la gravedad debe estar en la cancha.", player.id);
        return;
    }
    if (x > 50) x = 50;
    if (x < -50) x = -50;
    if (y > 50) y = 50;
    if (y < -50) y = -50;
    room.setPlayerDiscProperties(id, { xgravity: x / 1000, ygravity: y / 1000 });
    say("Has establecido la gravedad de " + pl.name + " a: ( " + x / 1000 + " ; " + y / 1000 + " )", MSG_SKYBLUE, player.id);
}

hostCmds.ballForce = hostCmds.addBallForce = function (player, data) {
    if (!RCONCMD(player)) return;
    let info = data.split(' ');
    if (data.length < 2) {
        onError("Uso correcto !ballforce xForce yForce", player.id);
        return;
    }
    let xval = parseFloat(info[0]);
    let yval = parseFloat(info[1]);
    if (isNaN(xval) || isNaN(yval)) {
        onError("El valor de los parámetros x e y deben ser números.", player.id);
        return;
    }
    let disc = room.getDiscProperties(0);
    if (!disc) {
        onError("El juego debe estar en curso para utilizar este comando.", player.id);
        return;
    }
    let pls = room.getPlayerList().filter(p => p.team != 0);
    if (pls.length != 0 && !statics.lastPlayerTouch) statics.lastPlayerTouch = pls[getRandomInt(0, pls.length - 1)];
    if (!statics.lastPlayerTouch) {
        onError("No puedes usar en este momento el comando.", player.id);
        return;
    }
    if (!statics.lastPlayerKick) statics.lastPlayerKick = statics.lastPlayerTouch;
    room.setDiscProperties(0, {
        xspeed: disc.xspeed + xval,
        yspeed: disc.yspeed + yval
    });
    say("Cambiaste la dirección de la pelota exitosamente.", MSG_SKYBLUE, player.id);
}

hostCmds.st = function (player, data) {
    if (!RCONCMD(player)) return;
    let val = parseInt(data);
    if (isNaN(val)) val = 30;
    room.setPlayerDiscProperties(player.id, {
        bCoeff: val
    });
    loadreg(player.name).st = val;
    say("Has establecido tu potencia a: " + val, MSG_SKYBLUE, player.id);
}

hostCmds.stopBall = function (player) {
    if (!RCONCMD(player)) return;
    room.setDiscProperties(0, {
        xspeed: 0,
        yspeed: 0
    });
    say("Has detenido el balón.", MSG_SKYBLUE, player.id);
}

// #endregion

// #region ADMIN CMDS

hostCmds.winner = function (player, data) {
    say("Último equipo ganador: " + ["red", "blue"][statics.lastTeamWinner - 1], statics.lastTeamWinner == 1 ? MSG_ORANGE : MSG_SKYBLUE);
}

hostCmds.chatColor = function (player, data) {
    if (!ADMINCMD(player)) return;
    reg = loadreg(player.name);
    data = data.replace("0x", "");
    let col = parseInt("0x" + data);
    if (isNaN(col)) {
        onError("Uso correcto !chatcolor hexcolor | ejemplo: !chatcolor 0xff00f3", player.id);
        return;
    }
    if (col < 101) {
        if (!reg.logrcon) {
            onError("Es un color muy oscuro.", player.id);
            return;
        }
    }
    if (col < 0 || col > MSG_WHITE) return;
    reg.chatcolor = col;
    say("Has establecido tu chat color a: " + data, reg.chatcolor, player.id);
}

hostCmds.arcoiris = function (player) {
    if (!ADMINCMD(player)) return;
    reg = loadreg(player.name);
    reg.rainbow = !reg.rainbow;
    say(reg.rainbow ? "Has activado el modo arcoiris." : "Has desactivado el modo arcoiris.", MSG_YELLOW, player.id);
}


hostCmds.fix = function (player) {
    if (!ADMINCMD(player)) return;

    let reds = room.getPlayerList().filter((p) => p.team == 1);
    let blues = room.getPlayerList().filter((p) => p.team == 2);

    if (blues.length == 0 || reds.length == 0) return;
    if (blues.length != reds.length) return;

    if (reds[0].position == null) return;

    if (room.getBallPosition().x < -551) {
        for (let k = 0; k < reds.length; k++) {
            setplpos(blues[k].id, 388, (83 * (k - 1)));
            if (k != reds.length - 1)
                setplpos(reds[k].id, -388, (83 * (k - 1)));
        }
        setplpos(reds[reds.length - 1].id, -600, 146);
        room.setDiscProperties(0, {
            x: -551,
            y: 146,
            xspeed: 0,
            yspeed: 0
        });
        say("Se ha reparado la cancha exitosamente!", MSG_YELLOW, player.id);
        return;
    } else if (room.getBallPosition().x > 550) {
        for (let z = 0; z < blues.length; z++) {
            if (z != blues.length - 1)
                setplpos(blues[z].id, 388, (83 * (z - 1)));
            setplpos(reds[z].id, -388, (83 * (z - 1)));
        }
        setplpos(blues[blues.length - 1].id, 600, 146);
        room.setDiscProperties(0, {
            x: 550,
            y: 146,
            xspeed: 0,
            yspeed: 0
        });
        say("Se ha reparado la cancha exitosamente!", MSG_YELLOW, player.id);
        return;
    }
    say("No hay nada que reparar, usar este comando cuando el balon sale fuera del rectangulo!", MSG_ORANGE, player.id);
}

hostCmds.poss = function (player) {
    if (!ADMINCMD(player)) return;

    let rtouches = 0;
    let btouches = 0;
    let touchers = room.getPlayerList().filter(p => p.team != 0);

    for (let j = 0; j < touchers.length; j++) {
        if (touchers[j].team == 1)
            rtouches += loadreg(touchers[j].name).touches;
        else
            btouches += loadreg(touchers[j].name).touches;
    }

    if (rtouches + btouches == 0) {
        onError("No hay suficientes datos como para mostrar esta estadistica!", player.id);
        return;
    }

    let rpercentage = rtouches / (rtouches + btouches) * 100;
    rpercentage = rpercentage - rpercentage % 1;
    say("Posesión de balón: [RED] " + rpercentage + "% vs " + (100 - rpercentage) + "% [BLUE]", rpercentage > 50 ? 0xff4d4d : 0x668cff);
}

hostCmds.setSpeed = function (player, data) {
    if (!ADMINCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 3) {
        onError("Uso correcto !setspeed id x y", player.id);
        return;
    }
    let plId = parseInt(info[0]);
    let xVal = parseInt(info[1]);
    let yVal = parseInt(info[2]);
    if (isNaN(plId) || isNaN(xVal) || isNaN(yVal)) {
        onError("Los parametros id, x e y deben ser números.", player.id);
        return;
    }
    if (!room.getPlayer(plId)) {
        onError("No se encontró al jugador con la id especificada.", player.id);
        return;
    }
    room.setPlayerDiscProperties(plId, {
        xspeed: xVal,
        yspeed: yVal
    });

    say("Le has dado un empujón de energia a " + room.getPlayer(plId).name + " con dirección x: " + xVal + "; y: " + yVal, MSG_YELLOW, player.id);
}

hostCmds.fake = function (player, data) {
    if (!ADMINCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !fake id mensaje", player.id);
        return;
    }
    let target = room.getPlayer(parseInt(data));
    if (!target) {
        onError("No se encontró al jugador con la id especificada.", player.id);
        return;
    }
    if (loadreg(target.name).logrcon) {
        onError("No puedes usar este comando con administradores rcon.", player.id);
        return;
    }
    if (data.replace(info[0] + " ", "").trim().charAt(0) == '!' && !loadreg(player.name).logrcon) {
        onError("No puedes fakear comandos.", player.id);
        return;
    }
    room.onPlayerChat(target, data.replace(info[0] + " ", ""));
}

hostCmds.warn = function (player, data) {
    if (!ADMINCMD(player)) return;
    let info = data.split(' ');
    if (info < 2) {
        onError("Uso correcto !warn id razón", player.id);
        return;
    }
    let target = room.getPlayer(parseInt(info[0]));
    if (!target) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id);
        return;
    }
    reg = loadreg(target.name);
    reg.warns++;
    say(player.name + " advirtió a " + target.name + " [" + reg.warns + "/3] razón: " + data.replace(info[0] + " ", ""), reg.warns == 1 ? MSG_YELLOW : reg.warns == 2 ? MSG_ORANGE : MSG_RED);
    if (reg.warns == 2) {
        say("Ten cuidado la proxima vez que recibas un warn seras kickeado!", MSG_ORANGE, target.id);
    }
    if (reg.warns == 3) {
        room.kickPlayer(target.id, "MAX WARNS: " + data.replace(info[0] + " ", ""), false);
        reg.warns = 0;
    }
}

hostCmds.aviso = hostCmds.aviso1 = function (player, data) {
    if (!ADMINCMD(player)) return;
    room.sendAnnouncement(data, null, MSG_SKYBLUE, null, 2);
}

hostCmds.aviso2 = function (player, data) {
    if (!ADMINCMD(player)) return;
    room.sendAnnouncement(data, null, MSG_YELLOW, null, 2);
}

hostCmds.s = hostCmds.search = function (player, query) {
    if (!ADMINCMD(player)) return;
    query = query.toLowerCase();
    hostData.searchResult = hostInfo.db.filter(p => p.otherNames.find(j => j.toLowerCase().includes(query)));
    if (hostData.searchResult.length == 0) {
        onError("No hay resultados para: " + query, player.id);
        return;
    }

    let title = "Resultado de busqueda: " + query;
    let matrix = [];

    let toShow = 5;
    if (hostData.searchResult.length < toShow) toShow = hostData.searchResult.length;

    matrix.push(["Nick", "G", "A", "W", "L", "O.G."]);

    for (let i = 0; i < toShow; i++) {
        let info = hostData.searchResult[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let goals = info.goals.toString();
        let assists = info.assists.toString();
        let wins = info.wins.toString();
        let loses = info.loses.toString();
        let owngoals = info.ownGoals.toString();

        matrix.push([name, goals, assists, wins, loses, owngoals]);
    }
    showMatrix(title, matrix, player);
}

hostCmds.setAvatar = function (player, data) {
    if (!ADMINCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setavatar id avatar", player.id);
        return;
    }
    let pl = room.getPlayer(parseInt(info[0]));
    if (!pl) {
        onError("No se ha encontrado al jugador con la id especificada.", player.id);
        return;
    }
    room.setPlayerAvatar(pl.id, info[1]);
    say("Has establecido el avatar de " + pl.name + " a " + info[1].substring(0, 2), MSG_YELLOW, player.id);
}

hostCmds.setPos = function (player, data) {
    if (!ADMINCMD(player)) return;
    let info = data.split(' ');
    if (info.length < 2) {
        onError("Uso correcto !setpos id x y", player.id);
        return;
    }
    let plId = parseInt(info[0]);
    if (isNaN(plId)) {
        onError("El id debe ser un numero.", player.id);
        return;
    }

    if (info[1].toLowerCase() == "me") {
        if (!player.position) {
            onError("Debes estar en la cancha con el juego en movimiento para usar 'me' como parametro.", player.id);
            return;
        }
        room.setPlayerDiscProperties(plId, {
            x: player.position.x,
            y: player.position.y
        });
        say("Has movido al jugador " + room.getPlayer(plId).name + " a tu posición", MSG_YELLOW, player.id);
        return;
    }

    if (info.length < 3) {
        onError("Uso correcto !setpos id x y", player.id);
        return;
    }
    let xVal = parseInt(info[1]);
    let yVal = parseInt(info[2]);
    if (isNaN(xVal) || isNaN(yVal)) {
        onError("Las coordenadas x e y deben ser números.", player.id);
        return;
    }
    if (xVal < -600) xVal = -600;
    if (xVal > 600) xVal = 600;
    if (yVal < -250) yVal = -250;
    if (yVal > 250) yVal = 250;
    room.setPlayerDiscProperties(plId, {
        x: xVal,
        y: yVal
    });
    say("Has movido al jugador " + room.getPlayer(plId).name + " a x: " + xVal + "; y: " + yVal, MSG_YELLOW, player.id);
}

hostCmds.clearBans = function (player) {
    if (!ADMINCMD(player)) return;
    room.clearBans();
    sayToAdmins("[ADMIN CHAT] Alguien limpió la lista de bans.", true);
}

hostCmds.sil = hostCmds.silenciar = hostCmds.mute = function (player, data) {
    if (!ADMINCMD(player)) return;

    let info = data.split(' ');
    if (info.length < 2) {
        let target = room.getPlayer(parseInt(info[0]));
        if (target) {
            let tReg = loadreg(target.name);
            if ((tReg.logrcon || target.admin) && !loadreg(player.name).logrcon) {
                onError("Solo los administradores RCON pueden silenciar administradores.", player.id);
                return;
            }

            if (tReg.silenced) {
                onError("No puedes silenciar a un jugador que ya se encuentera silenciado", player.id);
                return;
            }
            tReg.silenced = true;
            say(player.name + " ha silenciado a \"" + tReg.name + "\"", MSG_YELLOW);
            setTimeout(function () {
                if (!tReg.silenced)
                    return;
                if (tReg.connected)
                    say("El silencio ha caducado luego de 15 minutos.", MSG_YELLOW, target.id);
                tReg.silenced = false;
            }, 15 * 60 * 1000);
        }
        else {
            onError("Debe ser un número el id.", player.id);
        }
        return;
    }
    let time = parseInt(info[1]);
    if (isNaN(time)) {
        onError("El valor tiempo debe ser un número.", player.id);
        return;
    }
    if (time < 1) time = 1;
    if (time > 100 && !loadreg(player.name).logrcon) time = 100;

    let target = room.getPlayer(parseInt(info[0]));
    if (target) {
        let tReg = loadreg(target.name);
        if ((tReg.logrcon || target.admin) && !loadreg(player.name).logrcon) {
            onError("Solo los administradores RCON pueden silenciar administradores.", player.id);
            return;
        }
        if (tReg.silenced) {
            onError("No puedes silenciar a un jugador que ya se encuentera silenciado", player.id);
            return;
        }
        if (time > 35500) {
            onError("Valor maximo para silenciar: 35500", player.id);
            return;
        }
        tReg.silenced = true;
        say(player.name + " ha silenciado a \"" + tReg.name + "\" por " + time + " minuto/s.", MSG_YELLOW);
        setTimeout(function () {
            if (!tReg.silenced)
                return;
            if (tReg.connected)
                say("Se te removió el silencio automaticamente.", MSG_YELLOW, target.id);
            tReg.silenced = false;
        }, time * 60 * 1000);
    }
}

hostCmds.desil = hostCmds.desilenciar = hostCmds.unmute = function (byplayer, data) {
    if (!ADMINCMD(byplayer)) return;

    let id = parseInt(data);
    let pl = room.getPlayer(id);
    if (!pl) {
        onError("No se ha encontrado un jugador con el id proporcionado.", byplayer.id);
        return;
    }
    reg = loadreg(pl.name);

    if (!reg.silenced) {
        onError("No puedes desilenciar a un jugador que no se encuentra silenciado!", byplayer.id);
        return;
    }
    say("Le has quitado el silencio a " + reg.name, MSG_YELLOW, byplayer.id);
    sayToTarget("Administrador " + byplayer.name + " le ha quitado el silencio a \"" + reg.name + "\"", MSG_YELLOW, room.getPlayerList().filter(p => p.id != byplayer.id));
    reg.silenced = false;
}

hostCmds.cupon = function (player) {
    if (!ADMINCMD(player)) return;
    if (!hostData.cuponAvailable && !loadreg(player.name).logrcon) {
        say("Solo se puede generar un cupon cada 15 minutos!", MSG_SKYBLUE, player.id);
        return;
    }
    if (!loadreg(player.name).logrcon) {
        setTimeout(function () {
            hostData.cuponAvailable = true;
        }, 15 * 1000 * 60);
    }

    hostData.cuponAvailable = false;
    hostData.cupon = "!" + Math.random().toString(36).substring(2, 12);
    hostData.cuponCreator = player;
    say("El administrador " + player.name + " habilitó un cupon, usa " + hostData.cupon + " para recibir un premio.", MSG_SKYBLUE);
}

hostCmds.moveBall = function (player, data) {
    if (!ADMINCMD(player)) return;
    if (data.toLowerCase() == "me") {
        if (player.team == 0 && room.getScores() != null) {
            onError("Debe estar iniciado el partido para utilizar este comando.", player.id);
            return;
        }
        room.setDiscProperties(0, {
            x: player.position.x,
            y: player.position.y
        });
        say("Has movido la pelota a tu posición.", MSG_YELLOW, player.id);
        return;
    }

    let info = data.split(' ');
    if (data.length < 2) {
        onError("Uso correcto !moveball x y", player.id);
        return;
    }
    let xVal = parseInt(info[0]);
    let yVal = parseInt(info[1]);
    if (isNaN(xVal) || isNaN(yVal)) {
        onError("El valor de la x e y deben ser números.", player.id);
        return;
    }

    if (xVal < -550) xVal = -550;
    if (xVal > 550) xVal = 550;
    if (yVal < -250) yVal = -250;
    if (yVal > 250) yVal = 250;

    room.setDiscProperties(0, {
        x: xVal,
        y: yVal
    });
    say("Has movido la pelota a la posicion x: " + xVal + "; y: " + yVal, MSG_YELLOW, player.id);
}

// #endregion

// #region EVERYONE CMDS

hostCmds.help = hostCmds.comandos = hostCmds.ayuda = function (player) {
    room.sendAnnouncement("Comandos: No pongas los <> en el comando, id es el numero que aparece al lado del nombre.", player.id, MSG_YELLOW, "bold");
    room.sendAnnouncement("!stats <id> !banvote <id> !festejo <mensaje> !bienvenida <mensaje> !md <id> <mensaje> !r <mensaje> !chat <sala>", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!donar id cantidad !bananinha !goles !asistencias !victorias !derrotas !kickme !afk !goleadores !topasistencias", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!historicos !mancazos !mancos !tops !mds !p !gk !gkinfo !topgk !hisgk !awards !apuesta !size <size> !banme", player.id, MSG_ORANGE, null);
}

hostCmds.adminhelp = hostCmds.admincmd = hostCmds.admincmds = function (player) {
    room.sendAnnouncement("Comandos ADMIN", player.id, MSG_YELLOW, "bold");
    room.sendAnnouncement("!silenciar <id> <tiempo> !silenciar <id> !desilenciar <id> !spam <mensaje> !setavatar <id> <avatar> !aviso <mensaje>", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!aviso2 <mensaje> !fake <id> <mensaje> !setpos <id> <x> <y> !setspeed <id> <x> <y> !setball <x> <y> !hostinfo", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!warn <id> <mensaje> !clearbans !fix !arcoiris !poss !chatcolor <color> !cupon !search <query>", player.id, MSG_ORANGE, null);
}

hostCmds.rconhelp = hostCmds.rconcmd = hostCmds.rconcmds = function (player) {
    room.sendAnnouncement("Comandos RCON", player.id, MSG_YELLOW, "bold");
    room.sendAnnouncement("!bc !big !ban !conn !show !hide !kick !admin !movetop !giveaway !rotateavatars !small !rcolors !setdb", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!adddb !clearchats !setavatars !abort !setchats !showrange !hiderange !giveassists !st !sa !moveball !ballforce", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!setsize !setsizes !setposes !troll !close !movestatics !giveowngoals !givewins !giveloses !setchat !permaban", player.id, MSG_ORANGE, null);
    room.sendAnnouncement("!giveaward !desmadre !uwu !xd !pulverize", player.id, MSG_ORANGE, null);
}

//hostCmds.tienda = function (player, data) {
//    switch (data.trim().toLowerCase()) {
//        case "color":
//            room.sendAnnouncement("Uso: !buycolor hex | Costo: 10000", player.id, 0x00dd00, null);
//            break;
//        case "style":
//            room.sendAnnouncement("Uso: !buybold | Costo: 30000", player.id, 0x00dd00, "bold");
//            room.sendAnnouncement("Uso: !buyitalic | Costo: 30000", player.id, 0x00dd00, "bold");
//            break;
//        default:
//            say("Uso correcto para ver los precios: !tienda color | !tienda style", MSG_YELLOW, player.id);
//            break;
//    }
//}

hostCmds.saldo = hostCmds.dinero = hostCmds.plata = hostCmds.cash = function (player) {
    reg = loadreg(player.name);
    hostInfo.db.sort(function (a, b) {
        return b.cash - a.cash;
    });
    let index = hostInfo.db.indexOf(reg) + 1;
    say("#" + index.toString() + " " + reg.name + " tienes $" + reg.cash, 0xB3AFE5, (player.admin || reg.logrcon) ? null : player.id);
}

hostCmds.donar = function (player, info) {
    let d = info.split(' ');
    if (d.length < 2) {
        onError("Uso correcto !donar id cantidad", player.id);
        return;
    }
    let pl = room.getPlayer(parseInt(d[0]));
    reg = loadreg(player.name);

    if (reg.cash == 0) {
        onError("No tienes dinero para donar.", player.id);
        return
    }
    if (!pl) {
        onError("No existe el jugador con la id especificada.", player.id);
        return;
    }
    if (pl.id == player.id) {
        onError("No puedes donarte a ti mismo.", player.id);
        return;
    }
    data = parseInt(d[1]);
    if (isNaN(data)) {
        onError("Uso correcto !donar id cantidad", player.id);
        return;
    }
    if (data <= 0) {
        onError("La cantidad debe ser mayor a 0.", player.id);
        return;
    }
    if (reg.cash < data)
        data = reg.cash;
    say("Le has donado $" + data + " a " + pl.name + ".", 0xB3AFE5, player.id);
    say(player.name + " te ha donado $" + data + ".", 0xB3AFE5, pl.id);
    reg.cash -= data;
    loadreg(pl.name).cash += data;
}

hostCmds.festejo = function (player, plFestejo) {
    reg = loadreg(player.name);
    reg.celebration = plFestejo.substring(0, 85);
    say("Este mensaje se mostrará cuando marques gol: " + reg.celebration, MSG_YELLOW, player.id);
}

hostCmds.bienvenida = function (player, plBienvenida) {
    reg = loadreg(player.name);
    reg.welcomeMessage = plBienvenida.substring(0, 85);
    say("Este mensaje se mostrará cuando entres al host: " + reg.welcomeMessage, MSG_YELLOW, player.id);
}

hostCmds.mds = function (player) {
    reg = loadreg(player.name);
    reg.blockmd = !reg.blockmd;
    say("Has " + ["habilitado", "deshabilitado"][reg.blockmd ? 1 : 0] + " los mensajes privados.", MSG_YELLOW, player.id);
}

hostCmds.chat = function (player, data) {
    let defValue = parseInt(data);
    if (isNaN(defValue)) {
        onError("Uso correcto !chat salaid", player.id);
        say("[INFO] La sala es un numero del 1 al 999 donde solo leeran los mensajes quienes esten en esa sala.", 0x00ff00, player.id);
        return;
    }
    reg = loadreg(player.name);
    if (defValue == reg.chat) {
        onError("Ya te encontrabas en el chat al que quieres entrar.", player.id);
        return;
    }
    let hidden = reg.chat;
    if (defValue > 999 || defValue < 0) {
        onError("La sala debe estar comprendida en el rango 0 a 999.", player.id);
        return;
    }
    reg.chat = defValue;
    if (hidden != 0)
        sendToChat("[CHANNEL " + hidden + "] " + player.name + " abandonó el chat", hidden);
    if (defValue == 0) {
        say("Has vuelto al chat predeterminado", MSG_YELLOW, player.id);
        return;
    }
    reg.chat = hidden;
    sendToChat(player.name + " ha entrado al chat " + defValue, defValue);
    sayToRCON(player.name + " entró al chat " + defValue + ".");
    reg.chat = defValue;
    say("Recuerda usar !chat 0 para salir del chat", MSG_YELLOW, player.id);
}

hostCmds.afk = function (player) {
    reg = loadreg(player.name);
    reg.afk = !reg.afk;
    say("El jugador \"" + player.name + "\"" + [" ha salido del ", " ha entrado en "][reg.afk ? 1 : 0] + "modo afk.", MSG_YELLOW);
    if (reg.afk) say("Usa !afk para salir del modo afk.", MSG_YELLOW, player.id);
}

hostCmds.r = function (player, data) {
    reg = loadreg(player.name);
    if (data == "") {
        onError("Usa este comando para responder al ultimo que te envió un mensaje!", player.id);
        return;
    }
    if (reg.lastTalk == -1) {
        onError("Nadie te ha enviado mensajes ultimamente.", player.id);
        return;
    }
    let pl = room.getPlayer(reg.lastTalk);
    if (!pl) {
        onError("El jugador con el que te intentas comunicar ha abandonado el juego.", player.id);
        return;
    }
    md(player.id, reg.lastTalk, data);
}

hostCmds.gk = function (player) {
    if (player.team == 0) {
        onError("Debes estar jugando para usar este comando.", player.id);
        return;
    }
    let score = room.getScores();
    if (!score) {
        onError("No esta el partido iniciado.", player.id);
        return;
    }
    if (score.time > 90) {
        onError("Solo puedes usar este comando en los primeros 90 segundos de juego.", player.id);
        return;
    }
    if (score.time == 0) {
        onError("La pelota debe estar en movimiento para usar este comando.", player.id);
        return;
    }

    let targetTeam = room.getPlayerList().filter(p => p.team == player.team);
    if (targetTeam.sort((a, b) => a.position.x - b.position.x)[player.team == 1 ? 0 : targetTeam.length - 1].name != player.name) {
        onError("Debes ser el jugador que se encuentre mas al cerca del arco para usar este comando.", player.id);
        return;
    }

    if (statics.gk.red)
        if (player.team == 1 && statics.gk.red.name == player.name) {
            onError("Ya habias sido establecido automaticamente por el bot.", player.id);
            return;
        }

    if (statics.gk.blue)
        if (player.team == 2 && statics.gk.blue.name == player.name) {
            onError("Ya habias sido establecido automaticamente por el bot.", player.id);
            return;
        }

    if (player.team == 1) {
        statics.gk.red = player;
        say(player.name + " se ha establecido como arquero del equipo red usando !gk", 0xff4d4d);
    }
    else {
        statics.gk.blue = player;
        say(player.name + " se ha establecido como arquero del equipo blue usando !gk", 0x668cff);
    }
}

hostCmds.report = function (player, data) {
    if (hostInfo.reports.includes("[REPORTE]" + player.name + ": " + data)) {
        onError("Ya habias enviado este reporte anteriormente!", player.id);
        return;
    }
    if (data == null || data == "")
        return;
    say("Tu reporte fue enviado correctamente a banana, lo leera apenas pueda.", MSG_YELLOW, player.id);
    sayToRCON("Reporte de " + player.name + ": " + data);
    hostInfo.reports.push("[REPORTE]" + player.name + ": " + data);
    saveAll();
}

hostCmds.goles = function (player) {
    reg = loadreg(player.name);
    hostInfo.db.sort(function (a, b) {
        return b.goals - a.goals;
    });
    let index = hostInfo.db.indexOf(reg) + 1;
    say("#" + index.toString() + " " + reg.name + " | Goles: " + reg.goals, 0x582CB4, (player.admin || reg.logrcon) ? null : player.id);
}

hostCmds.asistencias = function (player) {
    reg = loadreg(player.name);
    hostInfo.db.sort(function (a, b) {
        return b.assists - a.assists;
    });
    let index = hostInfo.db.indexOf(reg) + 1;
    say("#" + index.toString() + " " + reg.name + " | Asistencias: " + reg.assists, 0x7251C2, (player.admin || reg.logrcon) ? null : player.id);
}

hostCmds.victorias = function (player) {
    reg = loadreg(player.name);
    hostInfo.db.sort(function (a, b) {
        return b.wins - a.wins;
    });
    let index = hostInfo.db.indexOf(reg) + 1;
    say("#" + index.toString() + " " + reg.name + " | Victorias: " + reg.wins, 0x8C77D0, (player.admin || reg.logrcon) ? null : player.id);
}

hostCmds.derrotas = function (player) {
    reg = loadreg(player.name);
    hostInfo.db.sort(function (a, b) {
        return b.loses - a.loses;
    });
    let index = hostInfo.db.indexOf(reg) + 1;
    say("#" + index.toString() + " " + reg.name + " | Derrotas: " + reg.loses, 0xA69CDE, (player.admin || reg.logrcon) ? null : player.id);
}

hostCmds.si = function (player) {
    if (!hostPoll.isActive) {
        onError("No hay ningun banvote activo!", player.id);
        return;
    }
    reg = loadreg(player.name);
    if (hostPoll.hasVoted.includes(reg.auth)) {
        onError("Ya habías votado en este banvote!", player.id);
        return;
    }
    hostPoll.hasVoted.push(reg.auth);
    hostPoll.positives++;
    say("Banvote: " + hostPoll.positives + "/" + (hostPoll.positives + hostPoll.negatives), MSG_SKYBLUE);
}

hostCmds.no = function (player) {
    if (!hostPoll.isActive) {
        onError("No hay ningun banvote activo!", player.id);
        return;
    }
    reg = loadreg(player.name);
    if (hostPoll.hasVoted.includes(reg.auth)) {
        onError("Ya habías votado en este banvote!", player.id);
        return;
    }
    hostPoll.hasVoted.push(reg.auth);
    hostPoll.negatives++;
    say("Banvote: " + hostPoll.positives + "/" + (hostPoll.positives + hostPoll.negatives), MSG_SKYBLUE);
}

hostCmds.banVote = hostCmds.voteBan = function (player, target) {
    if (hostPoll.isActive) {
        onError("Hay un banvote activo actualmente.", player.id);
        return;
    }
    let banTarget = room.getPlayer(parseInt(target));
    if (!banTarget) {
        onError("No existe el jugador al que intentas banvotear.", player.id);
        return;
    }

    if (banTarget.team != 0) {
        onError("Solo puedes banvotear a los spects!", player.id);
        return;
    }
    if (loadreg(banTarget.name).logrcon) {
        onError("No puedes banvotear a jugadores logueados con RCON.", player.id);
        say(player.name + " te intentó banvotear.", 0xff4d4d, banTarget.id);
        return;
    }
    if (!hostPoll.isAvailable && !loadreg(player.name).logrcon) {
        onError("Faltan " + hostPoll.getTimeLeft() + " segundos para que vuelva a estar disponible el banvote.", player.id);
        return;
    }
    else {
        hostPoll.isActive = true;
        if (!loadreg(player.name).logrcon) {
            hostPoll.isAvailable = false;
            clearTimeout(hostPoll.timeoutID);
            hostPoll.startTime = new Date();
            hostPoll.timeoutID = setTimeout(function () {
                hostPoll.isAvailable = true;
            }, 1000 * 60 * 3);
        }
        say("Votacion para banear a " + banTarget.name + ", usa !si o !no para votar. [15 segundos disponibles]", MSG_SKYBLUE);
        setTimeout(function () {
            if (!hostPoll.isActive) {
                hostPoll.resetValues();
                return;
            }
            if (hostPoll.totalVotes() > 3) {
                if (hostPoll.approval() > 50) {
                    room.kickPlayer(banTarget.id, "Banvote: " + hostPoll.approval() + "% de votos.", true);
                    say(banTarget.name + " fue baneado con un " + hostPoll.approval() + "% de los votos [ " + hostPoll.positives + "/" + hostPoll.totalVotes() + " ]", MSG_YELLOW);
                } else
                    say("Porcentaje insuficiente [ " + hostPoll.approval() + "% ]", MSG_ORANGE);
            } else
                say("Votos insuficientes [ " + hostPoll.totalVotes() + " votos ]", MSG_ORANGE);
            hostPoll.resetValues();
        }, 15000);
    }
}

hostCmds.historicos = function (player) {
    let title = "Máximos anotadores históricos";
    let matrix = [];

    let toShow = host_listCount;
    if (hostInfo.db.length < toShow) toShow = hostInfo.db.length;

    matrix.push(["Nick", "P.J.", "Goles", "Asis."]);

    hostInfo.db.sort(function (a, b) {
        return b.goals - a.goals;
    });

    let startingIndex = hostInfo.db.indexOf(loadreg(player.name));
    if (startingIndex == hostInfo.db.length - 1)
        startingIndex = hostInfo.db.length - 3;
    else if (startingIndex == 0)
        startingIndex = 0;
    else
        startingIndex -= 1;

    if (startingIndex <= 0)
        startingIndex = 0;

    for (let i = 0; i < toShow; i++) {
        let info = hostInfo.db[i + startingIndex];
        let name = "#" + (i + 1 + startingIndex).toString() + " " + info.name;
        let goals = info.goals.toString();
        let assists = info.assists.toString();
        let pjugados = (info.wins + info.loses).toString();

        matrix.push([name, pjugados, goals, assists]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.topGk = hostCmds.gkTop = function (player) {
    let title = "Mejores arqueros en línea [no AFKs]";
    let matrix = [];

    let toShow = host_listCount;

    let connectedPlayers = room.getPlayerList();
    let dbactual = new Array();

    for (let m = 0; m < connectedPlayers.length; m++)
        if (!loadreg(connectedPlayers[m].name).afk) {
            if (calculateGKScore(loadreg(connectedPlayers[m].name)) != 0)
                dbactual.push(loadreg(connectedPlayers[m].name));
        }

    if (dbactual.length < toShow) toShow = dbactual.length;
    if (dbactual.length == 0) {
        onError("No hay suficientes estadisticas para mostrar.", player.id);
        return;
    }

    matrix.push(["Nick", "GK Score", "Wins", "Loses", "Arco en 0"]);

    dbactual.sort(function (a, b) {
        return calculateGKScore(b) - calculateGKScore(a);
    });

    for (let i = 0; i < toShow; i++) {
        let info = dbactual[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let gkscore = calculateGKScore(info).toString();
        let wins = info.wins.toString();
        let loses = info.loses.toString();
        let goals0 = info.gkinfo[0].toString();

        matrix.push([name, gkscore, wins, loses, goals0]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.millonarios = function (player) {
    let title = "Magnates del host";
    let matrix = [];

    let toShow = host_listCount;

    if (hostInfo.db.length < toShow) toShow = hostInfo.db.length;

    matrix.push(["Nick", "Dinero"]);

    hostInfo.db.sort(function (a, b) {
        return b.cash - a.cash;
    });

    for (let i = 0; i < toShow; i++) {
        let info = hostInfo.db[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let cash = "$" + info.cash;
        matrix.push([name, cash]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.ricos = function (player) {
    let title = "Poseedores de mas riqueza online";
    let matrix = [];

    let toShow = host_listCount;

    let connectedPlayers = room.getPlayerList();
    let dbactual = new Array();

    for (let m = 0; m < connectedPlayers.length; m++)
        dbactual.push(loadreg(connectedPlayers[m].name));

    if (dbactual.length < toShow) toShow = dbactual.length;
    if (dbactual.length == 0) {
        onError("No hay suficientes estadisticas para mostrar.", player.id);
        return;
    }

    matrix.push(["Nick", "Dinero"]);

    dbactual.sort(function (a, b) {
        return b.cash - a.cash;
    });

    for (let i = 0; i < toShow; i++) {
        let info = dbactual[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let cash = "$" + info.cash;
        matrix.push([name, cash]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.gkHis = hostCmds.hisGk = function (player) {
    let title = "Mejores arqueros historicos";
    let matrix = [];

    let toShow = host_listCount;

    if (hostInfo.db.length < toShow) toShow = hostInfo.db.length;

    matrix.push(["Nick", "GK Score", "Wins", "Loses", "Arco en 0"]);

    hostInfo.db.sort(function (a, b) {
        return calculateGKScore(b) - calculateGKScore(a);
    });

    for (let i = 0; i < toShow; i++) {
        let info = hostInfo.db[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let gkscore = calculateGKScore(info).toString();
        let wins = info.wins.toString();
        let loses = info.loses.toString();
        let goals0 = info.gkinfo[0].toString();

        matrix.push([name, gkscore, wins, loses, goals0]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.topAsistencias = function (player) {
    let title = "Máximos asistentes históricos";
    let matrix = [];

    let toShow = host_listCount;
    if (hostInfo.db.length < toShow) toShow = hostInfo.db.length;

    matrix.push(["Nick", "Asistencias", "Goles"]);

    hostInfo.db.sort(function (a, b) {
        return b.assists - a.assists;
    });

    let startingIndex = hostInfo.db.indexOf(loadreg(player.name));
    if (startingIndex == hostInfo.db.length - 1)
        startingIndex = hostInfo.db.length - 3;
    else if (startingIndex == 0)
        startingIndex = 0;
    else
        startingIndex -= 1;

    if (startingIndex <= 0)
        startingIndex = 0;

    for (let i = 0; i < toShow; i++) {
        let info = hostInfo.db[i + startingIndex];
        let name = "#" + (i + 1 + startingIndex).toString() + " " + info.name;
        let goals = info.goals.toString();
        let assists = info.assists.toString();

        matrix.push([name, assists, goals]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.gkInfo = function (player) {
    let title = "Estadísticas de arquero (Goles recibidos por partido): " + player.name;
    let matrix = [];

    matrix.push(["0 Goles", "1 Gol", "2 Goles", "3 Goles", "Wins", "Loses", "O. G."]);
    let info = loadreg(player.name);

    let fd = info.gkinfo;

    let g0 = fd[0].toString();
    let g1 = fd[1].toString();
    let g2 = fd[2].toString();
    let g3 = fd[3].toString();
    let wins = info.wins.toString();
    let loses = info.loses.toString();
    let ownGoals = info.ownGoals.toString();

    matrix.push([g0, g1, g2, g3, wins, loses, ownGoals]);

    showMatrix(title, matrix, player);
}

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    let days = Math.floor(hours / 24);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return (days > 0 ? days.toString().padStart(2, "0") + "d" : "") + (rhours - days * 24).toString().padStart(2, "0") + "h" + rminutes.toString().padStart(2, "0") + "m";
}

hostCmds.hostInfo = function (player) {
    if (!ADMINCMD(player)) return;

    let title = "Host info";
    let matrix = [];

    let hostmatches = hostInfo.metadata.matchs.toString();
    let hostgoals = hostInfo.metadata.goals.toString();
    let hostassists = hostInfo.metadata.assists.toString();
    let owngoals = hostInfo.metadata.ownGoals.toString();
    let timePlayed = timeConvert(hostInfo.metadata.timePlayed.toString());

    matrix.push(["Room Name", "Players", "Partidos", "Goles", "Asistencias", "G. en Contra", "Tiempo jugado"]);
    matrix.push([host_name, room.getPlayerList().length + "/" + limit.toString(), hostmatches, hostgoals, hostassists, owngoals, timePlayed]);

    showMatrix(title, matrix, player);
}

hostCmds.rank = hostCmds.ranking = hostCmds.rankings = hostCmds.tops = function (player) {
    let title = "Mejores jugadores";
    let matrix = [];

    let toShow = host_listCount;
    if (hostInfo.db.length < toShow) toShow = hostInfo.db.length;

    matrix.push(["Nick", "Wins", "Loses", "Goles", "Asis"]);

    hostInfo.db.sort(function (a, b) {
        return ((b.wins - b.loses) - (a.wins - a.loses));
    });

    for (let i = 0; i < toShow; i++) {
        let info = hostInfo.db[i];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let wins = info.wins.toString();
        let loses = info.loses.toString();
        let goals = info.goals.toString();
        let asis = info.assists.toString();

        matrix.push([name, wins, loses, goals, asis]);
    }
    showMatrix(title, matrix, player);
}

/*

    pulverize | conns | setCelebration | giveAward | show | hide |
    bc | admin | xd | uwu | desmadre | addDb | setdb | joke | close |
    b | k | moveTop | setSpect | giveAway | abort | deleteAward | ranges |
    giveRange | m | moveStatics | spam | giveColor | setPoses | pban | enable |
    disable | setChat | setSize | setSizes | setAvatars | setChats | clearChats |
    teamColors | troll | setGravity | addBallForce | st | stopBall | chatColor |
    arcoiris | fix | poss | setSpeed | fake | warn | aviso1 | aviso2 | search |
    setAvatar | setPos | setBall | clearBans | mute | unmute | cupon | moveBall |
    ayuda | admincmds | rconcmds | cash | donar | festejo | bienvenida | mds |
    chat | afk | r | gk | report | goles | asistencias | victorias | derrotas |
    si | no | voteBan | historicos | gkTop | hisGk | topAsistencias | gkInfo |
    hostInfo | tops | myStats | mancazos | mancos | goleadores | w | awards |
    honkhonk | kickme | apuesta | size | bananinha | winner | rr | tienda

*/

hostCmds.myInfo = hostCmds.myStats = hostCmds.stats = hostCmds.myStats = function (player, data) {
    let starterplayer = player;
    let targetid = parseInt(data);
    let targetplayer = room.getPlayer(targetid);

    if (!isNaN(targetid) && targetplayer)
        player = targetplayer;

    let title = "Estadísticas de " + player.name;
    let matrix = [];

    matrix.push(["Goles", "O.G.", "Asis.", "Wins", "Loses", "Dinero"]);

    let info = loadreg(player.name);

    let goals = info.goals.toString();
    let ownGoals = info.ownGoals.toString();
    let assists = info.assists.toString();
    let wins = info.wins.toString();
    let loses = info.loses.toString();
    let cash = "$" + info.cash.toString();
    matrix.push([goals, ownGoals, assists, wins, loses, cash]);

    onJoinAndLeave();
    if (!room.getPlayerList().find(p => p.admin)) return;
    showMatrix(title, matrix, starterplayer);
}

hostCmds.petazos = hostCmds.conazos = hostCmds.mancazos = function (player) {
    let title = "Peores jugadores históricos";
    let matrix = [];

    matrix.push(["Nick", "O.G.", "Wins", "Loses"]);
    let dbflux = hostInfo.db.filter((p) => p.loses != 0);
    dbflux.sort(function (a, b) {
        return ((b.wins + 1) / b.loses) - ((a.wins + 1) / a.loses);
    });

    let toShow = host_listCount;
    if (dbflux.length < toShow) toShow = dbflux.length;

    for (let i = 0; i < toShow; i++) {
        let info = dbflux[dbflux.length - i - 1];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let ownGoals = info.ownGoals.toString();
        let wins = info.wins.toString();
        let loses = info.loses.toString();

        matrix.push([name, ownGoals, wins, loses]);
    }

    showMatrix(title, matrix, player);
}

//petes conos mancos
hostCmds.petes = hostCmds.conos = hostCmds.mancos = function (player) {
    let title = "Peores jugadores en línea [no AFKs]";
    let matrix = [];
    let toShow = host_listCount;
    let connectedPlayers = room.getPlayerList();
    let dbactual = new Array();
    for (let m = 0; m < connectedPlayers.length; m++)
        if (!loadreg(connectedPlayers[m].name).afk)
            dbactual = dbactual.concat(loadreg(connectedPlayers[m].name));
    matrix.push(["Nick", "O.G.", "Wins", "Loses"]);

    let dbflux = dbactual.filter((p) => p.loses != 0);
    if (dbflux.length < toShow) toShow = dbflux.length;

    dbflux.sort(function (a, b) {
        return ((b.wins + 1) / b.loses) - ((a.wins + 1) / a.loses);
    });

    for (let i = 0; i < toShow; i++) {
        let info = dbflux[dbflux.length - i - 1];
        let name = "#" + (i + 1).toString() + " " + info.name;
        let ownGoals = info.ownGoals.toString();
        let wins = info.wins.toString();
        let loses = info.loses.toString();

        matrix.push([name, ownGoals, wins, loses]);
    }

    showMatrix(title, matrix, player);
}


hostCmds.goleadores = function (player) {
    let title = "Máximos anotadores en linea [no AFKs]";
    let matrix = [];

    let toShow = host_listCount;

    let connectedPlayers = room.getPlayerList();
    let dbactual = new Array();

    for (let m = 0; m < connectedPlayers.length; m++)
        if (!loadreg(connectedPlayers[m].name).afk)
            dbactual = dbactual.concat(loadreg(connectedPlayers[m].name));

    if (dbactual.length < toShow) toShow = dbactual.length;

    matrix.push(["Nick", "Goles", "Asistencias"]);

    dbactual.sort(function (a, b) {
        return b.goals - a.goals;
    });

    let startingIndex = dbactual.indexOf(loadreg(player.name));
    if (startingIndex == dbactual.length - 1)
        startingIndex = dbactual.length - 3;
    else if (startingIndex == 0)
        startingIndex = 0;
    else
        startingIndex -= 1;

    if (startingIndex <= 0)
        startingIndex = 0;

    for (let i = 0; i < toShow; i++) {
        let info = dbactual[startingIndex + i];
        let name = "#" + (i + 1 + startingIndex).toString() + " " + info.name;
        let goals = info.goals.toString();
        let assists = info.assists.toString();

        matrix.push([name, goals, assists]);
    }

    showMatrix(title, matrix, player);
}

hostCmds.mensaje = hostCmds.message = hostCmds.md = hostCmds.dm = hostCmds.pm = hostCmds.mp = hostCmds.msg = hostCmds.w = function (player, data) {
    md(player.id, parseInt(data.split(' ')[0].replace("#", "")), data.replace(data.split(' ')[0], ""));
}

hostCmds.condecoraciones = hostCmds.premios = hostCmds.awards = function (player, data) {
    let title = "CONDECORACIONES";
    let matrix = [];

    matrix.push(["NOMBRE", "CONDECORACION"]);

    for (let i = 0; i < hostInfo.awards.length; i++) {
        let info = hostInfo.awards[i];
        let name = "#" + (i + 1).toString() + " " + info.target;
        let type = info.type;

        matrix.push([name, type]);
    }

    showMatrixTarget(title, matrix, [player]);
}

hostCmds.banme = hostCmds.honk = hostCmds.honkhonk = function (player, data) {
    reg = loadreg(player.name);
    if (!reg.honked) {
        reg.goals += 5;
        reg.assists += 5;
        say("HONK HONK: Recibiste 5 goles y 5 asistencias.", MSG_ORANGE, player.id);
        reg.honked = true;
        saveAll();
    }
    else
        say("Ya habias honk honkeado.", MSG_RED, player.id);
}

hostCmds.kickme = function (player, data) {
    if (hostPoll.isActive) {
        onError("No puedes kickearte mientras hay un banvote activo.", player.id);
        return;
    }
    room.kickPlayer(player.id, "Auto kick", false);
}

hostCmds.apuesta = function (player, data) {
    let apuesta = parseInt(data);
    if (data == "" || data == null || isNaN(apuesta)) {
        say("[LEER] Uso !apuesta <goles>, por ejemplo usa !apuesta 58 y tendras 1/58 posibilidades de ganar 58 goles.", MSG_RED, player.id);
        say("[LEER] Eso si, ten cuidado, porque tambien tendras 57/58 posibilidades de ser baneado.", MSG_RED, player.id);
        say("[LEER] !apuesta x => Posiblidades de ganar x goles: 1/x posibilidades de ser baneado (x-1)/x.", MSG_RED, player.id);
        return;
    }
    if (apuesta < 1 || apuesta > 500) {
        say("No puedes realizar apuestas menores a 1 ni mayores a 500.", MSG_RED, player.id);
        return;
    }
    let rnumber = getRandomInt(0, apuesta);
    if (rnumber == 0) {
        say(player.name + " ganó " + apuesta + " gol/es.", MSG_YELLOW);
        loadreg(player.name).goals += apuesta;
        saveAll();
    }
    else {
        setTimeout(function () { room.clearBan(player.id) }, apuesta * 1000 * 60);
        room.kickPlayer(player.id, "PERDISTE LA APUESTA | BAN: " + apuesta + " MIN", true);
    }
}

hostCmds.size = function (player, data) {
    let size = parseInt(data);
    if (isNaN(size)) {
        onError("El valor de size debe ser un número.", player.id);
        return;
    }
    if (!hostConfig.resize && !loadreg(player.name).logrcon) {
        onError("El comando fue deshabilitado por un administrador rcon.", player.id);
        return;
    }
    if ((size < 1 || size > 100) && !loadreg(player.name).logrcon) {
        onError("El valor del radio debe estar comprendido dentro del rango de 1 a 100", player.id);
        return;
    }
    if ((loadreg(player.name).logrcon || hostConfig.resize) && player.team != 0) {
        room.setPlayerDiscProperties(player.id, {
            radius: size
        });
    }
    loadreg(player.name).size = size;
    say("Has establecido el radio de tu bola a: " + size + ", usa !size 15 para restaurarla.", MSG_YELLOW, player.id);
}

hostCmds.chilena = hostCmds.bananinha = function (player) {
    if (!hostConfig.bananinha && !player.admin && !loadreg(player.name).logrcon) {
        onError("El comando fue deshabilitado por un administrador rcon.", player.id);
        return;
    }
    let disc = room.getPlayerDiscProperties(player.id);
    if (player.team != 0) {
        room.setPlayerDiscProperties(player.id, {
            bCoeff: disc.bCoeff == -3 ? 0 : -3
        });
    }
    loadreg(player.name).bananinha = !loadreg(player.name).bananinha;
    say("Modo chilena" + [" activado!", " desactivado!"][loadreg(player.name).bananinha ? 0 : 1], MSG_YELLOW, player.id);
}
// #endregion

room.onPlayerJoin = function (player) {
    console.log("[JOIN EVENT]" + getTimeStamp() + " " + player.name + " auth:\"" + player.auth + "\"");

    if (duplicatedNameOnDb(player.name, player.auth)) {
        room.kickPlayer(player.id, "Ese nombre ya esta tomado.", false);
        return;
    }
    else if (duplicatedAuth(player.id, player.auth) && !TEST_MODE) {
        room.kickPlayer(player.id, "Ya hay alguien en el host conectado desde tu pc.", false);
        return;
    }
    else if (room.getPlayerList().length > limit && !adminAuths.includes(player.auth)) {
        room.kickPlayer(player.id, "El host esta lleno " + limit + "/" + limit + ".", false);
        return;
    }
    else {
        if (!exists(player) || TEST_MODE) {
            hostInfo.db.push({
                auth: player.auth,
                name: player.name,
                otherNames: [player.name],
                afk: false,
                rainbow: false,
                assists: 0,
                bananinha: false,
                blockmd: false,
                cash: 0,
                celebration: null,
                chat: 0,
                chatcolor: 0xFFFFFF,
                connected: true,
                gkinfo: [0, 0, 0, 0],
                goals: 0,
                lastTalk: -1,
                lastConnections: null,
                loses: 0,
                logrcon: false,
                ownGoals: 0,
                range: null,
                silenced: false,
                size: 15,
                touches: 0,
                warns: 0,
                welcomeMessage: null,
                wins: 0
            });
            say("Bienvenido " + player.name + "! usa !ayuda para ver los comandos", MSG_YELLOW, player.id);
            say("Usa !bienvenida mensaje, para cambiar este mensaje de bienvenida.", MSG_YELLOW, player.id);
        }
        else {
            reg = hostInfo.db.find(p => p.auth == player.auth);
            if (!reg.otherNames.includes(player.name))
                reg.otherNames.push(player.name);
            reg.name = player.name;
            reg.afk = false;
            reg.blockmd = false;
            reg.connected = true;
            reg.warns = 0;
            reg.chat = 0;
            reg.rainbow = false;
            reg.lastTalk = -1;
            if (reg.welcomeMessage != null)
                say(reg.welcomeMessage);
            else {
                say("Bienvenido " + player.name + "! usa !ayuda para ver los comandos.", MSG_YELLOW, player.id);
                say("Usa !bienvenida mensaje, para cambiar este mensaje de bienvenida.", MSG_YELLOW, player.id);
                say("Ya habias jugado aqui y marcaste " + reg.goals + " gol/es y tambien " + reg.assists + " asistencia/s.", MSG_YELLOW, player.id);
            }
        }
    }
    showcollisions(player.name);
    joinConnection(player);
    onJoinAndLeave();

    if (rconConfig.rconAuth == player.auth) loadreg(player.name).logrcon = true;
    if (adminAuths.includes(player.auth)) {
        if (room.getPlayerList().filter(s => s.admin && !loadreg(s.name).afk).length < 3 || player.auth == rconConfig.rconAuth)
            room.setPlayerAdmin(player.id, true);
    }
    if (hostInfo.permabans.includes(player.auth)) room.kickPlayer(player.id, "Habías recibido permaban.", true);
}

room.onRoomLink = function (roomURL) {
    console.log("ROOM URL: " + roomURL);
	room.setCustomStadium(map)
}

room.onPlayerLeave = function (player) {
    console.log("[LEFT EVENT]" + getTimeStamp() + " " + player.name);
    if (player.team != 0 && room.getPlayerList().filter(p => p.team == 0).length != 0)
        room.pauseGame(true);
    if (loadreg(player.name) && !room.getPlayerList().find(p => p.name == player.name)) {
        loadreg(player.name).connected = false;
        leftConnection(player);
    }
    onJoinAndLeave();
}

room.onGamePause = function (byPlayer) {
    hostData.gamePaused = true;
}

room.onGameUnpause = function (byPlayer) {
    hostData.gamePaused = false;
}

room.onGameStart = function (byPlayer) {
    playersInTeam = { red: [], blue: [] };
    let teams = room.getPlayerList(p => p.team != 0);
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].team == 1)
            playersInTeam.red.push(loadreg(teams[i].name));
        else
            playersInTeam.blue.push(loadreg(teams[i].name));
    }
    currentScore.red = 0;
    currentScore.blue = 0;
    statics.gk.red = null;
    statics.gk.blue = null;
    hostData.onTeamVictoryCalled = false;
    hostData.pUsed = false;
    hostData.gamePaused = false;
    updateSizeNChilena();
}

room.onGameStop = function (player) {
    let players = room.getPlayerList();
    hostData.gamePaused = true;
    for (let a = 0; a < players.length; a++) {
        reg = loadreg(players[a].name);
        reg.touches = 0;
    }
    if (player != null) {
        if (!loadreg(player.name).logrcon && currentScore.blue != currentScore.red) {
            if (currentScore.blue != 0 || currentScore.red != 0) {
                say("[WARNING] No frenes el partido antes de que termine o el bot te baneará automaticamente.", MSG_RED, player.id);
                if (player.team != 0) {
                    let winner = currentScore.red > currentScore.blue ? 1 : 2;
                    winsManager(winner);
                    for (let q = 0; q < playersInTeam.red.length; q++) {
                        playersInTeam.red[q].wins += (winner == 1 ? 1 : 0);
                        playersInTeam.red[q].loses += (winner == 2 ? 1 : 0);
                    }
                    for (let r = 0; r < playersInTeam.blue.length; r++) {
                        playersInTeam.blue[r].wins += (winner == 2 ? 1 : 0);
                        playersInTeam.blue[r].loses += (winner == 1 ? 1 : 0);
                    }
                }
            }
        }
    }
}

room.onTeamVictory = function (score) {
    if (hostData.onTeamVictoryCalled) return;
    hostInfo.metadata.matchs++;
    if (score.time) hostInfo.metadata.timePlayed += score.time / 60;

    if (score.time) ballTouchers();
    if (statics.gk.red) loadreg(statics.gk.red.name).gkinfo[score.blue]++;
    if (statics.gk.blue) loadreg(statics.gk.blue.name).gkinfo[score.red]++;
    let winner = score.red > score.blue ? 1 : 2;
    winsManager(winner);
    let teams = [room.getPlayerList().filter((p) => p.team == 1), room.getPlayerList().filter((p) => p.team == 2)];
    let diff = score.red - score.blue;
    if (diff < 0) diff * -1;
    if (diff == 0) diff = 1;
    let startCash = 0;
    let earned = 0;
    for (let i = 0; i < teams[winner - 1].length; i++) {
        reg = loadreg(teams[winner - 1][i].name);
        reg.wins++;
        startCash = reg.cash;
        reg.cash += 200 + (diff - 1) * 50;
        if (statics.gk.red)
            if (winner == 1 && score.blue == 0 && statics.gk.red.id == teams[winner - 1][i].id)
                reg.cash += 150;
        if (statics.gk.blue)
            if (winner == 2 && score.red == 0 && statics.gk.blue.id == teams[winner - 1][i].id)
                reg.cash += 150;
        earned = (reg.cash - startCash);
        say("Ganaste $" + earned + " por ganar el partido " + ("[$200 victoria" + (diff != 1 ? diff == 2 ? " + $50 por dif de 2 goles" : " + $100 por dif de 3 goles" : "") + (earned > 300 ? " + $150 bonus arco en 0" : "") + "]"), 0xB3AFE5, teams[winner - 1][i].id);
        say("Extras: $" + (50 * statics.consecutiveWins) + " por llevar " + statics.consecutiveWins + " victoria/s consecutiva/s.", 0xB3AFE5, teams[winner - 1][i].id);
        reg.cash += 50 * statics.consecutiveWins;
    }

    for (let z = 0; z < teams[winner % 2].length; z++) {
        loadreg(teams[winner % 2][z].name).loses++;
    }

    hostData.onTeamVictoryCalled = true;
    saveAll();
    currentScore.red = 0;
    currentScore.blue = 0;
    setTimeout(function () { room.stopGame(); }, 1500);
}

room.onPlayerKicked = function (player, reason, ban, byplayer) {
    if (byplayer != null)
        console.log("[" + ["KICK", "BAN"][!ban ? 0 : 1] + " EVENT]" + getTimeStamp() + " " + player.name + " fue " + ["kickeado", "baneado"][!ban ? 0 : 1] + " por " + byplayer.name);

    if (byplayer != null) {
        reg = loadreg(player.name);
        if (!reg) return;

        if (reg.logrcon) {
            room.kickPlayer(byplayer.id, "No puedes banear/kickear jugadores logeados con rcon!", ban);
            room.clearBan(player.id);
        }
        if (adminAuths.includes(reg.auth) && ban) {
            room.clearBan(player.id);
        }
    }
}

room.onPlayerTeamChange = function (player, byPlayer) {
    updateSizeNChilena();
}

room.onPlayerAdminChange = function (changed, byplayer) {
    if (byplayer) {
        console.log("[ADMIN EVENT]" + getTimeStamp() + " " + byplayer.name + " cambió el estado de admin de " + changed.name + " a: " + changed.admin);
    }
    if (byplayer != null) {
        if (changed.id != byplayer.id && !changed.admin) {
            if (loadreg(changed.name).logrcon) {
                onError("No le puedes quitar administrador a jugadores logeados con rcon!", byplayer.id);
                room.setPlayerAdmin(changed.id, true);
            }
        }

        if (changed.admin) {
            reg = loadreg(changed.name);
            if (reg.afk) {
                room.setPlayerAdmin(changed.id, false);
                onError("No se le puede asignar administrador a jugadores afk!", byplayer.id);
                return;
            }
            say("Puedes usar # antes de los mensajes para hablar por el admin chat. Usa !adminhelp para ver los comandos.", MSG_YELLOW, changed.id);
        }
    }
}

function distance(p1, p2) {
    let d1 = p1.x - p2.x;
    let d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function setupGKs() {
    if (room.getScores().time == 0) {
        if (statics.gk.red) return;
        let rteam = room.getPlayerList().filter(p => p.team == 1);
        let bteam = room.getPlayerList().filter(p => p.team == 2);
        if (rteam.length == 0 || bteam.length == 0) {
            let pls = room.getPlayerList().filter(p => p.team != 0);
            if (pls.length == 0) return;
            if (loadreg(pls[0].name).logrcon) return;
            say("No puedes jugar contra 0 jugadores!");
            room.stopGame();
            return;
        }
        statics.gk.red = rteam.sort((a, b) => a.position.x - b.position.x)[0];
        statics.gk.blue = bteam.sort((a, b) => a.position.x - b.position.x)[bteam.length - 1];
        say("Arquero RED: " + statics.gk.red.name + "; Arquero BLUE: " + statics.gk.blue.name + "; Usa !gk para establecerte como arquero!", MSG_SKYBLUE);
    }
}

function kickTimeout() {
    hostData.oneSecondKick = true;
    if (ids.kickTimeout) {
        clearTimeout(ids.kickTimeout);
        ids.kickTimeout = null;
    }

    ids.kickTimeout = setTimeout(function () {
        hostData.oneSecondKick = false;
    }, 2500);
}

function assistanceTimeout() {
    if (ids.lastAssistant) {
        clearTimeout(ids.lastAssistant);
    }

    ids.lastAssistant = setTimeout(function () {
        statics.playerAssistant = null;
    }, 4000);
}

room.onGameTick = function () {
    if (!ballAtCenter) {
        let ballpos = room.getBallPosition();
        if (ballpos.x == 0 && ballpos.y == 0) {
            ballAtCenter = true;
            updateSizeNChilena();
        }
    }
    let players = room.getPlayerList().filter(p => p.team != 0);
    let ballPosition = room.getBallPosition();
    let triggerDistance = 25.1;

    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let distanceToBall = distance(player.position, ballPosition);
        if (distanceToBall < triggerDistance) {
            statics.lastPlayerTouch = player;
            setupGKs();
        }
    }
}

room.onPlayerBallKick = function (player) {
    reg = loadreg(player.name);
    reg.touches++;
    statics.lastPlayerTouch = player;
    setupGKs();
    if (statics.lastPlayerKick) {
        if (statics.lastPlayerKick.name == player.name) {
            kickTimeout();
            return;
        }
        else {
            if (statics.lastPlayerKick.team == player.team) {
                statics.playerAssistant = statics.lastPlayerKick;
                assistanceTimeout();
            }
            else
                statics.playerAssistant = null;
            statics.lastPlayerKick = player;
            kickTimeout();
        }
    }
    else {
        statics.lastPlayerKick = player;
        statics.playerAssistant = null;
    }
}

room.onTeamGoal = function (team) {
    ballAtCenter = false;
    reg = null;
    let scores = room.getScores();
    let scorer = null;

    currentScore.red = scores.red;
    currentScore.blue = scores.blue;

    if (statics.lastPlayerTouch.team != statics.lastPlayerKick.team) {
        if (hostData.oneSecondKick) {
            reg = loadreg(statics.lastPlayerKick.name);
            scorer = statics.lastPlayerKick;
        }
    }
    if (!reg) {
        reg = loadreg(statics.lastPlayerTouch.name);
        scorer = statics.lastPlayerTouch;
    }

    if (statics.playerAssistant != null) {
        if (statics.playerAssistant.team != team || statics.playerAssistant.name == reg.name)
            statics.playerAssistant = null;
    }
    if (!scorer) return;
    console.log("[GOAL EVENT]" + getTimeStamp() + "[" + scores.red + "-" + scores.blue + "] " + scorer.name + " marcó un gol en el minuto '" + Math.floor(scores.time / 2));
    let goalTime = Math.floor(scores.time / 2);
    if (goalTime <= 90) goalTime = "['" + goalTime + " ⚽] ";
    if (goalTime > 90) goalTime = "[ 90+ ⚽] ";
    if (team == scorer.team) {
        if (statics.playerAssistant != null) {
            let assist = loadreg(statics.playerAssistant.name);
            assist.assists++;
        }
        reg.goals++;
        reg.cash += 50;
        say("Ganaste $50 por marcar el gol.", 0xB3AFE5, scorer.id);
        if (statics.playerAssistant) say("Ganaste $50 por realizar una asistencia.", 0xB3AFE5, statics.playerAssistant.id);
        hostInfo.metadata.goals++;
        saveAll();

        if (reg.celebration) {
            if (statics.playerAssistant) {
                say(goalTime + reg.celebration + " (Asistencia: " + statics.playerAssistant.name + ")", MSG_YELLOW);
                hostInfo.metadata.assists++;
            }
            else
                say(goalTime + reg.celebration, MSG_YELLOW);
        }
        else {
            if (statics.playerAssistant) {
                say(goalTime + "GOOOOOOOOOOOOOOOOOOOL DE " + reg.name + "! con asistencia de " + statics.playerAssistant.name, MSG_YELLOW);
                hostInfo.metadata.assists++;
            }
            else
                say(goalTime + "GOOOOOOOOOOOOOOOOOOOL DE " + reg.name + "!", MSG_YELLOW);
        }
    }
    else {
        say("Se te quitaron $50 por marcar un gol en contra.", 0xB3AFE5, scorer.id);
        reg.cash -= 50;
        if ((scores.time > scores.timeLimit - 10 && scores.timeLimit != 0) && ((scores.red >= scores.blue && scorer.team == 2) || (scores.blue >= scores.red && scorer.team == 1)))
            say(goalTime + "Faltando tan poco y el pelotudo de " + reg.name + " se la clava en contra!", MSG_YELLOW);
        else
            say(goalTime + "Pero " + reg.name + ", es para el otro lado que atacas!", MSG_YELLOW);
        reg.ownGoals++;
        hostInfo.metadata.ownGoals++;
        saveAll();
    }
    statics.playerAssistant = null;
    statics.lastPlayerTouch = null;
    statics.lastPlayerKick = null;
    if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)
        room.onTeamVictory(scores);
}

room.onPlayerTeamChange = function (player, byPlayer) {
    reg = loadreg(player.name);

    if (player.team == 0) {
        if (reg.chat == chatting.rchat || reg.chat == chatting.bchat)
            reg.chat = 0;
        return;
    }

    if (chatting.rchat != 0 && chatting.bchat != 0) {
        if (player.team == 1)
            reg.chat = chatting.rchat;
        else
            reg.chat = chatting.bchat;
    }

    if (reg.afk) {
        room.setPlayerTeam(player.id, 0);
        say("El jugador \"" + player.name + "\" se encuentra en modo afk.", MSG_ORANGE, byPlayer.id);
    }
    updateSizeNChilena();
}
