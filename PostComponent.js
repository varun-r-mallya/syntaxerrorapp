//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
import React from 'react';
import { View, Button } from 'react-native';

class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canPressButton: true
    };
  }
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
  sendPostRequest = () => {
    const { name, URL, enrollment } = this.props;

    const postData = {
      name: name,
      enrollment: enrollment
      // Add other data properties if needed
    };

    const handleButtonPress = () => {
      // Logic to handle the button press event
      console.log('Scanned Data:', URL);
      if (URL === "WrongValue") {
        alert("Wrong QR, Scan again!");
      } else {
        if (URL === null) {
          alert("Please scan QR code first");
        } else {
          //alert("Scanned");
          this.makePostRequest(postData);
          
        }
      }
    };
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
    const buttonTimeSelect = () => {
      if (this.state.canPressButton) {
        handleButtonPress();
      } else {
        alert("Please wait for 30 seconds to send your attendance again");
      }
    };

    buttonTimeSelect(); // This executes the logic immediately when the component renders
  };

  setCanPressButton = (value) => {
    this.setState({ canPressButton: value });
  };

  makePostRequest = (postData) => {
    fetch(this.props.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('POST request successful:', data);
        alert("Success, attendance was sent. You cannot send another request for the next 30 seconds.");
        this.setCanPressButton(false);
          setTimeout(() => {
            this.setCanPressButton(true);
          }, 30000); // 30000 milliseconds = 30 seconds
          
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
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
export default PostComponent;
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering