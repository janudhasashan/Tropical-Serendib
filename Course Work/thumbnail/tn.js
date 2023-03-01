mainImg = document.getElementById("mainImg");


t1 = document.getElementById("t1");
t1Src = document.getElementById("t1").src;

t2 = document.getElementById("t2");
t2Src = document.getElementById("t2").src;

t3 = document.getElementById("t3");
t3Src = document.getElementById("t3").src;

t4 = document.getElementById("t4");
t4Src = document.getElementById("t4").src;

t5 = document.getElementById("t5");
t5Src = document.getElementById("t5").src;

t1.addEventListener("click",function(){
  mainImg.src = t1Src;
  topic.innerHTML = "Sigirya";
  intro.innerHTML = "Sigiriya, also called Lion Rock or Lion Mountain,"+"<br>"+"site in central Sri Lanka consisting of the ruins of an ancient stronghold"+"<br>"+"that was built in the late 5th century CE"+"<br>"+" on a remarkable monolithic rock pillar."+"<br>"+"The rock, which is so steep that its top overhangs the sides,"+"<br>"+" rises to an elevation of 1,144 feet (349 metres) above sea level and is some 600 feet (180 metres) above the surrounding plain.";

})

t2.addEventListener("click",function(){
  mainImg.src = t2Src;
  topic.innerHTML = "Whale Watching Mirissa";
  intro.innerHTML = "Whale and dolphin watching in Mirissa is one of the most exciting water activities you can do during your holiday in Sri Lanka."+"<br>"+"Often spotted blue whales are the biggest animals in the world"+"<br>"+"and Mirissa is the best place for whale and"+"<br>"+" dolphin watching tour in Sri Lanka."

})

t3.addEventListener("click",function(){
  mainImg.src = t3Src;
  topic.innerHTML = "Nine Arch Bridge";
  intro.innerHTML = "Built at 3100m above sea level, among the craggy peaks of the Central Highlands; the Nine Arches forms a viaduct between the Demodara and Ella Railway stations"+"<br>"+"Built entirely out of brick, rock and cement; without a single piece of steel;"+"<br>"+"the bridge has stood solid from 1921, its time of creation.";
})

t4.addEventListener("click",function(){
  mainImg.src = t4Src;
  topic.innerHTML = "Sri Dalada Maligawa";
  intro.innerHTML = "The Temple of the Sacred Tooth Relic is a world-renowned place of worship,"+"<br>"+"where the left Canine tooth of Gautama Buddha is enshrined."+"<br>"+"The temple which is venerated by thousands of local & foreign devotees and tourists daily was named as a world heritage by UNESCO in 1998."+"<br>"+"The temple which carries a lot of value to Buddhists all over the world also has immense cultural value.";
})

t5.addEventListener("click",function(){
  mainImg.src = t5Src;
  topic.innerHTML = "Yala National Park";
  intro.innerHTML="Yala National Park is Sri Lanka’s most popular wildlife park due to the presence of many leopards."+"<br>"+"Its diversity of bird, mammal and reptile life is unrivalled in the country and there are particularly high densities of its two keystone species: elephants and leopards."+"<br>"+"The habitats found in the park are wide-ranging, from freshwater lakes to beaches, rocky outcrops to green plains and jungle.";
})


function changeColor(getColor){
  let bc = document.querySelector('.bc');
  let colour = getColor.value;
  bc.style.background = colour;
}

function fontcolor(getColor){
  var change = document.querySelector('.bc');
  var font = getColor.value;
  change.style.color = font;
}
