const heart = document.getElementById('heart');
const brain = document.getElementById('brain');
const nerves = document.getElementById('nerves');
const kidney = document.getElementById('kidney');
const sexual = document.getElementById('sexual');

let ul = document.createElement('UL');
const filter = document.getElementById('filter1');

function clearScreen(){
    ul.innerHTML = '';
}

function filterQuestion(e){
    hideAnswer();   
    const text = filter.value.toLowerCase();
    const needToFilter = document.querySelectorAll('.question');
    needToFilter.forEach(function(question){
        const check = question.firstChild.textContent;
        if(check.toLowerCase().indexOf(text) != -1){
            question.style.display = 'block';
        }

        else{
            question.style.display = 'none';
        }
    })   
}

filter.addEventListener('keyup', filterQuestion);

function createQuestion(question, answer) {
    exceptFilter = document.getElementById('exceptFilter');
    const li = document.createElement('LI');
    const link = document.createElement('A');
    link.setAttribute("href", "#");
    link.className = "question";
    const Q1 = document.createTextNode(question);
    const A1 = document.createTextNode(answer);
    const div2 = document.createElement('div');
    div2.className = "answer";
    div2.appendChild(A1);
    link.appendChild(Q1);
    li.appendChild(link);
    li.appendChild(div2);
    ul.appendChild(li);
    exceptFilter.appendChild(ul);
}
function hideAnswer() {
    const answers = document.getElementsByClassName('answer');
    let arrAnswers = Array.from(answers);
    arrAnswers.forEach(function (answer) {
        answer.style.display = "none";
    });
}



ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('question')) {
        if (e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block";
        }
        else if(e.target.nextElementSibling.style.display === "block"){
            e.target.nextElementSibling.style.display = "none";
        }
    }
    else{
        hideAnswer();
    }
});



function showHeart() {
    clearScreen();
    document.getElementById('filter').style.display = "block";
    createQuestion("What Is Atherosclerosis?", "Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets blocked. Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.");
    createQuestion("What's the Link Between Smoking and Heart Disease?", "About 30% of deaths from heart disease in the U.S. are directly related to cigarette smoking. Smoking is a major cause of atherosclerosis. Among other things,the nicotine in smoke causes:Less oxygen to the heart Higher blood pressure and heart rate More blood clotting Damage to cells that line coronary arteries and other blood vessels");
    createQuestion("What Are the Risk Factors for Coronary Artery Disease?", "There are some risk factors that you can't do anything about.These include:Being male, Being a woman who is past menopause, Being older ,Having a family history of heart attack or coronary artery disease");
    createQuestion("How can I get back to living a normal life after heart attack?", "There are some risk factors that you can't do anything about.These include:Being male Being a woman who is past menopause Being olderSetting goals for your emotional and physical health is an important part of your recovery. Planning lifestyle changes,like quitting smoking,increased exercise,eating healthily,and looking after your emotions,can enable you to return to normal life sooner. Your doctor and cardiac rehabilitation team can help guide you. They can advise you when you can return to different activities. Having a family history of heart attack or coronary artery disease.");
    createQuestion("How can I improve my exercise and eating habits?", "Eating healthily and keeping active is important for your recovery and heart health. Cut out unhealthy fats,like saturated and trans fats,and replace them with healthier fats. Reducing the amount of salt in your diet will help too. Cutting down on processed foods and increasing your intake of fresh fruit and vegetables will help keep your heart healthy. When it comes to fitness,you should exercise after a heart attack,but you’ll need to start slowly and work with your doctor to plan an exercise routine.    ");
    createQuestion("I’ve lost motivation after heart attack. What should I do?", "It can be hard to stay motivated,but there are things you can do help keep yourself on track. First,make sure you keep taking your medicines as prescribed. Book a follow up appointment with your doctor to ask any questions you have or discuss areas you may be struggling with. Having a recovery plan can help you get motivated. Keeping your blood pressure and cholesterol at safe levels is important,to reduce your risk of another heart event. If you have diabetes,talk with your doctor about your management plan.");
    createQuestion("What types of physical exercises are recommended to promote heart health?", "Regular physical activity like brisk walking for 30-40 minutes a day, develops and protects the heart from major cardiovascular diseases. While an intense exercise for 20-30 minutes is optional as it concentrates more on body muscle building. A person recovering from a heart attack is advised to rest for 2-3 weeks with minimal physical activity. However, mild cardio exercises and slow walking are very helpful to speed up the recovery process.");
    createQuestion("How bad is alcohol for the heart?", "In the case of tee-tootlers, it is strongly advisable to prevent alcohol consumption. While for those addicted, alcohol consumption must be limited to 60 ml of hard alcohol or 100 ml of wine in a day. Alcohol, if consumed in levels exceeding the threshold limit, it severely affects the heart health.");
    createQuestion("Can heart rebuild itself after quitting smoking?", "Smoking is directly linked to heart attack and various other cardiovascular diseases. Even one cigarette can trigger a heart attack. Inhaling the poisonous contents of cigarette smoke results in plaque rupture giving rise to a heart attack. It is highly advisable to quit smoking right away. Upon quitting, the heart rebuilds itself as time escalates. But the rebuilding process takes many years leaving behind incurable scars. Quit it now!");
    createQuestion("Does a bypass surgery guarantee an end to heart disease?", "Bypass or angioplasty is in no way the end of the treatment for heart disease. It reduces the chances of future heart attack. The recovery depends on upon the efficient containment of the risk factors.");
    createQuestion("Is heart disease hereditary?", "Predominantly most of the diseases are hereditary. Heart diseases are no different, the genes play a vital role in determining the non-modifiable risk factors for a heart disease. If a parent has suffered a heart attack before the age of 55, even the child has a higher risk of getting one.");
    createQuestion("Are women susceptible to heart attacks?", "Men are genetically prone to heart attacks and suffer from heart diseases at a higher rate when compared to women. But that doesn’t rule out the chances of women contracting a heart disease. Women don’t suffer from specific symptoms and the chances of detecting a heart problem are very remorse. Hence, women must never neglect heart-related concerns.");
    hideAnswer();
}

