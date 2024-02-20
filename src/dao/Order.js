export class Order {
    /**
     * @type {string} 
     */
    name

    /**
     * @type {string} 
     */
    phoneNumber

    /**
     * @type {string}
     */
    college
    /**
     * @type {string}
     */
    department
    /**
     * @type {'1st' | '2nd' | '3rd' | '4th'}
     */
    year
    /**
     * @type {string}
     */
    nameOnShirt
    /**
     * @type {'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'}
     */
    size

    /**
     * @type {'UPI' | 'Cash'}
     */
    paymentMode

    /**
     * @type {string | null}
     */
    transactionID

    /**
     * @type {boolean}
     */
    isVerified

    /**
     * 
     * @param {string} name 
     * @param {string} phoneNumber
     * @param {string} college 
     * @param {string} department 
     * @param {'1st' | '2nd' | '3rd' | '4th'} year 
     * @param {string} nameOnShirt 
     * @param {'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'} size 
     * @param {'UPI' | 'Cash'} paymentMode 
     * @param {string | undefined} transactionID 
     */
    constructor (name, phoneNumber, college, department, year, nameOnShirt, size, paymentMode, transactionID) {
        this.name = name
        if(phoneNumber.length !== 10 || !/[0-9]{10}/.test(phoneNumber)) {

        }
        this.phoneNumber = phoneNumber
        this.college = college
        this.department = department
        this.year = year
        this.nameOnShirt = nameOnShirt
        this.size = size
        this.paymentMode = paymentMode
        if(this.paymentMode.trim().toUpperCase() === 'UPI' && !transactionID) {
            throw new Error("cannot have payment mode as UPI without transactionID")
        }
        this.transactionID = transactionID
        this.isVerified = false
    }

}