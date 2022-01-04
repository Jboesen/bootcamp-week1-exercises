/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/
// Source: https://madlibs.bostonchildrensmuseum.org/madlibs/famouscatsform.php

const adj1 = 'epic'
const noun1 = 'Rolex'
const num1 = '9'
const catName = 'Bob'
const food = 'Pad Thai'
const verb2 = 'exist'
const otherName = 'Spot'

story = `
Morris—the cat with the ${adj1} attitude and the posh ${noun1} is the "spokesperson" for ${num1} cat ${catName}.
Garfield—the famous comic-stip cat who hates ${food}, loves to ${verb2}, and has no respect for ${otherName}, his owner's dog.
`

console.log(story)
