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
     * 
     * @param {FormData} orderDetails 
     */
    async registerOrder(orderDetails) {
        const name = orderDetails.get("name").toString()
        const phoneNumber = orderDetails.get("PhNumber").toString()
        const college = orderDetails.get("college").toString()
        const department = orderDetails.get("department").toString()
        const year = orderDetails.get("year").toString()
        const nameOnShirt = orderDetails.get("nameOnTshirt").toString()
        const size = orderDetails.get("size").toString()
        const paymentMode = orderDetails.get("payment").toString()

        const order = new Order(name, phoneNumber, college, department, year, nameOnShirt, size, paymentMode)
        const objectID = await this.orderRepository.insertOrder(order)
        return objectID.toString("hex")
    }

    async getAllOrders() {
        return await this.orderRepository.findAll()
    }
}

export const orderService = new OrderService()
