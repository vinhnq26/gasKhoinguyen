import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyPopup = ({ show, setShow, price, title }) => {
  const handleClose = () => setShow(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const form = useRef();
  const notify = () =>
    toast.success(
      "Đặt hàng thành công . Chúng tôi sẽ liên hệ và xác nhận đơn hàng . Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi ."
    );
  const notiError = () =>
    toast.error("🦄 Lỗi đặt hàng , Xin thử lại!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_56ponje",
        "template_wo5zpyt",
        form?.current,
        "P_OGJ56eorjovyNbb"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
          notiError();
        }
      );
    setShow(false);
    // e.target.reset();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
    }

    setValidated(true);
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Đặt Hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            ref={form}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Họ và Tên</Form.Label>
              <Form.Control
                required={true}
                type="text"
                placeholder="Nhập tên của bạn"
                name="name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                required={true}
                name="address"
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                required={true}
                type="number"
                name="phone"
                placeholder="Nhập số điện thoại của bạn"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                readOnly={true}
                type="text"
                name="titlesp"
                defaultValue={title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Gía</Form.Label>
              <Form.Control
                readOnly={true}
                type="text"
                name="pricesp"
                defaultValue={price}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button
                type="submit"
                variant="primary"
                // onClick={(e) => sendEmail(e)}
              >
                Đặt hàng
              </Button>
            </Modal.Footer>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MyPopup;
