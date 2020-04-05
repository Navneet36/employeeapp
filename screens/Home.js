import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation, route }) => {
	const data = [
		{ id:1, name: "aasd1", position: "web developer" },
		{ id:2, name: "aasd2", position: "web developer" },
		{ id:3, name: "aasd3", position: "web developer" },
		{ id:4, name: "aasd4", position: "web developer" },
		{ id:5, name: "aasd5", position: "web developer" },
		{ id:6, name: "aasd6", position: "web developer" },
		{ id:7, name: "aasd7", position: "web developer" },
		{ id:8, name: "aasd8", position: "web developer" },
		{ id:9, name: "aasd9", position: "web developer" },
		{ id:10, name: "aasd10", position: "web developer" },
		{ id:11, name: "aasd11", position: "web developer" },
		{ id:12, name: "aasd12", position: "web developer" },
		{ id:13, name: "aasd13", position: "web developer" },
	]
	//const renderList = data.map((item)=>{
	//	return (
	//		<Card style={styles.mycard} key={item.id}>
	//			<View style={styles.cardview}>
	//				<Image
	//					style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
	//					source={{ uri: "https://images.unsplash.com/photo-1585573139865-fcc0aff09b88?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60" }}
	//				/>
	//				<View style={styles.textview}>
	//					<Text style={styles.text}>{item.name}</Text>
	//					<Text>{item.position}</Text>
	//				</View>
	//			</View>
	//		</Card>
	//	)
	//})
	const renderList = ((item)=>{
		return (
			<Card style={styles.mycard}>
				<View style={styles.cardview}>
					<Image
						style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
						source={{ uri: "https://images.unsplash.com/photo-1585573139865-fcc0aff09b88?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60" }}
					/>
					<View style={styles.textview}>
						<Text style={styles.text}>{item.name}</Text>
						<Text>{item.position}</Text>
					</View>
				</View>
			</Card>
		)
	})

	return(
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return renderList(item)
				}
				}
				keyExtractor={item => `${item.id}`}
			/>
			<FAB
				style={styles.fab}
				icon="plus"
				theme={{colors:{accent:"#006aff"}}}
				onPress={() => navigation.navigate("Create")}
			/>
		</View>
	)
	
}
const styles = StyleSheet.create({
	mycard:
	{
		margin:5,
		padding:5
	},
	cardview:
	{
		flexDirection:"row",
		padding:6
	},
	text:
	{
		fontSize:18
	},
	textview:
	{
		marginLeft:10
	},
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	}

});

export default Home