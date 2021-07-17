class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
     background("yellow")
    //write code to show a heading for showing the result of Quiz
     textSize(30)
     fill ("brown")
     text("Result of the quiz",300,50)
     text("-------------------------------",250,65)
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
     if(allContestants !== undefined){
       var display_answers=230
       fill ("purple")
       textSize(20)
       text("*NOTE:Contestant who answered correct are highlighted in green colour!",130,230)
     
    //write code to highlight contest who answered correctly
    for(var plr in allContestants)
    var correctAns="2"
    if(correctAns ===allContestants[plr].answer)
    fill ("green")
    else
    fill("red")

    display_answers+=30
    textSize(25)
    text(allContestants[plr].name+":"+ allContestants[plr].answer,250,display_answers)
  }
  }
}
