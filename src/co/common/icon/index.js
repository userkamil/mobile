import React from 'react'
import { IconImage, DefaultIconImage } from './style'

export default ({collectionId, src, size})=>{
	var source;

	switch(collectionId){
		case 0: source = require('assets/images/all.png'); break;
		case -1: source = require('assets/images/inbox.png'); break;
		case -99: source = require('assets/images/trash.png'); break;
	}
	
	if (!src && !source)
		return <DefaultIconImage size={size} />

	if (!source && src)
		source = {
			uri: src
		}

	return <IconImage source={source} size={size} />
}