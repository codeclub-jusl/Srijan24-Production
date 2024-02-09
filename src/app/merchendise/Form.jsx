import "./merchendise.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { IoSchool } from "react-icons/io5";
import { MdHotelClass } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { BiSolidTShirt } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
export default function Form(props)
{
    return <form id="formData" onSubmit={props.handleSubmit}>
        <div className="formComponents">
            <FaUserCircle size={27} />
            <input type="text" name="name" placeholder="Enter Name"/>
        </div>
        <div className="formComponents">
            <MdEmail size={27} />
            <input type="email" name="email" placeholder="Enter Email"/>
        </div>
        <div className="formComponents">
            <FaSquarePhone size={27} />
            <input type="number" name="PhNumber" placeholder="Enter Phone No."/>
        </div>
        <div className="formComponents">
            <IoSchool size={27} />
            <input type="text" name="college" placeholder="Enter College" value="Jadavpur University" disabled/>
        </div>
        <div className="formComponents">
            <GrSchedules size={27} />
            <input type="text" name="department" placeholder="Enter Department"/>
        </div>
        <div className="formComponents">
            <MdHotelClass size={27} />
            <select className="formDropdown" name="year" defaultValue={'none'}>
                <option value="none" disabled hidden>Select Year</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
            </select>
        </div>
        {/* <div className="formComponents">
            <input type="number" name="roll" placeholder="Enter Roll No."/>
        </div> */}
        <div className="formComponents">
            <MdDriveFileRenameOutline size={27} />
            <input type="text" name="nameOnTshirt" placeholder="Enter Name to be printed on Tshirt"/>
        </div>
        <div className="formComponents">
            <IoColorPalette size={27} />
            <select className="formDropdown" name="colour" defaultValue={'none'}>
                <option value="none" disabled hidden>Select Colour</option>
                <option value="black">Black</option>
            </select>
        </div>
        <div className="formComponents">
            <BiSolidTShirt size={27} />
            <select className="formDropdown" name="size" defaultValue={'none'}>
                <option value="none" disabled hidden>Select Size</option>
                <option value="S">S(38)</option>
                <option value="M">M(40)</option>
                <option value="L">L(42)</option>
                <option value="XL">XL(44)</option>
                <option value="XXL">XXL(46)</option>
                <option value="XXXL">XXXL(48)</option>
            </select>
        </div>
        <div className="formComponents">
            <GiMoneyStack size={27} />
            <select className="formDropdown" name="payment" defaultValue={'none'}>
                <option value="none" disabled hidden>Select Payment Mode</option>
                <option value="upi">UPI</option>
            </select>
        </div>
        <div className="formComponents" id="submitForm">
            <button id="submitOrder" className="formButtons" style={{backgroundColor : "orangered"}} type="submit">Submit</button>
            <button id="close" className="formButtons" onClick={props.toggleModal}>Close</button>
        </div>
    </form>
}