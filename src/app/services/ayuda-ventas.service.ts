import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AyudaVentasService {

  itemsAyuda = [
    {
      id: 1,
      descripcion: "Pídele que firme el formulario con la autorización de consulta en centrales de riesgo, ya que necesitamos saber su comportamiento en el sistema financiero. El formulario es el siguiente:",
      imagen: "ayudaUno.png"
    },
    {
      id: 2,
      descripcion: "Haz Clic en el botón iniciar solicitud una vez simules la cuota de tu paciente de la siguiente manera:",
      imagen: "ayudaDos.png"
    },
    {
      id: 3,
      descripcion: "Ahora, ingresa tus credenciales en el sitio WEB de Experian:",
      imagen: "ayudaTres.png"
    },
    {
      id: 4,
      descripcion: "Cuando Ingreses ve a “Mis Productos” y selecciona Dictum:",
      imagen: "ayudaCuatro.png"
    },
    {
      id: 5,
      descripcion: "Una vez seleccionado “Dictum” ingresa el tipo de documento, el número y el apellido de tu paciente, luego, haz clic en consultar:",
      imagen: "ayudaCinco.png"
    },
    {
      id: 6,
      descripcion: "Ahora diligencia los datos económicos de tu paciente:",
      imagen: "ayudaSeis.png"
    },
    {
      id: 7,
      descripcion: "Listo! Si tu paciente es “Aprobado” obtendrás una pantalla como la siguiente",
      imagen: "ayudaSiete.png"
    },
    {
      id: 8,
      descripcion: "Tu paciente también puede ser rechazado y deberás informarle únicamente la decisión",
      imagen: "ayudaOcho.png"
    },
    {
      id: 9,
      descripcion: "Si tu paciente es aprobado, debes pedirle que diligencie los siguientes documentos",
      imagen: "ayudaNueve.png"
    }
  ];
  tipsVentas = [
    {
    id: 1,
    titulo: "Sencillo",
    descripcion: "Aprobación inmediata. Obtén una decisión crediticia en instantes, sin papeleo.",
    imagen: "tipUno.png" 
    },
    {
    id: 2,
    titulo: "Personal",
    descripcion: "Plazos convenientes y amplia financiación de acuerdo a las necesidades de tu cliente.",
    imagen: "tipDos.png" 
    },
    {
    id: 3,
    titulo: "Justo",
    descripcion: "Baja tasa de interés a término fijo, contamos con una amplia red de puntos de pago.",
    imagen: "tipTres.png" 
    }
  ];

  constructor() { }
}
