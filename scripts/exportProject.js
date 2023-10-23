export default function alertMessage(message) {
  console.log(message);
  const alert = document.createElement(`p`);
  alert.innerHTML = message;
  alert.setAttribute(
    `style`,
    `background-color:lightpink; 
    border: 1px solid red; 
    position:absolute; 
    top:auto; 
    left:1; 
    right:0; 
    padding: 1em;
    align-self: center;
    width:30%;
    `
  );
  document.body.prepend(alert);
  setTimeout(function () {
    document.body.removeChild(alert);
  }, 3000);
}