function showBrain() {
    clearScreen();
    document.getElementById('filter').style.display = "block";
    createQuestion("What is a traumatic brain injury?", "If you experience any forceful contact to your head,and it disrupts your brain’s natural functions,then you’ve experienced a traumatic brain injury,or TBI. Your brain can be injured by other conditions,like infections or strokes,but those kinds of injuries are called “acquired brain injuries,” or ABIs. They can be just as life altering as a TBI. Doctors classify TBIs as either mild,moderate,or severe. Since most TBIs are mild,many people who sustain a TBI find that their symptoms get better over time. In fewer but more serious cases of TBI,the effects of the damage can last a lifetime.");
    createQuestion("How many people have TBI?","It’s hard to imagine,but almost 1.7 million Americans sustain a TBI each year.1 Most people who are treated at an emergency room are released,but approximately 275,0 are admitted annually into the hospital.1 Additionally,each year,more than 52,0 die as a result of the TBI,1 and some 125,0 are permanently disabled as a result of the injury.2 Although we don’t know the number of people with TBI who aren’t seen in an emergency department,the Centers for Disease Control and Prevention estimates that at least 3.2 million Americans are permanently disabled as a result of a TBI.1");
    createQuestion("What are the costs of TBI?","TBI takes a big toll on the American economy — in 2000,it cost the US approximately $60 billion dollars overall. 6 The more severe the injury is,the more expensive it is to treat. If you were to experience a severe brain injury today,it would cost anywhere from $600,0 to $1.8 million dollars to care for you over your lifetime. If you’re a veteran,that cost could be much higher,since wartime TBIs are often accompanied by other injuries as well.");
    createQuestion("How does a TBI affect the brain and body?","When a TBI occurs,anything having to do with your brain is potentially affected. That means your basic body functions,like eating and sleeping,can be altered. It also means that the complex parts of your life — your emotions,your thoughts,and your ability to communicate — can also be disrupted. In serious cases,TBI can also affect the brain’s electrical system,causing seizures. Such a condition is commonly known as epilepsy. TBI is also known to increase the risk for other conditions such as Alzheimer’s and Parkinson disease.");
    createQuestion("What physical changes may occur due to a brain injury?","Weakness, Muscle coordination problems, Full or partial paralysis, Changes in sexual functioning, Changes in the senses (hearing,sight,touch,etc.). Seizures (also called traumatic epilepsy). Sleep problems Speech difficulties.");
    createQuestion("How much will a survivor recover from a severe brain injury?","No one knows the answer to this question. No two brains or injuries are alike, therefore recovery outcomes are very different for each survivor. The degree of recovery depends on multiple factors, such as which areas of the brain were injured, the severity of the injury and the quality of assistive programs. Therapeutic intervention should begin as soon as the survivor is medically stable. Recovery can only be measured individually, and the return of functional skills may continue for years following the injury. There is currently no accurate way to know how long recovery will take, or to what degree it will happen.");
    createQuestion(" What is SCHIZOPHRENIA?","Schizophrenia is a severe and debilitating brain and behavior disorder affecting how one thinks, feels and acts. People with schizophrenia can have trouble distinguishing reality from fantasy, expressing and managing normal emotions and making decisions. Thought processes may also be disorganized and the motivation to engage in life’s activities may be blunted. Those with the condition may hear imaginary voices and believe others are reading their minds, controlling their thoughts or plotting to harm them.");
    createQuestion("Is there a difference between adult and childhood severe brain injury?","Yes,but the jury is still out on this one. It is thought that children with severe brain injury have the advantage,and disadvantage,of youth on their side. The disadvantage is that children are more susceptible to injury due to how thin their developing skull is,and many effects will not be seen until they mature. When an adult acquires a brain injury,it may result in the ‘loss’ of a function. But children may not have acquired certain skills and functions yet,so instead of experiencing loss,they may never acquire the skill of function to begin with. Additionally,psychological and behavioral problems may affect school entry/re-entry,and a return to family and peers. The advantage of their youth is that it is believed children can train their brains to replace lost functions more easily than adults with similar injuries. However,it is important to note that childhood brain injury may present many cognitive or learning problems quite different from those experienced by adults,and some of their challenges may not show up for years. In some cases,the initial injury may be forgotten or ignored,which can lead to inappropriate diagnosis and treatment. Many child survivors will require recovery efforts that extend into the school environment to achieve success.");
    createQuestion("Will a person with brain injury recover?","Yes. However the degree of recovery will depend on several factors, such as help to develop strategies to manage their cognitive difficulties, cope with the psychological and emotional changes, and the reduction of conditions and barriers caused by physical problems. The injury will be very stressful to the family, and counseling may be required. The participation of family and friends helps the survivor to adjust to the changes created by the injury. Community-based rehabilitation and recovery programs, focused on peer support and providing functional solutions offer the best opportunities for optimum recovery.");
    createQuestion("What is a coma, and do some people remain in a coma forever?","The term “coma” is generally used to describe a prolonged state of diminished consciousness where a person’s ability to respond to stimuli is significantly reduced. It can be for a short period, or last for many years. The term “persistent vegetative state” is used to describe individuals who do not recover from coma following their injuries. Little is known about what people hear or see while in a state of coma, however, it is widely believed that they are aware of their environments, and of people and events. This understanding has dramatically changed how individuals in comas are treated")
    createQuestion("What is the role of a neuropsychologist?","Neuropsychologists are very important members of the recovery team. They may perform a neuropsychological assesment to evaluate the problems the person is experiencing, the extent of their problems, and then determine the optimum approach for recovery. In some cases, counseling is offered. In subsequent neuropsychological evaluations, the neuropsychologist will determine the recovery course and rate.")
    createQuestion("Can the survivor drive after a brain injury?","Again, the outcome of a brain injury is largely dependent on the part of the brain affected, and how badly it is injured. It is the law that doctors are required to inform the Superintendent of Motor Vehicles that a person has a health condition which impairs their ability to drive if the injury is serious enough. However, this does not mean a person will never drive again. Nonetheless, individuals that have sustained a brain injury should not drive unless their doctor says it is safe to do so. In British Columbia, once the survivor, their doctor, and/or healthcare team are confident in their ability to drive safely again, the Office of the Superintendent of Motor Vehicles (OSMV) will determine the legality of driving – usually evaluated through authorized testing. The OSMV will then restrict or prohibit driving privileges as they see fit in order to best protect the public.")
    hideAnswer();
}

