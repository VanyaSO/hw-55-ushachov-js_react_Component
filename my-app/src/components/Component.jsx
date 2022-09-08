import React from "react";

class Component extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemsLog: [],
            id:0,
            count:0
        }
    }

    handleRemove = (value) => (event) => {
        event.preventDefault();
        const newItemsLog = this.state.itemsLog.filter((item) => item.id !== value);

        this.setState({ itemsLog : newItemsLog });

    };

    addCount = (event) => {
        event.stopPropagation();

        this.setState((state) => {
            return {
                id: state.id + 1,
                count: state.count  + 1,
                itemsLog:[
                    {id: state.id + 1, count: state.count + 1},
                    ...this.state.itemsLog
                ]
            }
        });
    }

    minCount = (event) => {
        event.stopPropagation();
        this.setState((state) => {
            return {
                id: state.id + 1,
                count: state.count  - 1,
                itemsLog:[
                    {id: state.id + 1, count: state.count - 1},
                    ...this.state.itemsLog
                ]
            }
        });
    }


    render(){
        return(
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button onClick={this.addCount}
                            type="button"
                            className="btn btn-outline-success"
                    >+</button>

                    <button onClick={this.minCount}
                            type="button"
                            className="btn btn-outline-danger"
                    >-</button>
                </div>

                <div className="list-group">
                    {this.state.itemsLog.map((item) => (
                        <button onClick={this.handleRemove(item.id)}
                                value={item.id}
                                type="button"
                                className="list-group-item list-group-item-action"
                        >{item.count}</button>
                    ))}
                </div>

            </div>
        )
    }

}

export default Component;
