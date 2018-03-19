var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {price:20 , beanRequirement:10},
    americano:{price:10 , beanRequirement:5},
    doubleShot: {price:30 , beanRequirement:15},
    frenchPress: {price:24 , beanRequirement:12}
  },

  makeDrink: function (drinkType) {

    if(!this.drinkRequirements[drinkType]){
      alert("Sorry, we don't make " + drinkType);
      return false;
    }
   
    if(this.beans- this.drinkRequirements[drinkType].beanRequirement < 0){
      alert( "Sorry, we're all out of beans!");
      return false;
    }
  
    this.beans-= this.drinkRequirements[drinkType].beanRequirement;
    alert ("Your " + drinkType + "costs " + this.drinkRequirements[drinkType].price) ;
    return true;
      
  },


  buySupplies: function(beansAmount){
    beanPrice = 1;
    if(this.money-(beansAmount*beanPrice) < 0){
      alert("Number of beans must not exceed " + (this.money/beanPrice));
    }
    else {
      this.money -= (beansAmount*beanPrice);
      this.beans += beansAmount;
      alert("Money:" + this.money + " Beans:" + this.beans);
    }
  },

  buyDrink: function(drinkType){
    if(this.makeDrink(drinkType)){
      this.money += this.drinkRequirements[drinkType].price;
      alert("Money = " + this.money);
    }


  }


   
}
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
coffeeShop.buySupplies(1000);
coffeeShop.buySupplies(30);