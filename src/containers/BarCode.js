import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

class BarCode extends Component {

  state = {
    barcodes: [],
    shouldReadBarCode: true,
    barcodeData: null,
  }

  onBarCodeRead(scanResult) {
    console.log('scannedData', scanResult)
    if (scanResult.data != null) {
      this.setState({shouldReadBarCode: false, barcodeData: scanResult.data});
    }
    return;
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.shouldReadBarCode && this.state.barcodeData != null ?
          <View style={{flex: 1, backgroundColor: "#e4e6e8", alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>QR Code Scanned</Text>
            <Text style={{fontSize: 16}}>Value: {this.state.barcodeData}</Text>
          </View>
          :
          <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              mirrorImage={false}
              onBarCodeRead={this.state.shouldReadBarCode ? this.onBarCodeRead.bind(this) : null}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.auto}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              style={styles.preview}>
              <BarcodeMask width={300} height={300} showAnimatedLine={false} transparency={0.8}/>
            </RNCamera>
            <View style={[styles.overlay, styles.topOverlay]}>
              <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
            </View>
          </View>
        }
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default BarCode;