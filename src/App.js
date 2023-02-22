import React from "react";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Quizz from './components/Quizz/Quizz';
import Advantages from './components/Advantages/Advantages';
import Instruction from './components/Instruction/Instruction';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Contract from './components/Contract/Contract';
import Form from './components/Form/Form';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

import './css/style.css';






function App() {
  return (
    <div>
      <Header />
      <Main />
      <Quizz />
      <Advantages />
      <Instruction />
      <Feedbacks />
      <Contract />
      <Form />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
