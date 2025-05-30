import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import NewGroup from './src/screens/NewGroup';

export default function App() {
  
  const [ fontLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle='light-content' 
          backgroundColor='transparent'
          translucent
        />
        {
          fontLoaded ?
          <NewGroup /> 
          :
          <Loading  />
        }
    </ThemeProvider>
  );
}