let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #027fe9;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #3d0a49;">Estudiante interesada en Front-end y Back-end.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
