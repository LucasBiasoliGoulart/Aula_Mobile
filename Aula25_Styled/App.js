import { Container, Texto, Botao } from './src/Styles';

export default function App() {
  return (
    <Container>
      <Texto>Hello World</Texto>
      <Botao onPress={funcao}>
        <Texto>Click aqui</Texto>
      </Botao>
    </Container>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
