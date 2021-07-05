import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';


createServer({
  models: {
    transaction: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'TESTE',
  //         amount: 500,
  //         category: 'TESTE',
  //         type: 'deposit',
  //         createdAt: new Date ('2021-7-12 09:00'),
  //       },
  //       {
  //         id: 2,
  //         title: 'TESTE',
  //         amount: 500,
  //         category: 'TESTE',
  //         type: 'withdraw',
  //         createdAt: new Date ('2021-7-12 09:00'),
  //       },
  //     ]
  //   })
  // },

  routes() {
    this.namespace = 'api';



    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

