import React from 'react';
import EditorInsertEmoticonIcon from 'material-ui/svg-icons/editor/insert-emoticon';
import ActionPanToolIcon from 'material-ui/svg-icons/action/pan-tool';

const DashboardWelcome = () => (
  <div className="dashboard-container">
    <div className="dashboard-container-content">
      <div style={{fontSize: 50, marginBottom: 20}}>
        <span style={{marginRight: 30, color: '#bababa', verticalAlign: 'middle'}}>Welcome</span>
        <span>
          <ActionPanToolIcon color='#cacaca' style={{width: 40, height: 40}}/>
        </span>
      </div>
      <EditorInsertEmoticonIcon color='#cacaca' style={{width: 80, height: 80}}/>
    </div>
  </div>
);

export default DashboardWelcome;
