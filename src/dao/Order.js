export class Order {
    /**
     * @type {string} 
     */
    name

    /**
     * @type {string} 
     */
    email

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
     * @type {string}
     */
    tShirtName

    /**
     * @type {'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'}
     */
    tShirtSize

    /**
     * @type {'Black' | 'White'}
     */
    tShirtColor

    /**
     * @type {'UPI' | 'Cash'}
     */
    paymentMode

    /**
     * @type {string}
     */
    campus

    /**
     * @type {string}
     */
    paymentCollector

    /**
     * @type {string | undefined}
     */
    transactionID

    /**
     * @type {'pending' | 'accepted' | 'rejected'}
     */
    status

    /**
     * 
     * @param {string} name 
     * @param {string} email
     * @param {string} phoneNumber
     * @param {string} college 
     * @param {string} department 
     * @param {string} tShirtName 
     * @param {'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'} tShirtSize 
     * @param {'Black' | 'White'} tShirtColor 
     * @param {'UPI' | 'Cash'} paymentMode 
     * @param {string} campus
     * @param {string} paymentCollector
     * @param {string | null} transactionID 
     * @param {string} status 
     */
    constructor (
        name,
        email,
        phoneNumber,
        college,
        department,
        tShirtName,
        tShirtSize,
        tShirtColor,
        paymentMode,
        campus,
        paymentCollector,
        transactionID,
        status
    ) {


        if(phoneNumber.length !== 10 || !/[0-9]{10}/.test(phoneNumber)) {
            throw new Error("Invalid phone number")
        }

        paymentMode = paymentMode.trim().toUpperCase()
        if(paymentMode !== 'UPI' && paymentMode !== 'CASH') {
            throw new Error("Only UPI and Cash payment modes are available")

        }
        if(paymentMode === 'UPI' && !transactionID) {
            throw new Error("Cannot have payment mode as UPI without transactionID")
        }
        if(
            typeof transactionID === undefined ||
            transactionID === null ||
            transactionID.trim() === '' ||
            paymentMode === 'CASH'
        ) {
            transactionID = null
        }



        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.college = college
        this.department = department
        this.tShirtName = tShirtName
        this.tShirtSize = tShirtSize
        this.tShirtColor = tShirtColor
        this.paymentMode = paymentMode
        this.transactionID = transactionID
        this.campus = campus
        this.paymentCollector = paymentCollector
        this.status = "pending"
    }
}