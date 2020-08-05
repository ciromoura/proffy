import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1019613231344734211/w_IiB8iD_400x400.jpg" alt="Ciro Moura" />
                <div>
                    <strong>Ciro Moura</strong>
                    <span>Banco de Dados</span>
                </div>
            </header>
            <p>
                asdasdasdasd asd asd asd
                <br />
                <br />
                asdadasdasdas
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;