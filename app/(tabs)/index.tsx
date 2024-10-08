import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Appcal = () => {
  const [display, setDisplay] = useState<string>("0");
  const handlePress = (value: string) => {
    if (display === "0" || display == "00") {

    } else setDisplay((prevDisplay) => prevDisplay + value);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => setDisplay("0")}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => handlePress("%")}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOp} >
          <Text style={styles.buttonText}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => handlePress("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => handlePress("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => handlePress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOp}
          onPress={() => handlePress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("00")}
        >
          <Text style={styles.buttonText}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonOp, { backgroundColor: "#CCAA66" }]}
          
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "black",
    marginHorizontal: 10,
    color: "white",
  },

  display: {
    margin: 20,
    fontSize: 50,
    color: "white",
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    flex: 1,
    width: 25,
    height: 70,
    borderRadius: 39.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#484848",
    margin: 5,
    padding: 20,
    bottom: 10,
  },
  buttonOp: {
    flex: 1,
    width: 25,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
    margin: 5,
    padding: 20,
    bottom: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },
});

export default Appcal;
