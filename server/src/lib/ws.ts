import { createWorker } from "./worker";
import WebSocket from "ws"

let mediasoupRouter;


const WebsocketConnection = async (socket: WebSocket.Server) => {

    try {
        mediasoupRouter = await createWorker(); 
    } catch (error ) {
        throw error;
    }

    socket.on('connection', (ws: WebSocket) => {

        ws.on('message', (message: string) => {
            console.log('message: => ', message);
            ws.send('helloWorld!!!');
            
        })
    })
}


export { WebsocketConnection }