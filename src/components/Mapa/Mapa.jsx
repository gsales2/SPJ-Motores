import './Mapa.css'

export function Mapa() {
    return (
        <section className="mapa">
            <div className="container-mapa">
                <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.6729933096167!2d-45.957509699999996!3d-23.291328899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb3e5c1c7ba3%3A0xf19b7af001663ce3!2sSPJ%20Motores%20El%C3%A9tricos!5e0!3m2!1spt-BR!2sbr!4v1774533574372!5m2!1spt-BR!2sbr'
                className="google-map"
                allowFullScreen=""
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Localização SPJ Motores'
                ></iframe>
            </div>
        </section>
    )
}