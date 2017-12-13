import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes';
import { Card } from 'semantic-ui-react';



const Note = ({ id, name, complete, dispatch }) => (
  < Card color='red' 
    onClick={() => dispatch(toggleNote(id))}
    style={complete ? { textDecoration: 'line-through' } : {}}
  >
  <Card.Content>
    <div style={{minHeight: '200px', width: '100%'}}>
      <Card.Description>
    {name}
      </Card.Description>
    </div>
  </Card.Content>
  </Card >
)





  

export default connect()(Note);
