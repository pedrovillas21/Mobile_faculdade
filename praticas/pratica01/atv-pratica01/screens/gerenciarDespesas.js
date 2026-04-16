import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useState, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DespesasContext } from '../store/despesasContext';
import { useNavigation } from '@react-navigation/native';

function GerenciarDespesas() {
    const navigation = useNavigation();
    const despesasCtx = useContext(DespesasContext);

    const [data, setData] = useState(new Date());
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setShowPicker(false);
        setData(currentDate);
    };

    const handleChangeValor = (text) => {
        const cleanText = text.replace(',', '.');
        const match = cleanText.match(/^\d*\.?\d{0,2}$/);
        if (match) {
            setValor(cleanText);
        }
    };

    const handleSalvar = () => {
        if (!descricao.trim()) {
            Alert.alert('Atenção', 'Informe a descrição da despesa.');
            return;
        }
        if (!valor || parseFloat(valor) <= 0) {
            Alert.alert('Atenção', 'Informe um valor válido para a despesa.');
            return;
        }

        despesasCtx.adicionarDespesa({ descricao, valor, data });
        navigation.goBack();
    };

    const handleCancelar = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    maxLength={20}
                    value={descricao}
                    onChangeText={setDescricao}
                    placeholder="Ex: Conta de luz"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Valor da Despesa</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={'decimal-pad'}
                    maxLength={10}
                    value={valor}
                    onChangeText={handleChangeValor}
                    placeholder="0.00"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Data da Despesa</Text>
                <Pressable onPress={() => setShowPicker(true)} style={styles.input}>
                    <Text>{data.toLocaleDateString('pt-BR')}</Text>
                </Pressable>
                {showPicker && (
                    <DateTimePicker
                        value={data}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>

            <View style={styles.botoesContainer}>
                <Pressable style={[styles.botao, styles.botaoCancelar]} onPress={handleCancelar}>
                    <Text style={styles.botaoTextoCancelar}>Cancelar</Text>
                </Pressable>
                <Pressable style={[styles.botao, styles.botaoSalvar]} onPress={handleSalvar}>
                    <Text style={styles.botaoTextoSalvar}>Salvar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default GerenciarDespesas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    inputContainer: {
        marginVertical: 12,
        marginHorizontal: 4,
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        fontSize: 16,
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,
    },
    botao: {
        flex: 1,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 8,
    },
    botaoCancelar: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    botaoSalvar: {
        backgroundColor: '#5c6bc0',
    },
    botaoTextoCancelar: {
        color: '#555',
        fontWeight: 'bold',
    },
    botaoTextoSalvar: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
