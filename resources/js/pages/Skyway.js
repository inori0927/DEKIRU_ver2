import React, {useState, useRef} from 'react';
import Peer from 'skyway-js';
const peer = new Peer({key: 'c8164b05-9527-46f8-b756-3119c447a7cc'});


function Skyway() {
  //DOM要素の取得
  const localVideo = useRef(null);
  let localStream;

  // カメラ映像取得
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then( stream => {
    // 成功時にvideo要素にカメラ映像をセット
    localVideo.current.srcObject = stream;
    // 着信時に相手にカメラ映像を返せるように、グローバル変数に保存しておく
    localStream = stream;
  }).catch( error => {
    // 失敗時にはエラーログを出力
    console.error('mediaDevice.getUserMedia() error:', error);
    return;
  });

  return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <video
                      id="my-video"
                      width="400px"
                      ref={localVideo}
                      autoPlay muted playsInline></video>
                      {/* <Button color="primary" variant="contained" href={'/'}>HOMEに遷移ボタン</Button>  */}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Skyway;