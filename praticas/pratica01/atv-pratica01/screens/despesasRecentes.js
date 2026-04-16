import { useContext } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';
import { DespesasContext } from '../store/despesasContext';
import { View, Text, StyleSheet } from 'react-native';

function DespesasRecentes() {
    const despesasCtx = useContext(DespesasContext);

    const hoje = new Date();
    const seteDiasAtras = new Date();
    seteDiasAtras.setDate(hoje.getDate() - 7);

    const despesasRecentes = despesasCtx.despesas.filter(despesa => {
        return despesa.data >= seteDiasAtras && despesa.data <= hoje;
    });

    if (despesasRecentes.length === 0) {
        return (
            <View style={styles.vazio}>
                <Text style={styles.vazioTexto}>Nenhuma despesa nos últimos 7 dias.</Text>
            </View>
        );
    }

    return (
        <DespesaSaida despesas={despesasRecentes} periodo={'Últimos 7 dias'} />
    );
}

const styles = StyleSheet.create({
    vazio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vazioTexto: {
        color: '#888',
        fontSize: 16,
    },
});

export default DespesasRecentes;
