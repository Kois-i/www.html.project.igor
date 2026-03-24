

fetch('JSON/data.json')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));


        function StartMenu(){
        
var StartButton = document.getElementById("StartButton")

   StartButton.remove()

 window.location  = 'file:///C:/Users/Admin/Desktop/www.html.project.igor/ColorGuessGame/Main.html'
   
}
 

