import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, TouchableWithoutFeedback } from 'react-native'

import {
	setUserPlaying,
	setReplay,
	setShuffle
} from '../../reducers/Player/actions'

import { Play, Pause, Skip, Replay, Shuffle } from '../../components/Icons'

function Controller() {
	const dispatch = useDispatch()
	const { playing, shuffle, replay, track } = useSelector(state => state.Player)

	const onClickPlayPause = () => {
		if (track) {
			dispatch(setUserPlaying(!playing))
		}
	}

	const selectFill = bool => {
		return bool ? 'rgb(225, 47, 129)' : 'rgb(255, 255, 255)'
	}

	const onPressShuffle = () => {
		dispatch(setShuffle(!shuffle))
	}

	const onPressReplay = () => {
		dispatch(setReplay(!replay))
	}

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onPressShuffle}>
				<View style={styles.shuffle}>
					<Shuffle fill={selectFill(shuffle)} />
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={onPressReplay}>
				<View style={styles.replay}>
					<Replay fill={selectFill(replay)} />
				</View>
			</TouchableWithoutFeedback>

			<View style={styles.prev}>
				<Skip />
			</View>

			<TouchableWithoutFeedback onPress={onClickPlayPause}>
				<View style={styles.playPause}>{playing ? <Pause /> : <Play />}</View>
			</TouchableWithoutFeedback>

			<View style={styles.next}>
				<Skip />
			</View>
		</View>
	)
}

export default Controller

const styles = {
	container: {
		position: 'relative',
		top: 200,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 200,
		zIndex: 4,
		flexDirection: 'row'
	},

	playPause: {
		width: 30,
		marginHorizontal: 40
	},

	prev: {
		width: 20,
		transform: [{ rotate: '-180deg' }]
	},

	next: {
		width: 20
	},

	shuffle: {
		position: 'absolute',
		top: 0,
		left: 30,
		width: 25,
		height: 25
	},

	replay: {
		position: 'absolute',
		top: 0,
		right: 30,
		width: 25,
		height: 25
	}
}
