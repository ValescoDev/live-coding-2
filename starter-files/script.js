// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

//Fetch para hacer una peticion get y retorna un json
const fetchAnswer = () => {
    return fetch('https://yesno.wtf/api')
      .then(response => response.json()) // convierte la respuesta a JSON
      .then(data => data.answer) // extrae la respuesta de los datos JSON
  }
 
//Función displayAnswer que recibe como parámetro la respuesta de la API y la muestra en el elemento del HTML que tiene el id "answer". Luego, establecemos un temporizador de 5 segundos que llama a la función clearAnswer.

  const displayAnswer = answer => {
    const answerElement = document.getElementById('answer')
    answerElement.textContent = answer
    setTimeout(() => {
      clearAnswer()
    }, 5000)
  }

  //Creamos una función clearAnswer que limpia el texto de los elementos del HTML que tienen los id "input" y "answer".
  
  const clearAnswer = () => {
    const questionElement = document.getElementById('input')
    const answerElement = document.getElementById('answer')
    questionElement.value = '' // limpia el campo de entrada
    answerElement.textContent = '' // limpia el texto de la respuesta
  }
  
  //Obtenemos el botón del HTML que tiene el id "button" y agregamos un evento de click. Si el campo de pregunta (id "input") no está vacío, hacemos una llamada a la función fetchAnswer para obtener la respuesta y la mostramos en el HTML usando la función displayAnswer.

  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    const question = document.getElementById('input').value
    if (question) {
      fetchAnswer().then(answer => {
        displayAnswer(answer)
        setTimeout(() => {
          clearAnswer()
        }, 5000)
      })
    }
  })
  
  