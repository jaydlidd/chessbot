import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ChessSquareProps {
  isWhite: boolean;
}

const ChessSquare: React.FC<ChessSquareProps> = ({ isWhite }) => {
  const backgroundColor = isWhite ? 'white' : 'black';
  return (
    <View style={[styles.square, { backgroundColor }]} />
  );
};

const ChessBoard: React.FC = () => {
  const renderSquare = (i: number) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isWhite = (x + y) % 2 === 0;
    return <ChessSquare key={i} isWhite={isWhite} />;
  };

  const squares = [];
  for (let i = 0; i < 8 * 8; i++) {
    squares.push(renderSquare(i));
  }

  return (
    <View style={styles.board}>
      {squares}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chess Board</Text>
      </View>
      <ChessBoard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: '12.5%',
    aspectRatio: 1,
  },
});

export default App;
