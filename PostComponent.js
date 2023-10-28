import React from 'react';
import { View, Button } from 'react-native';

class PostComponent extends React.Component {
  sendPostRequest = () => {
    const { name, URL, enrollment } = this.props;

    const postData = {
      name: name,
      enrollment: enrollment
      // Add other data properties if needed
    };

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('POST request successful:', data);
        alert("Success, attendance was sent. You cannot send another request for the next 30 seconds.")
        // Handle the response data here if needed
      })
      .catch(error => {
        console.error('Error sending attendance:', error);
        alert("Error, attendance was not sent. Please try again.");
        // Handle error if the request fails
      });
  };

  render() {
    return (
      <View>
        <Button title="Send Attendance" onPress={this.sendPostRequest} />
      </View>
    );
  }
}

export default PostComponent;
