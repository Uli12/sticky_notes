import React, { Component } from 'react';
import NotesForm from './components/NoteForm';
import NotesList from './components/NoteList';
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react'


const App = () => (
  <Container>
    <br />
    <Footer />
    <br />
    <NotesForm />
    <br />
    <NotesList />
  </Container>
)

export default App;


