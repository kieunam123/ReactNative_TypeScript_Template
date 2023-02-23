import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DashboardScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>chức năng đang được bảo trì</Text>
		</View>
	)
}

export default DashboardScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		fontFamily: 'RobotoBold',
		fontSize: 25,
	}
})