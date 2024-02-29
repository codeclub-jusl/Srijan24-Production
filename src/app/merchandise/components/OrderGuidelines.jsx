'use client'

import Image from 'next/image'
import Modal from 'react-modal'
import { TfiHandPointRight } from 'react-icons/tfi'

export default function OrderGuidelines(props) {
    const customEventModalStyles = {
        overlay: {
            background: 'rgba(0,0,0,0.65)',
            zIndex: '100',
        },
    }
    return (
        <Modal
            isOpen={props.visibleInstructionsModal}
            onRequestClose={() => {
                props.setVisibleInstructionsModal(
                    visibleInstructionsModal => !visibleInstructionsModal,
                )
            }}
            className={'instructionsModal'}
            ariaHideApp={false}
            style={customEventModalStyles}
            closeTimeoutMS={700}
        >
            <div>
                <h2>Important Guidelines</h2>
                <div className={'paymentScannerBox'}>
                    <div>
                        <Image
                            src={'/assets/merchandise/adipto_qr.jpg'}
                            height={300}
                            width={300}
                            alt='qr_image'
                            className={'qrScannerImage'}
                            draggable={false}
                            priority={true}
                        />
                        <h4>Adipto Ghosh Dastidar</h4>
                        <h5>adicrown54@okhdfcbank</h5>
                    </div>
                    <div>
                        <Image
                            src={'/assets/merchandise/subhadip_qr.jpg'}
                            height={300}
                            width={300}
                            alt='qr_image'
                            className={'qrScannerImage'}
                            draggable={false}
                            priority={true}
                        />
                        <h4>Subhadip De</h4>
                        <h5>subhadipde.habra@okaxis</h5>
                    </div>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        Enter the name you want to print upon your SRIJAN
                        Merchandise. If you don't want any name printed upon the
                        Tshirt, write "NA"
                    </span>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        If you want to order via Cash, select "CASH" and
                        complete the payment to one of the Payment Collectors
                        within a day
                    </span>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        If you want to make the payment via UPI, please select
                        "UPI" and complete the payment to one of the Payment
                        Collector within a day via <strong>Google Pay</strong>,{' '}
                        <strong>Phone Pe</strong>, <strong>Amazon Pay</strong>,{' '}
                        <strong>Paytm</strong> or <strong>Whatsapp Pay</strong>
                    </span>
                </div>

                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        If you select method: "UPI", 1 more field will be
                        visible where you have to give the Transaction ID. [{' '}
                        <strong>PS:</strong> provide the 12 digit unique numeric
                        number (UTR) e.g. <i>123456789012</i> ]
                    </span>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        Now select Campus where you want to complete your
                        payment and then place your order
                    </span>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        <b>Congrats! Your order has been placed.</b> You can
                        check the order status in your Dashboard
                    </span>
                </div>
                <div className={'instructions'}>
                    <TfiHandPointRight className={'instructionBullets'} />{' '}
                    <span>
                        {' '}
                        For any further queries, reach out to Adipto Ghosh Dastidar [ 6290764395 ] or Subhadip De [ 8584038115 ] anytime
                    </span>
                </div>
                {/* please scan any one of the two QR codes shown above. If you choose 1st one, then at the time  */}

                <div className={'merchandiseUnderstoodButtonBox'}>
                    <button
                        onClick={() =>
                            props.setVisibleInstructionsModal(
                                visibleInstructionsModal =>
                                    !visibleInstructionsModal,
                            )
                        }
                    >
                        Ok, I understand
                    </button>
                </div>
            </div>
        </Modal>
    )
}