function showNerves() {
    clearScreen();
    document.getElementById('filter').style.display = "block";
    createQuestion("Are there different kinds of seizures??", "Yes, there are many different kinds split between two categories: generalized and focal (or partial) seizures. Generalized seizures involve the entire brain – these include absence seizures and tonic-clonic/convulsive seizures, which people often imagine when they think of epilepsy. Focal seizures, on the other hand, only involve one part of the brain – these include simple partial seizures and complex partial seizures.");
    createQuestion("What is an aura?","An aura is a partial seizure that happens before a generalized seizure. It can serve as a warning sign, but it can happen on its own as well. The way it manifests is differs from person to person, but typically people who have auras don’t lose consciousness.");
    createQuestion("Can people die from epilepsy?","Epilepsy is a serious health condition. It’s rare but unfortunately people can die from epilepsy. Obtaining the best seizure control possible reduces the risk. Potential causes of death related to epilepsy can be from injuries or accidents during a seizure (such as drowning) or from complications related to status epilepticus. Other epilepsy-related deaths are categorized as SUDEP (Sudden Unexpected Death in Epilepsy) if a person dies suddenly without a structural or toxicological cause for death found at autopsy.");
    createQuestion("Can someone swallow their tongue during a seizure?","No, it’s physically impossible to swallow your tongue. It’s actually much more harmful to put something in someone’s mouth to prevent this because it could cause oral injuries. Instead, you should gently roll someone onto their side once their seizure has finished to ensure that their airway is clear.");
    createQuestion("How common are sleep disorders?","Roughly 40 million Americans have a sleep disorder – and most are completely unaware of it. Many who are aware they have a diagnosable sleep disorder seek the help they need.");
    createQuestion("How is epilepsy diagnosed?","Epilepsy is diagnosed by a physician or nurse practitioner. The health care professional may ask questions about the seizure such as what happened before, during, and after it. The person will also have an electroencephalogram (EEG) test to measure the electrical activity in the brain. Additional imaging tests such as MRIs and/or CT/CAT scans might be done as well. Then, based on the information gathered, a diagnosis of epilepsy might be made.");
    createQuestion("Will I Develop Dementia because I have a Family History of Alzheimer’s Disease?","Alzheimer’s disease is not a normal part of aging and although several genes such as APOE have been linked to the disease, genetic testing will not predict whether you will develop it. ");
    createQuestion("Is all Dementia the Same as Alzheimer’s Disease?","While Alzheimer’s disease is the most common form of dementia, other conditions may also cause dementia. Parkinson’s disease, normal pressure hydrocephalus and other conditions can cause dementia and many of them can be treated effectively. ");
    createQuestion("Are Certain Substances the Cause of Alzheimer’s Disease?","Certain substances (beta-amyloid plaque and neurofibrillary tangles of tau protein) are found in autopsied brains of Alzheimer’s patients, but they may be a by-product of the disease rather than the cause. ");
    createQuestion("How is Alzheimer’s Disease Diagnosed?","Although a definitive diagnosis can only be made after death through autopsy, we will perform a medical examination and look for behavioral changes to diagnose suspected Alzheimer’s disease. ");
    createQuestion("Where can I have Suspected Alzheimer’s Disease Assessed?","The Nantz National Alzheimer Center (NNAC) at Houston Methodist is a world-renowned referral center; our experienced, multidisciplinary team of specialists sees thousands of patients with cognitive disorders every year. ");
    createQuestion("How do I Know if my Headache is a Migraine?","A migraine is often a disabling and recurring headache that frequently occurs only on one side of the head. You may experience pulsing or throbbing sensations in one area of your head, as well as nausea, vomiting and sensitivity to light or sound. A tension headache is a mild, dull pressure without other symptoms. A cluster headache can deliver a severe, “stabbing” pain behind one eye and may be accompanied by congestion in your sinuses. ");
    hideAnswer();
}

