import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

import { TextInputMask } from "react-native-masked-text";

export default function SignIn() {
  const [nome, setNome] = useState(null);
  const [data_nasc, setData_nasc] = useState(null);
  const [rg, setRg] = useState(null);
  const [cpf, setCpf] = useState(null);
  const cpfRef = useRef(null);
  const [telefone, setTelefone] = useState(null);
  const [celular, setCelular] = useState(null);

  const [cep, setCep] = useState(null);
  const [cepEscolhido, setCepEscolhido] = useState("");
  const [bairro, setBairro] = useState(null);
  const [logradouro, setLogradouro] = useState(null);
  const [localidade, setLocalidade] = useState(null);
  const [numero, setNumero] = useState(null);

  const [empresa, setEmpresa] = useState(null);
  const [cep2, setCep2] = useState(null);
  const [cepEscolhido2, setCepEscolhido2] = useState("");
  const [bairro2, setBairro2] = useState(null);
  const [logradouro2, setLogradouro2] = useState(null);
  const [localidade2, setLocalidade2] = useState(null);
  const [numero2, setNumero2] = useState(null);

  const getCepData = () => {
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((json) => {
        const cep2 = {
          bairro: json.bairro,
          logradouro: json.logradouro,
          localidade: json.localidade,
        };

        setCepEscolhido(cep2);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados do Cep");
      });
  };

  const getCepData2 = () => {
    const endpoint = `https://viacep.com.br/ws/${cep2}/json/`;

    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((json) => {
        const cep3 = {
          bairro: json.bairro,
          logradouro: json.logradouro,
          localidade: json.localidade,
        };

        setCepEscolhido2(cep3);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados do Cep");
      });
  };

  const navigation = useNavigation();

  const handleSignIn = () => {
    if (
      nome === null ||
      data_nasc === null ||
      celular === null ||
      cpf === null ||
      rg === null ||
      cep === null ||
      numero === null ||
      empresa === null ||
      cep2 === null ||
      numero2 === null
    ) {
      Alert.alert("Preencha Tudo !!!");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        body:
          `nome=` +
          nome +
          `&data_nasc=` +
          data_nasc +
          `&rg=` +
          rg +
          `&cpf=` +
          cpf +
          `&tel=` +
          telefone +
          `&cel=` +
          celular +
          `&cep_cli=` +
          cep +
          `&num_cli=` +
          numero +
          `&rua_cli=` +
          cepEscolhido.logradouro +
          `&bairro_cli=` +
          cepEscolhido.bairro +
          `&cidade_cli=` +
          cepEscolhido.localidade +
          `&empresa=` +
          empresa +
          `&cep_empr=` +
          cep2 +
          `&num_empr=` +
          numero2 +
          `&rua_empr=` +
          cepEscolhido2.logradouro +
          `&bairro_empr=` +
          cepEscolhido2.bairro +
          `&cidade_empr=` +
          cepEscolhido2.localidade +
          `&`,
      };

      fetch("http://10.0.2.2:3000/api/atoiga_insert", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      navigation.navigate("Clientes");
      Alert.alert("Cadastrado");
    }
  };

  function showCpf() {
    const cpfIsValid = cpfRef?.current.isValid();

    if (cpfIsValid === true) {
      alert("Verdadeiro");
    } else {
      alert("Falso");
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.Text style={styles.tittle} animation="fadeInLeft" delay={500}>
        Cadastro
      </Animatable.Text>

      <ScrollView>
        <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
          {/* pessoais */}
          <Text style={styles.tittle2}>Informações pessoais</Text>

          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Nome"
          />

          <TextInputMask
            type={"datetime"}
            style={styles.input}
            onChangeText={(text) => setData_nasc(text)}
            value={data_nasc}
            placeholder="Data de Nascimento"
            options={{
              format: "DD/MM/YYYY",
            }}
          />

          <TextInputMask
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setCelular(text)}
            value={celular}
            placeholder="Celular"
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: "true",
              dddMask: "(99) ",
            }}
          />

          <TextInputMask
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setTelefone(text)}
            value={telefone}
            placeholder="Telefone"
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: "true",
              dddMask: "(99) ",
            }}
          />

          <TextInputMask
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
            placeholder="CPF"
            type={"cpf"}
            ref={cpfRef}
          />

          <TouchableOpacity style={styles.button} onPress={showCpf}>
            <Text style={styles.buttonTxt}>Validar CPF</Text>
          </TouchableOpacity>

          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setRg}
            value={rg}
            placeholder="RG"
          />

          {/* endereço */}
          <Text style={styles.tittle2}>Endereço</Text>

          <TextInputMask
            keyboardType="numeric"
            style={styles.input}
            onBlur={getCepData}
            onChangeText={(text) => {
              setCep(text);
            }}
            value={cep}
            placeholder="CEP"
            type={"zip-code"}
          />

          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setNumero}
            value={numero}
            placeholder="Número"
          />

          {cepEscolhido != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setLogradouro}
              value={cepEscolhido.logradouro}
              placeholder="Rua"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setLogradouro}
              value={cepEscolhido}
              placeholder="Rua"
            />
          )}

          {cepEscolhido != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setBairro}
              value={cepEscolhido.bairro}
              placeholder="Bairro"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setBairro}
              value={cepEscolhido}
              placeholder="Bairro"
            />
          )}

          {cepEscolhido != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setLocalidade}
              value={cepEscolhido.localidade}
              placeholder="Cidade"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setLocalidade}
              value={cepEscolhido}
              placeholder="Cidade"
            />
          )}

          {/* endereço empresa */}
          <Text style={styles.tittle2}>Endereço empresa</Text>

          <TextInput
            style={styles.input}
            onChangeText={setEmpresa}
            value={empresa}
            placeholder="Empresa"
          />

          <TextInputMask
            keyboardType="numeric"
            style={styles.input}
            onBlur={getCepData2}
            onChangeText={(text) => {
              setCep2(text);
            }}
            value={cep2}
            placeholder="CEP"
            type={"zip-code"}
          />

          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setNumero2}
            value={numero2}
            placeholder="Número"
          />

          {cepEscolhido2 != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setLogradouro2}
              value={cepEscolhido2.logradouro}
              placeholder="Rua"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setLogradouro2}
              value={cepEscolhido2}
              placeholder="Rua"
            />
          )}

          {cepEscolhido2 != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setBairro2}
              value={cepEscolhido2.bairro}
              placeholder="Bairro"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setBairro2}
              value={cepEscolhido2}
              placeholder="Bairro"
            />
          )}

          {cepEscolhido2 != null ? (
            <TextInput
              style={styles.input}
              onChangeText={setLocalidade2}
              value={cepEscolhido2.localidade}
              placeholder="Cidade"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={setLocalidade2}
              value={cepEscolhido2}
              placeholder="Cidade"
            />
          )}

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonTxt}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    marginTop: 28,
  },
  tittle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: "5%",
    color: "#FFF",
  },
  containerForm: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 4,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonTxt: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 8,
  },
  tittle2: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  btnCpf: {},
});
