import React from "react";
import ChatContent from "./ChatContent";
import './chat_style.css'

export default function QuickChat() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card">
                            <ChatContent />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}