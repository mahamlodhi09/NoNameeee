const angryBtn = document.getElementById('angryBtn');
const friendBtn = document.getElementById('friendBtn');
const response = document.getElementById('response');
const reactionImg = document.getElementById('reactionImg');

angryBtn.addEventListener('click', () => {
  response.innerHTML = "😤 Fine. I’m mad too. Don’t talk to me. <br> (But you're still stuck with me)";
  reactionImg.src = "assets/images/angry.png";  // <-- replace with your angry image path
  reactionImg.style.display = "block";
});

friendBtn.addEventListener('click', () => {
  response.innerHTML = "🥺 Awww. Okay fine. You’re my bestttttt friend too.<br> Now let's never fight again. Maybe.";
  reactionImg.src = "assets/images/happy.png";  // <-- replace with your happy image path
  reactionImg.style.display = "block";
});
