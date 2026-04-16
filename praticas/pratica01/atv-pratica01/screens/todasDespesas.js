import { Text } from 'react-native';
import DespesaSaida from '../components/despesa/DespesaSaida';

function DespesasRecentes() {
    function filtrarUltimos7Dias() {
        const hoje = new Date();
        const seteDiasAtras = new Date();
        seteDiasAtras.setDate(hoje.getDate() - 7);

        return despesas.filter(despesa => {
            return despesa.data >= seteDiasAtras && despesa.data <= hoje;
        })
    }
}

function TodasDespesas() {

    const DUMMY_DESPESAS = [
        {
            id: '1',
            descricao: 'conta de luz',
            valor: 100.99,
            data: new Date(2026, 2, 25)
        },
        {
            id: '2',
            descricao: 'conta de agua',
            valor: 40.99,
            data: new Date(2026, 2, 24)
        }
    ]
    return (
        <DespesaSaida despesas={filtrarUltimos7Dias(DUMMY_DESPESAS)} periodo={'Ultimos 7 dias'} />
    );
}

export default TodasDespesas;

