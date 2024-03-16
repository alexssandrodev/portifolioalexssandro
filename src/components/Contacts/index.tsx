import './contacts.css';

function Contacts() {
    return ( 
        <section className='contact__container'>
            <h3>Entre em contato comigo.</h3>
            <div className="contact__item">
                <div className="item">
                    <p>Meu whatsapp</p>
                    <h2>(84)99610-2818</h2>
                </div>
                <div className="item">
                    <p>Meu email</p>
                    <h4>alex.vicenteofficial@gmail.com</h4>
                </div>
            </div>
        </section>
     );
}

export default Contacts;
