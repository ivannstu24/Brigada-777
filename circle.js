// ®¤ª«îç ¥¬ ¬®¤ã«ì readline ¤«ï à ¡®âë á ¢¢®¤®¬/¢ë¢®¤®¬
const readline = require('readline');


// ‘®§¤ ¥¬ ¨­â¥àä¥©á ¤«ï çâ¥­¨ï ¨§ áâ ­¤ àâ­®£® ¢¢®¤  ¨ § ¯¨á¨ ¢ áâ ­¤ àâ­ë© ¢ë¢®¤
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//”ã­ªæ¨ï ¤«ï ¢ëç¨á«¥­¨ï ¯ à ¬¥âà®¢ ®ªàã¦­®áâ¨
function calculateCircleParameters(radius, alpha)
{
  const circleLength = 2 * Math.PI * radius; //¢ëç¨á«¥­¨¥ ¤«¨­ë ®ªàã¦­®áâ¨
  const circleArea = Math.PI * radius * radius; //¢ëç¨á«¥­¨¥ ¯«®é ¤¨ ªàã£ 
  const circleSector = (Math.PI * radius * radius * alpha)/360; //¢ëç¨á«¥­¨¥ ¯«®é ¤¨ ªàã£®¢®£® á¥ªâ®à 
  return { circleLength, circleArea, circleSector };
}


rl.question('‚¢¥¤¨â¥ à ¤¨ãá ®ªàã¦­®áâ¨ : ', (radius) => {
  rl.question('‚¢¥¤¨â¥ £à ¤ãá­ãî ¬¥àã ã£«  ¤ã£¨, ­  ª®â®àãî ®¯¨à ¥âáï á¥ªâ®à : ', (alpha) => {
// ¢ëç¨á«ï¥¬ ¯ à ¬¥âàë ®ªàã¦­®áâ¨
    const circle = calculateCircleParameters(parseFloat(radius), parseFloat(alpha));
    console.log(`„«¨­  ®ªàã¦­®áâ¨: ${circle.cicleLength}`);
    console.log(`«®é ¤ì ªàã£ : ${circle.circleArea}`);
    console.log(`«®é ¤ì ªàã£®¢®£® á¥ªâ®à : ${circle.circleSector}`);

    rl.close();
  });
});

