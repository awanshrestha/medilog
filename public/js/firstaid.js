document.getElementById('burns').addEventListener('click', showBurns);
document.getElementById('drowning').addEventListener('click', showDrowning);
document.getElementById('electricShock').addEventListener('click', showElectricShock);
document.getElementById('hypothermia').addEventListener('click', showHypothermia);
document.getElementById('leechBite').addEventListener('click', showLeechBite);
document.getElementById('snakeBite').addEventListener('click', showSnakeBite);
document.getElementById('sprain').addEventListener('click', showSprain);
document.getElementById('stroke').addEventListener('click', showStroke);
document.getElementById('toothache').addEventListener('click', showToothAche);
document.getElementById('wound').addEventListener('click', showWound);

document.getElementById('heading').addEventListener('click',function(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('firstaid.png')";
    e.preventDefault();
});

const firstAids = document.getElementById('firstAids');

function clearScreen(){
    document.getElementById('firstAids').innerHTML= ``;
}

function showBurns(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://cdn1.medicalnewstoday.com/content/images/articles/322/322281/first-degree-burn.jpg')";
    firstAids.innerHTML = `
    <h4>FIRST AID FOR BURNS</h4> <br>

For All Burns <br>
1. Stop Burning Immediately <br>
 -Put out fire or stop the person's contact with hot liquid, steam, or other material.<br>
 -Help the person "stop, drop, and roll" to smother flames.<br>
 -Remove smoldering material from the person.<br>
 -Remove hot or burned clothing. If clothing sticks to skin, cut or tear around it.<br> <br>

2. Remove Constrictive Clothing Immediately ,take off jewelry, belts, and tight clothing. Burns can swell quickly. Then take the 
  following steps: <br><br>

  For First-Degree Burns (Affecting Top Layer of Skin)<br>
      1. Cool Burn<br>
           Hold burned skin under cool (not cold) running water or immerse in cool water
           until pain subsides. Use compresses if running water isn’t available.<br><br>

     2. Protect Burn<br>
          -Cover with sterile, non-adhesive bandage or clean cloth.<br>
          -Do not apply butter or ointments, which can cause infection.<br><br>

     3. Treat Pain<br>
          Give over-the-counter pain reliever such as ibuprofen (Advil, Motrin), acetaminophen
          (Tylenol), or naproxen (Aleve).<br><br>

3. Rush towards nearest health facility.<br>


    `;
    e.preventDefault();
}

function showDrowning(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://sts-firstaid.co.uk/wp-content/uploads/2016/07/shutterstock_370187477.jpg')";
    firstAids.innerHTML = `
    
    
<h4> FIRST AID FOR DROWNING </h4>

1. Get Help. Notify a lifeguard, if one is close. If not, ask someone to call 911.
If you are alone, follow the steps below.<br><br>
2. Move the Person. Take the person out of the water.<br><br>
3. Check for Breathing. Place your ear next to the person's mouth and nose. Do you feel air on your cheek?<br>
Look to see if the person's chest is moving.<br><br>
4. If the Person is Not Breathing, Check Pulse, Check the person's pulse for 10 seconds.<br><br><br>


           <h6> CPR(MOUTH TO MOUTH RESPIRATION) </h6>

1.Push hard, push fast. Place your hands, one on top of the other, in the middle of the chest. Use your body weight to help you administer compressions that are at least 2 inches deep and delivered at a rate of at least 100 compressions per minute.<br><br>

2.Deliver rescue breaths. With the person's head tilted back slightly and the chin lifted, pinch the nose shut and place your mouth over the person's mouth to make a complete seal. Blow into the person's mouth to make the chest rise. Deliver two rescue breaths, then continue compressions.<br><br>

Note: If the chest does not rise with the initial rescue breath, re-tilt the head before delivering the second breath. If the chest doesn't rise with the second breath, the person may be choking. After each subsequent set of 100 chest compressions, and before attempting breaths, look for an object and, if seen, remove it.<br><br>

3.Continue CPR steps. Keep performing cycles of chest compressions and breathing until the person exhibits signs of life, such as breathing, an AED becomes available, or EMS or a trained medical responder arrives on scene.<br><br>

Note: End the cycles if the scene becomes unsafe or you cannot continue performing CPR due to exhaustion.<br><br>

    `;
    e.preventDefault();
}


