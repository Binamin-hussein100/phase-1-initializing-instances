// Write your code here
class Breakfast{
    constructor(food,drink){
        this.food = food
        this.drink = drink
    }
}

let todayB = new Breakfast("anjera","Tea")

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

let todayL = new Lunch('salito','bone soup','passion')

class Dinner{
    constructor(salad,soup,entree,dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}

let todayD = new Dinner("salu",'bone soup','cholate cake','cheese')


