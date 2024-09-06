import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const BLEDetails = ({ route, navigation }: { route: any, navigation: any }) => {
    const { serviceData, title } = route.params ?? {};

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text style={styles.headerTitle}>{title || 'Details'}</Text>
        });
    }, [navigation, title]);

    if (!serviceData) return <Text style={styles.noDataText}>No data found</Text>;

    const renderItem = ({ item }: { item: any }) => (
        <React.Fragment>
            <View style={styles.characteristicContainer}>
                <Text style={styles.characteristicText}>
                    <Text style={styles.characteristicText}>characteristic:</Text> {item.characteristic}
                </Text>
                <Text style={styles.propertyText}>
                    <Text style={styles.characteristicText}>Read:</Text> {item.properties.Read}
                </Text>
                <Text style={styles.propertyText}>
                    <Text style={styles.characteristicText}>service UUID:</Text> {item.service}
                </Text>
            </View>
        </React.Fragment>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={serviceData?.characteristics}
                keyExtractor={(item: any) => item.characteristic}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.noDataText}>No data found</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    },
    characteristicContainer: {
        padding: 10,
        marginVertical:5,
        backgroundColor:'white',
        borderRadius:10
    },
    characteristicText: {
        color: 'black',
    },
    propertyText: {
        color: 'black',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 4,
    },
    noDataText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default BLEDetails;