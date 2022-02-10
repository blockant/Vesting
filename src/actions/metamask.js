import {  SET_METAMASK_ADDRESS, NO_ACTION, SET_METAMASK_BALANCE} from "./types";
import token from '../token.json'
import Web3 from "web3";

//Login Metamask
export const loginMetaMask=(address)=>(dispatch)=>{
    try{
        dispatch({
            type: SET_METAMASK_ADDRESS,
            payload: address
        })
    }catch(err){
		console.log(err)
        dispatch({ type: NO_ACTION });
    }
}

//Set Metamask Balance
export const setMetaMaskBalance=(metaMaskAddress)=>async(dispatch)=>{
	try{
		if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
			dispatch({
				type: NO_ACTION
			});
        }
        // setWeb3(window.web3);
        const web3 = window.web3;
        const contract = new web3.eth.Contract(token, "0x09a7277b72ec7feb6ceedb52932f279fd762fa3a");
        const token_count = await contract.methods.balanceOf(metaMaskAddress).call();
		// const token_count=await web3.eth.getBalance(metaMaskAddress)
		console.log('Token is', token_count)
        dispatch({
            type: SET_METAMASK_BALANCE,
            payload: token_count?.slice(0, -18)
        })
    }catch(err){
		console.log(err)
        dispatch({ type: NO_ACTION });
    }
}