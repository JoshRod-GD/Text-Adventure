//@authors Joshua Rodriguez, Mia  , Joe Fulton, Raven ,Henry Chan

//make play again button

// the beginning
var storymode =  {
  start: {
    name: "The story begins",
    description: "A long time ago, there was a King who ruled the land with a power crystal in hand, but this
                crystal was nothing like anyone had ever seen, many say it has the power of 100 armies and could
                somehow bend space and time with its power. The king  luckily used it for keeping the peace within
                the lands hoping to never have to use its power everything was peaceful within the kingdom until the day
                the Shadow Army came crashing in and took the Kings Crystal by force. A few hours later  you are at a local pub
                enjoying your time with the people when a knight of the kings personal guards comes in and tells you all about the
                horrifying events that have just occurred and once he hands you a letter from the king himself  it reads
                You are the only one that can save us all please help save the kingdom and help us get our crystal home before chaos
                can reach our kingdom!... After reading this you grab your weapons and head out on a journey to find the Shadow Army and
                return the crystal to the rightful owner.",

    exitKeys: ['horse', 'forest', 'different'],
    exitTexts: ["Get a horse and prepare for the journey",
                    "Follow the path leading to a forest", "The shadows went another way follow their path"]

  },


  //Horse Choice
  horse: {
      name: "Preparing the horse",
      description: "As you fix your saddle onto your horse, you hear a shout in the distance, 'Master! Wait Master!'
                    A young, adolescent boy  around the age of 15 runs up to you, and falls at your feet.  Master please! Take me with you! I can help I have been
                    training with my sword as you taught me. I will not  get in the way this time, I swear it on the great crystal",

      exitKeys: ['boy', 'challenge'],
      exitTexts: ["Allow The boy to accompany you",
              "Challenge the boy to a duel"]
        },

  boy: {
    name: "A Follower",
    description: "Your squire excitedly grabs his belongings and asks the pub owner to borrow a horse. While he catches up to you,
    	you notice a strange shadow in the distance. Could it be the dust? The shadow seems to be taking shape..",

    exitKeys: ['investigate', 'ignore'],
    exitTexts: ["Investigate the shadow",
          "Ignore the shadow"]
      },

  challenge: {
        name: "Challenge the boy",
        description: "As it turns out, the young squire was not exaggerating his newfound abilities. His shortsword sliced your ribcage as you moved
          	to block the opposite side. You felt the warm blood drench your clothes as the boy fell to your side. He was shouting at you but his words became
          	unintelligible as consciousness began to slip away from you. Who will save the kingdom now…",

        exitKeys: ['tryagain'],
        exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
      },

  investigate: {
    name: "Investigating the shadow",
    description: "The shadow fully forms to reveal a woman. Her glowing purple eyes tell you right away she must be a Shadow Witch.
    	 She raises her right hand and a small diamond glows in her palm.",

    exitKeys: ['callout', 'flee'],
    exitTexts: ["Call out to the witch", "Flee with your squire"]

  },



  // Forest path
  forest: {
    name: "Entering the forest path",
    description: "When entering deep within the forest you see two paths the first path is a strange straight path which gives you a strong sense of darkness lurking within it,
       meanwhile you see a second path  which shows a curved road to where you cannot see further out and on this road it has trees some dead some alive which road will you decide on...",

    exitKeys: ['path1', 'path2'],
    exitTexts: ["Straight Path",
            "Curved Path"]
  },

  path1: {
    name: "Straight Path",
    description: " You decide to follow the path that leads straight ahead, traveling halfway through the path you hear chains begin to rattle and within the darkness you see a wraith
              begin to float towards you, you attempt to run past it  and almost reaching the edge of the darkness you feel your body being dragged back  into the forest  and the wraith grabs hold of you begining to
              drain your life out from your body and as your life begins to fade the last thing you see is your weapons hitting the ground and nothing but utter darkness",

    exitKeys: ['tryagain'],
    exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
  },

  path2: {
    name: "Curved Path",
    description: " In the end you decide to follow the Curved path and it leads you to  the other side of the forest where behind you life is filling the forest while in front of you
                there is dead trees as if they have been dead for years as well as there being a strong mist  in the surrounding area. from the distance you see a hideout wher there was one single gaurd protracting a strage door
                 you approach the gaurd whom you realize is not friendly  once you battle the gaurd your sword slicking his head clean off his torso reveals a portal behind the closed door you have a strong feeling that the crystal
                 is behind that portal but you can also see inside there are  many gaurds behind it along with a dark knight at the end of the large room  what is the best plan? you tell yourself...",

    exitKeys: ['loud', 'quiet'],
    exitTexts: ["Go into the portal loud", "Go into the portal quietly"]
  },

  loud: {
     name: "Loud and Proud",
     description: " You decide to go in loud and take on the army of shadow gaurds  as you ready your weapons  you charge in to the portal screaming LEROY JENKINS!!!... the gaurds all laugh at you  seeing that you charge into their
                home base screaming such rediculous words  two of the guards capture you and take you over to the dark knight who executes you in front of all the gaurds  and posting your head on a stake outside the portals door as an
                example of what happens to those who attempt to tamper with them...You Are Dead",

     exitKeys: ['tryagain'],
     exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
      },

  quietly: {
     name: "Quiet as a mouse",
     description: " You decide to enter in quietly and  swifty as a mouse, As you enter the portal  you decide to take out each shadow gaurd one by one as they become descrated by other events happening in the room
                    once all gaurds are delt with  you realized that to take out the dark knight you must use a differnt weapon from that of your own, you see the shadow guards had special magic infused swords and axes
                  you battle the dark knight with one of these weapons and eventually managed to land a deadly blow onto his chest the dark knight falls to the ground allowing you to collect the crystal...after a long hard journey
                  you decide to steal the dark knights horse and ride back into the kingdom.",

     exitKeys: ['ending'],
     exitTexts: ["Return to the kingdom!!"]
      },

  ending: {
        name: "Retun of a hero!",
        description: " As you ride back into the kingdom enterence the people of it begin to cheer in joy that their beloved crystal is back to its rightful place, once you reach the castle gate  the king is there in the
                    courtyard, As you hand the crystal back to the king  he is extreamly greatful for your service to the kingdom and for it offers to you a  request to begin a adventurers guild funded by the king for many more
                    as yourself could come togehter and  seek out greater adventurs  the king also mentioned that he would like you to lead this guild into greatness.",

       exitKeys: ['tryagain'],
       exitTexts: ["The end"]
    },



  //Differnt Route

  different: {
        name: "Taking a different route",
        description: " You decide that going the direct route towards castle territory would be just what the enemy is expecting, you know of a secret shortcut through the forest along the stream that takes you to the castle faster.
                    While walking through the shortcut, you are ambushed by two dark sorcerers, materialized from shadows, who know powerful magic. They cast a spell towards you, how do you act",

       exitKeys: ['block', 'dodge'],
       exitTexts: ["Block the magic spell","Dodge the magic spell"]
    },

  block: {
          name: "Block the spell",
          description: "You raise your shield and attempt to block the magic spell. It’s no good, the spell goes right through your shield, engulfing you in darkness and destroying you. ",

          exitKeys: ['tryagain'],
          exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
      },

  dodge: {
        name: "Dodging the spell",
        description: "Using quick footing, you dodge the magic spell cast upon you. You manage to roll far enough away from the sorcerers that you are able to escape. The sorcerer's give chase, and end up chasing you all the
                    way to their lair, where the crystal is! How stupid of them, you thought! ",

        exitKeys: ['run', 'wayout'],
        exitTexts: ["Take the crystal and run!!", "Think of a way out"]
        },

  run: {
      name: "Run with the crystal",
      description: "You draw your weapon and swing at the sorcerers, their body phases right through the sword. They laugh at you darkly, summoning evil lightning to banish you to the underworld. You have been banished.",

      exitKeys: ['tryagain'],
      exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
        },

  wayout: {
       name: "Thinking of a way out",
       description: "You wait until the sorcerer's attack, being alert of your surroundings. You suddenly hear something rumbling above,
                  it was a trap! You quickly grab the crystal and hold it, standing under the falling boulders. The sorcerer’s lunge at you trying to get the crystal back before
                  it is destroyed along with you. At the last second, you jump out of the way, leaving the sorcerer’s to be crushed...
                  The crystal, grasped in your hand, is safe, for now. Let’s head to the castle and tell the king the good news.",

       exitKeys: ['ending3'],
       exitTexts: ["Return to the kingdom"]
  },

  ending3: {
      name: "Welcome Back!",
      description: " As you return the crystal to the king everyone including the townsfolk are cheering with happiness  that night after returning the crystal back into its rightful hands the
                  king himself decided that they would have a feast as a celebration  honoring you  and the return of the crystal",

      exitKeys: ['tryagain'],
      exitTexts: ["The end"]
  },


  // Try again
  tryagain: {
        name: "Back to the beginning",
        description: "Do you want to try again?",

        exitKeys: ['tryagain'],
        exitTexts: ["The end"]
  },
}


// Outputting onto page
var currentPath = 1;
var outputHTML = "#output"

function display(string){
          $(outputHTML).append(string);
}

function clearDisplayArea() {
     $(outputHTML).innerHTML = "";
  }
//displays current path on screen
function displayCurrentPath(currentPath) {
          display("<p class = 'name'>" + currentPath.name + "</p>");
          display("<p class = 'description'>" + currentPath.description + "</p>");
}

function displayCurrentExits(currentPath) {
          display("<p>The choice is yours adventurer!:</p><ul>");
        for(i = 0; i < currentPath.exitKeys.length; i++) {
        exitHTML = "<li onClick = 'javascript:newPath(\"" + currentPath.exitKeys[i] + "\")'>" + currentPath.exitTexts[i] + "</li>";
        display(exitHTML);
        }
        display("</ul>")
}


function newPath(nexPath) {
  currentPath = nextPath;
  currentPathObj = storymode[currentPath];
  clearDisplayArea();
  displayCurrentPath(currentPathObj);
  displayCurrentExits(currentPathObj);
}

$("DOMContentLoaded", function(event) {
  newPath('start')
});
