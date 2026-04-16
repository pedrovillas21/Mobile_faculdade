import { useContext } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';
import { DespesasContext } from '../store/despesasContext';
import { View, Text, StyleSheet } from 'react-native';

function TodasDespesas() {
    const despesasCtx = useContext(DespesasContext);

    if (despesasCtx.despesas.length === 0) {
        return (
            <View style={styles.vazio}>
                <Text style={styles.vazioTexto}>Nenhuma despesa cadastrada.</Text>
            </View>
        );
    }

    return (
        <DespesaSaida despesas={despesasCtx.despesas} periodo={'Total'} />
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

export default TodasDespesas;
