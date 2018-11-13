import React from "react";
import { Text, StyleSheet, View, SafeAreaView, StatusBar, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, ActivityIndicator } from "react-native";
import { api } from "../../services/api";

export default class ProfileCreationScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let propsProfile;

    if (this.props.navigation.state.params && this.props.navigation.state.params.user) {
      propsProfile = {
        name: this.props.navigation.state.params.user.displayName
      }
    }

    this.state = {
      profile: propsProfile || {
        name: "",
        username: ""
      },
      loading: false
    };
  }

  submit = async() => {
    this.setState({ loading: true });

    try {
      await api.put("profiles/self", this.state.profile);

      this.props.navigation.navigate("TabsNavigator");
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  }

  render() {
      return (
        <SafeAreaView>
          <StatusBar barStyle="dark-content"/>
          <View style={styles.page.container.view}>
            <Text style={styles.page.header.viewTitle}>Profile</Text>
            <Text style={styles.page.header.viewSubtitle}>You're almost ready to start using Habla, {this.state.profile.name}! Let's create your public profile.</Text>
            <TextInput style={styles.page.profileForm.textInput}
                       placeholder="Name"
                       value={this.state.profile.name}
                       onChangeText={text => this.setState({ profile: { ...this.state.profile, name: text }})}
                       underlineColorAndroid="rgba(0, 0, 0, 0)"
                       editable={!this.state.loading}/>       
            <TextInput style={styles.page.profileForm.textInput}
                       placeholder="Username"
                       value={this.state.profile.username}
                       onChangeText={text => this.setState({ profile: { ...this.state.profile, username: text }})}
                       underlineColorAndroid="rgba(0, 0, 0, 0)"
                       autoCapitalize="none"
                       keyboardType="twitter"
                       editable={!this.state.loading}/>
              <TouchableOpacity style={styles.page.profileForm.submitButton}
                                onPress={this.submit}
                                disabled={this.state.loading}
                                activeOpacity={1}>
                {this.state.loading? 
                    (<ActivityIndicator color="white"
                                        size="small"/>)
                  : (<Text style={styles.page.profileForm.submitButtonText}>Next</Text>) }
                </TouchableOpacity> 
          </View>
        </SafeAreaView>
      );
  }
}


const styles = {
  page: {
    container: StyleSheet.create({
      view: {
        padding: 16
      }
    }),
    header: StyleSheet.create({
      viewTitle: {
        fontSize: 35,
        fontWeight: "bold"
      },
      viewSubtitle: {
        fontSize: 20
      }
    }),
    profileForm: StyleSheet.create({
      textInput: {
        width: "100%",
        fontSize: 20,
        marginTop: 5,
        paddingVertical: 14,
      },
      submitButton: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        backgroundColor: "#795548",
        width: '100%',
        borderRadius: 5,
        alignItems: "center"
      },
      submitButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    })
  }
};