import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Water} from './Water';
import {Grass} from './Grass';
import {Desert} from './Desert';
import {Hvyforest} from './Hvyforest';
import {Swamp} from './Swamp';
import {Hill} from './Hill';
import {Mountain} from './Mountain';


var testmap =''


function BuildRows(props) {

    const {width,height,rawMapArray} = props
    var rows = []
    for(var i = 0; i < height; i++){
        var rowType =''
        if (i%2 == 0){
            rowType = 'evenrow'
        }
        else{
            rowType = 'oddrow'    
        }
        rows.push(<RenderedRow key={`row_${i} `}rowType={rowType} currentRow={i} {...props}/>)
    }
    return rows
}

function RenderedRow(props) {
    const {rowType, rawMapArray, currentRow} = props  

    return(<div className={rowType}><BuildRow {...props} /></div>)
}


function BuildRow(props) { 
    const {rawMapArray,currentRow,width} = props 
    var tilesArray = []

    for(var index=currentRow*width;index<(currentRow*width)+width;index++){
        let tileType = (rawMapArray[index].tileType)
        let tileComp = buildDiv(tileType,currentRow,index)
        let rowNumber = index
        tilesArray.push(tileComp)}
    return tilesArray
}

function buildDiv(tileType,row,col){
    switch (tileType){
        case 0:
        return (<Water key={`water_${row}_${col}`}/>);
        case 1:
        return (<Grass key={`grass_${row}_${col}`}/>);
        case 2:
        return (<Desert key={`desert_${row}_${col}`}/>);
        case 3:
        return (<Hvyforest key={`hvyforest_${row}_${col}`}/>);
        case 4:
        return (<Hvyforest key={`hvyforest_${row}_${col}`}/>);
        case 5:
        return (<Swamp key={`swamp_${row}_${col}`}/>);
        case 6:
        return (<Hill key={`hill_${row}_${col}`}/>);
        case 7:
        return (<Mountain key={`mountain_${row}_${col}`}/>);
        default:
        return (<Water key={`water_${row}_${col}`}/>);
}}


const mapStateToProps = (state) => {
    return {worldmaps : state.worldmaps}
}

class MapView extends Component {

componentDidMount(){
    const testmap = this.props.worldmaps.mapname;
    console.log(testmap)
}
    render(){       
        if (testmap == null)
        {
            return (
            <div className='btnholder'>
                <div className='menuspacer'></div>
                <div className='bigboxofmaps'>
                <h1>Nothing here</h1>
                </div>
                </div>
            )
        }
        else {
        var tileType = 0
        

        return (
            <div id="container">
            <div className="app">
                        <BuildRows width={this.props.worldmaps.mw } height = {this.props.worldmaps.mh} rawMapArray={this.props.worldmaps.mapfile} />      
                </div>
            </div>
            )
        }
 //}
}};

export default connect(mapStateToProps)(MapView)

