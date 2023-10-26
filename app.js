gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// проверка на файл html и включение плавной прокрутки и эффектов 
if(document.querySelector("#its_indexHTML") != null && ScrollTrigger.isTouch != 1)
{
        ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });
    
    gsap.fromTo('.img_rest_inside', { x: "-50%" }, {
        x: "150%",
        scrollTrigger: {
            trigger: '.img_rest_inside',
            scrub: true
        }
    });
    
    gsap.to('.dollar', { 
        rotate: 360 ,
        scrollTrigger: {
            trigger: '.dollar',
            scrub: true,
        }
    });
};    

// выпадающее меню по клику
if(document.querySelector("#its_menuHTML") != null )
{
    document.querySelector(".list_drink").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_drink").classList.toggle("open");
        document.querySelector(".list_drink").classList.toggle("open");
    });
    
    document.querySelector(".list_fish").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_fish").classList.toggle("open");
        document.querySelector(".list_fish").classList.toggle("open");
    });
    
    document.querySelector(".list_garnish").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_garnish").classList.toggle("open");
        document.querySelector(".list_garnish").classList.toggle("open");
    });
    
    document.querySelector(".list_pizza").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_pizza").classList.toggle("open");
        document.querySelector(".list_pizza").classList.toggle("open");
    });
    
    
    document.querySelector(".list_meat").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_meat").classList.toggle("open");
        document.querySelector(".list_meat").classList.toggle("open");
    });
    
    document.querySelector(".list_sushi").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_sushi").classList.toggle("open");
        document.querySelector(".list_sushi").classList.toggle("open");
    });
    
    document.querySelector(".list_soup").addEventListener("click", function()
    {
        document.querySelector(".list_dishes_soup").classList.toggle("open");
        document.querySelector(".list_soup").classList.toggle("open");
    });
    
};




