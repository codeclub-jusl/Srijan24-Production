import {Order} from "@/dao/Order";
import {OrderRepository} from "@/repository/OrderRepository";

class OrderService {
    /**
     * @type {OrderRepository}
     */
    orderRepository

    constructor () {
        this.orderRepository = new OrderRepository()
    }


    /**
 * @param {Object} orderDetails
 * @param {string} orderDetails.Name
 * @param {string} orderDetails.Email
 * @param {string} orderDetails.PhoneNumber
 * @param {string} orderDetails.College
 * @param {string} orderDetails.Department
 * @param {string} orderDetails.TShirtName
 * @param {'White' | 'Black'} orderDetails.TShirtColor
 * @param {'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'} orderDetails.TShirtSize
 * @param {'UPI' | 'Cash'} orderDetails.PaymentMode
 * @param {string} orderDetails.Campus
 * @param {string} orderDetails.PaymentCollector
 * @param {string | undefined} orderDetails.TransactionID
     */
    async registerOrder(orderDetails) {
        const order = new Order(
            orderDetails.Name,
            orderDetails.Email,
            orderDetails.PhoneNumber,
            orderDetails.College,
            orderDetails.Department,
            orderDetails.TShirtName,
            orderDetails.TShirtSize,
            orderDetails.TShirtColor,
            orderDetails.PaymentMode,
            orderDetails.Campus,
            orderDetails.PaymentCollector,
            orderDetails.TransactionID
        )


        const objectID = await this.orderRepository.insertOrder(order)
        return objectID.toString("hex")
    }

    async getAllOrders() {
        return await this.orderRepository.findAll()
    }

    /**
     * 
     * @param {string} orderID 
     * @param {"accepted" | "rejected"} status
     */
    async updateVerificationStatus(orderID, status) {
        const result = await this.orderRepository.updateVerificationStatusByID(orderID, status)
        return result
    }
}

export const orderService = new OrderService()
