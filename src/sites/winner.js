import React, {Component} from 'react';
import './winner.css';


class Winner extends Component {

    render() {
        return (
            <div className=''>
                <h1>Gewinner der Herzen 2018</h1>
                <div className={'flip-card'}>
                    <div className={'flip-card__inner'}>
                        <div className={'flip-card__front'}>
                            <img src="/images/so_sehen_sieger_aus.jpg"
                                 alt="Sieger der Herzen"
                            />
                        </div>
                        <div className={'flip-card__back'}>
                            <img src="/images/win_lose.jpg"
                                 alt="Koenige der memes"
                            />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Winner;
