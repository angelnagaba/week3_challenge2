// tests here
const assert = require('assert');
const BankAccount = require('../account') //imports a class to have each object that belongs to that class

describe('BankAccount', () => {
    let account;
    beforeEach(() => {
        account = new BankAccount('67647433', 'ACCOUNT 8 TEST ACCOUNT')
    })
    it('should create successfully', () => {
        assert.equal(account.getBalance(), 0)
        assert.equal(account.accountName, 'ACCOUNT 8 TEST ACCOUNT')
        assert.equal(account.accountNumber, '67647433')
    });

    it('should increase balance on deposit', () => {
        account.deposit(100000);
        account.deposit(100000);
        account.deposit(100000)
        assert.equal(account.getBalance(), 200000)
    });

    it('should activate an account when opened', () => {
        account.open()
        assert.equal(account.isActive, true);
    });
    it('should close an account', () => {
        account.close()
        assert.equal(account.isActive, false);
    });

    it('should give a correct string representation', () => {
        assert.equal(account, account.toString())
    })

    it('should not withdraw more tha you have', () => {
        assert.equal(account.withdraw(1000), 'Insufficient Balance on your account')
    });

    it('should withdraw successfully', () => {
        account.deposit(50000);
        assert.equal(account.withdraw(10000),
            'Successfully withdrawn 10000 and balance is 40000'
        )
    });
})