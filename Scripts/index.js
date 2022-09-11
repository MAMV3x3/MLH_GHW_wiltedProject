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


let pants1 =new clothe("pants 1", "150", "../assets/pants.jpg")
let pants2 =new clothe("pants 2", "200", "../assets/pants.jpg")
let pants3 =new clothe("pants 3", "160", "../assets/pants.jpg")
let pants4 =new clothe("pants 4", "130", "../assets/pants.jpg")
let pants5 =new clothe("pants 5", "120", "../assets/pants.jpg")
let pants6 =new clothe("pants 6", "300", "../assets/pants.jpg")
let pants7 =new clothe("pants 7", "260", "../assets/pants.jpg")
let pants8 =new clothe("pants 8", "230", "../assets/pants.jpg")


let tee1 =new clothe("tee 1", "150", "../assets/tee.png")
let tee2 =new clothe("tee 2", "200", "../assets/tee.png")
let tee3 =new clothe("tee 3", "160", "../assets/tee.png")
let tee4 =new clothe("tee 4", "130", "../assets/tee.png")
let tee5 =new clothe("tee 5", "120", "../assets/tee.png")
let tee6 =new clothe("tee 6", "300", "../assets/tee.png")
let tee7 =new clothe("tee 7", "260", "../assets/tee.png")
let tee8 =new clothe("tee 8", "230", "../assets/tee.png")


let listShoes = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];
let listPants = [pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8];
let listTees = [tee1, tee2, tee3, tee4, tee5, tee6, tee7, tee8];



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
fillSection(listPants, outfitPants);
fillSection(listTees, outfitTee);
