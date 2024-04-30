 import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"


const Room = () => {
const {roomId}=useParams();
const myMeeting=async(element)=>{
    const appId=1145537608;
    const serverSecret="f8c5165db00a54856b822ec787890eea";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),"name");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
   zp.joinRoom({
    container:element,
    scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
       },
   })
}
  return (
    <div>
      
      <div
      className="myCallContainer all"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
     </div>
  )
}

export default Room
