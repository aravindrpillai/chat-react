import React from "react";
import ChatContent from "./ChatContent";
import './chat_style.css'
import PeopleList from "./PeopleList";

export default function () {
    return (
        <React.Fragment>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <PeopleList />
                            <ChatContent />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}