function showKidney() {
    clearScreen();
    document.getElementById('filter').style.display = "block";
    createQuestion("What is haemodialysis?","As a patient approaching kidney failure who will require some form of artificial kidney treatment,it is important that you are gradually introduced to the concept of dialysis. This will be a major change in your life. Unfortunately,all too often patients who are diagnosed with kidney failure require urgent or emergency dialysis,before they have had an opportunity to learn about dialysis itself and the different methods of treatment available. All patients,and ideally their close relatives,should be informed about the choice of treatment of either haemodialysis or peritoneal dialysis (chronic intermittent haemodialysis;CAPD – continuous ambulatory peritoneal dialysis;or APD – automated peritoneal dialysis). You should also be told about the advantages and disadvantages of these treatments for each individual,and about the possibility of potential transplantation – cadaveric,live related or non-related donor.");
    createQuestion("How do I choose my dialysis?","In many units,patients approaching established renal failure are usually referred to the Community Dialysis Sister who would visit you in hospital,in the outpatient clinic or,preferably,in your own home to discuss the subject of dialysis. You and your family are invited to a meeting to hear presentations about the modes of renal replacement therapy with possible contributions from the Community Dialysis Sister,haemodialysis and CAPD nurses,dietician,social worker,pharmacist and counsellor,as well as from patients undergoing both types of treatment. If necessary,you may be seen again in your own home to discuss the subject of dialysis further. Many patients choose to attend the sessions more than once. The amount of information given depends on the needs and requests of the individual patient.");
    createQuestion("What is haemodialysis?","Haemodialysis is a proven method of removing waste products and extra fluid,which build up in the blood when the kidneys are no longer able to function properly. To accomplish haemodialysis it is necessary to have easy access to the blood vessels. This is because treatment is required up to three times a week. What is a catheter? Access can be achieved temporarily by placing a catheter (artificial tube) in one of the large veins in the neck or in the groin to enable dialysis to be undertaken. This method is not without problems,especially a tendency towards clotting (which renders the catheter ineffective) and the development of infection - requiring removal of the catheter and placement of a further catheter in another vein. There are patients for whom this form of access is their only “lifeline” and the catheters may,with careful handling,last months or even years. They are a little unsightly and restrictive,but most patients tolerate them well.");
    createQuestion("What is a fistula?","An alternative and more permanent means of access to your circulation is by means of a fistula (Figures 1a and 1b). In general, flow through the superficial veins of the body is somewhat slow and low in volume yet, for dialysis, at least 200l of blood needs to be removed every minute for treatment. To achieve this a fistula is constructed. A fistula is an artificially formed link between an artery and a vein. As a vein is exposed to the higher pressure from the artery, the walls of the vein become thicken and more prominent and thus more capable of withstanding repeated puncture by needles.");
    createQuestion("How is a fistula created?","The fistula is usually placed at the wrist or inner part of the elbow depending on the size of the blood vessels in the non-dominant arm (i.e. left if you are right handed) so that when dialysis is undertaken you have the ability to perform other activities. The construction of the fistula is undertaken in the operating theatre,usually under local anesthetic. However,there are occasions when you may require a general anaesthetic. After the fistula has been constructed it begins to mature. This usually takes between six to eight weeks depending on the initial size of the blood vessels. Even before the fistula becomes usable,the rush of blood through its new path can be felt. This sensation is called a ‘thrill’. It is a ripping or buzzing sensation that is felt when the soft pads of the fingers are placed over the skin. The fistula should be felt daily and if there is no thrill you should immediately contact the renal unit.");
    createQuestion("What is chronic kidney disease?","Chronic kidney disease (CKD) is a term used to describe kidney damage or reduced kidney function (regardless of the cause) that persists for more than 3 months. Sometimes, CKD leads to kidney failure or end stage renal disease (ESRD), which requires dialysis or a kidney transplant to keep you alive.");
    createQuestion("What is end stage renal disease?","End stage renal disease (ESRD) is total and permanent kidney failure. When the kidneys fail, the body retains fluid and harmful waste builds up. If you have ESRD, you will need dialysis or a kidney transplant to stay alive.");
    createQuestion("Is there a cure for CKD or ESRD?","There is no cure for CKD or ESRD. However, there are ways to manage CKD and ESRD that can help those who have these diseases live a full, productive life. If you have CKD, it’s important to have regular checkups. With early diagnosis and treatment, you may be able to slow the progression of your disease.");
    hideAnswer();
}

