import {  SET_VESTING_HISTORY, NO_ACTION} from "./types";
import Web3 from "web3";
import vestingContractABI from "../contact.json"

//Login Metamask
export const getVestingHistory=(address)=>async(dispatch)=>{
    try{
        // const web3 = window.web3;
        // const contract = new web3.eth.Contract(vestingContractABI, "0x2a1f0ad3cab040e28845734d932f3ff0a24b14f4");
        // console.log('Contract is', contract)
        //TODO: Add Your Wallet Address
        // const receivers=await contract.methods.getReceiverIDs("0x9d6F7D05838F3272198dEa07e1C7aF2ed001927A").call()
        const receivers=null
        console.log('Receivers are', receivers)
        if(receivers){
            const vestData=[]
            for (const receiver of receivers) {
                // const data=await contract.methods.vestingID(receiver).call()
                // console.log('Data is', data)
                // vestData.push(data)
            }
            dispatch({ 
                type: SET_VESTING_HISTORY,
                payload:  vestData
             });
        }else{
            console.log('I am called')
            // dispatch({ type: NO_ACTION });
            dispatch({ 
                type: SET_VESTING_HISTORY,
                payload:  [{
                    id: 1,
                    receiver:  "0x9d6F7D05838F3272198dEa07e1C7aF2ed001927A",
                    amount: "125000000000000000000000",
                    release: 1679484600,
                    expired: false
                }]
             });
        }
    }catch(err){
		console.log(err)
        dispatch({ type: NO_ACTION });
    }
}