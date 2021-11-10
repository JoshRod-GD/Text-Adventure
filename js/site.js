//@authors Joshua Rodriguez, Marisia Alcaraz, Joe Fulton, Raven Bridges-Jackson, Henry Chan

// the beginning
storymode =  {
  start: {
    name: "The story begins..",
    description:"A long time ago, there was a king who ruled the land with a powerful crystal at his side. This\
                crystal was nothing like anyone had ever seen. Many say it has the power of 100 armies and could\
                somehow bend space and time with its power. The king luckily used it for keeping the peace within\
                the lands, hoping to never have to use its power. Everything was peaceful within the kingdom until the day\
                the Shadow Army came crashing in and took the King's Crystal by force.\
                <br>\
                <br>\
                A few hours later, you are at a local pub\
                enjoying your time with the people, when a knight of the king's personal guard comes in and tells you all about the\
                horrifying events that have just occurred. He hands you a letter from the King himself. It reads,\
                'You are the only one who has the power to defeat the Shadow Army! Please help save us by retrieving the crystal before chaos\
                and destruction can reach our kingdom!' You grab your weapons and head out on a journey to find the Shadow Army and\
                return the crystal to its rightful owner.",

    exitKeys: ['horse', 'forest', 'different'],
    exitTexts: ["Get a horse and prepare for the journey",
                    "Follow the path leading to a forest", "The shadows went another way follow their path"]

  },


    //Horse Choice
    horse: {
        name: "Preparing the horse",
        description: "As you fix your saddle onto your horse, you hear a shout in the distance, 'Master! Wait Master!'\
                      A young, adolescent boy  around the age of 15 runs up to you, and falls at your feet.  'Master please! Take me with you! I can help I have been\
                      training with my sword as you taught me. I will not  get in the way this time, I swear it on the great crystal'",

        exitKeys: ['boy', 'challenge'],
        exitTexts: ["Allow The boy to accompany you",
                "Challenge the boy to a duel"]
          },

    boy: {
      name: "A Follower",
      description: "Your squire excitedly grabs his belongings and asks the pub owner to borrow a horse. While he catches up to you,\
      	you notice a strange shadow in the distance. Could it be the dust? The shadow seems to be taking shape..",

      exitKeys: ['investigate', 'ignore'],
      exitTexts: ["Investigate the shadow",
            "Ignore the shadow"]
        },
    ignore: {
      name: "Ignore the Shadow",
      description: "The shadow fully forms to reveal a woman. Her glowing purple eyes tell you right away she must be a Shadow Witch. \
                    She raises her right hand and a small diamond glows in her palm. 'I see the champion I was warned of is nothing but a coward!,\
                    the witch screamed out. You run as fast as your feet will carry you, but a root catches your foot. As you fall you catch a \
                    glimpse of your squire running in the distance before the shadows engulf you completely and your last breath escapes you..",

      exitKeys: ['start'],
      exitTexts: ["The Kingdom needs you Adventurer, try again?"]
        },

    challenge: {
          name: "Challenge the boy",
          description: "As it turns out, the young squire was not exaggerating his newfound abilities. His shortsword sliced your ribcage as you moved\
            	to block the opposite side. You felt the warm blood drench your clothes as the boy fell to your side. He was shouting at you but his words became\
            	unintelligible as consciousness began to slip away from you. Who will save the kingdom now?",

          exitKeys: ['start'],
          exitTexts: ["The Kingdom needs you Adventurer, try again?"]
        },

    investigate: {
      name: "Investigating the shadow",
      description: "The shadow fully forms to reveal a woman. Her glowing purple eyes tell you right away she must be a Shadow Witch.\
      	 She raises her right hand and a small diamond glows in her palm.",

      exitKeys: ['callout', 'flee'],
      exitTexts: ["Call out to the witch", "Flee with your squire"]
    },

    callout: {
      name: "Calling the Witch",
      description: "'You there!', you call out to the witch. Could the shining gem be the King's crystal? \
      The witch hisses and responds, 'How dare you speak to me you lowly human!' You draw your sword and charge toward the witch.\
       The hilt of your sword is warm and with a quick glance you notice a blue glow emanating from the entire sword.\
        This must be why you were the chosen one! Surely this power was meant to defeat this evil witch and retrieve the King's crystal. \
        The witch starts to dissipate into a shadow once more, but not before your sword makes contact with her throat, dealing a fatal blow.\
         You snatch the crystal from her hands and ride back to where your squire is cowering by a tree.\
       'Come boy, we must return the King's crystal at once. The fate of the kingdom depends on it!'",


      exitKeys: ['home'],
      exitTexts: ["Return to the Kingdom with the Crystal"]
    },

    flee: {
      name: "Run for your life!",
      description: "'I see the champion I was warned of is nothing but a coward!', the witch screamed out.\
       You run as fast as your feet will carry you, but a root catches your foot. As you fall you catch a glimpse of your squire \
       running in the distance before the shadows engulf you completely and your last breath escapes you...",

      exitKeys: ['start'],
      exitTexts: ["The Kingdom needs you Adventurer, try again?"]
     },

    home: {
      name: "Home Sweet Home!",
      description: "As you return home with the crystal  the king and his small milita of guards are at the gate as they were informed of your arival, you hand the crystal back to the king \
                    and  in the throne room he makes the grand announcement that you are being given the title of grand knight meanwhile the squire  being a 15 year old boy  is being given\
                    riches for him and his family as well as his own title as knight in training where he will continue to serve under you as an apprentice.",

      exitKeys: ['start'],
      exitTexts: ["The end"]
     },


    // Forest path
    forest: {
      name: "Entering the forest path",
      description: "When entering deep within the forest you see two paths the first path is a strange straight path which gives you a strong sense of darkness lurking within it,\
         meanwhile you see a second path  which shows a curved road to where you cannot see further out and on this road it has trees some dead some alive which road will you decide on...",

      exitKeys: ['path1', 'path2'],
      exitTexts: ["Straight Path",
              "Curved Path"]
    },

    path1: {
      name: "Straight Path",
      description: " You decide to follow the path that leads straight ahead, traveling halfway through the path you hear chains begin to rattle and within the darkness you see a wraith\
                begin to float towards you, you attempt to run past it  and almost reaching the edge of the darkness you feel your body being dragged back  into the forest  and the wraith grabs hold of you begining to\
                drain your life out from your body and as your life begins to fade the last thing you see is your weapons hitting the ground and nothing but utter darkness.",

      exitKeys: ['start'],
      exitTexts: ["The Kingdom needs you Adventurer, try again?"]
    },

    path2: {
      name: "Curved Path",
      description: " In the end you decide to follow the Curved path and it leads you to  the other side of the forest where behind you life is filling the forest while in front of you\
                  there is dead trees as if they have been dead for years as well as there being a strong mist  in the surrounding area. from the distance you see a hideout wher there was one single guard protecting a strange door\
                   you approach the guard whom you realize is not friendly  once you battle the guard your sword slicing his head clean off his torso reveals a portal behind the closed door, you have a strong feeling that the crystal\
                   is behind that portal but you can also see inside there are  many guards behind it along with a dark knight at the end of the large room  'what is the best plan?' you think to yourself...",

      exitKeys: ['loud', 'quietly'],
      exitTexts: ["Go into the portal loud", "Go into the portal quietly"]
    },

    loud: {
       name: "Loud and Proud",
       description: " You decide to go in loud and take on the army of shadows  as you ready your weapons  you charge in to the portal screaming LEROY JENKINS!!!... the guards all laugh at you  seeing that you charge into their\
                  home base screaming such ridiculous words  two of the guards capture you and take you over to the dark knight who executes you in front of all the guards  and posting your head on a stake outside the portal door as an\
                  example of what happens to those who attempt to tamper with them...You Are Dead.",

       exitKeys: ['start'],
       exitTexts: ["The Kingdom needs you Adventurer, try again?"]
        },

    quietly: {
       name: "Quiet as a mouse",
       description: " You decide to enter in quietly and  swifty as a mouse, As you enter the portal  you decide to take out each shadow guard one by one as they are distcrated by other events happening in the room\
                      once all guards are delt with  you realized that to take out the dark knight you must use a different weapon from that of your own, you see the shadow guards had special magic infused swords and axes\
                    you battle the dark knight with one of these weapons and eventually managed to land a deadly blow onto his chest, the dark knight falls to the ground allowing you to collect the crystal,after a long hard journey\
                    you decide to steal the dark knights horse and ride back into the kingdom.",

       exitKeys: ['ending'],
       exitTexts: ["Return to the kingdom!!"]
        },

    ending: {
          name: "Retun of a hero!",
          description: " As you ride back into the kingdom enterence the people of it begin to cheer in joy that their beloved crystal is back to its rightful place, once you reach the castle gate  the king is there in the\
                      courtyard, As you hand the crystal back to the king  he is extreamly greatful for your service to the kingdom and for it offers to you a  request to begin a adventurers guild funded by the king for many more\
                      as yourself could come together and  seek out greater adventures,the king also mentioned that he would like you to lead this guild into greatness.",

         exitKeys: ['start'],
         exitTexts: ["The end"]
      },



    //Differnt Route

    different: {
          name: "Taking a different route",
          description: " You decide that going the direct route towards castle territory would be just what the enemy is expecting, you know of a secret shortcut through the forest along the stream that takes you to the castle faster.\
                      While walking through the shortcut, you are ambushed by two dark sorcerers, materialized from shadows, who know powerful magic. They cast a spell towards you, how will you act?",

         exitKeys: ['block', 'dodge'],
         exitTexts: ["Block the magic spell","Dodge the magic spell"]
      },

    block: {
            name: "Block the spell",
            description: "You raise your shield and attempt to block the magic spell. It is no good, the spell goes right through your shield, engulfing you in darkness and destroying you. ",

            exitKeys: ['start'],
            exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
        },

    dodge: {
          name: "Dodging the spell",
          description: "Using quick footing, you dodge the magic spell cast upon you. You manage to roll far enough away from the sorcerers that you are able to escape. The sorcerer's give chase, and end up chasing you all the\
                      way to their lair, where the crystal is! 'How stupid of them' you thought! ",

          exitKeys: ['run', 'wayout'],
          exitTexts: ["Take the crystal and run!!", "Think of a way out"]
          },

    run: {
        name: "Run with the crystal",
        description: "You draw your weapon and swing at the sorcerers, their body phases right through the sword. They laugh at you darkly, summoning evil lightning to banish you to the underworld. You have been banished.",

        exitKeys: ['start'],
        exitTexts: ["The Kingdom needs you Adventurer, Try again?"]
          },

    wayout: {
         name: "Thinking of a way out",
         description: "You wait until the sorcerer's attack, being alert of your surroundings. You suddenly hear something rumbling above,\
                    it was a trap! You quickly grab the crystal and hold it, standing under the falling boulders. The sorcerer's lunge at you trying to get the crystal back before\
                    it is destroyed along with you. At the last second, you jump out of the way, leaving the sorcerer's to be crushed...\
                    The crystal, grasped in your hand, is safe, for now. Let's head to the castle and tell the king the good news.",

         exitKeys: ['ending3'],
         exitTexts: ["Return to the kingdom"]
    },

    ending3: {
        name: "Welcome Back!",
        description: " As you return the crystal to the king everyone including the townsfolk are cheering with happiness  that night after returning the crystal back into its rightful hands the\
                    king himself decided that they would have a feast as a celebration  honoring you  and the return of the crystal.",

        exitKeys: ['start'],
        exitTexts: ["The end"]
    }

  }

  // Outputting onto page
  var currentPath = 1;
  var outputHTML = "#output"

  function display(string){
            $(outputHTML).append(string);
  }

  function clearDisplayArea() {
       $(outputHTML).empty();
    }
  //displays current path on screen
  function displayCurrentPath(currentPath) {
            display("<p class = 'name'>" + currentPath.name + "</p>");
            display("<p class = 'description'>" + currentPath.description + "</p>");
  }

  function displayCurrentExits(currentPath) {
            display("<p class = 'paragraph'>The choice is yours Adventurer!</p><ul>");
          for(i = 0; i < currentPath.exitKeys.length; i++) {
          exitHTML = "<li class = 'answers', onClick = 'javascript:newPath(\"" + currentPath.exitKeys[i] + "\")'>" + currentPath.exitTexts[i] + "</li>";
          display(exitHTML);
          }
          display("</ul>")
  }


  function newPath(nextPath) {
    currentPath = nextPath;
    currentPathObj = storymode[currentPath];
    clearDisplayArea();
    displayCurrentPath(currentPathObj);
    displayCurrentExits(currentPathObj);
  }

  $("DOMContentLoaded", function(event) {
    newPath('start')
  });
