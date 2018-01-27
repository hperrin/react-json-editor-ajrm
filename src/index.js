import React, { Component } from 'react';
import ReactDOM             from 'react-dom';

/**
 * Import JSONInput component
 */
import JSONInput            from './components/jsoninput';

class App extends Component {
    constructor (props) { 
        super(props);
        this.state = { page : 'Documentation' };
        this.onClick = this.onClick.bind(this);
    } 
    render() {

        /**
         * This is the default color pallette
         * Simliar to VSCode dark theme!
         */
        const darktheme = {
            default         : '#D4D4D4',
            background      : '#1E1E1E',
            border          : '#000000',
            string          : '#CE8453',
            number          : '#B5CE9F',
            colon           : '#49B8F7',
            keys            : '#9CDCFE',
            keys_whiteSpace : '#AF74A5',
            primitive       : '#6392C6'
        }

        const light = {
            default         : '#3E4040',
            background      : '#E3E9EA0D',
            border          : '#00000026',
            string          : '#FA7921',
            number          : '#70CE35',
            colon           : '#49B8F7',
            keys            : '#59A5D8',
            keys_whiteSpace : '#835FB6',
            primitive       : '#386FA4'
        }

        /**
         * This is a sample object, passed down to JSONInput props to show placeholder.
         * You can use placeholder to show data once, after component has mounted.
         */
        const sampleObject = {
            'example prop' : null,
            nancy_mccarty : {
                A1: {
                    userID: "nancy_mccarty",
                    userName: "Nancy's McCarty",
                    id : "A1",
                    score : '0.75',
                    date_created : 151208443563,
                    date_signed : 151208448055,
                    date_approved: 151208471190,
                    answers: ['Yes','No','No','Yes','No']
                },
                A2: {
                    userID: "nancy_mccarty",
                    userName: "Nancy McCarty",
                    id : "A2",
                    score : 0.9,
                    date_created : 151208450090,
                    date_signed : false,
                    date_approved: false,
                    answers: ['No','No','No','Yes','Yes']
                }
            },
            george_richardson : {
                A2: {
                    userID: "george_richardson",
                    userName: "George Richardson",
                    id : "A2",
                    score : 0.35,
                    date_created : 1512076585058,
                    date_signed : false,
                    date_approved: false,
                    answers: ['No','Yes','Yes','Yes','Yes']
                }
            },
            tom_hughe : { 
                A4: {
                    userID: "tom_hughe",
                    userName: "Tom Hughe",
                    id : "A4",
                    score : 0.75,
                    date_created : 1512076575026,
                    date_signed : 1512076609894,
                    date_approved: false,
                    answers: ['Yes','No','No','Yes','No']
                },
                M1: {
                    userID: "tom_hughe",
                    userName: "Tom Hughe",
                    id : "M1",
                    score : false,
                    date_created : 1512076587361,
                    date_signed : false,
                    date_approved: false,
                    answers: [false,false,false,false,false]
                }
            },
            heidy_white : {
                L2: {
                    userID: "heidy_white",
                    userName: "Heidy White",
                    id : "L2",
                    score : false,
                    date_created : 15120765766312,
                    date_signed : false,
                    date_approved: false,
                    answers: [false,false,false,false,false]
                }
            }
        }

        /**
         * Example using JSONInput
         */
        return(
            <div style = {{ maxWidth: '1400px', maxHeight: '100%' }} >
                <JSONInput
                    id          = {'uniqueString-jsonInut'}
                    placeholder = { sampleObject }
                    colors      = { darktheme }
                    height      = '550px'
                />
            </div>
        );
    }
    onClick(page){
        this.setState({ page : page });
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));