import { Text, View, Pressable, StyleSheet } from "react-native";

function getDataFormatada(data) {
    return data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();
}
function DespesaItem({ item }) {

    return (
        <Pressable>
            <View style={styles.itemContainer}>
                <View style={styles.itemText}>
                    <Text>{getDataFormatada(item.data)}</Text>
                </View>
                <View style={styles.itemText}>
                    <Text>{item.descricao}</Text>
                </View>
                <View style={styles.itemText}>
                    <Text>{item.valor}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
    },
    itemText: {
        padding: 2,
        marginHorizontal: 2,
        flex: 1,
        marginVertical: 2,
        alignContent: 'left',
    },

})

export default DespesaItem;