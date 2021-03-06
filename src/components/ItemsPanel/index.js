import React, { Component } from 'react';

import ItemsTitle from './components/ItemsTitle';
import ItemsBox from './components/ItemsBox';
import Graph3d from './components/Graph3d';
import Control from './components/Control';
import Footer from './../Footer';
import './index.css';


class ItemsPanel extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: 'Orchestration',
    //   code: 'orch',
    // };
    this.state = {
      title: 'this is ItemsBox',
      category:{
        name:'Orchestration & Management',
        slug_name:'orchestration_and_management',
        code:'apis',
        items:[
          {
            name: 'Kubernetes',
            slug_name: 'kubernetes',
            company: 'CNCF',
            cncf: true,
            oss: true,
            homepage_url: 'https://kubernetes.io/',
            repo_url: 'https://github.com/kubernetes/kubernetes',
            raw_logo: 'https://raw.githubusercontent.com/cncf/artwork/master/kubernetes/name_logo_color.png',
            external:{
              twitter: 'https://twitter.com/kubernetesio',
              crunchbase: 'https://www.crunchbase.com/item/kubernetes',
            },
            calculated:{
              resized_logo: 'http://res.cloudinary.com/demo/image/fetch/w_200,h_200,c_fit,f_png/https://raw.githubusercontent.com/cncf/artwork/master/kubernetes/name_logo_color.png',
              gh_stars: 26186
            }
          },
          {
            name: 'Amazon ECS',
            slug_name: 'amazon_ecs',
            company: 'AWS',
            homepage_url: 'https://aws.amazon.com/ecs/',
            raw_logo: 'https://signalfx-82c9.kxcdn.com/wp-content/uploads/2016/03/integrations_awsecs@4x-500x500.png',
            external:{
              twitter: 'https://twitter.com/awscloud',
              crunchbase: 'https://www.crunchbase.com/organization/amazon',
            },
            stock_ticker: 'AMZN',
            calculated:{
              resized_logo: 'http://res.cloudinary.com/demo/image/fetch/w_200,h_200,c_fit,f_png/https://signalfx-82c9.kxcdn.com/wp-content/uploads/2016/03/integrations_awsecs@4x-500x500.png',
              gh_stars: 234,
              cb_founded: 'July 5, 1994',
              cb_employees: '10k +',
              cb_funds_raised: '$108M',
            }
          }
      
        ]
      }
      
    };
    
    
  }
  
F
  render() {
    
    return (
      <div className="items_panel">
        <div className="content_wrapper">
            <div className="graph3d_wrapper">
              <Graph3d />
            </div>
            <div className="items_wrapper">
              <ItemsTitle name={this.state.category.name} icon={this.state.category.code} />
              <ItemsBox category={this.state.category} />
              <Control />
            </div>
         
        </div>
        <div className="footer_wrapper">
          <Footer />
        </div>
      </div>

    );
  }
}


export default ItemsPanel;

