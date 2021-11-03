//@authors Joshua Rodriguez, Mia  , Joe Fulton, Raven ,Henry Chan



//Horse Choice
horse: {
    name: "Preparing the horse",
      description: "As you fix your saddle onto your horse, you hear a shout in the distance, “Master! Wait, Master!”
     A young, adolescent boy around the age of 15 runs up to you, and falls at your feet. “Master, please! Take me with you! I can help,
     I’ve been training with my sword as you taught me. I won’t get in the way this time, I swear it on the King’s crystal!”",

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

investigate: {
  name: "Investigating the shadow",
    description: "The shadow fully forms to reveal a woman. Her glowing purple eyes tell you right away she must be a Shadow Witch.
  	 She raises her right hand and a small diamond glows in her palm.",

     exitKeys: ['callout', 'flee'],
     exitTexts: ["Call out to the witch", "Flee with your squire"]

},

//player dies
challenge: {
    name: "Challenge the boy",
      description: "As it turns out, the young squire was not exaggerating his newfound abilities. His shortsword sliced your ribcage as you moved
    	to block the opposite side. You felt the warm blood drench your clothes as the boy fell to your side. He was shouting at you but his words became
    	unintelligible as consciousness began to slip away from you. Who will save the kingdom now…",

      exitKeys: ['Play Again?'],
      exitTexts: ["The kingdom needs you Adventurer!"]
},
