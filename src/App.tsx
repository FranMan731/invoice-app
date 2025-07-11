import 'expo-router/entry';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Home } from './screens/home/Home';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeProvider';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <View style={styles.container}>
                    <StatusBar style="dark" />
                    <Home />
                </View>
            </ThemeProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});