export default function ListaTarefas() {
    const tarefas = ['Comprar café', 'Estudar React', 'Fazer exercícios']
    
    return (
        <>
            <h2>Lista de Tarefas</h2>
            <ol>
                {tarefas.map((tarefa, indice) => <li key={indice}>{tarefa}</li>)}
            </ol>
        </>
    )
}