/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import io from 'socket.io-client';
import { loadState, saveState } from '@/providers/storage';
const socket = io.connect('http://localhost:5002/chat-space', {
	reconnection: false,
});

const CardHeader = ({ status }) => {
	return (
		<div className='card-header d-flex flex-column'>
			<div className='d-inline-flex gap-2 align-items-center'>
				<Image
					src='/assets/images/logos/logo.png'
					width={15}
					height={15}
					alt=''
				/>
				<span className='fw-bold fs-6'>Kairaa Blockchain Academy</span>
			</div>
			<div className='p-0 m-0 text-secondary d-inline-flex align-items-center gap-1'>
				<span
					className={`bi bi-circle-fill ${
						status ? 'text-success' : 'text-secondary'
					}`}
					style={{ fontSize: '11px' }}
				></span>
				<span>{status ? status : 'How can we help you?'}</span>
			</div>
		</div>
	);
};

const ChatToggleButton = ({ changeState, stateValue }) => {
	return (
		<button
			onClick={changeState}
			className='rounded-circle rounded fs-2 chat-icon'
		>
			<span
				className={`bi bi-${stateValue ? 'x-circle-fill' : 'chat-dots-fill'}`}
			></span>
		</button>
	);
};

const FromMessage = ({ name, message }) => {
	return (
		<div className='row justify-content-start'>
			<div className='col-11 mb-3'>
				{name && (
					<p className='p-0 m-0 text-secondary chat-label'>
						<em className='bi bi-person-gear me-1'></em>
						{name} <span>{moment().format('hh:MM A')}</span>
					</p>
				)}
				<p className='chat-message rounded p-2 m-0'>{message}</p>
			</div>
		</div>
	);
};

const ToMessage = ({ message }) => {
	return (
		<div className='row justify-content-end'>
			<div className='col-11 mb-3'>
				<p className='p-0 m-0 text-secondary text-end chat-label'>
					<em className='bi bi-person me-1'></em>
					You <span>{moment().format('hh:MM A')}</span>
				</p>
				<p className='chat-message rounded p-2 m-0'>{message}</p>
			</div>
		</div>
	);
};

const CreateNewChat = ({ handleNewChat }) => {
	const [email, setEmail] = useState('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleNewChat(email);
			}}
		>
			<div className='row justify-content-center'>
				<div className='col-12'>
					<div className='form-group'>
						<input
							type='email'
							placeholder='Email Id'
							required
							onChange={(e) => setEmail(e.target.value)}
							className='chat-input'
						/>
					</div>
				</div>
				<div className='col-12'>
					<div className='form-group'>
						<button type='submit' className='theme-btn w-100'>
							Contact support
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

const ChatBox = () => {
	const [chat, openChat] = useState(false);
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState('');
	const [senderId, setSenderId] = useState('');

	const [chatHistory, setChatHistory] = useState([]);

	const toggleChat = () => openChat(!chat);
	const updateStatus = (status) => setStatus(status);

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit('userResponse', { message, senderId });
	};

	useEffect(() => {
		//join-in-chatroom
		if (senderId.length) {
			socket.emit('join', { senderId });
		}

		//chat-response
		socket.on('userResponse', ({ chatHistory }) => {
			console.log(chatHistory);
		});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='position-fixed bottom-0 mb-4 me-3 end-0 z-5 d-flex justify-content-end align-items-end chat-box flex-lg-row flex-column'>
			{chat && (
				<div className='card shadow-lg rounded-3 h-100 me-3 p-0'>
					<CardHeader status={status} />
					<div className='card-body d-flex flex-column pb-0 pt-3 h-75 w-100'>
						<div className='container d-flex flex-column justify-content-end p-0 ps-1 pe-2 mb-3 h-100 overflow-x-hidden'></div>
						<div className='row'>
							{!senderId.length && (
								<CreateNewChat handleNewChat={(id) => setSenderId(id)} />
							)}

							{senderId && (
								<div className='col-12'>
									<form onSubmit={handleSubmit} className='input-group mb-3'>
										<input
											type='text'
											className='chat-input fw-light form-control'
											placeholder="Recipient's username"
											onChange={(e) => setMessage(e.target.value)}
											required
										/>
										<button className='theme-btn fs-4 py-0 px-2'>
											<em className='bi bi-chevron-right'></em>
										</button>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
			<ChatToggleButton changeState={toggleChat} stateValue={chat} />
		</div>
	);
};
export default ChatBox;
