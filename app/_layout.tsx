import { Home } from '@/src/screens/home/Home';
import { store } from '@/src/store';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import 'expo-router/entry';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

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