function showSexual() {
    clearScreen();
    document.getElementById('filter').style.display = "block";
    createQuestion("What causes sexual difficulties?","Sexual difficulties may be life-long or may begin in response to certain life events such as an illness, medical treatment, or change in a relationship.  Sometimes a life change such as retiring, job stress, or moving can cause changes in sexual functioning.")
    createQuestion("Are humans and apes the only animals that get HIV?","Other animals have their own type of HIV.  Cats have Feline HIV for instance.  Animal forms of HIV are different from human forms and often affect the animal in different ways than HIV affects humans.");
    createQuestion("Can a female give other females STDs?","STDs can be passed on through genital contact, most often during vaginal and anal sex. STDs may also be passed on during oral sex and genital-to-genital contact. STDs can be passed on between straight and same-sex partners—even when the infected partner has no signs or symptoms.");
    createQuestion("Can a guy who is paralyzed get an erection?","The male erection is dependent on blood flow and not the nervous system. So, a guy who is paralyzed could get an erection.");
    createQuestion("Can all STDs be transferred by kissing?","Chances are very slim but yes you can get STD through kissing.  It's possible to catch herpes just from kissing someone on the mouth. The herpes virus can be spread not only through kissing, but also through sharing utensils and cups. The tricky thing about herpes is that the signs are not always visible. Herpes is often dormant, and a person can pass it along without ever showing any signs of having it. Diseases that are not STDs, like mono, the common cold, stomach bugs, and strep throat, also can be passed through saliva. STDs can be transmitted through all types of sex, including oral sex. So, although mouth-to-mouth kissing can only pass herpes, mouth-to-genital contact can spread many STDs, including HIV. So is it possible, yes...but not as common as through sexual contact.");
    createQuestion("Can I get STDs if I wear a rubber?","Condoms, when used consistently and correctly, are the only form of protection that can help stop the transmission of sexually transmitted diseases (STDs) such as HIV, and prevent pregnancy. However, you can still get STDs if you wear condoms, especially if there are open sores in the genital area.");
    createQuestion("Can you get AIDS if you have sexual intercourse in the anal?","Yes,it is possible for either sex partner to become infected with HIV during anal sex. HIV can be found in the blood,semen,pre-seminal fluid,or vaginal fluid of a person infected with the virus. In general,the person receiving the semen is at greater risk of getting HIV because the lining of the rectum is thin and may allow the virus to enter the body during anal sex. However,a person who inserts his penis into an infected partner also is at risk because HIV can enter through the urethra (the opening at the tip of the penis) or through small cuts,abrasions,or open sores on the penis. Having unprotected (without a condom) anal sex is considered to be a very risky behavior in terms of STD/HIV risk. If people choose to have anal sex,they should use a latex condom. Most of the time,condoms work well. However,condoms are more likely to break during anal sex than during vaginal sex. Thus,even with a condom,anal sex can be risky. A person should use a water-based lubricant in addition to the condom to reduce the chances of the condom breaking.");
    createQuestion("Can you get rid of STDs?","STDs that are caused by bacterial infections (Chlamydia, gonorrhea, syphilis, and others) are easily cured with antibiotics. Other STDs that are caused by viruses (Herpes, HPV, HIV, and others) are not curable.");
    createQuestion("Can you get STDs on your mouth?","Yes. Although the chance of getting or giving a sexually transmitted disease (STD) during oral sex is smaller than vaginal or anal sex,it is still risky to have unprotected oral sex. Here's why.  Many STDs want to infect warm, wet places, like your mouth, urethra, vulva, vagina, penis, and/or anus. This means that many STDs can be passed from your mouth to genitals and vice versa. The sexually transmitted infections that can be passed during oral sex are herpes, gonorrhea, hepatitis B, and syphilis. There is a very small risk for getting and giving HIV through oral sex, too. This doesn't mean that you can't enjoy oral sex. But it does mean that you need to plan ahead,talk to your partner,and use protection. One way to make oral sex safer is to get tested regularly for STDs,and to pay attention to any potential symptoms of STDs,and get them checked out by a health care provider right away. Typical symptoms include burning sensations during sex or when you pee,unusually strong smells from your genitals,or bumps on your genitals,anus,and/or mouth and lips. Most STDs have NO symptoms,so it is still really important to get tested regularly. (To find a clinic near you,click here.) If you do not abstain from oral sex,using a latex barrier is your best chance of avoiding most STDs. When a guy is receiving oral sex,he can use a latex condom to protect himself and his partner. Many condom brands now have flavored condoms to make using one during oral sex taste better. When a girl is receiving oral sex,she can use the Sheer Glyde dam to protect herself or her partner. Her partner can use a flavored lube on the outside of the dam to make it taste better.");
    createQuestion("Can you get STDs or HIV without having sex?","Yes, some STDs are transmissible by contact with infected skin.  This is the case with HPV and Syphilis, for example.  Coming into contact with a sore or lesion from an STD infection can lead to transmission of the infection.");
    createQuestion("What is HIV?","'HIV' stands for Human Immunodeficiency Virus. Many people also refer to HIV as the 'AIDS virus.'");
    createQuestion("What is syphilis?","Syphilis is a sexually transmitted disease (STD) caused by the bacterium Treponema pallidum. It has often been called “the great imitator” because so many of the signs and symptoms are indistinguishable from those of other diseases.");
    hideAnswer();
}

heart.addEventListener('click', showHeart);
brain.addEventListener('click', showBrain);
nerves.addEventListener('click', showNerves);
kidney.addEventListener('click', showKidney);
sexual.addEventListener('click', showSexual);

