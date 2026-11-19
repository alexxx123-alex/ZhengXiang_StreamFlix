# Assignment 1 : StreamFlix Content Subscription Manager

This Node module simulates the core backend functionality of a digital media streaming platform, allowing users to view subscription plans, subscribe, change their subscription tiers, check content access rights based on user subscription levels, renew subscriptions, and monitor user subscription history.



Available Functions & Parameters
1. `getSubscriptionPlans()`
- Returns all subscription plans.

2. `subscribeUser(userId, planId)`
- Subscribes a user to a plan after validating details.

3. `changeSubscriptionPlan(userId, newPlanId)`
- Changes a user's active subscription plan.

4. `checkContentAccess(userId, contentId)`
- Checks if a user's subscription tier allows access to specific content.

5. `renewSubscription(userId)`
- Renews an active subscription and extends the expiry date.

6. `getSubscriptionHistory(userId)`
- Retrieves the history log for a specific user.


Run the script in your terminal using:
nodemon app.js



# References
- Netflix: https://www.netflix.com



Declaration of AI Usage
Generative AI was used to brainstorm application ideas, design mock data schemas.