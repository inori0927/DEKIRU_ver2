import React, {useState, useRef} from 'react';
import Peer from 'skyway-js';
const peer = new Peer({key: '95ba327e-64d1-4c05-8f9f-ad00ac893e07'});


function Skyway() {
  const [myId, setMyId] = useState('');
  const [callId, setCallId] = useState('');
  //DOM要素の取得
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  //open: SkyWayサーバーとの接続が成功したタイミングで発火
  peer.on('open', () => {
    //PeerID取得
    setMyId(peer.id);
    // カメラ映像取得
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then( stream => {
      // 成功時にvideo要素にカメラ映像をセット
      localVideo.current.srcObject = stream;
    }).catch( error => {
      // 失敗時にはエラーログを出力
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });
  });

  //call: 相手から接続要求が来たタイミングで発火
  peer.on('call', mediaConnection => {
    mediaConnection.answer(localVideo.current.srcObject);
    //相手の映像をvideo要素にセット
    mediaConnection.on('stream', async stream => {
      remoteVideo.current.srcObject = stream;
    });
  });

  //error: 何らかのエラーで発火
  peer.on('error', err => {
    alert(err.message);
  });

  //close: 接続が切れたときに発火
  peer.on('close', () => {
    alert('通信が切断しました。');
  });

  const makeCall = () => {
    //peer.call()で接続 => mediaConnectionに接続相手の情報が帰ってくる
    const mediaConnection = peer.call(callId, localVideo.current.srcObject);
    console.log('相手にコール')
    //相手の映像をvideo要素にセット
    mediaConnection.on('stream', async stream => {
      remoteVideo.current.srcObject = stream;
      await remoteVideo.current.play().catch(console.error);
    });
  }

  return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div>
                        <video
                        width="400px"
                        ref={localVideo}
                        style={{transform: 'scale(-1,1)'}}
                        autoPlay muted playsInline>
                        </video>
                      </div>
                      <div>{myId}</div>
                      <div>
                        <input value={callId} onChange={e => setCallId(e.target.value)}></input>
                        <button onClick={makeCall}>発信</button>
                      </div>
                      <div>
                      <video
                      width="400px"
                      ref={remoteVideo}
                      autoPlay muted playsInline>
                      </video>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Skyway;