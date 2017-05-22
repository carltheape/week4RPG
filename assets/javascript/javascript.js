

$(document).ready(function(){
var start = 0;
$('.fight').hide();
var win = 0;
var music = new Audio('assets/sounds/O.Fortuna.mp3')
music.play();

$('.sound').click(function() {
  if (music.paused == false) {
      music.pause();
  } else {
      music.play();
  }
});

var rogue = {
  HP : 300 ,
  AP : 8,
  baseAP: 8,
  DEF : 23,
};

var wizard = {
  HP : 275,
  AP : 10,
  baseAP: 10,
  DEF : 24,
};

var paladin = {
  HP : 370,
  AP : 6,
  baseAP: 6,
  DEF : 16,
};

var barbarian = {
  HP : 325,
  AP : 7,
  baseAP: 7,
  DEF : 20,
};
var hero
var villian

   $(".character").on("mouseover", function () {
    	$(this).css("border","darkred solid 1px");
});
   $(".character").on("mouseout", function () {
    	$(this).css("border","transparent solid 1px");
});

$(".rogue").on("click", function () {
   	if ($(".top > div").length === 4 && $(start === 0)){ 
    	$('.mid').append( $('.barbarian'), $('.paladin'), $('.wizard') )
    	$(".banner").text("Choose your foe!");
        $(".rogue-text").text(rogue.HP + " HP ");
        $(".wizard-text").text(wizard.HP + " HP ");
        $(".paladin-text").text(paladin.HP + " HP ");
        $(".barbarian-text").text(barbarian.HP + " HP ");
    	$(start=1);console.log(start)
    	$(this).css("background", "url(assets/pics/ally.jpg)18% 100% no-repeat");
    	$(this).addClass("hero");
        hero = rogue;
        console.log(hero);
        $("div.barbarian").addClass("foe")
        $("div.paladin").addClass("foe")
        $("div.wizard").addClass("foe")
        $(".rogue-text").addClass('hero-text');}
;})   

$(".wizard").on("click", function () {
   	if ($(".top > div").length === 4 && $(start === 0)){
    	$('.mid').append( $('.barbarian'), $('.paladin'), $('.rogue') )
    	$(".banner").text("Choose your foe!");
        $(".rogue-text").text(rogue.HP + " HP ");
        $(".wizard-text").text(wizard.HP + " HP ");
        $(".paladin-text").text(paladin.HP + " HP ");
        $(".barbarian-text").text(barbarian.HP + " HP ");
    	$(start=1);console.log(start)
    	$(this).css("background", "url(assets/pics/crypt.jpg) 5% 100% no-repeat");
    	$(this).addClass("hero");
        hero = wizard;
        console.log(hero);
        $("div.barbarian").addClass("foe")
        $("div.rogue").addClass("foe")
        $("div.paladin").addClass("foe")
        $(".wizard-text").addClass('hero-text');}
;})

$(".barbarian").on("click", function () {
   	if ($(".top > div").length === 4 && $(start === 0)){
    	$('.mid').append( $('.wizard'), $('.paladin'), $('.rogue') )
    	$(".banner").text("Choose your foe!");
        $(".rogue-text").text(rogue.HP + " HP ");
        $(".wizard-text").text(wizard.HP + " HP ");
        $(".paladin-text").text(paladin.HP + " HP ");
        $(".barbarian-text").text(barbarian.HP + " HP ");
    	$(start=1);console.log(start)
    	$(this).css("background", "url(assets/pics/castleburn.jpg)18% 60% no-repeat");
    	$(this).addClass("hero");
        hero = barbarian;
        console.log(hero);
        $("div.paladin").addClass("foe")
        $("div.rogue").addClass("foe")
        $("div.wizard").addClass("foe")
        $(".barbarian-text").addClass('hero-text');}
;})

$(".paladin").on("click", function () {
   	if ($(".top > div").length === 4 && $(start === 0)){
    	$('.mid').append( $('.barbarian'), $('.wizard'), $('.rogue') )
    	$(".banner").text("Choose your foe!");
        $(".rogue-text").text(rogue.HP + " HP ");
        $(".wizard-text").text(wizard.HP + " HP ");
        $(".paladin-text").text(paladin.HP + " HP ");
        $(".barbarian-text").text(barbarian.HP + " HP ");
    	$(start=1);console.log(start)
    	$(this).css("background", "url(assets/pics/church.jpg)100% 100% no-repeat");
    	$(this).addClass("hero");
        hero = paladin;
        console.log(hero);
        $("div.barbarian").addClass("foe")
        $("div.rogue").addClass("foe")
        $("div.wizard").addClass("foe")
        $(".paladin-text").addClass('hero-text');}
;})




$(".rogue").on("click", function () {
	if ($(this).hasClass( "foe" ) && ($(".bottom > div").length === 0)){
		$('.bottom').append( $(this) )
        $('.fight').show();
        $('.mid').hide();
        $(".banner").text("To Battle!")
        villian = rogue;
        $(".rogue-text").addClass('villian-text');
        $("div.rogue").addClass("fighter");
        $(this).css("background", "url(assets/pics/ally.jpg)18% 100% no-repeat");
	}
;})

$(".wizard").on("click", function () {
	if ($(this).hasClass( "foe" ) && ($(".bottom > div").length === 0)){
		$('.bottom').append( $(this) )
        $('.fight').show();
        $('.mid').hide();
        $(".banner").text("To Battle!");
        villian = wizard;
        $(".wizard-text").addClass('villian-text');
        $("div.wizard").addClass("fighter");
        $(this).css("background", "url(assets/pics/crypt.jpg) 5% 100% no-repeat");
	}
;})

$(".barbarian").on("click", function () {
	if ($( this).hasClass( "foe" ) && ($(".bottom > div").length === 0)){
		$('.bottom').append( $(this) )
        $('.fight').show();
        $('.mid').hide();
        $(".banner").text("To Battle!");
        villian = barbarian;
        $(".barbarian-text").addClass('villian-text');
        $("div.barbarian").addClass("fighter");
        $(this).css("background", "url(assets/pics/castleburn.jpg)18% 60% no-repeat");
	}
;})

$(".paladin").on("click", function () {
	if ($( this).hasClass( "foe" ) && ($(".bottom > div").length === 0)){
		$('.bottom').append( $(this) )
        $('.fight').show();
        $('.mid').hide();
        $(".banner").text("To Battle!");
        villian = paladin;
        $(".paladin-text").addClass('villian-text');
        $("div.paladin").addClass("fighter");
        $(this).css("background", "url(assets/pics/church.jpg)100% 100% no-repeat");
	}
;})

$(".fight").click(function(){
    hero.AP=hero.AP+hero.baseAP
    hero.HP = hero.HP - villian.DEF
        console.log(hero.HP)
        console.log("my attack power" + hero.AP)
    $(".hero-text").text(hero.HP + " HP");
    villian.HP = villian.HP - hero.AP
        console.log(villian.HP)
        console.log("villian attack power" + villian.DEF)
    $(".villian-text").text(villian.HP + " HP");

    if (hero.HP<=0){
        alert("game over")
        location.reload()}
    else if (villian.HP<=0){
        win=win+1;
        console.log(win);
        $('.mid').show();
        $('.fighter').remove();
        $('.fight').hide()}
    if (win==3) {
        $(".banner").text("YOU ARE THE CHAMPION!");}

})







}); //this is the ending tag for document ready.  DONT TOUCH IT!!!