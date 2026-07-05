import { Webhook } from "svix";
import userModel from '../models/userModel.js';

// Api Controllers Function to Manage Clerk User with database
// https://localhost:4000/api/user/webhooks


const clerkWebhooks = async (req, res) => { 

    try {
        
        // create a Sivex instance with clerk webhook secret

        const whook = new webhook({ secret: process.env.CLERK_WEBHOOK_SECRET });

        await whook.verify(JSON.stringify(req.body), {
            "sivx-id": req.headers["sivx-id"],
            "sivx-timestamp": req.headers["sivx-timestamp"],
            "sivx-signature": req.headers["sivx-signature"]
        })

        const { data, type } = req.body;
        
        switch (type) { 
            case "user.created": {

                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_addresses,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo:data.image_url
                }


                await userModel.create(userData);
                res.json({});

                break;
            }
            case "user.updated": { 

                const userData = {
                    email: data.email_addresses[0].email_addresses,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo:data.image_url
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({});

                break;

            }
            case "user.deleted": {
                
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({});

                break;
            }
                
        }


        
    } catch (error) {

        console.log(error.message);
        res.json({success: false, message: error.message});
        
    }

}



export { clerkWebhooks };