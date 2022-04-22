import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Card, Paper } from '@mui/material';
import QuickChatLoginForm from './QuickChatLoginForm';
import QuickChatRegisterationForm from './QuickChatRegistrationForm';



export default function ChatContent() {

    const [openModal, setOpenModal] = React.useState(false);

    function LoginModal() {

        const style = {
            top: '50%', left: '50%',  p: 4, boxShadow: 24,
            position: 'absolute', transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper', border: '2px solid #000',
        };

        return (
            <React.Fragment>
                <Modal
                    keepMounted
                    open={openModal}
                    onClose={(e)=>{setOpenModal(false)}}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <QuickChatLoginForm/>
                    </Box>
                </Modal>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <LoginModal />
            <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div>
                        <div class="col-lg-6 hidden-sm text-right">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                            &nbsp;&nbsp;
                            <a onClick={(e) => { setOpenModal(true) }} class="btn btn-outline-primary">I'm Expecting Response </a>
                        </div>
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">Anonymous User</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                            </div>
                            <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                        </li>
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-send"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Enter text here..." />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )



}

