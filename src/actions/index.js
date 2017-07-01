import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES";
export const GET_MORATALITY = "GET_MORATALITY";

export const getCountries = () => 
{
    return (dispatch) => 
    {
        axios("http://api.population.io:80/1.0/countries")
            .then(
                (response) => {
                    dispatch(
                        {
                            type: GET_COUNTRIES,
                            payload:response.data.countries
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    dispatch(
                        {
                            type: ERROR_GET_COUNTRIES,
                            error: error.response.data.detail
                        }
                    )
                }
            );
    }
    
};

const API_AND_POINT = 'http://api.population.io:80/1.0/';
const DEFAULT_PARAM = '15/today';

export const getMortality = (c) =>
{
    return (dispatch) => {
        axios(`${API_AND_POINT}mortality-distribution/${c}/male/${DEFAULT_PARAM}`)
            .then(
                (responseMale) => {
                    axios(`${API_AND_POINT}mortality-distribution/${c}/female/${DEFAULT_PARAM}`)
                        .then(
                            (responseFemale) => {
                                console.log(responseMale)
                                console.log(responseFemale)
                                    dispatch(
                                        {
                                            type: GET_MORATALITY,
                                            payload: {
                                                country :c,
                                                male: responseMale.data.mortality_distribution,
                                                female: responseFemale.data.mortality_distribution,
                                            }
                                        }
                                    )
                                }
                            )
                }
            )
    }
}