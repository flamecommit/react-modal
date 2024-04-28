import { Modal } from '@shinyongjun/react-modal';
import '@shinyongjun/react-modal/css';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState<boolean>(false);

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
