import React from 'react'
import 'antd/dist/antd.css';
import {Tabs} from 'antd'
import {App, Landing, Website} from "./TabTable";
import {useHistory} from "react-router-dom";

const {TabPane} = Tabs;

const TabInfo = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/brief");
    }
    return (
        <div className="wrapper">
            <div className="studio_heading">
                <h2>Процесc работы</h2>
            </div>
            <div className="tab">
                <Tabs tabPosition={'left'}>
                    <TabPane tab="Лендинг" key="1">
                        <Landing/>
                    </TabPane>
                    <TabPane tab="Многостраничный сайт" key="2">
                        <Website/>
                    </TabPane>
                    <TabPane tab="Приложение" key="3">
                        <App/>
                    </TabPane>
                </Tabs>
            </div>
            <div className="show_more">
                <button onClick={handleClick} className='btn'>Оставить заявку</button>
            </div>
        </div>
    )
}

export default TabInfo