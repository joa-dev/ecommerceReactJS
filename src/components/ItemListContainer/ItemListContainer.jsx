import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./ItemListContainer.css";

const MySwal = withReactContent(Swal)

export const ItemListContainer = () => {
  let timerInterval
  Swal.fire({
    title: 'Bienvenido!',
    html: 'Me cerarré en <b></b> milisegundos.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  })
  return (
    <p></p>
  )
}