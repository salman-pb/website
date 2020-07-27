import React from 'react';
import './App.css';
import { Button, Segment, Header, Input, Form, Grid, GridColumn } from 'semantic-ui-react'


function App() {
  return (
    <Grid centered verticalAlign="middle" style={{height: '100vh'}}>
      <GridColumn centered width='3'>
        <Segment compact>
          <Header as='h2'>Login yuk</Header>
            <Form>
              <Form.Field style={{width: 200}}>
                <label>Username</label>
                <Input placeholder='Username' />
              </Form.Field>
              <Form.Field style={{width: 200}}>
                <label>Password</label>
                <Input placeholder='Password' type="password" />
              </Form.Field>
              <Button style={{width: 200}} color="google plus" type='submit'>Login</Button>
            </Form>
        </Segment>
      </GridColumn>
    </Grid>
  );
}

export default App;
