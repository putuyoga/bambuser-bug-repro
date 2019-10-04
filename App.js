import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNBambuserPlayer from 'react-native-bambuser-player';

const bambuser = {
  appId: '7aUfeuY5h5AMAs1bbMQARQ',
  resourceUri: [
    'https://cdn.bambuser.net/broadcasts/792bbe65-8615-4c87-9f06-373f3063a0d5?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1570167833&da_static=1&da_ttl=0&da_signature=fb4e1d8693baacef9cab890baef2b53071ca1162bc6261e70c047fd57d6d9f53',
    'https://cdn.bambuser.net/broadcasts/289a62db-30e4-4cb4-af61-c7a52e253ec4?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1570167444&da_static=1&da_ttl=0&da_signature=5d38803a2d3ba592ebe190dd31bae10081caab71392cb57cce566557c183cf49'
  ],
  scale: RNBambuserPlayer.VIDEO_SCALE_MODE.ASPECT_FILL
};

const App = () => {
  const ref = React.useRef();
  const ref2 = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
    if (ref2.current) {
      ref2.current.play();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <RNBambuserPlayer
          videoScaleMode={bambuser.scale}
          style={styles.player}
          ref={ref}
          resourceUri={bambuser.resourceUri[0]}
          applicationId={bambuser.appId}
          volume={100}
        />
      </View>
      <View style={styles.playerContainer}>
        <RNBambuserPlayer
          videoScaleMode={bambuser.scale}
          style={styles.player}
          ref={ref2}
          resourceUri={bambuser.resourceUri[1]}
          applicationId={bambuser.appId}
          volume={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#ECECEC',
    marginVertical: 15
  },
  player: {
    flex: 1
  }
});

export default App;
