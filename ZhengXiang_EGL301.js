

//Data Scheme

// Users
let users = [
    { userId: "U001", name: "Alex" },
    { userId: "U002", name: "Sam" },
    { userId: "U003", name: "John" }
];

// Subscription Plans
let subscriptionPlans = [
    { planId: "P001", planName: "Basic", price: 9.90, accessLevel: 1 },
    { planId: "P002", planName: "Standard", price: 14.90, accessLevel: 2 },
    { planId: "P003", planName: "Premium", price: 19.90, accessLevel: 3 }
];

// Subscriptions
let subscriptions = [
    { subscriptionId: "S001", userId: "U001", planId: "P001", startDate: "2026-11-15", expiryDate: "2026-12-15", status: "Active" }
];

// Available Content
let contents = [
    { contentId: "C001", contentName: "Movie A", requiredLevel: 1 },
    { contentId: "C002", contentName: "Show B", requiredLevel: 2 },
    { contentId: "C003", contentName: "Movie C", requiredLevel: 3 }
];

// Subscription History
let historyRecords = [
    { historyId: "H001", userId: "U001", action: "Subscribed to Basic", date: "2026-11-15" }
];







//6 Functions


let streamFlix= {


    //1. Get Subscription Plans
    getSubscriptionPlans: function () {
        return subscriptionPlans;
    },






    //2. Subscribe User
    subscribeUser: function (userId, planId) {
        
        let user = null;
        let selectedPlan = null;
        let existingSubscription = null;


        // Find user
        for (let i = 0; i < users.length; i++) {
            if (users[i].userId === userId) {
                user = users[i];
                break;
            }
        }


        // Find subscription plan
        for (let i = 0; i < subscriptionPlans.length; i++) {
            if (subscriptionPlans[i].planId === planId) {
                selectedPlan = subscriptionPlans[i];
                break;
            }
        }



        // Check whether user exists
        if (user === null) {
            return "User not found.";
        }



        // Check whether plan exists
        if (selectedPlan === null) {
            return "Subscription plan not found.";
        }


        // Check for an existing active subscription
        for (let i = 0; i < subscriptions.length; i++) {
            if (
                subscriptions[i].userId === userId &&
                subscriptions[i].status === "Active"
            ) {
                existingSubscription = subscriptions[i];
                break;
            }
        }

        if (existingSubscription !== null) {
            return "User already has an active subscription.";
        }



        // Create new subscription
        let newSubscription = {
            subscriptionId: "S00" + (subscriptions.length + 1),
            userId: userId,
            planId: planId,
            startDate: "2026-11-18",
            expiryDate: "2026-12-18",
            status: "Active"
        };



        // Add subscription to array
        subscriptions[subscriptions.length] = newSubscription;


        // Add subscription history
        let newHistory = {
            historyId: "H00" + (historyRecords.length + 1),
            userId: userId,
            action: "Subscribed to " + selectedPlan.planName,
            date: "2026-11-18"
        };


        historyRecords[historyRecords.length] = newHistory;


        return newSubscription;
    },






    //3. Change Subscription Plan
    changeSubscriptionPlan: function (userId, newPlanId) {


        let userSubscription = null;
        let selectedPlan = null;


        // Find user's active subscription
        for (let i = 0; i < subscriptions.length; i++) {
            if (
                subscriptions[i].userId === userId &&
                subscriptions[i].status === "Active"
            ) {
                userSubscription = subscriptions[i];
                break;
            }
        }


        // Find selected plan
        for (let i = 0; i < subscriptionPlans.length; i++) {
            if (subscriptionPlans[i].planId === newPlanId) {
                selectedPlan = subscriptionPlans[i];
                break;
            }
        }


        if (userSubscription === null) {
            return "No active subscription found.";
        }

        if (selectedPlan === null) {
            return "Subscription plan not found.";
        }



        // Change subscription plan
        userSubscription.planId = newPlanId;



        // Record history
        let newHistory = {
            historyId: "H00" + (historyRecords.length + 1),
            userId: userId,
            action: "Changed subscription to " + selectedPlan.planName,
            date: "2026-11-18"
        };


        historyRecords[historyRecords.length] = newHistory;


        return "Subscription successfully changed to " + selectedPlan.planName + ".";
    },






    //4. Check Content Access
    checkContentAccess: function (userId, contentId) {

        let userSubscription = null;
        let selectedContent = null;
        let currentPlan = null;


        // Find active subscription
        for (let i = 0; i < subscriptions.length; i++) {
            
            if (
                subscriptions[i].userId === userId &&
                subscriptions[i].status === "Active"
            ) {
                userSubscription = subscriptions[i];
                break;
            }
        }


        if (userSubscription === null) {
            
            return "Access denied. No active subscription.";
        }


        // Find content
        for (let i = 0; i < contents.length; i++) {
            
            if (contents[i].contentId === contentId) {
                selectedContent = contents[i];
                break;
            }
        }


        if (selectedContent === null) {
            return "Content not found.";
        }



        // Find user's subscription plan
        for (let i = 0; i < subscriptionPlans.length; i++) {
            
            if (subscriptionPlans[i].planId === userSubscription.planId) {
                currentPlan = subscriptionPlans[i];
                break;
            }

        }

        if (currentPlan === null) {
            return "Subscription plan not found.";
        }



        // Compare access levels

        if (currentPlan.accessLevel >= selectedContent.requiredLevel) {
            return "Access granted to " + selectedContent.contentName + ".";
        } 

        else {
            return "Access denied. Upgrade your subscription to watch this content.";
        }

    },





   
    //5. Renew Subscription
    renewSubscription: function (userId) {
        
        let userSubscription = null;
        let currentPlan = null;

        // Find active subscription
        for (let i = 0; i < subscriptions.length; i++) {
            
            if (
                subscriptions[i].userId === userId &&
                subscriptions[i].status === "Active"
            ) 
            {
                userSubscription = subscriptions[i];
                break;
            }

        }


        if (userSubscription === null) {
            return "No active subscription found.";
        }



        // Find subscription plan
        for (let i = 0; i < subscriptionPlans.length; i++) {
            if (subscriptionPlans[i].planId === userSubscription.planId) {
                currentPlan = subscriptionPlans[i];
                break;
            }
        }


        if (currentPlan === null) {
            return "Subscription plan not found.";
        }



        // Update expiry date 
        userSubscription.expiryDate = "2027-01-18";



        // Record renewal history
        let newHistory = {
            historyId: "H00" + (historyRecords.length + 1),
            userId: userId,
            action: "Renewed " + currentPlan.planName + " subscription",
            date: "2026-12-18"
        };

        historyRecords[historyRecords.length] = newHistory;

        return "Subscription renewed successfully. New expiry date: " + userSubscription.expiryDate;
    },







    //6. Get Subscription History
    getSubscriptionHistory: function (userId) {


        let userHistory = [];

        
        // Check each history record
        for (let i = 0; i < historyRecords.length; i++) {
           
            if (historyRecords[i].userId === userId) {
                userHistory[userHistory.length] = historyRecords[i];
            }
        }

        if (userHistory.length === 0) {
            return "No subscription history found.";
        }

        return userHistory;
    }

};
    




module.exports = streamFlix;




