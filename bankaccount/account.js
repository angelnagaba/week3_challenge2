class BankAccount {
    constructor(accountNumber, accountName) {
        this.balance = 0;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.isActive = false;
        window.prompt('Account created for ' + accountName);

        //initialise variables e.g name, AccoountNo, Amount,
        // your code here
    }

    getBalance() {
        return this.balance;
        // your code here
    }

    open() {
        this.isActive = true


        // your code here
    }

    deposit(amountDeposited) {
        this.balance = this.balance + amountDeposited;
        // your code here
    }

    withdraw() {
        if (amountToWithdraw > this.balance) {
            window.prompt('Insufficient Balance on your account');
        } else {
            this.balance = this.balance - amountDeposited;
            window.prompt(`Successfully withdrawn ${amountToWithdraw} and balance is ${this.balance}`);
        }

        // your code here
    }

    close() {
        this.isActive = false
    }
    toString() {
        return `Account Name ${this.accountName}
        \n Account Number ${this.accountNumber} \n Balance: ${this.getBalance()}`
    }

}