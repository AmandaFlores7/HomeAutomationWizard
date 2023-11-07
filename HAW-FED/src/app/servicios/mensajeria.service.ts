import { Injectable } from '@angular/core';
import { WebSocketChat } from '../models/web-socket-chat';
import { CONSTANTES } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {
  wsUrl = CONSTANTES.ws_url;

  webSocketMessage: WebSocketChat[] = [];
  webSocket: WebSocket | undefined;
  currentChannel: string | undefined;

  constructor() { }

  openWebSocketConnection(channel: string, chatMsg?: WebSocketChat) {
    if (this.currentChannel !== channel) {
      this.closeWebSocketConnection();
      this.currentChannel = channel;
    }

    if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) {
      this.webSocket = new WebSocket(`${this.wsUrl}/mensajeria/${channel}`);

      this.webSocket.onopen = (e) => {
        console.log(e);
        if (chatMsg) {
          this.sendWebSocketMessage(chatMsg);
        }
      }

      this.webSocket.onmessage = (e) => {
        console.log(e);
        const chatMsg = JSON.parse(e.data)
        this.webSocketMessage.push(chatMsg)
      }

      this.webSocket.onclose = (e) => {
        console.log(e);
      }
    } else if (chatMsg) {
      this.sendWebSocketMessage(chatMsg);
    }
  }

  sendWebSocketMessage(chatMsg: WebSocketChat) {
    if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(chatMsg));
    } else {
      console.error('WebSocket is not open. Call openWebSocketConnection first');
    }
  }

  closeWebSocketConnection() {
    if (this.webSocket) {
      this.webSocket.close();
      this.webSocket = undefined;
    } else {
      console.error('WebSocket is not open. Call openWebSocketConnection first');
    }
  }

}
