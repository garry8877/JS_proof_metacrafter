/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Create a variable to hold your NFTs

let NFTS = [];
function insert_NFT(Name, hair_color, UpperType, item) {
    const nft = {
        Name: Name,
        hair_color: hair_color,
        UpperType: UpperType,
        item:item,
    };
    NFTS.push(nft);
}
function Output_nft() {
    for (let i = 0; i < NFTS.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + NFTS[i].Name);
        console.log("Hair Color: " + NFTS[i].hair_color);
        console.log("Upper Type: " + NFTS[i].UpperType);
        console.log("Item scan " + NFTS[i].item);
        console.log("--------------------");
    }
}
function Total_data() {
    return NFTS.length;
}

// Call your functions below this line
insert_NFT("Anna", "Black", "Crop top", "Gold watch");
insert_NFT("Harshita", "Brown", "Hoodie", "Platium Ring");
insert_NFT("Garry", "Dark Brown", "Plain shirt", "Silver Chain ");

// List all NFTs
Output_nft();
console.log("Total User data stored= " ,Total_data());