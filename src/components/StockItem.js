import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/StockItemStyle';
import { LineChart } from 'react-native-chart-kit'; 


const StockItem = ({ no, name, price, rate }) => {

  const [selected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const chartData = {
    labels: ["9", "12", "14", "15",  "16", "18"],
    datasets: [
      {
        data: [50, 45, 49, 60, 70, 65, 80]
      }
    ]
  };

  const screenWidth = Dimensions.get('window').width;


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.leftContainer}>
        <Text style={styles.no}>{no}</Text>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={[styles.text, rate.startsWith('+') ? styles.redText : styles.blueText]}>
          {rate}
        </Text>
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Icon
            name={selected ? 'heart' : 'heart-o'}
            size={20}
            color={selected ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{name}</Text>
            <LineChart
              data={chartData}
              width={screenWidth * 0.6} // 너비
              height={180} // 높이
              withDots = {false}
              
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default StockItem;