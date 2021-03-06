/*
  ----------------------------------------------------------
  MIDI.Synesthesia : 0.3.1 : 2012-01-06
  ----------------------------------------------------------
  Peacock:  “Instruments to perform color-music: Two centuries of technological experimentation,”
    Leonardo, 21 (1988), 397-406.
  Gerstner:  Karl Gerstner, The Forms of Color 1986
  Klein:  Colour-Music: The art of light, London: Crosby Lockwood and Son, 1927.
  Jameson:  “Visual music in a visual programming language,” IEEE Symposium on Visual Languages, 1999, 111-118.
  Helmholtz:  Treatise on Physiological Optics, New York: Dover Books, 1962
  Jones:  The art of light & color, New York: Van Nostrand Reinhold, 1972
  ----------------------------------------------------------
  Reference: http://rhythmiclight.com/archives/ideas/colorscales.html
  ----------------------------------------------------------
*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../inc/colorspace"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var colorspace_1 = require("../inc/colorspace");
    // tslint:disable-next-line:variable-name
    var Synesthesia = {
        // tslint:disable:object-literal-sort-keys
        data: {
            "Isaac Newton (1704)": {
                english: [
                    "red",
                    null,
                    "orange",
                    null,
                    "yellow",
                    "green",
                    null,
                    "blue",
                    null,
                    "indigo",
                    null,
                    "violet",
                ],
                format: "HSL",
                ref: "Gerstner, p.167",
                0: [0, 96, 51],
                1: [0, 0, 0],
                2: [29, 94, 52],
                3: [0, 0, 0],
                4: [60, 90, 60],
                5: [135, 76, 32],
                6: [0, 0, 0],
                7: [248, 82, 28],
                8: [0, 0, 0],
                9: [302, 88, 26],
                10: [0, 0, 0],
                11: [325, 84, 46]
            },
            "Louis Bertrand Castel (1734)": {
                english: [
                    "blue",
                    "blue-green",
                    "green",
                    "olive green",
                    "yellow",
                    "yellow-orange",
                    "orange",
                    "red",
                    "crimson",
                    "violet",
                    "agate",
                    "indigo",
                ],
                format: "HSL",
                ref: "Peacock, p.400",
                0: [248, 82, 28],
                1: [172, 68, 34],
                2: [135, 76, 32],
                3: [79, 59, 36],
                4: [60, 90, 60],
                5: [49, 90, 60],
                6: [29, 94, 52],
                7: [360, 96, 51],
                8: [1, 89, 33],
                9: [325, 84, 46],
                10: [273, 80, 27],
                11: [302, 88, 26]
            },
            "George Field (1816)": {
                english: [
                    "blue",
                    null,
                    "purple",
                    null,
                    "red",
                    "orange",
                    null,
                    "yellow",
                    null,
                    "yellow green",
                    null,
                    "green",
                ],
                format: "HSL",
                ref: "Klein, p.69",
                0: [248, 82, 28],
                1: [0, 0, 0],
                2: [302, 88, 26],
                3: [0, 0, 0],
                4: [360, 96, 51],
                5: [29, 94, 52],
                6: [0, 0, 0],
                7: [60, 90, 60],
                8: [0, 0, 0],
                9: [79, 59, 36],
                10: [0, 0, 0],
                11: [135, 76, 32]
            },
            "D. D. Jameson (1844)": {
                english: [
                    "red",
                    "red-orange",
                    "orange",
                    "orange-yellow",
                    "yellow",
                    "green",
                    "green-blue",
                    "blue",
                    "blue-purple",
                    "purple",
                    "purple-violet",
                    "violet",
                ],
                format: "HSL",
                ref: "Jameson, p.12",
                0: [360, 96, 51],
                1: [14, 91, 51],
                2: [29, 94, 52],
                3: [49, 90, 60],
                4: [60, 90, 60],
                5: [135, 76, 32],
                6: [172, 68, 34],
                7: [248, 82, 28],
                8: [273, 80, 27],
                9: [302, 88, 26],
                10: [313, 78, 37],
                11: [325, 84, 46]
            },
            "Theodor Seemann (1881)": {
                english: [
                    "carmine",
                    "scarlet",
                    "orange",
                    "yellow-orange",
                    "yellow",
                    "green",
                    "green blue",
                    "blue",
                    "indigo",
                    "violet",
                    "brown",
                    "black",
                ],
                format: "HSL",
                ref: "Klein, p.86",
                0: [0, 58, 26],
                1: [360, 96, 51],
                2: [29, 94, 52],
                3: [49, 90, 60],
                4: [60, 90, 60],
                5: [135, 76, 32],
                6: [172, 68, 34],
                7: [248, 82, 28],
                8: [302, 88, 26],
                9: [325, 84, 46],
                10: [0, 58, 26],
                11: [0, 0, 3]
            },
            "A. Wallace Rimington (1893)": {
                english: [
                    "deep red",
                    "crimson",
                    "orange-crimson",
                    "orange",
                    "yellow",
                    "yellow-green",
                    "green",
                    "blueish green",
                    "blue-green",
                    "indigo",
                    "deep blue",
                    "violet",
                ],
                format: "HSL",
                ref: "Peacock, p.402",
                0: [360, 96, 51],
                1: [1, 89, 33],
                2: [14, 91, 51],
                3: [29, 94, 52],
                4: [60, 90, 60],
                5: [79, 59, 36],
                6: [135, 76, 32],
                7: [163, 62, 40],
                8: [172, 68, 34],
                9: [302, 88, 26],
                10: [248, 82, 28],
                11: [325, 84, 46]
            },
            "Bainbridge Bishop (1893)": {
                english: [
                    "red",
                    "orange-red or scarlet",
                    "orange",
                    "gold or yellow-orange",
                    "yellow or green-gold",
                    "yellow-green",
                    "green",
                    "greenish-blue or aquamarine",
                    "blue",
                    "indigo or violet-blue",
                    "violet",
                    "violet-red",
                    "red",
                ],
                format: "HSL",
                ref: "Bishop, p.11",
                0: [360, 96, 51],
                1: [1, 89, 33],
                2: [29, 94, 52],
                3: [50, 93, 52],
                4: [60, 90, 60],
                5: [73, 73, 55],
                6: [135, 76, 32],
                7: [163, 62, 40],
                8: [302, 88, 26],
                9: [325, 84, 46],
                10: [343, 79, 47],
                11: [360, 96, 51]
            },
            "H. von Helmholtz (1910)": {
                english: [
                    "yellow",
                    "green",
                    "greenish blue",
                    "cayan-blue",
                    "indigo blue",
                    "violet",
                    "end of red",
                    "red",
                    "red",
                    "red",
                    "red orange",
                    "orange",
                ],
                format: "HSL",
                ref: "Helmholtz, p.22",
                0: [60, 90, 60],
                1: [135, 76, 32],
                2: [172, 68, 34],
                3: [211, 70, 37],
                4: [302, 88, 26],
                5: [325, 84, 46],
                6: [330, 84, 34],
                7: [360, 96, 51],
                8: [10, 91, 43],
                9: [10, 91, 43],
                10: [8, 93, 51],
                11: [28, 89, 50]
            },
            "Alexander Scriabin (1911)": {
                english: [
                    "red",
                    "violet",
                    "yellow",
                    "steely with the glint of metal",
                    "pearly blue the shimmer of moonshine",
                    "dark red",
                    "bright blue",
                    "rosy orange",
                    "purple",
                    "green",
                    "steely with a glint of metal",
                    "pearly blue the shimmer of moonshine",
                ],
                format: "HSL",
                ref: "Jones, p.104",
                0: [360, 96, 51],
                1: [325, 84, 46],
                2: [60, 90, 60],
                3: [245, 21, 43],
                4: [211, 70, 37],
                5: [1, 89, 33],
                6: [248, 82, 28],
                7: [29, 94, 52],
                8: [302, 88, 26],
                9: [135, 76, 32],
                10: [245, 21, 43],
                11: [211, 70, 37]
            },
            "Adrian Bernard Klein (1930)": {
                english: [
                    "dark red",
                    "red",
                    "red orange",
                    "orange",
                    "yellow",
                    "yellow green",
                    "green",
                    "blue-green",
                    "blue",
                    "blue violet",
                    "violet",
                    "dark violet",
                ],
                format: "HSL",
                ref: "Klein, p.209",
                0: [0, 91, 40],
                1: [360, 96, 51],
                2: [14, 91, 51],
                3: [29, 94, 52],
                4: [60, 90, 60],
                5: [73, 73, 55],
                6: [135, 76, 32],
                7: [172, 68, 34],
                8: [248, 82, 28],
                9: [292, 70, 31],
                10: [325, 84, 46],
                11: [330, 84, 34]
            },
            "August Aeppli (1940)": {
                english: [
                    "red",
                    null,
                    "orange",
                    null,
                    "yellow",
                    null,
                    "green",
                    "blue-green",
                    null,
                    "ultramarine blue",
                    "violet",
                    "purple",
                ],
                format: "HSL",
                ref: "Gerstner, p.169",
                0: [0, 96, 51],
                1: [0, 0, 0],
                2: [29, 94, 52],
                3: [0, 0, 0],
                4: [60, 90, 60],
                5: [0, 0, 0],
                6: [135, 76, 32],
                7: [172, 68, 34],
                8: [0, 0, 0],
                9: [211, 70, 37],
                10: [273, 80, 27],
                11: [302, 88, 26]
            },
            "I. J. Belmont (1944)": {
                english: [
                    "red",
                    "red-orange",
                    "orange",
                    "yellow-orange",
                    "yellow",
                    "yellow-green",
                    "green",
                    "blue-green",
                    "blue",
                    "blue-violet",
                    "violet",
                    "red-violet",
                ],
                ref: "Belmont, p.226",
                0: [360, 96, 51],
                1: [14, 91, 51],
                2: [29, 94, 52],
                3: [50, 93, 52],
                4: [60, 90, 60],
                5: [73, 73, 55],
                6: [135, 76, 32],
                7: [172, 68, 34],
                8: [248, 82, 28],
                9: [313, 78, 37],
                10: [325, 84, 46],
                11: [338, 85, 37]
            },
            "Steve Zieverink (2004)": {
                english: [
                    "yellow-green",
                    "green",
                    "blue-green",
                    "blue",
                    "indigo",
                    "violet",
                    "ultra violet",
                    "infra red",
                    "red",
                    "orange",
                    "yellow-white",
                    "yellow",
                ],
                format: "HSL",
                ref: "Cincinnati Contemporary Art Center",
                0: [73, 73, 55],
                1: [135, 76, 32],
                2: [172, 68, 34],
                3: [248, 82, 28],
                4: [302, 88, 26],
                5: [325, 84, 46],
                6: [326, 79, 24],
                7: [1, 89, 33],
                8: [360, 96, 51],
                9: [29, 94, 52],
                10: [62, 78, 74],
                11: [60, 90, 60]
            },
            "Circle of Fifths (Johnston 2003)": {
                english: [
                    "yellow",
                    "blue",
                    "orange",
                    "teal",
                    "red",
                    "green",
                    "purple",
                    "light orange",
                    "light blue",
                    "dark orange",
                    "dark green",
                    "violet",
                ],
                format: "RGB",
                ref: "Joseph Johnston",
                0: [255, 255, 0],
                1: [50, 0, 255],
                2: [255, 150, 0],
                3: [0, 210, 180],
                4: [255, 0, 0],
                5: [130, 255, 0],
                6: [150, 0, 200],
                7: [255, 195, 0],
                8: [30, 130, 255],
                9: [255, 100, 0],
                10: [0, 200, 0],
                11: [225, 0, 225]
            },
            "Circle of Fifths (Wheatman 2002)": {
                data: [
                    "#122400",
                    "#2E002E",
                    "#002914",
                    "#470000",
                    "#002142",
                    "#2E2E00",
                    "#290052",
                    "#003D00",
                    "#520029",
                    "#003D3D",
                    "#522900",
                    "#000080",
                    "#244700",
                    "#570057",
                    "#004D26",
                    "#7A0000",
                    "#003B75",
                    "#4C4D00",
                    "#47008F",
                    "#006100",
                    "#850042",
                    "#005C5C",
                    "#804000",
                    "#0000C7",
                    "#366B00",
                    "#80007F",
                    "#00753B",
                    "#B80000",
                    "#0057AD",
                    "#6B6B00",
                    "#6600CC",
                    "#008A00",
                    "#B8005C",
                    "#007F80",
                    "#B35900",
                    "#2424FF",
                    "#478F00",
                    "#AD00AD",
                    "#00994D",
                    "#F00000",
                    "#0073E6",
                    "#8F8F00",
                    "#8A14FF",
                    "#00AD00",
                    "#EB0075",
                    "#00A3A3",
                    "#E07000",
                    "#6B6BFF",
                    "#5CB800",
                    "#DB00DB",
                    "#00C261",
                    "#FF5757",
                    "#3399FF",
                    "#ADAD00",
                    "#B56BFF",
                    "#00D600",
                    "#FF57AB",
                    "#00C7C7",
                    "#FF9124",
                    "#9999FF",
                    "#6EDB00",
                    "#FF29FF",
                    "#00E070",
                    "#FF9999",
                    "#7ABDFF",
                    "#D1D100",
                    "#D1A3FF",
                    "#00FA00",
                    "#FFA3D1",
                    "#00E5E6",
                    "#FFC285",
                    "#C2C2FF",
                    "#80FF00",
                    "#FFA8FF",
                    "#00E070",
                    "#FFCCCC",
                    "#C2E0FF",
                    "#F0F000",
                    "#EBD6FF",
                    "#ADFFAD",
                    "#FFD6EB",
                    "#8AFFFF",
                    "#FFEBD6",
                    "#EBEBFF",
                    "#E0FFC2",
                    "#FFEBFF",
                    "#E5FFF2",
                    "#FFF5F5",
                ],
                english: [],
                format: "HEX",
                ref: "Stuart Wheatman"
            }
        },
        // tslint:enable:object-literal-sort-keys
        map: function (type) {
            var data = {};
            var blend = function (a, b) { return [
                // tslint:disable-next-line:no-bitwise
                (a[0] * 0.5 + b[0] * 0.5 + 0.5) >> 0,
                // tslint:disable-next-line:no-bitwise
                (a[1] * 0.5 + b[1] * 0.5 + 0.5) >> 0,
                // tslint:disable-next-line:no-bitwise
                (a[2] * 0.5 + b[2] * 0.5 + 0.5) >> 0,
            ]; };
            var syn = Synesthesia.data;
            var colors = syn[type] || syn["D. D. Jameson (1844)"];
            for (var note = 0, pclr = void 0, H = void 0, S = void 0, L = void 0; note <= 88; note++) { // creates mapping for 88 notes
                if (colors.data) {
                    data[note] = {
                        hex: colors.data[note],
                        hsl: colors.data[note]
                    };
                }
                else {
                    var clr = colors[(note + 9) % 12];
                    ///
                    switch (colors.format) {
                        case "RGB":
                            clr = colorspace_1["default"](clr, "RGB>HSL");
                            // tslint:disable-next-line:no-bitwise
                            H = clr.H >> 0;
                            // tslint:disable-next-line:no-bitwise
                            S = clr.S >> 0;
                            // tslint:disable-next-line:no-bitwise
                            L = clr.L >> 0;
                            break;
                        case "HSL":
                            H = clr[0];
                            S = clr[1];
                            L = clr[2];
                            break;
                    }
                    if (H === S && S === L) { // note color is unset
                        clr = blend(pclr, colors[(note + 10) % 12]);
                    }
                    data[note] = {
                        hex: colorspace_1["default"]({ H: H, S: S, L: L }, "HSL>RGB>HEX>W3"),
                        hsl: "hsla(" + H + "," + S + "%," + L + "%, 1)"
                    };
                    pclr = clr;
                }
            }
            return data;
        }
    };
    exports["default"] = Synesthesia;
});
//# sourceMappingURL=synesthesia.js.map