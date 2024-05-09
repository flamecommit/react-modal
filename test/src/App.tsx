import { Modal } from '@shinyongjun/react-modal';
import '@shinyongjun/react-modal/css';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(true);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Open
      </button>
      {show && (
        <Modal onBackgroundClick={() => setShow(false)}>
          <div
            style={{
              background: '#fff',
              height: 1500,
              width: 768,
              maxWidth: '100%',
            }}
          >
            Modal
            <button type="button" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </Modal>
      )}
      {show2 && (
        <Modal onBackgroundClick={() => setShow2(false)}>
          <div
            style={{
              background: '#fff',
              height: 1500,
              width: 768,
              maxWidth: '100%',
            }}
          >
            Modal2
            <button type="button" onClick={() => setShow2(false)}>
              Close
            </button>
          </div>
        </Modal>
      )}
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
      <p>scroll maker</p>
    </div>
  );
}