function showElectricShock(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://cdn2.vectorstock.com/i/1000x1000/39/36/electric-shock-vector-823936.jpg')";
    firstAids.innerHTML = `
    <h4>FIRST AID FOR ELECTRIC SHOCK </h4>

Separate the Person From Current's Source to turn off power: <br><br>

Unplug an appliance if plug is undamaged or shut off power via circuit breaker, fuse box, or outside switch. If you can't turn off power:<br><br>

Stand on something dry and non-conductive, such as dry newspapers, telephone book, or wooden board.<br><br>
Try to separate the person from current using non-conductive object such as wooden or plastic broom handle, chair, or rubber doormat.<br><br>
If high voltage lines are involved:<br><br>

The local power company must shut them off.<br><br>

Do not try to separate the person from current if you feel a tingling sensation in your legs and lower body. Hop on one foot to a safe place where you can wait for lines to be disconnected.
If a power line falls on a car, instruct the passengers to stay inside unless explosion or fire threatens.<br><br>

3. Check for Other Injuries. If the person is bleeding, apply pressure and elevate the wound if it's in an arm or leg.<br><br>

There may be a fracture if the shock caused the person to fall. For burns, see Burn Treatment.<br><br>









    `;
    e.preventDefault();
}
function showHypothermia(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://cdn1.medicalnewstoday.com/content/images/articles/182/182197/a-person-can-become-disoriented.jpg')";
    firstAids.innerHTML=`
    <br>
<h5> Symptoms of hypothermia in adults and children include: </h5>
<br>
1.Confusion, memory loss, or slurred speech.<br><br>
2.Drop in body temperature below 35 degree celsius.<br><br>
3.Exhaustion or drowsiness<br><br>
4.Loss of consciousness<br><br>
5.Numb hands or feet<br><br>
6.Shallow breathing<br><br>
7.Shivering<br><br>
8.Bright red, cold skin<br><br>
9.Very low energy level<br><br><br>

<h4> FIRST AID FOR HYPOTHERMIA </h4>

1.Immediately call an ambulance.<br><br>

2. Restore Warmth Slowly<br><br>
-Get the person indoors. Remove wet clothing and dry the person off, if needed.<br><br>
-Warm the person's trunk first, not hands and feet. Warming extremities first can cause shock.<br><br>
-Warm the person by wrapping him or her in blankets or putting dry clothing on the person.<br><br>
-Do not immerse the person in warm water. Rapid warming can cause heart arrhythmia.<br><br>
-If using hot water bottles or chemical hot packs, wrap them in cloth; don't apply them directly to the skin.<br><br>

3. Begin CPR, if Necessary, While Warming Person. If the person is not breathing, start CPR immediately. Hypothermia causes respiratory rates to plunge,
 and a pulse might be difficult to detect.<br><br>

4. Give Warm Fluids, Give the person a warm drink, if conscious. Avoid caffeine or alcohol.<br><br>
5. Keep Body Temperature Up, once the body temperature begins to rise, keep the person dry and wrapped in a warm blanket. Wrap the person's head and neck, as well.
    `;
    e.preventDefault();
}
function showLeechBite(e){
    clearScreen();
    firstAids.innerHTML = `
    Leeches cause unwarranted fear in many people. When they latch onto skin, their bite is almost painless. They introduce an anticoagulant so that they can feed on the victim’s blood. When the leech becomes grossly swollen it falls off. The symptoms from leech bite that may warrant medical attention are infected bite site and leech allergy.
Leeches cause unwarranted fear in many people. When they latch onto skin, their bite is almost painless. They introduce an anticoagulant so that they can feed on the victim’s blood. When the leech becomes grossly swollen it falls off. The symptoms from leech bite that may warrant medical attention are infected bite site and leech allergy.
<br> <br>
<h4>FIRST AID FOR LEECH BITE </h4>
<b>Removal of the leech:</b><br>
Application of salt, salt water or vinegar to an actively sucking leech will cause it to fall off. A leech will usually fall off after 20 minutes of attachment without any treatment. <br><br>
DO NOT pull the leech off as the skin may be torn and ulceration may follow or parts of the jaw may remain and set up infection. Applying heat to the leech (e.g. applying a hot coal or lit cigarette) may result in burns to the patient so is not recommended.<br><br>
<b>Treatment: </b><br><br>
After the leech has been removed, wash with soap and water<br><br>
Apply a cold pack and take a simple analgesic if required to relieve pain or swelling<br><br>
Apply pressure if there is bleeding from the bite<br><br>
Seek medical attention if the area becomes infected or if a wound or ulcer develops.<br><br>
    `;
    document.getElementById('background-image1').style.backgroundImage = "url('https://c8.alamy.com/comp/C4EC7D/tropical-leech-biting-human-foot-in-asian-rainforest-C4EC7D.jpg')";
    e.preventDefault();
}
function showSnakeBite(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://www.elitereaders.com/wp-content/uploads/2017/10/snakebite-3.jpg')";
    firstAids.innerHTML=`
    <h4> FIRST AID FOR SNAKE BITE </h4>

If Snake is venomous,imediately rush to nearest health care. <br><br>
If you know the snake is not venomous, treat as a puncture wound.<br><br>

Note the Snake's Appearance, Be ready to describe the snake to emergency staff.<br><br>
Protect the Person, while waiting for medical help:
<br><br>
Move the person beyond striking distance of the snake.<br><br>
Have the person lie down with wound below the heart.<br><br>
Keep the person calm and at rest, remaining as still as possible to keep venom from spreading.<br><br>
Cover the wound with loose, sterile bandage.<br><br>
Remove any jewelry from the area that was bitten.<br><br>
Remove shoes if the leg or foot was bitten<br><br><br>

<h4>Do not: </h4>

Cut a bite wound<br><br>
Attempt to suck out venom<br><br>
Apply tourniquet, ice, or water<br><br>
Give the person alcohol or caffeinated drinks or any other medications<br><br>





    `;
    e.preventDefault();
}
function showSprain(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://heidenortho.com/wp-content/uploads/2018/03/degree-sprained-ankle.jpg')";
   firstAids.innerHTML = `
   Your ligaments are tough, elastic-like bands that connect bone to bone and hold your joints in place.
A sprain is an injury to a ligament caused by tearing of the fibers of the ligament. The ligament can 
have a partial tear, or it can be completely torn apart.
<br><br>
Ankle sprains are the most common type of sprain. Wrist, knee and thumb sprains are also common. 
Sprained ligaments often swell rapidly and are painful. Generally, the greater the pain and swelling,
the more severe the injury is. For most minor sprains, you probably can start initial injury treatment 
yourself.
<br><br>
<h4> FIRST AID FOR SPRAIN </h4>

1.Rest the injured limb. Your doctor may recommend not putting any weight on the injured area for 
  48 to 72 hours, so you may need to use crutches. A splint or brace also may be helpful initially. But 
  don't avoid all activity.<br><br>

2.Even with an ankle sprain, you can usually still exercise other muscles to minimize deconditioning. 
   For example, you can use an exercise bicycle with arm exercise handles, working both your arms 
   and the uninjured leg while resting the injured ankle on another part of the bike. That way you still 
   get three-limb exercise to keep up your cardiovascular conditioning.<br><br>

3.Ice the area. Use a cold pack, a slush bath or a compression sleeve filled with cold water to help
   limit swelling after an injury. Try to ice the area as soon as possible after the injury and continue 
   to ice it for 15 to 20 minutes, four to eight times a day, for the first 48 hours or until swelling improves. 
   If you use ice, be careful not to use it too long, as this could cause tissue damage.<br><br>

4 Compress the area with an elastic wrap or bandage. Compressive wraps or sleeves made from 
  elastic or neoprene are best. Elevate the injured limb above your heart whenever possible to help
  prevent or limit swelling.
   `;
    e.preventDefault();
}
function showStroke(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://cdn.images.express.co.uk/img/dynamic/11/590x/Stroke-806932.jpg')";
    firstAids.innerHTML=`
    
<b>Signs of a stroke include:</b>
<br><br>
1.weakness, paralysis (inability to move) or numbness of the face or limbs, 
particularly on one side of the body.<br><br>
2.vision suddenly becoming blurred or decreased, especially in one eye.<br><br>
3.difficulty talking or understanding speech.<br><br>
4.sudden difficulty swallowing.<br><br>
5.an unexplained fall, dizziness or loss of balance — someone suffering 
from stroke may resemble a drunk person.<br><br>
6.sudden severe headache or a new type of headache with no known cause; and
drowsiness, confusion or loss of consciousness.<br><br>

<h4>FIRST AID FOR STROKE. </h4> 
1. Check for DANGER to the affected person.<br><br>

2.Check RESPONSE<br>
Ask the person their name. If someone has had a stroke, they may not be able to talk, 
so grasp both their hands and ask them to squeeze — they may respond by squeezing 
one of your hands . Does the person respond? If so, they are conscious: follow the -
directions at the end of the page while you wait for help to arrive.If the person does 
not respond, they are probably unconscious.<br><br>

3.SEND for help<br>
Call an ambulance or ask someone else to make the phone call.<br><br>

4.Check AIRWAY<br>
Is the airway open?
Open the mouth and check that the upper airway that is visible to you is clear of
 foreign material. If the airway is not clear, turn the person into recovery position.<br><br>

5.Kneel beside the person.<br>
Put their arm that’s farthest from you out at right angles to their body.Place their 
nearer arm across their chest.Bend their nearer leg up at the knee; the other leg
should be straight. While supporting their head and  neck, roll the person away from 
you. When they are on their side, keep their top leg bent at the knee, with the knee
 touching the ground.<br><br>
    `;
    e.preventDefault();
}
function showToothAche(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('https://www.healthline.com/hlcmsresource/images/topic_centers/2018-10/10175-How_to_Get_Rid_of_a_Toothache_at_Night_1200x628-facebook.jpg')";
    firstAids.innerHTML=`
    Tooth decay is the primary cause of toothaches for most children and adults. 
Bacteria that live in your mouth thrive on the sugars and starches in the food you eat.
These bacteria form a sticky plaque that clings to the surface of your teeth. <br><br>

Acids produced by the bacteria in plaque can eat through the hard, white coating 
on the outside of your teeth (enamel), creating a cavity. The first sign of decay may 
be a sensation of pain when you eat something sweet, very cold or very hot. Sometimes
 decay will show as a brown or white spot on the tooth.<br><br>

<h4>FIRST AID FOR TOOTHACHE</h4>

  <h6>Know the problems</h6>
Problems include: <br>
1.An accumulation of food and debris between your teeth, especially if your teeth have spaces between them. <br><br>
2.Inflammation or infection at the root of the tooth or in the gums<br><br>
3.Trauma to the tooth, including injury or grinding your teeth<br><br>
4.Sudden fracture of the tooth or tooth root<br><br>
5.A split in the tooth that occurs over time<br><br>
6.Teeth that start to appear (erupt) through the gums, such as with teething or wisdom teeth that don't have enough room to emerge or develop normally (impacted wisdom teeth)<br><br>
7.A sinus infection that can be felt as pain in the teeth<br><br>
8.A toothache often requires some sort of treatment by your dentist.<br><br>

   Self-care<br>
Until you can see your dentist, try these self-care tips for a toothache:<br>

     Rinse your mouth with warm water.<br><br>
Use dental floss to remove any food particles or plaque wedged between your teeth.<br><br>
Consider taking an over-the-counter (OTC) pain reliever to dull the ache, but don't place<br><br>
 aspirin or another painkiller directly against your gums because it may burn your gum tissue.<br><br>
If the toothache is caused by trauma to the tooth, apply a cold compress to the outside of your cheek.<br><br>
    `;
    e.preventDefault();
}
function showWound(e){
    clearScreen();
    document.getElementById('background-image1').style.backgroundImage = "url('data:image/jpeg;base64,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')";
    firstAids.innerHTML=`
    <h4>FIRST AID FOR WOUND.</h4>
1. Stop Bleeding<br>
Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.
If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to 
apply pressure. If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.
Wash your hands again after giving first aid and before cleaning and dressing the wound. Do not apply a
tourniquet unless the bleeding is severe and not stopped with direct pressure.<br><br>

2. Clean Cut or Wound<br>
Gently clean with soap and warm water. Try to rinse soap out of wound to prevent irritation. Do not
 use hydrogen peroxide or iodine, which can damage tissue.<br><br>

3. Protect the Wound<br>
Apply antibiotic cream to reduce risk of infection and cover with a sterile bandage.
Change the bandage daily to keep the wound clean and dry.<br><br>

    `;
    e.preventDefault();
}