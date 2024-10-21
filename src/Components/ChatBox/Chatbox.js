import React from "react";
import './Chatbox.css'
import images from '../../constants/images'
import audi from '../../assets/Audio/chatintro.mp3'
import audisms1 from '../../assets/Audio/sms1.mp3'
import audisms2 from '../../assets/Audio/sms2.mp3'
import audisms3 from '../../assets/Audio/sms3.mp3'

import audisms4 from '../../assets/Audio/sms4.mp3'

import audisms5 from '../../assets/Audio/sms5.mp3'
import audisms6 from '../../assets/Audio/sms6.mp3'
import audisms7 from '../../assets/Audio/sms7.mp3'

import selected from '../../assets/Audio/youselected.mp3'
import web_development from '../../assets/Audio/web_development.mp3'
import dev_ops from '../../assets/Audio/dev_ops.mp3'
import seo from '../../assets/Audio/seo.mp3'
import app_development from '../../assets/Audio/app_development.mp3'
import e_commerce from '../../assets/Audio/e_commerce.mp3'
import uiux_design from '../../assets/Audio/uiux_design.mp3'

import auditone from '../../assets/Audio/Iphone_sms_tone.mp3'

function ChatBox({ theme }) {
    //setTimeout(toggleState,3500);

    let timestatus = true;

    function onclickshowchat(){
        toggleState();
        if (timestatus === true){
            setTimeout(flowMsg,5000);
            setTimeout(flowMsg,8000);
            setTimeout(flowMsg,11000);
            
            setTimeout(alerttone,5000);
            setTimeout(alerttone,8000);
            setTimeout(alerttone,11000);

            setTimeout(readsms,5000);
            setTimeout(readsms,8000);
            setTimeout(readsms,11000);
            playtone();
            timestatus = false;
        }
    }

    let state = false; 
    function toggleState() {
        const chatContent = document.querySelector('.chatbox__support');
        state = state !== true;
        showOrHideChatBox(chatContent);
    }
    function showOrHideChatBox(chatbox) {    
        if(state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }

    var showStatus = 0;
    var choiced = true;

    function flowMsg(){
        const sms1 = document.querySelector('.msg1');
        const sms2 = document.querySelector('.msg2');
        const sms3 = document.querySelector('.msg3');
        const sms4 = document.querySelector('.msg4');
        const sms5 = document.querySelector('.msg5');
        const sms6 = document.querySelector('.msg6');
        const sms7 = document.querySelector('.msg7');
        const sms8 = document.querySelector('.msg8');
        const typemsg = document.querySelector('.typemsg');
        showStatus += 1;
        console.log(showStatus);
        //playtone();
        showMsg(sms1, sms2, sms3, sms4, sms5, sms6, sms7, sms8, typemsg);
    }

    function playtone() {
        var audio = new Audio(audi);
        audio.autoplay=true;
        audio.play();
    }

    function alerttone() {
        var tone = new Audio(auditone);
        tone.autoplay=true;
        tone.play();
    }

    var playstatus = 0;
    function readsms(){
        playstatus += 1; 
        var read1 = new Audio(audisms1);
        var read2 = new Audio(audisms2);
        var read3 = new Audio(audisms3);
        var read4 = new Audio(audisms4);
        var read5 = new Audio(audisms5);
        var read6 = new Audio(audisms6);
        var read7 = new Audio(audisms7);
        if(playstatus === 1){
            read1.autoplay=true;
            read1.play();
        } else if(playstatus === 2){
            read2.autoplay=true;
            read2.play();
        } else if(playstatus === 3){
            read3.autoplay=true;
            read3.play();
        } else if(playstatus === 4){
            read4.autoplay=true;
            read4.play();
        } else if(playstatus === 5){
            read5.autoplay=true;
            read5.play();
        } else if(playstatus === 6){
            read6.autoplay=true;
            read6.play();
        } else if(playstatus === 7){
            read7.autoplay=true;
            read7.play();
        }
    }

    function selectingmsg(index){
        var web_ = new Audio(web_development);
        var dev_ = new Audio(dev_ops);
        var seo_ = new Audio(seo);
        var app_ = new Audio(app_development);
        var commerce_ = new Audio(e_commerce);
        var uiux_ = new Audio(uiux_design);

        if(index === 1){
            web_.autoplay=true;
            web_.play();
        } else if(index === 2){
            dev_.autoplay=true;
            dev_.play();
        } else if(index === 3){
            seo_.autoplay=true;
            seo_.play();
        } else if(index === 4){
            app_.autoplay=true;
            app_.play();
        } else if(index === 5){
            commerce_.autoplay=true;
            commerce_.play();
        } else if(index === 6){
            uiux_.autoplay=true;
            uiux_.play();
        }
    }

    function showMsg(sms1, sms2, sms3, sms4, sms5, sms6, sms7, sms8, typemsg){
        if (showStatus===1){
            typemsg.classList.add('hideMsg');
            sms1.classList.add('showMsg');
            typemsg.classList.remove('hideMsg');
            typemsg.classList.add('showMsg');
        } else if (showStatus===2){
            typemsg.classList.remove('showMsg');
            typemsg.classList.add('hideMsg');
            sms2.classList.add('showMsg');
            typemsg.classList.remove('hideMsg');
            typemsg.classList.add('showMsg');
        } else if (showStatus===3){
            typemsg.classList.remove('showMsg');
            typemsg.classList.add('hideMsg');
            sms3.classList.add('showMsg');
        } else if (showStatus===4){
            sms4.classList.add('showMsg');
            typemsg.classList.remove('showMsg');
            typemsg.classList.add('hideMsg');
        } else if (showStatus===5){
            sms5.classList.remove('hideMsg');
            sms5.classList.add('showMsg');
        } else if (showStatus===6){
            sms6.classList.add('showMsg');
        } else if (showStatus===7){
            sms7.classList.add('showMsg');
        } else if (showStatus===8){
            sms8.classList.add('showMsg');
            typemsg.classList.remove('showMsg');
            typemsg.classList.add('hideMsg');
        }
    }

    function showtyping(){
        const typemsg = document.querySelector('.typemsg');
        typemsg.classList.remove('hideMsg');
        typemsg.classList.add('showMsg');
    }

    function checkinput(){
        showtyping();
        setTimeout(flowMsg,3000);
        setTimeout(flowMsg,6000);
        setTimeout(flowMsg,9000);

        setTimeout(alerttone,3000);
        setTimeout(alerttone,6000);
        setTimeout(alerttone,9000);

        setTimeout(readsms,3500);
        setTimeout(readsms,7000);
        setTimeout(readsms,10500);
    }

    var selec = new Audio(selected);
    function choosing(index){
        const ch1 = document.querySelector('.ch1');
        const ch2 = document.querySelector('.ch2');
        const ch3 = document.querySelector('.ch3');
        const ch4 = document.querySelector('.ch4');
        const ch5 = document.querySelector('.ch5');
        const ch6 = document.querySelector('.ch6');
        if (choiced === true){
            selec.autoplay=true;
            selec.play();
            if(index === 1){
                ch1.classList.add('showMsg');
                ch1.classList.remove('hideMsg');
                ch2.classList.add('hideMsg');
                ch3.classList.add('hideMsg');
                ch4.classList.add('hideMsg');
                ch5.classList.add('hideMsg');
                ch6.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(1),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            } else if(index === 2){
                ch2.classList.add('showMsg');
                ch2.classList.remove('hideMsg');
                ch1.classList.add('hideMsg');
                ch3.classList.add('hideMsg');
                ch4.classList.add('hideMsg');
                ch5.classList.add('hideMsg');
                ch6.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(2),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            } else if(index === 3){
                ch3.classList.add('showMsg');
                ch3.classList.remove('hideMsg');
                ch1.classList.add('hideMsg');
                ch2.classList.add('hideMsg');
                ch4.classList.add('hideMsg');
                ch5.classList.add('hideMsg');
                ch6.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(3),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            } else if(index === 4){
                ch4.classList.add('showMsg');
                ch4.classList.remove('hideMsg');
                ch1.classList.add('hideMsg');
                ch2.classList.add('hideMsg');
                ch3.classList.add('hideMsg');
                ch5.classList.add('hideMsg');
                ch6.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(4),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            } else if(index === 5){
                ch5.classList.add('showMsg');
                ch5.classList.remove('hideMsg');
                ch1.classList.add('hideMsg');
                ch2.classList.add('hideMsg');
                ch3.classList.add('hideMsg');
                ch4.classList.add('hideMsg');
                ch6.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(5),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            } else if(index === 6){
                ch6.classList.add('showMsg');
                ch6.classList.remove('hideMsg');
                ch1.classList.add('hideMsg');
                ch2.classList.add('hideMsg');
                ch3.classList.add('hideMsg');
                ch4.classList.add('hideMsg');
                ch5.classList.add('hideMsg');
                showtyping();
                setTimeout(flowMsg,3000);
                setTimeout(flowMsg,3500);
                setTimeout(() => selectingmsg(6),900);
                setTimeout(alerttone,3000);
                setTimeout(readsms,3500);
            }
            choiced = !choiced;
        }
    }

    return (
        <div className='ch_container' style={{ color: theme ? 'white' : 'black' }}>
            <div class="chatbox__support">
                <div class="chatbox__header">
                    <div class="chatbox__image--header">
                        <img src={images.human} alt="logo"/>
                    </div>
                    <div class="chatbox__content--header">
                        <h4 class="chatbox__heading--header">Voxitec support</h4>
                        <p class="chatbox__description--header">Your Friendly Assistant BOT</p>
                    </div>
                </div>
                <div class="chatbox__messages">
                    <div>
                        <div class="messages__item messages__item--visitor msg1">
                            Hello👋, welcome to Voxitec!
                        </div>
                        <div class="messages__item messages__item--visitor msg2">
                            I’m Voxibot. I will assist in your inquiries.
                        </div>
                        <div class="messages__item messages__item--visitor msg3">
                            Please select a service:
                            <div className="btn-set">
                                <button onClick={() => choosing(1)} className='ch1'>Web development</button>
                                <button onClick={() => choosing(2)} className='ch2'>Dev Ops</button>
                                <button onClick={() => choosing(3)} className='ch3'>SEO</button>
                                <button onClick={() => choosing(4)} className='ch4'>App development</button>
                                <button onClick={() => choosing(5)} className='ch5'>E-commerce</button>
                                <button onClick={() => choosing(6)} className='ch6'>UI/UX design</button>
                            </div>
                        </div>
                        <div class="messages__item messages__item--visitor msg4">
                            Great! To get in touch could you please provide the following details?
                        </div>
                        <div className="input-set msg5 hideMsg">
                            <input type='text' className="inputbox" placeholder="Your Name"/>
                            <input type='text' className="inputbox" placeholder="Email"/>
                            <input type='text' className="inputbox" placeholder="Inquiry"/>
                        </div>
                        <div class="messages__item messages__item--visitor msg6">
                            Thank you for contacting Voxitec.
                        </div>
                        <div class="messages__item messages__item--visitor msg7">
                            Our representative will contact you within 24 hours.
                        </div>
                        <div class="messages__item messages__item--visitor msg8">
                            Have a nice day!
                        </div>
                        <div class="messages__item messages__item--typing typemsg">
                            <span class="messages__dot first_dot"></span>
                            <span class="messages__dot second_dot"></span>
                            <span class="messages__dot third_dot"></span>
                        </div>
                    </div>
                </div>
                <div class="chatbox__footer">
                    <img src={images.sendchat} alt="emo" onClick={checkinput} style={{ width: "30px", height: "auto" }}/>
                </div>
            </div>
            <div class="chatbox__button">
                <button onClick={onclickshowchat}><img src={images.sms} alt="sms"/></button>
            </div>
        </div>
    )
}

export default ChatBox