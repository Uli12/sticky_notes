import React from 'react';
import FilterLink from './FilterLink';
import { Button, Segment, Header } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment>
      <Button.Group color='olive'>
        <Button>
          <FilterLink>All</FilterLink>
        </Button>
          {' '}
        <Button>
          <FilterLink>Completed</FilterLink>
        </Button>
          {' '}
        <Button>
          <FilterLink>Active</FilterLink>
        </Button>
      </Button.Group>

      <Header floated='right' as='h1' color='olive'>
        Sticky Notes!
      </Header> 
    </Segment>
    
    
   
  </div>
)

export default Footer;

