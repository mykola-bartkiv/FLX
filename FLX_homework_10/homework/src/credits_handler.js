function userCard(n) {
    let cards = [
        {
            key : 1,
            balance : 100,
            transactionLimit : 100,
            historyLogs : []
        },
        {
            key : 2,
            balance : 100,
            transactionLimit : 100,
            historyLogs : []
        },
        {
            key : 3,
            balance : 100,
            transactionLimit : 100,
            historyLogs : []
        }
    ];
    let num = 2; /*numbers after point*/
    function getCardOptions() {
        return cards[n-1];
    }
    function putCredits(value) {
        value = parseFloat(value.toFixed(num));
        cards[n-1].balance += value;
        let operationInfo = {
            operationType : 'Received credits',
            credits : parseFloat(value.toFixed(num)),
            operationTime : operationDate()
        };
        cards[n-1].historyLogs.push(operationInfo);
    }
    function takeCredits(value) {
        if (checkLimit(value)) {
            cards[n-1].balance -= value;
            cards[n-1].balance = parseFloat(cards[n-1].balance.toFixed(num));
            let operationInfo = {
                operationType : 'Withdrawal of credits',
                credits : parseFloat(value.toFixed(num)),
                operationTime : operationDate()
            };
            cards[n-1].historyLogs.push(operationInfo);
        } else {
            limitError(value);
        }
    }
    function setTransactionLimit(value) {
        cards[n-1].transactionLimit = value;
        let operationInfo = {
            operationType : 'Transaction limit change',
            credits : parseFloat(value.toFixed(num)),
            operationTime : operationDate()
        };
        cards[n-1].historyLogs.push(operationInfo);
    }
    function transferCredits(value, credit) {
        let taxes = 0.5;
        let percent = 100;
        let taxableValue = value + taxes*value/percent;
        if (checkLimit(taxableValue)) {
            this.takeCredits(taxableValue);
            credit.putCredits(value);
        } else {
            limitError(taxableValue);
        }
    }
    function operationDate() {
        let getDate = new Date();
        let addNull = function(e) {
            let checkLength = 2;
            return e.toString().length < checkLength ? `0${e}` : e;
        };
        return addNull(getDate.getDate()) + '/' +
            addNull(getDate.getMonth() + 1) + '/' +
            getDate.getFullYear() + ', ' +
            addNull(getDate.getHours()) + ':' +
            addNull(getDate.getMinutes()) + ':' +
            addNull(getDate.getSeconds());
    }
    function checkLimit(value) {
        let balanceLimit = value <= cards[n-1].balance;
        let transactionLimit = value <= cards[n-1].transactionLimit;
        return balanceLimit&&transactionLimit;
    }
    function limitError(value) {
        let errorText = '';
        if (value >= cards[n-1].balance) {
            errorText = 'The value exceeds the funds on the balance sheet';
        }
        if (value >= cards[n-1].transactionLimit) {
            errorText = 'You exceed the limit';
        }
        return console.error(errorText);
    }
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.i = 1;
    }
    addCard() {
        let maxValue = 3;
        if (this.i <= maxValue) {
            this.cards.push(userCard(this.i++));
        }
    }
    getCardByKey(value) {
        return this.cards[value-1];
    }
}


