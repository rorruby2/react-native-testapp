import React from "react";
import { ViewPagerAndroid, StyleSheet } from "react-native";
import ViewPagerItem from './viewPagerItem';

export default class ViewPager extends React.Component {

    itemCount = 0;
    state={
        index: 0
    }
    constructor(props){
        super(props);
        itemCount = props.data.length;
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                index: 1
            }, () => {
                this.viewPager.setPage(this.state.index);
            });
            setInterval(()=>{
                this.setState({
                    index: (this.state.index == itemCount-1 ? 0 : this.state.index+1)
                }, () => {
                    this.viewPager.setPage(this.state.index);
                });
            }, 3000);
        }, 3000);    
    }

    render(){
        return (
            <ViewPagerAndroid ref={(viewPager) => {this.viewPager = viewPager}} style={styles.viewStyle} initialPage={0} >
                { this.returnItems() }
            </ViewPagerAndroid>
        );
    }

    returnItems(){
        var items = [];
        this.props.data.forEach((element, i) => {
            items.push (<ViewPagerItem key={i} image_url={element.image} name={element.name} navigation={this.props.navigation}/>);
        });
        return items;
    }
}
const styles = StyleSheet.create({
    viewStyle: {
       flex: 1,
       justifyContent: 'center',
       alignContent: 'center'
    },
});
