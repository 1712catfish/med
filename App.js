import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Table from './src/components/Table'
import { list, colNames } from './src/test'

export default function App() {
    return (
      <Table list={list} colNames={colNames} />
    );
}
