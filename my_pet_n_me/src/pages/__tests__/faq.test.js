/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FAQ from '../FAQ'



/**
* @jest-enviroment jsdom
*/
describe('Login component Testings', () => {
    
    test('Testing Render login', () => {
        // const funExample = () => {}
        // const vetExample = {
        //     'name':'hola', 'email':'elcorreo', 'phone':'7777-7777',
        //     'direction':{'city':'laciudad', 'zone':'51', 'address':'desconocido'}
        // }
        render(<FAQ />)
        const infoElement = screen.getByTestId('faq-test')
        expect(infoElement).toBeInTheDocument()
        expect(infoElement).toHaveTextContent('Preguntas Frecuentes1. ¿Cómo debo usar la página en caso de una emergencia?En caso de una emergencia, debe seleccionar el botón rojo titulado [Emergencia] en la parte de arriba y seleccionar en el mapa la veterinaria que prefiera y tenga en cercanía. 2. ¿Qué acciones puedo realizar en MyPet&Me?En MyPet&Me puede actuar rápido frente a una emergencia, poniendolo en camino a una veterinaria en tan solo un par de clicks, puede filtrar veterinarias según el tipo que requiera, la cercanía y/o servicios que solicte, iniciar sesión para llevar un control sobre sus mascotas, registrar su veterinaria, entre otras cosas. 3. Qué veterinarias encontraré en este sitio?En MyPet&Me encontrará veterinarias generales, clínicas veterinarias, petshops y hospitales veterinarios de la mejor calidad de Guatemala ordenados por disponibilidad y cercanía.4. ¿Cómo puedo contactar con las veterinarias?Seleccionando la veterinaria que desea, encontrará la página oficial, correo electrónico, número de teléfono y redes sociales de su selección, solamente debe hacer click sobre lo que desea.5. ¿Qué debo hacer para registrar mi veterinaria en este sitio?Lo primero que debe hacer es seleccinar el botón titulado [Formulario] en la parte de arriba y llenar los datos que ahí se solicitan. Posterior a esto, estaremos revisando su soicitud y contactandolo por medio de correo electrónico para aceptar su solicitud.6. ¿Cómo realizar una búsqueda en MyPet&Me?Ofrecemos varios filtros para poder encontrar la veterinaria que mejor se adecúa sus necesidades, para empezar, debe seleccinar el botón titulado [Búsqueda] en la parte de arriba, y en la barra de la izquierda seleccionar todos los filtros que apliquen a su búsqueda, es decir, si se trata de una emergencia, el horario de la veterinaria, el tipo y los servicios que desea y seleccinar el botón de Aplicar Filtros. Alternativamente, puede buscar el nombre de la veterinaria en la barra de arriba. Al realizar cualquiera de estas dos acciones, deberá visualizar sus resultados en el cuadro de la derecha separadas en tarjetas. 7. ¿Cómo accedo a información detallada de una veterinaria?Para visualizar más información de una veterinaria, debe seleccionar su tarejta ya sea desde la página de Emergencia o de Búsqueda, esto mostrará un pop-up con la dirección, el correo y el número de teléfono.')
        
    })
})