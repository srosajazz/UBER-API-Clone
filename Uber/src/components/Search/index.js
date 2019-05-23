import React, { Component } from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Search extends Component {
  //   state = {
  //     searchFocused: false
  //   };

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search your location"
        placeholderTextColor="#333"
        onPress={() => {}}
        query={{
          key: "AIzaSyDfgoOA0qlb-UgTU-wMvcQqGKDZaO5EsXM",
          language: "en"
        }}
        textInputProps={{
          autoCapitalize: "none",
          autoCorrect: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
      />
    );
  }
}
