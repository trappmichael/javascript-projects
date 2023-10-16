// Define your Book class here:

class Book {
    constructor (title, author, copyrightDate, isbn, pages, checkouts, isDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.checkouts = checkouts;
        this.isDiscarded = isDiscarded;
    }

    logCheckout() {
        return this.checkouts += 1;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pages, checkouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, pages, checkouts, isDiscarded);
    }

    dispose(thisYear) {
        if ((thisYear - this.copyrightDate) > 5) {
            this.isDiscarded = 'Yes';
        } else {
            this.isDiscarded = 'No';
        }
    }

}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pages, checkouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, pages, checkouts, isDiscarded);
    }

    dispose() {
        if (this.checkouts > 100) {
            this.isDiscarded = 'Yes';
        } else {
            this.isDiscarded = 'No';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
let shuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'No');

// Code exercises 4 & 5 here:

shuttleBuildingManual.dispose(2023);
console.log(shuttleBuildingManual.isDiscarded);
