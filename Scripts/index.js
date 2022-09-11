const outfitTee = document.getElementById("outfit-tee");
const outfitPants = document.getElementById("outfit-pants");
const outfitShoes = document.getElementById("outfit-shoes");

class clothe{
    constructor(name, price, imageUrl){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    clotheInfo(){
        let info;
        info = [`${this.price}`,`${this.name}`];
        return info;
    }
    clotheImage(){
        return `${this.imageUrl}`;
    }
}

let shoe1 =new clothe("shoe 1", "150", "../assets/tenis.jpg")
let shoe2 =new clothe("shoe 2", "200", "../assets/tenis.jpg")
let shoe3 =new clothe("shoe 3", "160", "../assets/tenis.jpg")
let shoe4 =new clothe("shoe 4", "130", "../assets/tenis.jpg")
let shoe5 =new clothe("shoe 5", "120", "../assets/tenis.jpg")
let shoe6 =new clothe("shoe 6", "300", "../assets/tenis.jpg")
let shoe7 =new clothe("shoe 7", "260", "../assets/tenis.jpg")
let shoe8 =new clothe("shoe 8", "230", "../assets/tenis.jpg")

let listShoes = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];

const fillSection = (clotheList, section)=>{
    const clotheItemList = document.createDocumentFragment();
    for (clothe in clotheList){
        const clotheItem = document.createElement("DIV");
        const clotheImage = document.createElement("DIV");
        clotheItem.classList.add("clotheItem")
        clotheImage.classList.add("clotheImage")
        clotheImage.style.backgroundImage = `url(${clotheList[clothe].clotheImage()})`;
        console.log(`url(${clotheList[clothe].clotheImage()})`);
        clotheItem.appendChild(clotheImage);
        let featureList = clotheList[clothe].clotheInfo();
        let clotheInfo = document.createDocumentFragment();
        for(feature in featureList){
            const info = document.createElement("OL");
            info.classList.add("clotheInfo");
            info.textContent = featureList[feature];
            clotheInfo.appendChild(info);
        }
        clotheItem.appendChild(clotheInfo);
        clotheItemList.appendChild(clotheItem);
    }
    section.appendChild(clotheItemList);   
}
fillSection(listShoes, outfitShoes);
fillSection(listShoes, outfitTee);
