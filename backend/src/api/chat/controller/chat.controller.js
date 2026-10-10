
import {createConversationsService, getRecentConversationRows} from "../service/chat.service.js"




async function createConversationController(req, res){
    try {
      
       let result = await createConversationsService(req.body)
        res.status(201).json(
            {
                success: true,
                message:"conversation posted successfully",
                data: result
            }
        )

    } catch (error) {
        console.log('error from post controller', error)
        throw error
        
    }
   
    
   
}


//==================================================


async function getConversationsController(req, res){
    try {
        const result = await getRecentConversationRows(10)
        res.json(result)
    } catch (error) {
        console.log('error from get controller', error)
        throw error
    }
    
}

export {createConversationController, getConversationsController}