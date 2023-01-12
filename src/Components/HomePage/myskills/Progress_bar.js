import React from 'react'
import { flexbox } from '@mui/system';

const Progress_bar = ({bgcolor,progress,height,skill}) => {
	
	const Parentdiv = {
		height: height,
		width: '85%',
        // margin: auto,
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
        flexbox: flexbox,
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}

	return (
	<div style={Parentdiv}  >
        <div style={Childdiv}>
        <span style={{ fontSize:"16px", fontWeight:"bold", color:"white"}}>{skill}</span>
        <span style={progresstext}>{`${progress}%`}</span>
        </div>
	</div>
	)
}

export default Progress_bar;
