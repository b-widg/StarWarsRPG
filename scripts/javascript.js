var characters = [
    {
        name: 'Rey',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: true,
        characterDiv:'<div class="character-container good-guys" id="rey">'+
                        '<h3 class="name">Rey</h3>'+
                        '<img class="character-img" src="images/characters/rey.jpg" alt="Rey">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Finn',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: true,
        characterDiv:'<div class="character-container good-guys" id="finn">'+
                        '<h3 class="name">Finn</h3>'+
                        '<img class="character-img"src="images/characters/finn.jpg" alt="Finn">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Tallie Lintra',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: true,
        characterDiv:'<div class="character-container good-guys" id="tallie-lintra">'+
                        '<h3 class="name">Tallie Lintra</h3>'+
                        '<img class="character-img" src="images/characters/tallie-lintra.jpg" alt="Tallie Lintra">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Admiral Ackbar',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: true,
        characterDiv:'<div class="character-container good-guys" id="admiral-ackbar">'+
                        '<h3 class="name">Admiral Ackber</h3>'+
                        '<img class="character-img" src="images/characters/admiral-ackbar.jpg" alt="Admiral Ackbar">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Supreme Leader Snoke',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: false,
        characterDiv:'<div class="character-container bad-guys" id="supreme-leader-snoke">'+
                        '<h3 class="name">Supreme Leader Snoke</h3>'+
                        '<img class="character-img" src="images/characters/supreme-leader-snoke.jpg" alt="Supreme Leader Snoke">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Storm Trooper',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: false,
        characterDiv:' <div class="character-container bad-guys" id="storm-trooper">'+
                        '<h3 class="name">Storm Trooper</h3>'+
                        '<img class="character-img bad-guys" src="images/characters/storm-trooper.jpg" alt="Storm Trooper">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Tie Fighter',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: false,
        characterDiv:'<div class="character-container bad-guys" id="tie-fighter">'+
                        '<h3 class="name">Tie Fighter</h3>'+
                        '<img class="character-img" src="images/characters/first-order-tie-fighter.jpg" alt="Tie Fighter">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
    {
        name: 'Captain Phasma',
        healthPoints: 6,
        attackPower: 4,
        counterAttackPower: 4,
        good: false,
        characterDiv:'<div class="character-container bad-guys" id="captain-phasma">'+
                        '<h3 class="name">Captian Phasma</h3>'+
                        '<img class="character-img" src="images/characters/captain-phasma.jpg" alt="Captain Phasma">'+
                        '<p class="health-points">Health Points: <span>6</span></p>'+
                    '</div>'
    },
]
    // var badGuys = $("div").hasClass("bad-guys");
    // badGuys.attr("float", "right");
    //  $("#enemy-container").append(characterNew);


$(document).ready(function() {
    var playerChosen = false;
    var playerID = "";
    
    for(var i = 0; i < characters.length; i++){
        var characterDiv = characters[i].characterDiv;
        $("#character-stage").append(characterDiv);
    }   
    
        if(playerChosen == false){ //choose character -- only do once

            $(".character-container").click(function(){
                playerID = $(this).attr("id");
                

                let playerClass = this.classList;

                $(".character-container").each(function(){
                // console.log('this classlist:',this.classList[1],'player class:', playerClass[1],'this id:', this.id,'playerID:',playerID);
                    if(this.classList[1] == playerClass[1] && this.id != playerID){ //remove friends
                        //$(this).fadeOut("slow");
                        $(this).remove();
                    }else{
                        if(this.id != playerID){ //move emimies
                            $("#enemy-stage").append(this);
                            $(this).css("float","left");
                            $(this).fadeIn(1000);
                        }else{
                            $(this).css("float","left");//make sure player floats left
                        }
                    }
                $("#choose-player").remove();
                $("#your-enemies").css("opacity", 1);
                 
                });

            })
        }     /* end of choose choose section */
        console.log(playerChosen);
        
}); 


           