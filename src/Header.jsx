import { useState } from 'react'
import  BsHouse  from 'react-icons/bs'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top                 :    '50%',
        left                :   '50%',
        right               :  'auto',
        bottom              : 'auto',
        marginRight         : '-50%',
        transform           : 'translate( -50%, -50%)',
        backgroundColor     : '#264656',

    }
};

function refreshPage() {
    window.location.reload(true);
}

Modal.setAppElement('#root');

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return(
       <>
            <div className="title" id='stratShow'>
                <h1> Fun Cat <BsHouse /></h1>
             </div>

             <div id='navbar'>
                <ul>
                    <li href='#'><button className='btn btn-refresh' onClick={refreshPage}>refresh</button></li>
                    <li href='#'><button className='btn' onClick={() => setModalIsOpen(true)}>Info</button></li>
                </ul>
             </div>

             <Modal 
                isOpen={modalIsOpen}
                onRequestClose={ () => setModalIsOpen(false)}
                style={customStyles}>
                    <h1>Welcome To Cat House <BsHouse /> </h1>
                    <h2>Hi, I built this app for cat lovers.</h2>
                    <hr /><hr />
                    <h2>Author: Micheal Oki</h2>
                    <h2>Contact: mikebabs566@gmail.com</h2>
                    <p>Software: ReactJS REST-API</p>
                    <p>Version: 1.0 Jan, 2022</p>
                    <p>Credit Images : api.thecatapi.com</p>
                    <p>p/s :</p>
                    <p>please contact me if you have any suggestion for the app.</p>
                    <p>Do you like to learn reactjs programming, please contact me.</p>
                    <div>
                        <button className='btn' onClick={ () => setModalIsOpen(false)}>close</button>
                    </div>
                
             </Modal>
       </> 
    )
}

export default Header