import React from 'react';
import MG from 'metrics-graphics';

function getMGOptions(props){
	var mgOptions={},x,p;
	for(x=MG_ALLOWED_OPTIONS.length-1;x>=0;x--){
		p=MG_ALLOWED_OPTIONS[x];
		if(props.hasOwnProperty(p)){
			mgOptions[p]=props[p];
		}
	}
	return mgOptions;
}

export default class MetricsGraphics extends React.Component {
	constructor(props){
		super(props);
		this.mgData={};
	}
	componentDidMount(){
		this.mgData=Object.assign(this.mgData,getMGOptions(this.props));
		if(this.mgData.target){
			if(!this.props.xax_format){
				delete this.mgData.xax_format;
			}
			MG.data_graphic(this.mgData);
		}

	}
	componentWillReceiveProps(nextProps){
		this.mgData=Object.assign(this.mgData,getMGOptions(nextProps));
		if(this.mgData.target&&!nextProps.xax_format){
			delete this.mgData.xax_format;
		}

	}
	componentDidUpdate(){
		if(this.mgData.target){
			MG.data_graphic(this.mgData);
		}
	}
	render(){
		const _this=this;
		return(
			<div className="metricsGraphicsCon" ref={ (c) =>{ if(c!=null) _this.mgData.target=c; } }></div>
		);
	}
}
