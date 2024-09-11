import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Home/Header';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category); // Update the selected category
  };

  const handleAddToList = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveFromList = (itemToRemove) => {
    setSelectedItems(selectedItems.filter(item => item !== itemToRemove));
  };

  const renderItems = () => {
    if (selectedCategory === 'Snacks') {
      return (
        <View style={styles.itemsContainer}>
          {['Piatos', 'Boy Bawang', 'V-Cut'].map((item, index) => (
            <View key={index} style={styles.itemBox}>
              <Text>{item}</Text>
              <Button title="Add to List" onPress={() => handleAddToList(item)} />
            </View>
          ))}
        </View>
      );
    } else if (selectedCategory === 'Drinks') {
      return (
        <View style={styles.itemsContainer}>
          {['Coke', 'Sprite', 'Coffee'].map((item, index) => (
            <View key={index} style={styles.itemBox}>
              <Text>{item}</Text>
              <Button title="Add to List" onPress={() => handleAddToList(item)} />
            </View>
          ))}
        </View>
      );
    } else if (selectedCategory === 'Dairy') {
      return (
        <View style={styles.itemsContainer}>
          {['Milk', 'Cheese', 'Yogurt'].map((item, index) => (
            <View key={index} style={styles.itemBox}>
              <Text>{item}</Text>
              <Button title="Add to List" onPress={() => handleAddToList(item)} />
            </View>
          ))}
        </View>
      );
    } else {
      return <Text>Select a category to see the items.</Text>;
    }
  };

  const getBoxStyle = (category) => {
    return [
      styles.box,
      { backgroundColor: selectedCategory === category ? '#add8e6' : '#e0e0e0' },
    ];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity style={getBoxStyle('Snacks')} onPress={() => handleCategoryPress('Snacks')}>
          <Text>Snacks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={getBoxStyle('Drinks')} onPress={() => handleCategoryPress('Drinks')}>
          <Text>Drinks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={getBoxStyle('Dairy')} onPress={() => handleCategoryPress('Dairy')}>
          <Text>Dairy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemsContainer}>
        {renderItems()}
      </View>

      <View style={styles.selectedItemsContainer}>
        <Text>Selected Items:</Text>
        {selectedItems.length === 0 ? (
          <Text>No items selected.</Text>
        ) : (
          selectedItems.map((item, index) => (
            <View key={index} style={styles.selectedItemContainer}>
              <Text style={styles.selectedItem}>{item}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFromList(item)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 20,
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  itemsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemBox: {
    width: 150,
    height: 100,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  selectedItemsContainer: {
    marginTop: 30,
  },
  selectedItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedItem: {
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
});
