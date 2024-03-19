// #1
// function findFirstRepeated(gifts) {
//     const unique = new Set();
//     for (let i = 0; i < gifts.length; i++) {
//       if (unique.has(gifts[i])) {
//         return gifts[i];
//       } else {
//         unique.add(gifts[i]);
//       }
//     }
//     return -1;
//   }

// #2
// function manufacture(gifts, materials) {
//   return gifts.filter((gift) => [...gift].every((c) => materials.includes(c)));
// }

// #3
//  function findNaughtyStep(original, modified) {

//     const [lessWords, mostWords] =
//       [original, modified].sort((a, b) => a.length - b.length)

//     return [...mostWords].find((x, i) => lessWords[i] != x) ?? "";
//   }

// #4
// function decode(message) {
//   let matches = [];

//   while ((matches = message.match(/\(([^()]*)\)/))) {
//     matches = matches.map((word) => {
//       return word.split("").reverse().join("");
//     });
//     let string = matches[0].replace(/[()]/g, "");
//     message = message.replace(/\(([^()]*)\)/, string);
//   }

//   return message;
// }

// #6
// function maxDistance(movements) {
//   const directions = {
//     "<": 0,
//     ">": 0,
//     "*": 0,
//   };

//   for (const movement of movements) {
//     directions[movement] += 1;
//   }
//   return Math.abs(directions["<"] - directions[">"]) + directions["*"];
// }
