import React, { useEffect } from 'react';
import { SuprSend, SuprSendInbox } from '@suprsend/web-sdk';

const SUPRSEND_API_KEY = process.env.REACT_APP_SUPRSEND_API_KEY;
const SUPRSEND_PROJECT_ID = process.env.REACT_APP_SUPRSEND_PROJECT_ID;

const SuprSendInboxComponent = () => {
    useEffect(() => {
      const suprsend = new SuprSend({
        apiKey: SUPRSEND_API_KEY,
        projectId: SUPRSEND_PROJECT_ID,
      });
  
      const inbox = new SuprSendInbox(suprsend);

      inbox.mount('#inbox-container', {
        theme: 'dark',
        onNotificationClick: (notification) => {
          console.log('Notification clicked:', notification);
        },
      });
  
      return () => {
        inbox.unmount();
      };
    }, []);
  
    return (
      <div>
        <h2>SuprSend Inbox</h2>
        <div id="inbox-container" style={{ width: '100%', height: '400px' }}></div>
      </div>
    );
  };
  
  export default SuprSendInboxComponent;