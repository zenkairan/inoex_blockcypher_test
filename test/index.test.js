const expect = require('chai').expect;

const nock = require('nock');

const initBcyTransfer = require('../transferencia').initBcyTransfer;


describe('Teste de requisição post', () => {
    beforeEach(() => {
        nock('https://api.blockcypher.com')
        .post('/v1/bcy/test/faucet?token=f559581fbebb412b9379cd5752bcae49')
        .reply(200, { tx_ref:
            'HASHSTRING' });
    });

    it('Requisição de envio de BCY', () => {
        return initBcyTransfer()
          .then(response => {
            expect(typeof response).to.equal('object');
    
            expect(response.tx_ref).to.equal('HASHSTRING')
          });
      });
}); 

describe('Teste de requisição post com falha', () => {
  beforeEach(() => {
      nock('https://api.blockcypher.com')
      .post('/v1/bcy/test/faucet?token=f559581fbebb412b9379cd5752bcae49')
      .reply(500, 'Error');
  });

  it('Requisição de envio de BCY com erro', () => {
      return initBcyTransfer()
        .then(response => {
          expect(typeof response).to.equal('string');
  
          expect(response).to.equal('Error')
        });
    });
}); 