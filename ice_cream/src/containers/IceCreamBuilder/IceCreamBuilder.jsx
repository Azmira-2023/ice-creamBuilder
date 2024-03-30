import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
        items: { chocolate: 65,
            vanilla: 50,
            strawberry: 80,
            orange: 70,
            lemon: 50,
            mango: 75
           
        },
        scoops: [],
        totalPrice: 0,
    };


    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        const countObj = {}
        for (let i = 0; i < scoops.length; i++) {
            let scoop = scoops[i]
            countObj[scoop] ? ( countObj[scoop] += 1) : ( countObj[scoop] = 1)
           
        }
        if(countObj[scoops]>0){
            workingScoops.splice(scoopIndex,1);
            this.setState((prevState) => {
                return{
                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice - items[scoops],
                };
            });
        }
    };
    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        )
    }
}