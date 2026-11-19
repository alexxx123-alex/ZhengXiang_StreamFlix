

const streamflix = require('./ZhengXiang_EGL301.js');





//1. Get Subscription Plans
console.log("\nFunction 1: Get Subscription Plans");
console.log(streamflix.getSubscriptionPlans());



//2. Subscribe User
console.log("\nFunction 2: Subscribe User");
console.log(streamflix.subscribeUser("U002", "P002"));



//3. Change Subscription Plan
console.log("\nFunction 3: Change Subscription Plan");
console.log(streamflix.changeSubscriptionPlan("U001", "P003"));



//4. Check Content Access
console.log("\nFunction 4: Check Content Access");
console.log(streamflix.checkContentAccess("U001", "C003"));



//5. Renew Subscription
console.log("\nFunction 5: Renew Subscription");
console.log(streamflix.renewSubscription("U001"));


//6. Get Subscription History
console.log("\nFunction 6: Get Subscription History");
console.log(streamflix.getSubscriptionHistory("U001"));

