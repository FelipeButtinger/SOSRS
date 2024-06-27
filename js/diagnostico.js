document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFinalizar').addEventListener('click', checarBoxes);
});//adiciona a função ao clique do botão, função que seleciona todas as checkboxes marcadas e as une em uma array.

function checarBoxes() {
   
    const boxesMarcadas = document.querySelectorAll('input[type="checkbox"]:checked');//seleciona todas os elementos input com o tipo checkbox
    
   
    const sintomas = [];
    
   
    boxesMarcadas.forEach((checkbox) => {//para cada checkbox selecionada, vai ser feito a ação do push, inserindo na array
        sintomas.push(checkbox.value);
    });

    
    console.log(sintomas);//teste apenas

   
    console.log('Os sintomas marcados são: ' + sintomas.join(', '));
    const textinho = document.createElement('h3');
    textinho.textContent = 'Finalizado';//teste que fiz de inserção de um novo elemento

    
    const resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.appendChild(textinho);
}
