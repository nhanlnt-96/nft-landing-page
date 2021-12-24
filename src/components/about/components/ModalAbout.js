import {Button, Modal} from "antd";

export const ModalAbout = ({text, modalVisible, setModalVisible}) => {
  return (
    <Modal
      title="CONTINUITY OF ABOUT US"
      centered
      visible={modalVisible}
      footer={[
        <Button style={{fontFamily: 'TTOctoSquaresMedium, sans-serif'}} key="submit" type="primary" onClick={() => setModalVisible(false)}>
          OK
        </Button>
      ]}
    >
      {
        text.map((val, index) => (
          <p style={{fontSize: '1rem',fontFamily: 'TTOctoSquaresRegular, sans-serif',lineHeight: '2rem'}} key={index}>{val}</p>
        ))
      }
    </Modal>
  )
}