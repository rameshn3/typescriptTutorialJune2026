function getUserData(){
    return new Promise((resolve, reject) => {
       
            resolve("User data retrieved successfully");
    
});
}

async function fetchUserData() {
const data = await getUserData();
    console.log(data);
}


fetchUserData();
console.log("End of program");
